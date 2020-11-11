package gw.lob.common.dependency

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.api.system.logging.LOBLoggerCategory
uses gw.lang.reflect.IType
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.schema.value_dependency_config.ValueDependencyConfig
uses org.slf4j.MarkerFactory

uses java.io.File
uses java.io.FileReader
uses java.io.Reader
uses java.lang.Exception
uses java.util.ArrayList
uses java.util.HashMap
uses java.util.HashSet
uses java.util.Map
uses java.util.List
uses org.slf4j.LoggerFactory

// if A is a dependent of B, then B is a dependency.
class ValueDependencyConfiguration extends ConfigResource {
  var _configReader : Reader
  protected var _mapFromDependent: Map<String, Map<String, PropertyValueDependency>> = new HashMap<String, Map<String, PropertyValueDependency>>()
  protected var _mapToDependents: Map<String, Map<String, List<PropertyValueDependency>>> = new HashMap<String, Map<String, List<PropertyValueDependency>>>()
  protected var _mapFromCalculatedValuesToDependents: Map<IType, List<PropertyValueDependency>> = new HashMap<IType, List<PropertyValueDependency>>()


  construct() {
    super ()
    initConfig()
  }

  construct(configFilePath: String) {
    super (configFilePath)
    initConfig()
  }

  // only for testing
  internal construct(configReader: Reader) {
    _configReader = configReader
  }

  function getDependency(propInfo: PropertyTypeInfo): PropertyValueDependency {
    return getDependency(propInfo.Name, propInfo.ContextType.RelativeName)
  }

  function getDirectDependents(propInfo: PropertyTypeInfo, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    if (propInfo.IsCalculated) {
      return getDirectDependents(propInfo.ContextType, criteria)
    }

    return getDirectDependents(propInfo.Name, propInfo.ContextType.RelativeName, criteria)
  }

  function getAllDependents(propInfo: PropertyTypeInfo, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    if (propInfo.IsCalculated) {
      return getAllDependents(propInfo.ContextType, criteria)
    }

    return getAllDependents(propInfo.Name, propInfo.ContextType.RelativeName, criteria)
  }

  function getAllDependentsInCoverable(coverableName: String): List<PropertyValueDependency> {
    return _mapFromDependent.get(coverableName).Values.toList()
  }

  final internal function initConfig() {
    var valueDependencyConfigFiles = new File(ConfigDir as String).listFiles().where( \ file -> file.Name.endsWith("-value-dependency-config.xml"))
    valueDependencyConfigFiles.each( \ file -> {
      var configFileName = ConfigPath + "/" + file.Name
      initConfigFor(configFileName)
    })
  }

  final internal function initConfigFor(configFilename : String) {
    initMaps(configFor(configFilename))
  }

  final internal function initMaps(config: ValueDependencyConfig) {
    var dependencies = config.ValueDependency
    dependencies.each( \ dependency -> {
      var containerName = dependency.Container
      var mapForContainer = _mapFromDependent.get(containerName)

      if(mapForContainer == null){
        mapForContainer = new HashMap<String, PropertyValueDependency>()
        _mapFromDependent.put(containerName, mapForContainer)
      }

      var propertyValueDependency = new PropertyValueDependency(dependency)
      mapForContainer.put(dependency.Property, propertyValueDependency)

      dependency.SystemTable.each( \ sysTable -> {
        sysTable.KeyColumn.each( \ keyColumn -> {
          try {
            var dependencyTypeInfo = PropertyTypeInfo.createFromKeyColumnXml(keyColumn)
            initDependsOn(dependencyTypeInfo, propertyValueDependency)
          } catch(ex: Exception){
            LoggerFactory.getLogger("DEPENDENCY").warn(MarkerFactory.getMarker(ValueDependencyConfiguration.Type.Name), ValueDependencyConfiguration.Type.Name + ": Cannot initialize dependency: ${keyColumn.Path}")
          }
        })
      })
    })

  }

  internal function initDependsOn(depOnTypeInfo: PropertyTypeInfo, propertyValueDependency: PropertyValueDependency) {
    if (depOnTypeInfo.IsCalculated) {
      var dependents = _mapFromCalculatedValuesToDependents.get(depOnTypeInfo.ContextType)
      if(dependents == null) {
        dependents = new ArrayList<PropertyValueDependency>()
        _mapFromCalculatedValuesToDependents.put(depOnTypeInfo.ContextType, dependents)
      }
      if(!dependents.contains(propertyValueDependency)) {
        dependents.add(propertyValueDependency)
      }
    } else {
      var containerName = depOnTypeInfo.ContextType.RelativeName
      var mapForContainer = _mapToDependents.get(containerName)

      if(mapForContainer == null){
        mapForContainer = new HashMap<String, List<PropertyValueDependency>>()
        _mapToDependents.put(containerName, mapForContainer)
      }

      var propertyName = depOnTypeInfo.Name
      var dependents = mapForContainer.get(propertyName)

      if(dependents == null) {
        dependents = new ArrayList<PropertyValueDependency>()
        mapForContainer.put(depOnTypeInfo.Name, dependents)
      }

      if(!dependents.contains(propertyValueDependency)) {
        dependents.add(propertyValueDependency)
      }
    }
  }

  public function getDependency(propertyName: String, containerName: String): PropertyValueDependency {
    var mapForContainer = _mapFromDependent?.get(containerName)
    return mapForContainer?.get(propertyName)
  }

  function getDirectDependents(propertyName: String, containerName: String, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    var mapForContainer = _mapToDependents?.get(containerName)
    final var allDependencies = mapForContainer?.get(propertyName)
    var dependencies = allDependencies?.where( \ dep -> {
      final var systemTableDependency = dep.getSystemTableDependency(criteria)
      return systemTableDependency != null && systemTableDependency.DependsOn.values()*.Name.contains(propertyName)
    })
    return dependencies ?: {}
  }

  function getDirectDependents(calculatedValue: IType, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    final var allDependencies = _mapFromCalculatedValuesToDependents.get(calculatedValue)
    var dependencies = allDependencies?.where( \ dep -> {
      final var systemTableDependency = dep.getSystemTableDependency(criteria)
      return systemTableDependency != null && systemTableDependency.DependsOn.values()*.ContextType.contains(calculatedValue)
    })
    return dependencies ?: {}
  }



  function getCoverableDependencies(containerName: String, criteria: EffectiveJurisdictionCriteria): List<PropertyTypeInfo> {
    var results = new HashSet<PropertyTypeInfo>()

    _mapFromDependent?.eachKeyAndValue(\container, propertyMap -> {
      propertyMap.eachKeyAndValue( \ propertyName, valueDependency -> {
        var systableDependency = valueDependency.getSystemTableDependency(criteria)
        if (systableDependency != null) {
          results.addAll(systableDependency.DependsOn.Values.where( \ depOn -> depOn.RiskType.RelativeName == containerName))
        }
      })
    })

    return results.toList()
  }

  function getSysTablePropertiesFromCoverable(containerName: String): Set<String> {
    return _mapFromDependent.get(containerName).Keys?:Collections.emptySet()
  }

  internal function getAllDependents(propertyName: String, containerName: String, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    var dependents = getDirectDependents(propertyName, containerName, criteria)
    return getAllDependentsOfDirectDependents(dependents, criteria)
  }

  internal function getAllDependents(calculatedValue: IType, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    var dependents = getDirectDependents(calculatedValue, criteria)
    return getAllDependentsOfDirectDependents(dependents, criteria)
  }

  internal function getAllDependentsOfDirectDependents(dependents: List<PropertyValueDependency>, criteria: EffectiveJurisdictionCriteria): List<PropertyValueDependency> {
    var allSubDep = new ArrayList<PropertyValueDependency>()
    if(dependents.HasElements){
      dependents.each( \ dep -> {
        var subDep = getAllDependents(dep.DependentProperty, dep.DependentContainer, criteria)
        if(subDep.HasElements) {
          allSubDep.addAll(subDep)
        }
      })
      dependents.addAll(allSubDep)
    }
    return dependents
  }

  internal function configFor(configFileName : String): ValueDependencyConfig {
    var configFile = APIConfigFileAccess.INSTANCE.getConfigFile(configFileName)
    _configReader = new FileReader(configFile)

    return ValueDependencyConfig.parse(_configReader)
  }

  internal function configForString(config : String): ValueDependencyConfig{
    return ValueDependencyConfig.parse(config)
  }
}
