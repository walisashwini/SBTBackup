package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7SublnSchedExclItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7SublnSchedExclItmCond

  construct(owner : GL7SublnSchedExclItmCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublnSchedExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublnSchedExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublnSchedExclItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7SublnSchedExclItem.addToConditions(condition as GL7SublnSchedExclItmCond)
  }
}