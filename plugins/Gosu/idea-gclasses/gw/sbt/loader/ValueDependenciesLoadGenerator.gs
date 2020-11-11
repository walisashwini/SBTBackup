package gw.sbt.loader

uses gw.sbt.artifacts.valuedependency.ValueDependency
uses gw.sbt.artifacts.valuedependency.ValueDependencyConfig
uses gw.sbt.artifacts.valuedependency.ValueDependencySystemTable
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.ValueDependencyConfigFileAddition
uses gw.sbt.loader.merger.VersionedConfigExpirer
uses gw.sbt.loader.merger.VersionedConfigMerger
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.StateUpdateLoadGenerator
uses gw.sbt.util.LoaderUtil

class ValueDependenciesLoadGenerator extends StateUpdateLoadGenerator {
  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, jurisdiction : String, adoptionDate : Date, messageReporter : MessageReporter, isIndependentState : boolean = false) {
    super(currentContents, updateContents, null)
    _adoptedContents = adoptedContents
    _jurisdiction = jurisdiction
    _isIndependentState = isIndependentState
    _adoptionDate = adoptionDate
    _messageReporter = messageReporter
  }

  function generateLoad(valueDependencyConfigInCurrent : ValueDependencyConfig, valueDependencyConfigInUpdate : ValueDependencyConfig, valueDependencyConfigInAdopted : ValueDependencyConfig) : Load {
    var resultValueDependencyConfig : ValueDependencyConfig = null
    if (valueDependencyConfigInCurrent != null) {
      resultValueDependencyConfig = merge(valueDependencyConfigInCurrent, valueDependencyConfigInUpdate, valueDependencyConfigInAdopted)
    } else {
      valueDependencyConfigInUpdate.useAdoptionDate(AdoptionDate)
      resultValueDependencyConfig = valueDependencyConfigInUpdate
    }
    var load = new Load<ValueDependencyConfig>(resultValueDependencyConfig)
    load.add(new ValueDependencyConfigFileAddition(_currentContents.ProductAbbreviation, resultValueDependencyConfig))
    return load
  }

  function merge(valueDependencyConfigInCurrent : ValueDependencyConfig, valueDependencyConfigInUpdate : ValueDependencyConfig, valueDependencyConfigInAdopted : ValueDependencyConfig) : ValueDependencyConfig {
    var valueDependencyKeysInCurrent = valueDependencyConfigInCurrent.ValueDependencies*.ValueDependencyKey
    var valueDependencyKeysInUpdate = valueDependencyConfigInUpdate.ValueDependencies*.ValueDependencyKey

    var unionOfValueDependencyKeys = valueDependencyKeysInUpdate?.union(valueDependencyKeysInCurrent)
    unionOfValueDependencyKeys.each(\valueDependencyKey -> {
      var valueDependencyInCurrent = valueDependencyConfigInCurrent.findValueDependency(valueDependencyKey)
      var valueDependencyInUpdate = valueDependencyConfigInUpdate.findValueDependency(valueDependencyKey)
      var valueDependencyInAdopted = valueDependencyConfigInAdopted?.findValueDependency(valueDependencyKey)
      var isStateUpdate = valueDependencyConfigInAdopted != null

      if (valueDependencyInCurrent == null) {
        // New ValueDependency (ADD case)
        var valueDependencyToBeAdded = ValueDependency.createEmptyValueDependency(valueDependencyInUpdate.Property, valueDependencyInUpdate.Container)
        var effectiveSystemTable = valueDependencyInUpdate.getEffectiveSystemTable(Jurisdiction, AdoptionDate)  // only effective system table (might state-specific or countrywide)
        if (effectiveSystemTable != null) {
          if (LoaderUtil.isJurisdictionCW(effectiveSystemTable.Jurisdiction)) {
            MessageReporter.reportForAudit({valueDependencyInUpdate.Container, effectiveSystemTable.Name}, VALUE_DEPENDENCY_CONFIG)
          }
          effectiveSystemTable.Jurisdiction = Jurisdiction
          effectiveSystemTable.EffectiveDate = AdoptionDate
          valueDependencyToBeAdded.addSystemTable(effectiveSystemTable)
          valueDependencyConfigInCurrent.addValueDependency(valueDependencyToBeAdded)
          MessageReporter.ModificationReporter.reportAddedConfiguration(VALUE_DEPENDENCY_CONFIG, valueDependencyInUpdate.Container, effectiveSystemTable.Name)
        }
      }
      // It is a value dependency doesn not exist in new config, but exists in the adopted and current config (REMOVE case)
      else if (valueDependencyInUpdate == null and (valueDependencyInAdopted != null or (_isIndependentState and !isStateUpdate))) {
        var effectiveSystemTable = valueDependencyInCurrent.getEffectiveSystemTable(Jurisdiction, AdoptionDate)
        if (effectiveSystemTable != null and effectiveSystemTable.Available) {
          expireSystemTable(valueDependencyInCurrent, effectiveSystemTable, Jurisdiction, AdoptionDate)
          MessageReporter.ModificationReporter.reportRemovedConfiguration(VALUE_DEPENDENCY_CONFIG, valueDependencyInCurrent.Container, effectiveSystemTable.Name)
          MessageReporter.reportForAudit({valueDependencyInCurrent.Container, effectiveSystemTable.Name}, VALUE_DEPENDENCY_CONFIG)
        }
      }
      // the value dependency exists in both New and Current (DELTA case)
      else if (valueDependencyInUpdate != null) {
        var loadReportMode : VersionedConfigMerger.REPORT_MODE = NOT_REQUIRED
        var effectiveSystemTableInCurrent = VersionedConfig.getEffectiveVersionFor(valueDependencyInCurrent.SystemTables, AdoptionDate, Jurisdiction) as ValueDependencySystemTable
        var effectiveSystemTableInUpdate = VersionedConfig.getEffectiveVersionFor(valueDependencyInUpdate.SystemTables, AdoptionDate, Jurisdiction) as ValueDependencySystemTable

        //if any difference found between current and update system table, expire current version, and bring in update version if needed.
        if (VersionedConfig.isVersionDifferent(effectiveSystemTableInCurrent, effectiveSystemTableInUpdate)) {
          if (effectiveSystemTableInCurrent.Available == effectiveSystemTableInUpdate.Available) { // same 'Available' but different other attributes, showing 'Updated' in report
            loadReportMode = UPDATED
          }
          if (effectiveSystemTableInCurrent != null and effectiveSystemTableInCurrent.Jurisdiction == Jurisdiction) {
            effectiveSystemTableInCurrent.ExpiryDate = AdoptionDate
            if (loadReportMode == NOT_REQUIRED) {
              loadReportMode = _messageReporter.ModificationReporter.getLoadReportMode(effectiveSystemTableInCurrent, effectiveSystemTableInUpdate)
            }
          }
          //if update version is same as countrywide version, there is no need to add the update version again.
          //otherwise, copy from new update, make it as jurisdiction copy
          var countryWideVersionInCurrent = VersionedConfig.getCountryWideVersion(valueDependencyInCurrent.SystemTables)
          if (VersionedConfig.isVersionDifferent(countryWideVersionInCurrent, effectiveSystemTableInUpdate)) {
            if (LoaderUtil.isJurisdictionCW(effectiveSystemTableInUpdate.Jurisdiction)) {
              MessageReporter.reportForAudit({valueDependencyInCurrent.Container, effectiveSystemTableInUpdate.Name}, VALUE_DEPENDENCY_CONFIG)
            }
            effectiveSystemTableInUpdate.Jurisdiction = Jurisdiction
            effectiveSystemTableInUpdate.EffectiveDate = AdoptionDate
            valueDependencyInCurrent.addSystemTable(effectiveSystemTableInUpdate)
            if (loadReportMode == NOT_REQUIRED) {
              loadReportMode = _messageReporter.ModificationReporter.getLoadReportMode(effectiveSystemTableInCurrent, effectiveSystemTableInUpdate)
            }
          }
        }
        //add into load report.
        _messageReporter.ModificationReporter.reportChangedConfiguration(VALUE_DEPENDENCY_CONFIG, loadReportMode, valueDependencyInUpdate.Container, effectiveSystemTableInUpdate.Name)
      }
    })
    return valueDependencyConfigInCurrent
  }

  private function expireSystemTable(
      valueDependencyInCurrent : ValueDependency,
      systemTableInCurrent : ValueDependencySystemTable,
      jurisdiction : String,
      adoptionDate : Date
  ) {
    var versionExpirer = new VersionedConfigExpirer() {
      protected override function addVersion(newVersion : VersionedConfig) {
        valueDependencyInCurrent.addSystemTable(newVersion as ValueDependencySystemTable)
      }
    }
    versionExpirer.expire(systemTableInCurrent, jurisdiction, adoptionDate)
  }
}