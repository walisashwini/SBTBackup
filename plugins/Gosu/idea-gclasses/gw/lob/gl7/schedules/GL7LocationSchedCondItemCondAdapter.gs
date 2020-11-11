package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7LocationSchedCondItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7LocSchedCondItemCond

  construct(owner : GL7LocSchedCondItemCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedCondItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7LocationSchedCondItem.addToConditions(condition as GL7LocSchedCondItemCond)
  }
}