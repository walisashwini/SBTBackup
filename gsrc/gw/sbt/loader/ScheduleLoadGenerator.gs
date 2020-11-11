package gw.sbt.loader

uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.DisplayPropertiesAddition
uses gw.sbt.loader.io.schedule.ScheduleConfigModification
uses gw.sbt.loader.merger.ScheduleConfigMerger
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.StateUpdateLoadGenerator

class ScheduleLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, jurisdiction: String, adoptionDate: Date, messageReporter : MessageReporter, isIndependentState : boolean = false) {
    super(currentContents, updateContents, adoptedContents)
    _jurisdiction = jurisdiction
    _adoptionDate = adoptionDate
    _messageReporter = messageReporter
    _isIndependentState = isIndependentState
  }

  function generateLoads() : List<Load> {
    var resultLoads: List<Load> = {}
    var updateSchedules = _updateContents.ScheduleConfig
    if (updateSchedules == null) {
      return resultLoads
    }
    var resultScheduleConfig: ScheduleConfig = null
    var currentSchedules = _currentContents.ScheduleConfig
    if (currentSchedules == null) {
      resultScheduleConfig = updateSchedules
    } else {
      resultScheduleConfig = createResultScheduleConfigModel(currentSchedules, updateSchedules, _adoptedContents.ScheduleConfig, resultLoads)
    }

    if (resultScheduleConfig != null) {
      var load = new Load<ScheduleConfig>(resultScheduleConfig)
      load.add(new ScheduleConfigModification(_updateContents.ProductAbbreviation, resultScheduleConfig))
      resultLoads.add(load)
    }
    return resultLoads
  }

  private function createResultScheduleConfigModel(currentScheduleConfig : ScheduleConfig, updateScheduleConfig : ScheduleConfig, adoptedScheduleConfig : ScheduleConfig, resultLoads: List<Load>) : ScheduleConfig {
    var currentScheduleClausePatterns = currentScheduleConfig.AllSchedules*.ClausePattern
    var updateScheduleClausePatterns = updateScheduleConfig.AllSchedules*.ClausePattern
    var unionOfScheduleClausePatterns = updateScheduleClausePatterns?.union(currentScheduleClausePatterns)
    var stateAddForIndependentState = adoptedScheduleConfig == null and _isIndependentState
    unionOfScheduleClausePatterns.each(\clausePatternPublicId -> {
      var scheduleMerged = false
      var scheduleInCurrent = currentScheduleConfig.getSchedule(clausePatternPublicId)
      var scheduleInUpdate = updateScheduleConfig.getSchedule(clausePatternPublicId)
      var scheduleInAdopted = adoptedScheduleConfig?.getSchedule(clausePatternPublicId)
      var load = new Load<DisplayPropertiesAddition>()
      if (scheduleInCurrent == null) {
        // It is a NEW schedule config  (ADD case)
        scheduleMerged = new ScheduleConfigMerger(MessageReporter).addNewScheduleConfig(scheduleInCurrent, scheduleInUpdate, currentScheduleConfig, AdoptionDate)
      } else if (scheduleInUpdate == null and (scheduleInAdopted != null or stateAddForIndependentState)) {
        // It is a schedule config doesn not exist in new config, but exists in the adopted and current config (REMOVE case)
        // or independent state state-add case.
        scheduleMerged = new ScheduleConfigMerger(MessageReporter).expireScheduleConfig(scheduleInCurrent, scheduleInUpdate, Jurisdiction, AdoptionDate)
      } else if (scheduleInUpdate != null) { // The schedule config exists both in current and new config (might be DELTA case)
        scheduleMerged = new ScheduleConfigMerger(MessageReporter).mergeScheduleConfig(scheduleInCurrent, scheduleInUpdate, scheduleInAdopted, Jurisdiction, AdoptionDate, stateAddForIndependentState)
      }
      // Merging display properties if necessary
      if (scheduleMerged and scheduleInUpdate != null) {
        resultLoads.add(load)
      }
    }
    )
    return currentScheduleConfig
  }

}