package gw.lob.common.synchronizer

uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.synchronizer.schema.sync_property_meta.anonymous.elements.ContainerType_Property
uses gw.lob.common.synchronizer.schema.sync_property_meta.anonymous.elements.PropertyType_Version
uses gw.lob.common.synchronizer.schema.sync_property_meta.anonymous.elements.SyncPropertyMetaType_Container
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.util.Pair
uses gw.xml.XmlElement

class SyncPropertyConfig extends ConfigResource {
  static final var CONTAINER_TYPE = "containerType"
  static final var CONTAINER_PATH = "containerPath"
  static final var PROPERTY_NAME = "propertyName"
  static final var CONFIG_FILE_NAME = "sync-property-meta.xml"
  /** {containerName -> {
   *   propertyName -> {
   *      StateProperty<propertyVersion, containerPath>
   *   }
   *  }
   */
  private var _propertyVersions : Map<String, Map<String, StateProperty<Pair<PropertyType_Version, String>>>>

  construct(configPath : String = "") {
    super(configPath)
    initConfig()
  }

  private function initConfig() {
    _propertyVersions = new HashMap<String, Map<String, StateProperty<Pair<PropertyType_Version, String>>>>()
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }
    var lobFieldMetaFiles = ConfigDir.listFiles().where(\file -> file.Name.endsWith(CONFIG_FILE_NAME))
    lobFieldMetaFiles.each(\file -> {
      var fieldMeta = gw.lob.common.synchronizer.schema.sync_property_meta.SyncPropertyMeta.parse(file)
      _propertyVersions.putAll(mapSyncMeta(fieldMeta))
    })
  }

  internal function getAllSyncPropertyMeta(criteria : EffectiveJurisdictionCriteria) : List<SyncPropertyMeta> {
    var propertyMetas = new ArrayList<SyncPropertyMeta>()
    _propertyVersions.eachKeyAndValue(\containerName, propertyToStatePropertyMap -> {
      propertyToStatePropertyMap.eachKeyAndValue(\propertyName, stateProperty -> {
        var propertyVersion = stateProperty.getStateOrCWValue(criteria)
        if (propertyVersion != null)
          propertyMetas.add(new SyncPropertyMeta(propertyVersion.First, propertyVersion.Second, containerName, propertyName))
      })
    })
    return propertyMetas
  }

  internal function getSyncPropertyMeta(propInstInfo : PropertyInstanceInfo, jurisdiction : String = null, effDate : Date = null) : SyncPropertyMeta {
    var containerName = propInstInfo.TypeInfo.ContextType.RelativeName
    if (_propertyVersions.containsKey(containerName)) {
      var props = _propertyVersions.get(containerName)
      var propName = propInstInfo.TypeInfo.Name
      if (props.containsKey(propName)) {
        var stateProperty = props.get(propName)
        if (jurisdiction == null) {
          jurisdiction = propInstInfo.Jurisdiction.Code
        }
        if (effDate == null) {
          effDate = propInstInfo.ReferenceDate
        }
        var propVer = stateProperty.getStateOrCWValue(new EffectiveJurisdictionCriteria(jurisdiction, effDate))
        if (propVer != null) {
          var syncProperty = new SyncPropertyMeta(propVer.First, propVer.Second, containerName, propName)
          return syncProperty
        }
      }
    }
    return null
  }

  private function registerAsStateProperty(propVersions : ContainerType_Property, currPath : String) : StateProperty<Pair<PropertyType_Version, String>> {
    var stateProperty = new StateProperty<Pair<PropertyType_Version, String>>()
    propVersions.Version.each(\version -> {
      var effDate = version.EffectiveDate
      var expDate = version.ExpiryDate
      var jurisdiction = version.Jurisdiction?:COUNTRY_WIDE
      var available = version.Available?:true
      var statePair = new Pair<PropertyType_Version, String>(version, currPath)
      stateProperty.addStateValue(statePair, jurisdiction, effDate.Date, expDate.Date, available)
    })
    return stateProperty
  }

  /**
   * Convert metadata to map
   * { "entity type / clause type" -> {
   *      "property name / covterm name" -> StateProperty<SyncPropertyMeta>}}
   */
  private function mapSyncMeta(root : XmlElement) : Map<String, Map<String, StateProperty<Pair<PropertyType_Version, String>>>> {
    var currPath = ""
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis ContainerType_Property) {
            return node.getAttributeValue(PROPERTY_NAME)
          } else if (node typeis SyncPropertyMetaType_Container) {
            currPath = node.getAttributeValue(CONTAINER_PATH)
            var type = node.getAttributeValue(CONTAINER_TYPE)
            return type
          } else {
            return node.$QName.toString()
          }
        },
        \node -> (node typeis ContainerType_Property) ? registerAsStateProperty(node as ContainerType_Property, currPath) : null
    )
    return result as Map<String, Map<String, StateProperty<Pair<PropertyType_Version, String>>>>
  }
}
