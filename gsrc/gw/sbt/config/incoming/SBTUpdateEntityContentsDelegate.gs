package gw.sbt.config.incoming

uses gw.api.util.ConfigAccess
uses gw.sbt.artifacts.bureaus.BureauCodeFileDefinition
uses gw.sbt.artifacts.bureaus.BureauCodesConfig
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.typelists.TypeListExtension
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.DataModelConfigContents

uses java.nio.file.Files
uses java.util.Map
uses java.util.List

class SBTUpdateEntityContentsDelegate implements DataModelConfigContents {
  var _cachedEntities: Map<String, Entity> = {}
  var _cachedEntityExtensions: Map<String, EntityExtension> = {}
  var _cachedTypeLists: Map<String, TypeList> = {}
  var _cachedTypeListExtensions: Map<String, TypeListExtension> = {}
  var _updateContents: SBTUpdateContents as UpdateContents
  construct(updateContents: SBTUpdateContents) {
    _updateContents = updateContents
  }

  override function getEntity(name: String): Entity {
    var entity = _cachedEntities.get(name)
    if (entity == null) {
      var entityContent = UpdateContents.getContent(ConfigurationFile.entityFromExtensions(name + ".eti"))
      if (entityContent != null and entityContent.length > 0) {
        entity = new Entity(entityContent)
        _cachedEntities.put(name, entity)
      }
    }
    return entity
  }

  override function getEntityExtension(name: String): EntityExtension {
    var entityExtension = _cachedEntityExtensions.get(name)
    if (entityExtension == null) {
      var entityExtensionContent = UpdateContents.getContent(ConfigurationFile.entityFromExtensions(name + ".etx"))
      if (entityExtensionContent != null) {
        entityExtension = new EntityExtension(entityExtensionContent)
        _cachedEntityExtensions.put(name, entityExtension)
      }
    }
    return entityExtension
  }

  override function getStateTypeListExtensions(productAbbreviation: String): List<TypeListExtension> {
    return UpdateContents._content.keySet()
        .where(\path ->
            path.contains(ConfigurationFile.typelistFolder().Folder) and path.endsWith(".ttx"))
        .map(\path -> path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".")))
        .map(\name -> getTypeListExtension(name))
  }

  override function getStateExtensions(state: String): List<EntityExtension> {
    return UpdateContents._content.keySet()
        .where(\path ->
            path.startsWith(ConfigurationFile.entityFolder().Folder) and
                path.endsWith(".state.etx"))
        .map(\path -> path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".")))
        .map(\name -> getEntityExtension(name))
  }

  override function getEntities() : List<Entity> {
    return UpdateContents._content.keySet()
        .where(\path ->
            path.startsWith(ConfigurationFile.entityFolder().Folder) and
                path.endsWith(".eti"))
        .map(\path -> path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".")))
        .map(\name -> getEntity(name))
  }

  override function getEntityExtensions() : List<EntityExtension> {
    return UpdateContents._content.keySet()
        .where(\path ->
            path.startsWith(ConfigurationFile.entityFolder().Folder) and
                path.endsWith(".etx"))
        .map(\path -> path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".")))
        .map(\name -> getEntityExtension(name))
  }

  override function getTypeList(name: String): TypeList {
    var typeList = _cachedTypeLists.get(name)
    if (typeList == null) {
      var typeListContent = UpdateContents.getContent(ConfigurationFile.typelistFromExtensions(name + ".tti"))
      if (typeListContent != null) {
        typeList = new TypeList(name + ".tti", typeListContent)
        _cachedTypeLists.put(name, typeList)
      }
    }
    return typeList
  }

  override function getTypeListExtension(name: String): TypeListExtension {
    var typeListExtension = _cachedTypeListExtensions.get(name)
    if (typeListExtension == null) {
      var typeListExtensionContent = UpdateContents.getContent(ConfigurationFile.typelistFromExtensions(name + ".ttx"))
      if (typeListExtensionContent != null) {
        typeListExtension = new TypeListExtension(name + ".ttx", typeListExtensionContent)
        _cachedTypeListExtensions.put(name, typeListExtension)
      }
    }
    return typeListExtension
  }

  override function getBureauCodeFileDefinitions(lineCode : String) : List<BureauCodeFileDefinition> {
    var fileDefinitions : List<BureauCodeFileDefinition> = {}
    var content = UpdateContents.getContent(ConfigurationFile.bureauCodesConfig())

    if (content == null) {
      // TODO: After all the LOBs start providing pca_bureau_codes_config.xml this section will be throwing an Exception !
      content = getBureauCodeFileDefinitionsBackup()
    }
    var bureauCodesConfig = new BureauCodesConfig(content, lineCode)
    fileDefinitions = bureauCodesConfig.BureauCodeFiles
    return fileDefinitions
  }

  public function getBureauCodeFileDefinitionsBackup() : byte[] {
    var pcaConfigFile = ConfigAccess.getConfigFile("config/pca_config/pca_bureau_codes_config.xml")
    var backupContent = Files.readAllBytes(pcaConfigFile.toPath())
    return backupContent
  }

  override function getTypeLists() : List<TypeList> {
    return UpdateContents._content.keySet()
        .where(\path ->
            path.contains(ConfigurationFile.typelistFolder().Folder) and path.endsWith(".tti"))
        .map(\path -> path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".")))
        .map(\name -> getTypeList(name))

  }

  override function getTypeListExtensions() : List<TypeListExtension> {
    return UpdateContents._content.keySet()
        .where(\path ->
            path.contains(ConfigurationFile.typelistFolder().Folder) and path.endsWith(".ttx"))
        .map(\path -> path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".")))
        .map(\name -> getTypeListExtension(name))
  }
}
