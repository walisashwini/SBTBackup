package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7SublineTypeSchedExclItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7SublnTypSchExclItmCond

  construct(owner : GL7SublnTypSchExclItmCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineTypeSchExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineTypeSchExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublineTypeSchExclItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7SublineTypeSchExclItem.addToConditions(condition as GL7SublnTypSchExclItmCond)
  }
}