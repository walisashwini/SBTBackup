package gw.sbt.loader.stateadd

uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.artifacts.difftree.DiffTree
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.DiffTreeFileAddition
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.reporter.MessageReporter
uses org.slf4j.LoggerFactory

class DiffTreeLoadGenerator {
  var _currentContents : CurrentConfigContents
  var _messageReporter : MessageReporter

  construct(config : CurrentConfigContents, messageReporter : MessageReporter) {
    _currentContents = config
    _messageReporter = messageReporter
  }

  function generateLoad(updateConfig : SBTUpdateContents) : Load {
    var currentDiffTree = _currentContents.DiffTree
    var updateDiffTree = updateConfig.DiffTree

    if (currentDiffTree == null && updateDiffTree != null) {
      // name CA7DiffTree.xml add const for the file name
      LoggerFactory.getLogger("PCA").error("Cannot find DiffTree.xml in the current configuration, but find DiffTree.xml in the update configuration zip")
      _messageReporter.ConflictReporter.reportDiffTreeMissing(_currentContents.ProductAbbreviation)
    } else if (currentDiffTree == null) {
      LoggerFactory.getLogger("PCA").error("Cannot find DiffTree.xml in the current configuration")
    } else if (updateDiffTree == null) {
      LoggerFactory.getLogger("PCA").warn("Cannot find DiffTree.xml in the update configuration zip")
    } else {
      var mergeCompleted = mergeUpdateDiffTree(updateDiffTree, currentDiffTree)
      if (mergeCompleted) {
        var load = new Load<DiffTree>()
        load.add(new DiffTreeFileAddition(ConfigurationFile.diffTree(_currentContents.ProductAbbreviation), currentDiffTree))
        return load
      }
    }

    return null
  }



  /**
   * The following algorithm does not merge in new Section or new RootEntity coming from the new SBT.
   * <p>
   * Any new properties are copied in. "Properties" of a RootEntity is defined as Properties whose includefromtype
   * attribute matches the type attribute of the RootEntity.
   * <p>
   * If a current version of the RootEntity already has some properties, then any new PropertyDisplay with new propertyName
   * are copied into the corresponding Properties.
   *
   * @param updateDiffTree
   * @param currentDiffTree
   * @return
   */
  function mergeUpdateDiffTree(updateDiffTree : DiffTree, currentDiffTree : DiffTree) : boolean {
    var merged = false

    updateDiffTree.Sections.each(\updateSection -> {
      var matchingCurrentSection = currentDiffTree.Sections.firstWhere(\currentSection -> currentSection.Label == updateSection.Label)

      if (matchingCurrentSection != null) {
        updateSection.RootEntities.each(\updateRootEntity -> {
          var matchingCurrentRootEntity = matchingCurrentSection.RootEntities
              .firstWhere(\currentEntity -> currentEntity.Type == updateRootEntity.Type)

          if (matchingCurrentRootEntity != null and updateRootEntity.Properties != null) {
            if (matchingCurrentRootEntity.Properties == null) {
              matchingCurrentRootEntity.addProperties(updateRootEntity.Properties)
              merged = true
            } else {
              updateRootEntity.Properties.PropertyDisplays.each(\updatePropertyDisplay -> {
                if (not matchingCurrentRootEntity.Properties.PropertyDisplays
                    .hasMatch(\currentPropertyDisplay -> currentPropertyDisplay.PropertyName == updatePropertyDisplay.PropertyName)) {
                  matchingCurrentRootEntity.Properties.addPropertyDisplay(updatePropertyDisplay)
                  merged = true
                }
              })
            }
          }
        })
      }
    })
    return merged
  }
}