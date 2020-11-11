package gw.lob.common.displayable

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.api.system.logging.LOBLoggerCategory
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.displayable.schema.lob_field_meta.anonymous.elements.EntityType_Column
uses gw.lob.common.displayable.schema.lob_field_meta.anonymous.elements.LobFieldMetaType_Entity
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.xml.XmlElement
uses org.slf4j.MarkerFactory
uses java.util.HashMap
uses java.util.Map
uses org.slf4j.LoggerFactory

/**
 * Internal util class to load configuration file for lob field meta service
 */
class LobFieldMetaConfig extends ConfigResource {

  static final var NAME = "name"

  var _entityToColumn: Map<String, Map<String, StateProperty<LobFieldMeta>>>

  protected construct(configPath: String= "") {
    super(configPath)

    initConfig ()
  }

  protected function findFieldMetaStateProperty(containerName: String, propertyName: String): StateProperty<LobFieldMeta> {
    var entityDef = _entityToColumn.get(containerName)
    if (entityDef == null) {
      LoggerFactory.getLogger("Api").warn(MarkerFactory.getMarker(LobFieldMetaConfig.Type.Name), LobFieldMetaConfig.Type.Name + ": Lob field meta for ${containerName} not found")
      return null
    } else {
      return entityDef.get(propertyName)
    }
  }

  function findFieldMeta(containerName: String, propertyName: String, criteria: EffectiveJurisdictionCriteria) : LobFieldMeta {
    return findFieldMetaStateProperty(containerName, propertyName)?.getStateOrCWValue(criteria)
  }

  private function convertEntity(entity: LobFieldMetaType_Entity) : Map<String, StateProperty<LobFieldMeta>> {
    var result = new HashMap<String, StateProperty<LobFieldMeta>>()
    var containerName = entity.getAttributeValue(NAME)

    entity.Column.each( \ column -> result.put(column.getAttributeValue(NAME), generateStateProperty(containerName, column)))
    return result
  }

  private function generateStateProperty(containerName: String, column: EntityType_Column): StateProperty<LobFieldMeta> {
    var stateProperty = new StateProperty<LobFieldMeta>()
    var propertyName = column.getAttributeValue(NAME)

    column.Version.each( \version -> {
      var effDate = version.EffectiveDate
      var expDate = version.ExpiryDate
      var jurisdiction = version.Jurisdiction ?: COUNTRY_WIDE
      stateProperty.addStateValue(new LobFieldMeta(version, containerName, propertyName), jurisdiction, effDate.Date, expDate.Date)
    })

    return stateProperty
  }

  function findEntityProperties(entityName: String): Map<String, StateProperty<LobFieldMeta>> {
    return _entityToColumn?.get(entityName) ?: {}
  }

  private function initConfig() {
    _entityToColumn = new HashMap<String, Map<String, StateProperty<LobFieldMeta>>>()
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }
    var lobFieldMetaFiles = ConfigDir.listFiles().where( \ file -> file.Name.endsWith("lob-field-meta.xml"))
    lobFieldMetaFiles.each( \ file -> {
      var fieldMeta = gw.lob.common.displayable.schema.lob_field_meta.LobFieldMeta.parse(file)
      _entityToColumn.putAll(mapFieldMeta(fieldMeta))
    })
  }

  /**
   * Convert metadata to map
   * { "entity name" -> {
   *      "column name" -> StateProperty<LobFieldMeta>}}
   */
  private function mapFieldMeta(root: XmlElement): Map<String, Map<String, StateProperty<LobFieldMeta>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis LobFieldMetaType_Entity) {
            return node.getAttributeValue(NAME)
          }
          return node.$QName.toString()
        },
        \node -> {
          if (node typeis LobFieldMetaType_Entity) {
            return convertEntity(node as LobFieldMetaType_Entity)
          }
          return null
        }
    )
    return result as Map<String, Map<String, StateProperty<LobFieldMeta>>>
  }
}
