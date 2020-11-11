package gw.sbt.artifacts.clauses

uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.schedules.Schedule
uses gw.sbt.artifacts.schedules.ScheduleConfig

class ClauseProductModel {

  var _pattern : PolicyClausePattern as ClausePattern
  var _lookups : ClausePatternLookups as Lookups

  var _clauseEntity : Entity as ClauseEntity
  var _clauseEntityEtx : EntityExtension as ClauseEntityExtension
  var _clauseRootEntityEtx : Entity as ClauseRootEntityExtension
  var _isSchedule : boolean as IsSchedule
  var _schedule : Schedule as Schedule
  var _scheduleConfig : ScheduleConfig as ScheduleConfig


  static function newInstance() : ClauseProductModel {
    return new ClauseProductModel()
  }

  private construct() {
  }

  construct(pattern : PolicyClausePattern,
            lookups : ClausePatternLookups,
            isSchedule : boolean,
            scheduleConfig : ScheduleConfig,
            clauseEntity : Entity,
            clauseEntityEtx : EntityExtension,
            clauseRootEntityEtx : Entity) {
    _pattern = pattern
    _lookups = lookups
    _clauseEntity = clauseEntity
    _clauseEntityEtx = clauseEntityEtx
    _isSchedule = isSchedule
    _scheduleConfig = scheduleConfig
    _clauseRootEntityEtx = clauseRootEntityEtx
  }
}