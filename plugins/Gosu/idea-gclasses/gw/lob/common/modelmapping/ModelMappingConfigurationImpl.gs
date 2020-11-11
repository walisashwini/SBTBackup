package gw.lob.common.modelmapping

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.api.upgrade.Coercions
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.ContainerType
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.modelmapping.schema.model_mapping_config.ModelMappingConfig
uses gw.lob.common.modelmapping.schema.model_mapping_config.anonymous.elements.AbstractConfigType_Container
uses gw.lob.common.modelmapping.schema.model_mapping_config.anonymous.elements.ContainerType_Property
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.xml.XmlElement

class ModelMappingConfigurationImpl extends ConfigResource implements ModelMappingConfiguration {

  private final var NAME = "name"
  private final var TYPE = "type"

  var _containerModelPathMap = new HashMap<String, StateProperty<String>>()
  var _propertyModelPathMap = new HashMap<String, Map<String, StateProperty<String>>>()

  construct(configPath : String= "") {
    super (configPath)
    initConfig()
  }

  function findContainerModelPath(containerType : ContainerType, containerName : String, criteria : EffectiveJurisdictionCriteria) : String {
    var typedContainerName = getTypedContainerName(containerType.Code, containerName)
    return _containerModelPathMap.get(typedContainerName)?.getStateOrCWValue(criteria)
  }

  function findPropertyModelPath(containerType : ContainerType, containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : String {
    var typedContainerName = getTypedContainerName(containerType.Code, containerName)
    return _propertyModelPathMap.get(typedContainerName)?.get(propertyName)?.getStateOrCWValue(criteria)
  }

  private function initConfig() {
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }

    var modelMappingConfigFiles = ConfigDir.listFiles().where(\file -> file.Name.endsWith(CONFIG_SUFFIX))

    modelMappingConfigFiles.each(\file -> {
      var validation = ModelMappingConfig.parse(file)
      _containerModelPathMap.putAll(mapContainerModelMapping(validation))
      _propertyModelPathMap.putAll(mapPropertyModelMapping(validation))
    })
  }

  /**
   * Convert model mapping xml to container path map
   * { "container name" -> StateProperty<Path> }
   */
  private function mapContainerModelMapping(root : XmlElement) : Map<String, StateProperty<String>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return getTypedContainerName(node.getAttributeValue(TYPE), node.getAttributeValue(NAME))
          } else {
            return node.$QName.toString()
          }
        },
        \node -> node typeis AbstractConfigType_Container ? registerContainer(node) : null
    )
    return result as Map<String, StateProperty<String>>
  }

  /**
   * Convert model mapping xml to property path map
   * { "typed container name" -> {
   * "property name" -> StateProperty<Path>}}
   */
  private function mapPropertyModelMapping(root : XmlElement) : Map<String, Map<String, StateProperty<String>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return getTypedContainerName(node.getAttributeValue(TYPE), node.getAttributeValue(NAME))
          } else if (node typeis ContainerType_Property) {
            return node.getAttributeValue(NAME)
          }
          return null
        },
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return (node as AbstractConfigType_Container).Property.mapToKeyAndValue(
                \propertyNode -> propertyNode.getAttributeValue(NAME),
                \propertyNode -> registerProperty(propertyNode))
          }
          return null
        }
    )
    return result as Map<String, Map<String, StateProperty<String>>>
  }

  private function registerContainer(container : AbstractConfigType_Container) : StateProperty<String> {
    var stateProperty = new StateProperty<String>()

    container.Version.each(\version -> {
      var jurisdiction = version.Jurisdiction ?: DEFAULT_JURISDICTION
      var available = version.Available ?: DEFAULT_AVAILABILITY
      var modelPath = version.getPath()
      stateProperty.addStateValue(modelPath, jurisdiction, Coercions.makeDateFrom(version.EffectiveDate), Coercions.makeDateFrom(version.ExpiryDate), available)
    })

    return stateProperty
  }

  private function registerProperty(propertyNode : ContainerType_Property) : StateProperty<String> {
    var stateProperty = new StateProperty<String>()

    propertyNode.Version.each(\version -> {
      var jurisdiction = version.Jurisdiction ?: DEFAULT_JURISDICTION
      var available = version.Available ?: DEFAULT_AVAILABILITY
      var modelPath = version.getPath()
      stateProperty.addStateValue(modelPath, jurisdiction, Coercions.makeDateFrom(version.EffectiveDate), Coercions.makeDateFrom(version.ExpiryDate), available)
    })

    return stateProperty
  }

  private function getTypedContainerName(type : String, name : String) : String {
    return ContainerType.getContainerType(type).Code + "_" + name
  }
}