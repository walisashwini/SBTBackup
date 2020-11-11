package gw.sbt.loader.stateadd

uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.SystemTableRegistryAddition

class SystemTableRegistryLoaderGenerator {
  var _config : CurrentConfigContents
  construct(config : CurrentConfigContents) {
    _config = config
  }

  function generateLoad(updateContents: SBTUpdateContents, load: Load, systemTableFileName: String) {
    var fileDefinition = updateContents.SystemTableRegistry.getSystemTableFileDefinition(systemTableFileName)
    if (fileDefinition == null)
      return
    var alreadyExistsInRegistry = _config.SystemTableRegistry.AllSystemTableFileNames.contains(systemTableFileName)
    if (not alreadyExistsInRegistry){
      load.add(new SystemTableRegistryAddition(fileDefinition))
    }
  }
}