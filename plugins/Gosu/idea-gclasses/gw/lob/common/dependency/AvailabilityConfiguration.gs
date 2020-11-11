package gw.lob.common.dependency

uses gw.lob.common.AbstractDependencyConfiguration
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.schema.availability_config.AvailabilityConfig
uses gw.lob.common.dependency.schema.availability_config.anonymous.elements.AbstractConfigType_Container
uses gw.lob.common.dependency.schema.availability_config.anonymous.elements.ContainerType_Property
uses gw.lob.common.dependency.schema.availability_config.anonymous.elements.ContainerType_Version
uses gw.lob.common.dependency.schema.availability_config.anonymous.elements.DependsType_On
uses gw.lob.common.dependency.schema.availability_config.anonymous.elements.PropertyType_Version
uses gw.lob.common.dependency.schema.availability_config.anonymous.elements.VersionType_Depends
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.xml.XmlElement
uses org.slf4j.LoggerFactory

class AvailabilityConfiguration extends AbstractDependencyConfiguration {

  static final var NAME = "name"
  static final var TYPE = "type"

  // all fields that depend on other fields
  protected var _containerAvailabilityMap : Map<String, StateProperty<ConditionalClause>> = new HashMap<String, StateProperty<ConditionalClause>>()
  protected var _propertyAvailabilityMap : Map<String, Map<String, StateProperty<ConditionalClause>>> = new HashMap<String, Map<String, StateProperty<ConditionalClause>>>()

  construct(configPath : String= "") {
    super (configPath)
    initConfig()
  }

  /**
   * Find availability of a given container.
   * return a ConditionalClause if availability configuration is found, otherwise return null
   */
  function findContainerAvailability(containerType : ContainerType, containerName : String, criteria : EffectiveJurisdictionCriteria) : ConditionalClause {
    var typedContainerName = getTypedContainerName(containerType.Code, containerName)
    return _containerAvailabilityMap.get(typedContainerName)?.getStateOrCWValue(criteria)
  }

  /**
   * Find availability of a given property.
   * return a ConditionalClause if availability configuration is found, otherwise return null
   */
  function findPropertyAvailability(containerType : ContainerType, containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : ConditionalClause {
    var typedContainerName = getTypedContainerName(containerType.Code, containerName)
    return _propertyAvailabilityMap.get(typedContainerName)?.get(propertyName)?.getStateOrCWValue(criteria)
  }

  /**
   * return true if there is any property depending on this property
   */
  function hasDependants(containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return findDependentProperties(containerName, propertyName, criteria).HasElements
  }

  /**
   * return property of all the dependents
   */
  function findDependentProperties(containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo> {
    return _dependentProperties.get(new PropertyTypeInfo(propertyName, containerName))
        .getStateAndCWValue(criteria)
        .flatten()
        .toSet()
  }

  function findDependentProperties(propTypeInfo : PropertyTypeInfo, criteria : EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo> {
    return _dependentProperties.get(propTypeInfo)
        .getStateAndCWValue(criteria)
        .flatten()
        .toSet()
  }

  function findContainerDependencies(containerName : String, criteria : EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo> {
    return _dependentProperties.Keys
        .where(\typeInfo -> typeInfo.RiskType.RelativeName == containerName and _dependentProperties.get(typeInfo).getStateOrCWValue(criteria) != null)
        .toSet()
  }

  private function initConfig() {
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }

    var availabilityConfigFiles = ConfigDir.listFiles().where(\file -> file.Name.endsWith("-availability-config.xml"))

    availabilityConfigFiles.each(\file -> {

      var availability = AvailabilityConfig.parse(file)

      _containerAvailabilityMap.putAll(mapContainerAvailability(availability))
      _propertyAvailabilityMap.putAll(mapPropertyAvailability(availability))
    })
  }

  /**
   * Convert availability xml to container availability map
   * { "typed container name" -> StateProperty<ConditionalClause> }
   */
  private function mapContainerAvailability(root : XmlElement) : Map<String, StateProperty<ConditionalClause>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return getTypedContainerName(node.getAttributeValue(TYPE), node.getAttributeValue(NAME))
          } else {
            return node.$QName.toString()
          }
        },
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return registerContainer(node as AbstractConfigType_Container)
          } else {
            return null
          }
        }
    )
    return result as Map<String, StateProperty<ConditionalClause>>
  }

  /**
   * Convert availability xml to property availability map
   * { "typed container name" -> {
   * "property name" -> StateProperty<ConditionalClause>}}
   */
  private function mapPropertyAvailability(root : XmlElement) : Map<String, Map<String, StateProperty<ConditionalClause>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return getTypedContainerName(node.getAttributeValue(TYPE), node.getAttributeValue(NAME))
          }
          return node.$QName.toString()
        },
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return (node as AbstractConfigType_Container).Property.mapToKeyAndValue(
                \propertyNode -> propertyNode.getAttributeValue(NAME),
                \propertyNode -> {
                  if (node.getAttributeValue(TYPE) != null and node.getAttributeValue(TYPE).equals("Schedule")) {
                    return registerProperty(node.getAttributeValue(NAME), true, propertyNode)
                  } else {
                    return registerProperty(node.getAttributeValue(NAME), false, propertyNode)
                  }
                }
            )
          }
          return null
        }
    )
    return result as Map<String, Map<String, StateProperty<ConditionalClause>>>
  }

  private function registerContainer(containerNode : AbstractConfigType_Container) : StateProperty<ConditionalClause> {
    final var type = containerNode.getAttributeValue(TYPE)
    final var name = containerNode.getAttributeValue(NAME)
    var stateProperty = new StateProperty<ConditionalClause>()
    containerNode.Version.where(\version -> version.Depends.HasElements).each(\version -> {
      var jurisdiction = version.Jurisdiction?:ConfigResource.COUNTRY_WIDE
      var available = version.Available?:true
      var conditions = convertContainerConditions(version,
          \conditionalClause -> {
            final var typeInfo = conditionalClause.TypeInfo
            final var dependentStateProperty = _dependentProperties.get(typeInfo)

            var dependentProperties : Set<PropertyTypeInfo>
            var criteria = new EffectiveJurisdictionCriteria(jurisdiction, version.EffectiveDate.Date)

            if (dependentStateProperty.hasStateValue(criteria)) {
              dependentProperties = dependentStateProperty.getStateOrCWValue(criteria)
            } else {
              dependentProperties = new HashSet<PropertyTypeInfo>()
              _dependentProperties.get(typeInfo).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)
            }

            // the type info generation will be moved within the ConditionalClause
            if (type == "Clause") {
              dependentProperties.add(createClauseTypeInfo(name))
            } else if (type == "Coverable") {
              dependentProperties.add(createCoverableTypeInfo(name))
            } else {
              LoggerFactory.getLogger("DEPENDENCY").error("Unknown availability container type: " + type)
            }
          }
      )
      stateProperty.addStateValue(conditions, jurisdiction, version.EffectiveDate.Date, version.ExpiryDate.Date, available)
    })

    return stateProperty
  }

  private function registerProperty(containerName : String, isContainerSchedule : boolean,
                                    propertyNode : ContainerType_Property) : StateProperty<ConditionalClause> {
    final var name = propertyNode.getAttributeValue(NAME)
    var stateProperty = new StateProperty<ConditionalClause>()
    propertyNode.Version.where(\version -> version.Depends.HasElements).each(\version -> {
      var jurisdiction = version.Jurisdiction?:ConfigResource.COUNTRY_WIDE
      var available = version.Available?:true
      var conditionalClause = convertPropertyConditions(version,
          \conditionalClause -> {
            final var typeInfo = conditionalClause.TypeInfo
            final var dependentStateProperty = _dependentProperties.get(typeInfo)

            var dependentProperties : Set<PropertyTypeInfo>
            var criteria = new EffectiveJurisdictionCriteria(jurisdiction, version.EffectiveDate.Date)

            if (dependentStateProperty.hasStateValue(criteria)) {
              dependentProperties = dependentStateProperty.getStateOrCWValue(criteria)
            } else {
              dependentProperties = new HashSet<PropertyTypeInfo>()
              _dependentProperties.get(typeInfo).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)

              if (conditionalClause.ValueRef != null) {
                _dependentProperties.get(conditionalClause.ValueRef).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)
              }
            }
            if (isContainerSchedule) {
              dependentProperties.add(createSchedulePropertyTypeInfo(name, containerName))
            } else {
              dependentProperties.add(createPropertyTypeInfo(name, containerName))
            }
          }
      )
      stateProperty.addStateValue(conditionalClause, jurisdiction, version.EffectiveDate.Date, version.ExpiryDate.Date, available)
    })

    return stateProperty
  }

  protected function convertContainerConditions(version : ContainerType_Version, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var conditions = new HashSet<ConditionalClause>()
    version.Depends.each(\depends -> conditions.add(convertAndConditions(depends, propHandler)))

    return new ConditionalClause(conditions, ConditionalClause.ConjunctionType.OR)
  }

  protected function convertPropertyConditions(version : PropertyType_Version, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var conditions = new HashSet<ConditionalClause>()
    version.Depends.each(\depends -> conditions.add(convertAndConditions(depends, propHandler)))

    return new ConditionalClause(conditions, ConditionalClause.ConjunctionType.OR)
  }

  @Override
  protected function convertDependencies (depends : VersionType_Depends, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    return convertAndConditions(depends, propHandler)
  }

  private function convertAndConditions(depends : VersionType_Depends, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var conditions = new HashSet<ConditionalClause>()
    depends.On.each(\on -> conditions.add(convertCondition(on, propHandler)))

    return new ConditionalClause(conditions, ConditionalClause.ConjunctionType.AND)
  }

  private function convertCondition(conditionNode : DependsType_On, propHandler(conditionalClause : ConditionalClause)) : ConditionalClause {
    var isCustomAvailability = conditionNode.ClassPath != null

    var conditionalClause = isCustomAvailability ?
        new ConditionalClause(conditionNode.ClassPath) :
        new ConditionalClause(conditionNode.Function, conditionNode.Path, conditionNode.Op, conditionNode.Value, conditionNode.ValuePath)

    if (propHandler != null) {
      if (isCustomAvailability) {
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

  private function createSchedulePropertyTypeInfo(propertyName : String, containerName : String) : PropertyTypeInfo {
    return new PropertyTypeInfo(propertyName, containerName, true)
  }
}