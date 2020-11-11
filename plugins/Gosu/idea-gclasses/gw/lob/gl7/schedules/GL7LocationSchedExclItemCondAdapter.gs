package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7LocationSchedExclItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7LocSchedExclItemCond

  construct(owner : GL7LocSchedExclItemCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedExclItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7LocationSchedExclItem.addToConditions(condition as GL7LocSchedExclItemCond)
  }
}