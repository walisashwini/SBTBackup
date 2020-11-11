package gw.sbt.loader.stateadd

uses gw.sbt.artifacts.lookuptables.LookupTables
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.LookupTablesFileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses org.slf4j.LoggerFactory

class LookupTablesLoadGenerator {
  var _currentContents : CurrentConfigContents
  var _messageReporter : MessageReporter

  construct(config : CurrentConfigContents, messageReporter : MessageReporter) {
    _currentContents = config
    _messageReporter = messageReporter
  }

  function generateLoad(updateConfig : SBTUpdateContents) : Load {
    var currentLookupTables = _currentContents.LookupTables
    var updateLookupTables = updateConfig.LookupTables

    if (currentLookupTables == null && updateLookupTables != null) {
      // name lookuptables.xml add const for the file name
      LoggerFactory.getLogger("PCA").error("Cannot find lookuptables.xml in the current configuration, but found lookuptables.xml in the update configuration zip")
    } else if (currentLookupTables == null) {
      LoggerFactory.getLogger("PCA").error("Cannot find lookuptables.xml in the current configuration")
    } else if (updateLookupTables == null) {
      LoggerFactory.getLogger("PCA").warn("Cannot find lookuptables.xml in the update configuration zip")
    }
    else {
      LoggerFactory.getLogger("PCA").info("Loading lookuptables.xml")

      var mergeCompleted = mergeUpdateLookupTables(updateLookupTables, currentLookupTables)

      if (mergeCompleted) {
        var load = new Load<LookupTables>(currentLookupTables)
        load.add(new LookupTablesFileAddition(ConfigurationFile.LookupTablesFile(), currentLookupTables))
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
   * @param updateLookupTables
   * @param currentLookupTables
   * @return
   */

  function mergeUpdateLookupTables(updateLookupTables : LookupTables, currentLookupTables : LookupTables) : boolean {
    var merged = false

    updateLookupTables.LookupTables.each(\updateLookupTable -> {
      var matchingCurrentLookupTable = currentLookupTables.LookupTables
          .firstWhere(\currentLookupTable -> currentLookupTable.LookupTableCode == updateLookupTable.LookupTableCode)

      if (matchingCurrentLookupTable == null){
        //NEW LOOKUP TABLE
        LoggerFactory.getLogger("PCA").info("lookuptables.xml - NEW LookupTable: " + updateLookupTable.LookupTableCode)
        _messageReporter.ModificationReporter.reportAddedLookupTable(updateLookupTable.LookupTableCode)
        currentLookupTables.addTable(updateLookupTable)
        merged = true
      }
      else {
        //CHECK DISTINGUISHING_FIELD
        if (updateLookupTable.LookupTableDistinguishingField.Field != matchingCurrentLookupTable.LookupTableDistinguishingField.Field){
          //DISTINGUISHING_FIELD CONFLICT SCENARIO
          LoggerFactory.getLogger("PCA").warn("lookuptables.xml - LookupTable: " + updateLookupTable.LookupTableCode + " - DistinguishingField Conflict: " + updateLookupTable.LookupTableDistinguishingField.Field)
          _messageReporter.ConflictReporter.reportLookupTablesConflict("LookupTable: " + updateLookupTable.LookupTableCode + " - DistinguishingField Conflict: " + updateLookupTable.LookupTableDistinguishingField.Field)
        }
        else {
          //IF FOUND MATCHING LOOKUP TABLE - CHECK FILTERS, DIMENSIONS
          //FILTERS
          updateLookupTable.LookupTableFilters.each(\updateLookupTableFilter -> {
            var matchingCurrentLookupTableFilter = matchingCurrentLookupTable.LookupTableFilters
                .firstWhere(\currentLookupTableFilter -> currentLookupTableFilter.Field == updateLookupTableFilter.Field)
            if (matchingCurrentLookupTableFilter == null) {
              //NEW FILTER SCENARIO
              LoggerFactory.getLogger("PCA").info("lookuptables.xml - LookupTable: " + updateLookupTable.LookupTableCode + " - NEW Filter: " + updateLookupTableFilter.Field)
              _messageReporter.ModificationReporter.reportModifiedLookupTable(updateLookupTable.LookupTableCode)
              matchingCurrentLookupTable.addFilter(updateLookupTableFilter)
              merged = true
            } else {
              //IF FOUND MATCHING FILTERS, BUT FILTERS ARE NOT IDENTICAL (valuePath or exactMatch are different)
              if (matchingCurrentLookupTableFilter.ValuePath != updateLookupTableFilter.ValuePath
                  or matchingCurrentLookupTableFilter.ExactMatch != updateLookupTableFilter.ExactMatch) {
                LoggerFactory.getLogger("PCA").warn("lookuptables.xml - LookupTable: " + updateLookupTable.LookupTableCode + " - Filter Conflict: " + updateLookupTableFilter.Field)
                _messageReporter.ConflictReporter.reportLookupTablesConflict("LookupTable: " + updateLookupTable.LookupTableCode + " - Filter Conflict: " + updateLookupTableFilter.Field)
              }
            }
          })
          //DIMENSIONS
          updateLookupTable.LookupTableDimensions.each(\updateLookupTableDimension -> {
            var matchingCurrentLookupTableDimension = matchingCurrentLookupTable.LookupTableDimensions
                .firstWhere(\matchingCurrentLookupTableDimension -> matchingCurrentLookupTableDimension.Field == updateLookupTableDimension.Field)
            if (matchingCurrentLookupTableDimension == null) {
              //NEW DIMENSION SCENARIO
              LoggerFactory.getLogger("PCA").info("lookuptables.xml - LookupTable: " + updateLookupTable.LookupTableCode + " - NEW Dimension: " + updateLookupTableDimension.Field)
              _messageReporter.ModificationReporter.reportModifiedLookupTable(updateLookupTable.LookupTableCode)
              matchingCurrentLookupTable.addDimension(updateLookupTableDimension)
              merged = true
            } else {
              //IF FOUND MATCHING DIMENSION, BUT DIMENSIONS ARE NOT IDENTICAL (valuePath or Precedence don't match)
              if (matchingCurrentLookupTableDimension.ValuePath != updateLookupTableDimension.ValuePath
                  or matchingCurrentLookupTableDimension.Precedence != updateLookupTableDimension.Precedence) {
                LoggerFactory.getLogger("PCA").warn("lookuptables.xml - LookupTable: " + updateLookupTable.LookupTableCode + " - Dimension Conflict: " + updateLookupTableDimension.Field)
                _messageReporter.ConflictReporter.reportLookupTablesConflict("LookupTable: " + updateLookupTable.LookupTableCode + " - Dimension Conflict: " + updateLookupTableDimension.Field)
              }
            }
          })

        }
      }
    })
    return merged
  }

}