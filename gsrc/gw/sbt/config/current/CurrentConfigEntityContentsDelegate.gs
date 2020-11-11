package gw.sbt.config.current

uses gw.api.util.ConfigAccess
uses gw.sbt.artifacts.bureaus.BureauCodeFileDefinition
uses gw.sbt.artifacts.bureaus.BureauCodesConfig
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.typelists.TypeListExtension
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.DataModelConfigContents
uses gw.sbt.config.TargetConfiguration

uses java.nio.file.Files
uses java.util.List

class CurrentConfigEntityContentsDelegate implements DataModelConfigContents {
  var _currentConfig: CurrentConfigContents as CurrentConfig
  var _config: TargetConfiguration as Config
  construct(currentConfig: CurrentConfigContents) {
    _currentConfig = currentConfig
    _config = currentConfig.Config
  }

  override function getEntity(name: String): Entity {
    var configFile = ConfigurationFile.entity(name + ".eti", Config)
    if (not Config.exists(configFile)) return null
    return new Entity(Config.contents(configFile))
  }

  override function getEntityExtension(name: String): EntityExtension {
    var configFile = ConfigurationFile.entity(name + ".etx", Config)
    if (not Config.exists(configFile)) return null
    return new EntityExtension(Config.contents(configFile))
  }

  override function getStateTypeListExtensions(state: String): List<TypeListExtension> {
    throw "unimplemented"
  }

  override function getStateExtensions(state : String) : List<EntityExtension> {
    throw "unimplemented"
  }

  override function getEntities(): List<Entity> {
    var list : List<Entity> = {}
    var fileNames = Config.listFileNames(ConfigurationFile.entityFolder())
    if (fileNames.HasElements) {
      fileNames.each(\fileName -> {
        if (fileName.endsWith(".eti")) {
          var configFile = ConfigurationFile.entity(fileName, Config)
          list.add(new Entity(Config.contents(configFile)))
        }
      })
    }
    return list
  }

  override function getEntityExtensions() : List<EntityExtension> {
    var list : List<EntityExtension> = {}
    var fileNames = Config.listFileNames(ConfigurationFile.entityFolder())
    if (fileNames.HasElements) {
      fileNames.each(\fileName -> {
        if (fileName.endsWith(".etx")) {
          var configFile = ConfigurationFile.entity(fileName, Config)
          list.add(new EntityExtension(Config.contents(configFile)))
        }
      })
    }
    return list
  }

  override function getTypeList(name: String): TypeList {
    var contents = Config.contents(ConfigurationFile.typelistFromExtensions(name + ".tti"))
    return contents.Count > 0 ? new TypeList(name + ".tti", contents) : null
  }

  override function getTypeListExtension(name: String): TypeListExtension {
    var contents = Config.contents(ConfigurationFile.typelistFromExtensions(name + ".ttx"))
    return contents.Count > 0 ? new TypeListExtension(name + ".ttx", contents) : null
  }

  override function getBureauCodeFileDefinitions(lineCode : String) : List<BureauCodeFileDefinition> {
    var fileDefinitions : List<BureauCodeFileDefinition> = {}
    var contents = Config.contents(ConfigurationFile.bureauCodesConfig())
    if (contents == null or contents.Count == 0) {
      // TODO: After all the LOBs start providing pca_bureau_codes_config.xml this section will be throwing an Exception !
      contents = getBureauCodeFileDefinitionsBackup()
    }
    var bureauCodesConfig = new BureauCodesConfig(contents, lineCode)
    fileDefinitions = bureauCodesConfig.BureauCodeFiles
    return fileDefinitions
  }

  private function getBureauCodeFileDefinitionsBackup() : byte[] {
    var pcaConfigFile = ConfigAccess.getConfigFile("config/pca_config/pca_bureau_codes_config.xml")
    var backupContent = Files.readAllBytes(pcaConfigFile.toPath())
    return backupContent
  }

 override function getTypeLists() : List<TypeList> {
    var list : List<TypeList> = {}
    var fileNames = Config.listFileNames(ConfigurationFile.typelistFolder())
    if (fileNames.HasElements) {
      fileNames.each(\fileName -> {
        if (fileName.endsWith(".tti")) {
          var configFile = ConfigurationFile.typelistFromExtensions(fileName)
          list.add(new TypeList(fileName, Config.contents(configFile)))
        }

      })
    }
    return list
  }

  override function getTypeListExtensions() : List<TypeListExtension> {
    var list : List<TypeListExtension> = {}
    var fileNames = Config.listFileNames(ConfigurationFile.typelistFolder())
    if (fileNames.HasElements) {
      fileNames.each(\fileName -> {
        if (fileName.endsWith(".ttx")) {
          var configFile = ConfigurationFile.typelistFromExtensions(fileName)
          list.add(new TypeListExtension(fileName, Config.contents(configFile)))
        }
      })
    }
    return list
  }
}
