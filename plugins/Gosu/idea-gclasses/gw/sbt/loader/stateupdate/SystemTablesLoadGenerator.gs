package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.SystemTableHelper
uses gw.sbt.loader.io.SystemTableAddition
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateadd.SystemTableRegistryLoaderGenerator
uses gw.sbt.loader.stateupdate.systables.SystemTableRuleBook
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.bureau.BureauCodeMinMaxAttribute
uses gw.sbt.model.bureau.DisplayableStateUpdateBureauCodesContainer
uses gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter
uses gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesComparisonPresenter
uses gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesRowPresenter
uses gw.util.Pair
uses org.slf4j.LoggerFactory

class SystemTablesLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, jurisdiction: String, adoptionDate: Date, messageReporter : MessageReporter) {
    super(currentContents, updateContents, null)
    _jurisdiction = jurisdiction
    _adoptionDate = adoptionDate
    _messageReporter = messageReporter
  }

  function generateLoads(sysTablePresenters : List<StateUpdateBureauCodesRowPresenter>, newSbtUpdate : SBTUpdate) : List<Load> {
    var resultLoads : List<Load> = {}
    sysTablePresenters.each(\presenter -> {
      newSbtUpdate.registerComparison(presenter.BureauCodesComparison)

      var load = generateLoad(presenter)
      if (load != null) { // could be null.
        resultLoads.add(load)
      }
    })
    return resultLoads
  }

  /**
   * Generate all load operations needed for updating a system table.
   */
  private function generateLoad(sysTablePresenter : StateUpdateBureauCodesRowPresenter) : Load {
    //note: we are using BureauCodesRowPresenter to show all SystemTables (including BureauCodes)
    var systemTableFileName= sysTablePresenter.BureauCodesComparison.CanonicalVersion.FileName
    var systemTableFileNameWithExtension = systemTableFileName+ ".xml"
    var isBureauCode = sysTablePresenter.BureauCodesComparison.CanonicalVersion.IsBureauCode
    var currentSystemTable = _currentContents.getSystemTable(systemTableFileNameWithExtension)
    var newSystemTable = _updateContents.getSystemTable(systemTableFileNameWithExtension)

    var load = new Load<SystemTable>(newSystemTable?:currentSystemTable)
    var isLoadAdded = false
    var isLoadModified = false
    var isLoadRemoved = false
    // Needs to be treated on a row by row basis
    // Make merging logic null-check free.

    // if new contents are empty, it is a Removal
    if(newSystemTable == null) {
      newSystemTable = SystemTable.createEmpty()

      if (sysTablePresenter.Decision != UpdateDecision.REJECT) {
        isLoadRemoved = true
        if (sysTablePresenter.BureauCodesComparison.CanonicalVersion.IsBureauCode) {
          _messageReporter.ModificationReporter.reportRemovedBureauCodes(systemTableFileName)
        } else {
          _messageReporter.ModificationReporter.reportRemovedSystemTables(systemTableFileName)
        }
      }
    }

    if(currentSystemTable == null) {
      // Make sure current system table is never null
      currentSystemTable = SystemTable.createEmpty()

      // Create entry for system table registry if needed
      if (sysTablePresenter.Decision != UpdateDecision.REJECT) {
        //for new system table, systable registry need to be updated.
        var sysTableRegistry = new SystemTableRegistryLoaderGenerator(_currentContents)
        sysTableRegistry.generateLoad(_updateContents, load, systemTableFileNameWithExtension)
        isLoadAdded = true

        if (sysTablePresenter.BureauCodesComparison.CanonicalVersion.IsBureauCode) {
          _messageReporter.ModificationReporter.reportAddedBureauCodes(systemTableFileName)
        } else {
          _messageReporter.ModificationReporter.reportAddedSystemTables(systemTableFileName)
        }
      }
    }

    var comparisonPresenter = sysTablePresenter.ComparisonPresenter
    //get the report titles for audit/deviation reports
    var reportTitles = getReportTitles(comparisonPresenter)

    if (isBureauCode) { // deviation report only for bureau code.
      if (sysTablePresenter.Decision == PARTIAL_ACCEPT
          or sysTablePresenter.Decision == REJECT
          or sysTablePresenter.DecisionAndInstructions.FilingInstructions.HasContent) {
        var tableLevelDecision = sysTablePresenter.Decision
        var filingInstructions = sysTablePresenter.DecisionAndInstructions.FilingInstructions
        comparisonPresenter.Children
            .where(\entryRowPresenter -> entryRowPresenter.IsDecisionRequired)  // Decision is required
            .each(\entryRowPresenter -> {
              var deviationReportContents : List<String> = {}
              deviationReportContents.addAll(entryRowPresenter.KeyColumnValues) // key column values
              if (entryRowPresenter.HasValueColumn) {
              deviationReportContents.addAll({entryRowPresenter.CurrentValue, entryRowPresenter.NewValue, entryRowPresenter.AdoptedValue}) // value column values
              }
              var tableName = currentSystemTable.TableName?:newSystemTable.TableName
              var fileName = currentSystemTable.FileName?:newSystemTable.FileName
              _messageReporter.reportForDeviations(tableName, fileName, reportTitles, deviationReportContents, filingInstructions, tableLevelDecision, entryRowPresenter.Decision, BUREAU_CODE)
            })
      }
    }

    var sysTableRowPresenters = comparisonPresenter.Children
      .where(\ entryRowPresenter -> entryRowPresenter.IsDecisionRequired and entryRowPresenter.Decision != UpdateDecision.REJECT)  // Decision is required and Decision is not reject

    //Check the ValueColumn between New and Current, if changed, report and skip it - currently we do not support value column changed case.
    if (isValueColumnChanged(sysTableRowPresenters)) {
      reportConflict(systemTableFileNameWithExtension, isBureauCode)
      return null
    }

    sysTableRowPresenters.each(\entryRowPresenter -> {
        var loadRequiredForThisRow = processMatchedEntry(entryRowPresenter, newSystemTable, currentSystemTable, isBureauCode, reportTitles)
        // only update isLoadModified if not a system table addition or removal
        if (not isLoadAdded and not isLoadRemoved) {
          isLoadModified = isLoadModified or loadRequiredForThisRow
        }
      })

    if (isLoadModified) {
      if (sysTablePresenter.BureauCodesComparison.CanonicalVersion.IsBureauCode) {
        _messageReporter.ModificationReporter.reportModifiedBureauCodes(systemTableFileName)
      } else {
        _messageReporter.ModificationReporter.reportModifiedSystemTables(systemTableFileName)
      }
    }

    if (isLoadAdded or isLoadModified or isLoadRemoved) {
      LoggerFactory.getLogger("PCA").info("Load Ops for system table: ${systemTableFileNameWithExtension} is generated")
      load.add(new SystemTableAddition(ConfigurationFile.systable(systemTableFileNameWithExtension), currentSystemTable))
    }

    return load
  }

  /**
   * This is main method that merges row(s) that are matched from both current and new version of a system table based
   * on their key columns.
   *
   * As the logic for merging the system table rows is fairly complex, this method passes the rows through a list of
   * processors where each processor captures one individual piece of merging logic. This is similar to the
   * DecisionRequiredRuleBook class and DecisionRequiredRule interface.
   */
  private function processMatchedEntry(entryRowPresenter: StateUpdateBureauCodeRowComparisonPresenter,
                                       newSystemTable : SystemTable,
                                       currentSystemTable : SystemTable,
                                       isBureauCode : boolean,
                                       auditReportTitles: List<String>) : boolean {
    // Retrieve the corresponding row(s) from the new version of system table that matches what would have been
    // displayed by this StateUpdateBureauCodeRowComparisonPresenter
    var comparison = entryRowPresenter.DisplayableContainerComparison
    var newRows = retrieveRowsIdentifiedByPresenter(comparison.New, newSystemTable, isBureauCode)
    var currentRows = retrieveRowsIdentifiedByPresenter(comparison.Current, currentSystemTable, isBureauCode)
    if (newRows.Empty and currentRows.Empty) {
      return false
    }

    //note: ValueColumnName could be 'Value', 'Min/Max Value' or '', (or 'Code' for DBTerritory)
    var valueColumnName = retrieveRowValueColumnName(comparison.CanonicalVersion)

    var systemTableName = currentSystemTable.TableName?:newSystemTable.TableName

    currentSystemTable.BackingEntity = SystemTableHelper.retrieveBackingEntity(systemTableName, _currentContents, _updateContents)
    // apply rule, modify the current system table XML instance as we go - changes should not impact any future calls of this same
    var requiredReportMode = new SystemTableRuleBook(systemTableName, AdoptionDate,Jurisdiction)
        .applyRules(newRows, currentRows, currentSystemTable, valueColumnName)

    if (requiredReportMode == SystemTableRuleBook.REQUIRED_REPORT_ENUM.AUDIT_REPORT_REQUIRED
        or requiredReportMode == SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_AUDIT_REPORT_REQUIRED) {
      //Audit report - for each system table row
      var auditReportContents : List<String>= {}
      auditReportContents.addAll(entryRowPresenter.KeyColumnValues) // key column values
      if (entryRowPresenter.HasValueColumn) {
      auditReportContents.addAll({entryRowPresenter.CurrentValue, entryRowPresenter.NewValue, entryRowPresenter.AdoptedValue}) // value column values
    }
      // decision: it is always 'Accept New Update'
      _messageReporter.reportForAuditSystemTable(systemTableName, auditReportTitles, auditReportContents, UpdateDecision.ACCEPT, UpdateDecision.ACCEPT, isBureauCode ? BUREAU_CODE : SYSTEM_TABLE)
    }
    return requiredReportMode == SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_REPORT_REQUIRED
        or requiredReportMode == SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_AUDIT_REPORT_REQUIRED
  }

  private function retrieveRowValueColumnName(container : DisplayableStateUpdateBureauCodesContainer) : String {
    if(container == null or container.Codes.Empty) {
      return null
    }
    return container.Codes.first().Value.Name
  }

  private function retrieveRowsIdentifiedByPresenter(container : DisplayableStateUpdateBureauCodesContainer,
                                                     systemTable : SystemTable,
                                                     isBureauCode : boolean) : List<SystemTableRow> {
    if(container == null or container.Codes.Empty) {
      return Collections.emptyList()
    }

    var result : List<SystemTableRow> = {}
    var isMissingSystemTableRow= false
    container.Codes.each(\ code -> {
      var allAttributes : List<Pair<String, String>> = {}
      allAttributes.addAll(code.Keys.map(\ keyAttribute -> new Pair<String, String>(keyAttribute.Name, keyAttribute.Value)))
      if (container.HasValueColumn) {
        var valueAttribute = code.Value
        if (valueAttribute typeis BureauCodeMinMaxAttribute) { // Min/Max Values
          allAttributes.add(new Pair<String, String>(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME, valueAttribute.MinValue))
          allAttributes.add(new Pair<String, String>(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME, valueAttribute.MaxValue))
        } else {
          allAttributes.add(new Pair<String, String>(valueAttribute.Name, valueAttribute.Value))
        }
      }
      var matchedEntry = systemTable.AllRows.firstWhere(\systemTableEntry ->
          // Search for a matching entry - matching on all column values, jurisdiction and dates
          systemTableEntry.matchAllColumnNamesValues(allAttributes) and
              systemTableEntry.matchJurisdiction(code.CW) and
              code.EffectiveDate == systemTableEntry.EffectiveDate and
              code.ExpirationDate == systemTableEntry.ExpirationDate)
      if (matchedEntry == null) { //should not happen!
        LoggerFactory.getLogger("PCA").error("State Update SystemTablesLoadGenerator cannot find rows in "
            + systemTable.FileName
            + " that were initially read and displayed on the PCA analysis UI. No rows matched the search criteria "
            + allAttributes)
        isMissingSystemTableRow = true
      } else {
        result.add(matchedEntry)
      }
    })

    if (isMissingSystemTableRow) {
      reportConflict(getSystemTableFileNameWithExtension(systemTable.FileName), isBureauCode)
      return Collections.emptyList()
    }

    return result
  }

  private function getSystemTableFileNameWithExtension (systemTableFileName : String) : String {
    final var EXT_INDEX= ".xml".length()- 1
    if (systemTableFileName.lastIndexOf(".xml")!= systemTableFileName.length()- EXT_INDEX) {
      return systemTableFileName+ ".xml"
    }
    return systemTableFileName
  }

  private function reportConflict(systemTableFileNameWithExtension : String, isBureauCode : boolean) {
    if (isBureauCode)
      _messageReporter.ConflictReporter.reportBureauCode(systemTableFileNameWithExtension)
    else
      _messageReporter.ConflictReporter.reportSystemTable(systemTableFileNameWithExtension)
  }

  private function getReportTitles(comparisonPresenter : StateUpdateBureauCodesComparisonPresenter) : List<String> {
    var orderedKeyColumnNames = comparisonPresenter.KeyColumnNames
    var reportTitles : List<String> = {}  //for audit and deviation report
    reportTitles.addAll(orderedKeyColumnNames)
    if (comparisonPresenter.HasValueColumn) {
      //Not using comparisonPresenter.NewTitle/AdoptedTitle because it has ERC version, which is not necessary in reports.
      reportTitles.addAll({comparisonPresenter.CurrentTitle, "New Update", "Adopted Update", comparisonPresenter.DecisionTitle})
    } else {
      reportTitles.addAll({comparisonPresenter.DecisionTitle})
    }
    return reportTitles
  }

  private function isValueColumnChanged(sysTableRowPresenters : List<StateUpdateBureauCodeRowComparisonPresenter>) : boolean {
    var firstRowPresenter = sysTableRowPresenters.first()
    if (firstRowPresenter != null) {
      var comparison = firstRowPresenter.DisplayableContainerComparison
      var newValueColumnName = retrieveRowValueColumnName(comparison.New)
      var currentValueColumnName = retrieveRowValueColumnName(comparison.Current)
      if (newValueColumnName != null and currentValueColumnName != null and newValueColumnName != currentValueColumnName) {
        return true
      }
    }
    return false
  }
}