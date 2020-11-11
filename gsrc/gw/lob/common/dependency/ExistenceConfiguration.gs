package gw.lob.common.dependency

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.lob.common.AbstractDependencyConfiguration
uses gw.lob.common.dependency.schema.existence_config.ExistenceConfig
uses gw.lob.common.dependency.schema.existence_config.anonymous.elements.AbstractConfigType_Container
uses gw.lob.common.dependency.schema.existence_config.anonymous.elements.ContainerType_Property
uses gw.lob.common.dependency.schema.existence_config.anonymous.elements.ContainerType_Version
uses gw.lob.common.dependency.schema.existence_config.anonymous.elements.DependsType_On
uses gw.lob.common.dependency.schema.existence_config.anonymous.elements.PropertyType_Version
uses gw.lob.common.dependency.schema.existence_config.anonymous.elements.Redefine0_Depends
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.xml.XmlElement
uses org.slf4j.LoggerFactory

uses java.util.HashMap
uses java.util.HashSet
uses java.util.Map

class ExistenceConfiguration extends AbstractDependencyConfiguration {

  static final var NAME = "name"
  static final var TYPE = "type"

  protected var _containerExistenceMap : Map<String, StateProperty<Existence>> = new HashMap<String, StateProperty<Existence>>()
  protected var _propertyExistenceMap : Map<String, Map<String, StateProperty<Existence>>> = new HashMap<String, Map<String, StateProperty<Existence>>>()

  construct(configPath: String= "") {
    super (configPath)
    initConfig()
  }

  /**
   * Find existence of a given container, return null if not found
   */
  function findContainerExistence(containerType: ContainerType, containerName: String, criteria: EffectiveJurisdictionCriteria): Existence {
    var typedContainerName = getTypedContainerName(containerType.Code, containerName)
    return _containerExistenceMap.get(typedContainerName)?.getStateOrCWValue(criteria)
  }

  /**
   * Find existence of a given property, return null if not found
   */
  function findPropertyExistence(containerType: ContainerType, containerName: String, propertyName: String, criteria: EffectiveJurisdictionCriteria): Existence {
    var typedContainerName = getTypedContainerName(containerType.Code, containerName)
    return _propertyExistenceMap.get(typedContainerName)?.get(propertyName)?.getStateOrCWValue(criteria)
  }

  /**
   * return true if there is any property depending on this property
   */
  function hasDependants(containerName: String, propertyName: String, criteria: EffectiveJurisdictionCriteria): boolean  {
    return findDependentProperties(containerName, propertyName, criteria).HasElements
  }

  /**
   * return property of all the dependents
   */
  function findDependentProperties(containerName: String, propertyName: String, criteria: EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo> {
    return _dependentProperties.get(new PropertyTypeInfo(propertyName, containerName))
        .getStateAndCWValue(criteria)
        .flatten()
        .toSet()
  }

  private function initConfig() {
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }

    var configFiles = ConfigDir.listFiles().where(\ file -> file.Name.endsWith("-existence-config.xml"))
    configFiles.each(\ file -> {
      var existence = ExistenceConfig.parse(file)

      _containerExistenceMap.putAll(mapContainerExistence(existence))
      _propertyExistenceMap.putAll(mapPropertyExistence(existence))
    })
  }

  /**
   * Convert availability xml to container availability map
   * { "container name" -> {
   *      "property name" -> StateProperty<Existence>}}
   */
  private function mapContainerExistence(root: XmlElement): Map<String, StateProperty<Existence>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return getTypedContainerName(node.getAttributeValue(TYPE), node.getAttributeValue(NAME))
          }
          return node.$QName.toString()
        },
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return registerContainer(node as AbstractConfigType_Container)
          }
          return null
        }
    )
    return result as Map<String, StateProperty<Existence>>
  }

  /**
   * Convert existence xml to property availability map
   * { "container name" -> {
   *      "property name" -> StateProperty<Existence>}}
   */
  private function mapPropertyExistence(root: XmlElement): Map<String, Map<String, StateProperty<Existence>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis ContainerType_Property) {
            return node.getAttributeValue(NAME)
          } else if (node typeis AbstractConfigType_Container) {
            return getTypedContainerName(node.getAttributeValue(TYPE), node.getAttributeValue(NAME))
          }
          return node.$QName.toString()
        },
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return node.Property.mapToKeyAndValue(
                \ propertyNode -> propertyNode.getAttributeValue(NAME),
                \ propertyNode -> registerProperty(node.getAttributeValue(NAME), propertyNode))
          }
          return null
        }
    )
    return result as Map<String, Map<String, StateProperty<Existence>>>
  }

  private function registerContainer(containerNode: AbstractConfigType_Container): StateProperty<Existence> {
    final var type = containerNode.getAttributeValue(TYPE)
    final var name = containerNode.getAttributeValue(NAME)
    var stateProperty = new StateProperty<Existence>()
    containerNode.Version
        .each(\version -> {
      var jurisdiction = version.Jurisdiction ?: COUNTRY_WIDE
      var available = version.Available ?: true
      var conditionalClause = version.Depends.HasElements ? convertContainerConditions(version,
          \conditionalClause -> {
            final var typeInfo = conditionalClause.TypeInfo
            final var dependentStateProperty = _dependentProperties.get(typeInfo)

            var dependentProperties : Set<PropertyTypeInfo>
            var criteria = new EffectiveJurisdictionCriteria (jurisdiction, version.EffectiveDate.Date)

            if (dependentStateProperty.hasStateValue(criteria)) {
              dependentProperties = dependentStateProperty.getStateOrCWValue(criteria)
            } else {
              dependentProperties = new HashSet<PropertyTypeInfo>()
              _dependentProperties.get(typeInfo).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)
            }
            if (type == "Clause") {
              dependentProperties.add(createClauseTypeInfo(name))
            } else if (type == "Coverable") {
              dependentProperties.add(createCoverableTypeInfo(name))
            } else {
              LoggerFactory.getLogger("DEPENDENCY").error("Unknown availability container type: " + type)
            }
        }
      ) : null

      var existence = new Existence(version.Existence.Met?.toString(), version.Existence.NotMet?.toString(), conditionalClause)
      stateProperty.addStateValue(existence, jurisdiction, version.EffectiveDate.Date, version.ExpiryDate.Date, available)
    })

    return stateProperty
  }

  private function registerProperty(containerName: String, propertyNode: ContainerType_Property): StateProperty<Existence> {
    var propertyName = propertyNode.getAttributeValue(NAME)
    var stateProperty = new StateProperty<Existence>()
    propertyNode.Version
        .each(\version -> {

      var jurisdiction = version.Jurisdiction ?: COUNTRY_WIDE
      var available = version.Available ?: true
      var conditionalClause = version.Depends.HasElements ? convertPropertyConditions(version,
          \conditionalClause -> {
            final var typeInfo = conditionalClause.TypeInfo
            final var dependentStateProperty = _dependentProperties.get(typeInfo)

            var dependentProperties : Set<PropertyTypeInfo>
            var criteria = new EffectiveJurisdictionCriteria (jurisdiction, version.EffectiveDate.Date)

            if (dependentStateProperty.hasStateValue(criteria)) {
              dependentProperties = dependentStateProperty.getStateOrCWValue(criteria)
            } else {
              dependentProperties = new HashSet<PropertyTypeInfo>()
              _dependentProperties.get(typeInfo).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)

              if (conditionalClause.ValueRef != null) {
                _dependentProperties.get(conditionalClause.ValueRef).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)
              }
            }

            dependentProperties.add(new PropertyTypeInfo(propertyName, containerName))
          }
      ) : null

      var existence = new Existence(version.Existence.Met.toString(), version.Existence.NotMet?.toString(), conditionalClause)
      stateProperty.addStateValue(existence, jurisdiction, version.EffectiveDate.Date, version.ExpiryDate.Date, available)
    })

    return stateProperty
  }

  private function convertContainerConditions(version : ContainerType_Version, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var conditions = new HashSet<ConditionalClause>()
    version.Depends.each(\depends -> conditions.add(convertAndConditions(depends, propHandler)))

    return new ConditionalClause (conditions, ConditionalClause.ConjunctionType.OR)
  }

  private function convertPropertyConditions(version : PropertyType_Version, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var conditions = new HashSet<ConditionalClause>()
    version.Depends.each(\depends -> conditions.add(convertAndConditions(depends, propHandler)))

    return new ConditionalClause (conditions, ConditionalClause.ConjunctionType.OR)
  }

  private function convertAndConditions(depends : Redefine0_Depends, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var conditions = new HashSet<ConditionalClause>()
    depends.On.each(\on -> conditions.add(convertCondition(on, propHandler)))

    return new ConditionalClause(conditions, ConditionalClause.ConjunctionType.AND)
  }

  private function convertCondition(conditionNode : DependsType_On, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var isCustomExistence = conditionNode.ClassPath != null

    var conditionalClause = isCustomExistence ?
        new ConditionalClause(conditionNode.ClassPath) :
        new ConditionalClause(conditionNode.Path, conditionNode.Op, conditionNode.Value, conditionNode.ValuePath)

    if (propHandler != null) {
      if (isCustomExistence) {
        conditionNode.ClassVariable.each(\variable -> propHandler(makeConditionalClauseValueHolder(variable)))
      } else {
        propHandler(conditionalClause)
      }
    }
    return conditionalClause
  }

  private function createPropertyTypeInfo(propertyName : String, containerName : String) : PropertyTypeInfo {
    return new PropertyTypeInfo(propertyName, containerName)
  }

}