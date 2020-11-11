package gw.sbt.loader

uses gw.sbt.artifacts.versioned.ContainerKey
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig


/*
This cache serves as a temporary store for additional Existence Config entries we want to insert due to conflicts found
at the ClausePatternMerger step in the firstPassLoad(). We then read from this singleton class at the configuration file
merging step which can be found in ContainerPropertyLoadGenerator. It is cleared at the end of the firstPassLoad.
 */
class ExistenceConfigCache {

  private static var _existenceConfigCache : ExistenceConfigCache = null

  private var _versionsToAdd : List<ExistenceConfigVersion> = new ArrayList<ExistenceConfigVersion>()

  private construct() {}

  static function getInstance() : ExistenceConfigCache {
    if (_existenceConfigCache == null) {
      _existenceConfigCache = new ExistenceConfigCache()
    }

    return _existenceConfigCache
  }

  property get HasElements() : boolean {
    return _versionsToAdd.HasElements
  }

  function addVersion(jurisdiction : String, existenceValue : String, startEffectiveDate : String, containerName : String,
                      containerType : String) {
    _versionsToAdd.add(new ExistenceConfigVersion(jurisdiction, existenceValue, startEffectiveDate,
        ContainerKey.create(containerName, containerType)))
  }

  function clear() {
    _versionsToAdd = new ArrayList<ExistenceConfigVersion>()
  }

  function generateContainerPropertyConfig() : ContainerPropertyConfig {
    var content =
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\
          <ExistenceConfig>\
          </ExistenceConfig>"

    var containerPropertyConfig = new ContainerPropertyConfig(content.Bytes)

    // for each version:
    // if container already exists, append version
    // if container doesn't exist, create new one and add the version
    _versionsToAdd.each(\version -> {
      var container = containerPropertyConfig.getContentWithoutVersions(version.ContainerKey, null)
      if (container == null) {
        container = version.Container
        containerPropertyConfig.addContainer(container)
      } else {
        containerPropertyConfig.addVersion(version.ContainerKey, null, version.Version)
      }
    })

    return containerPropertyConfig
  }

}