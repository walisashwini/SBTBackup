package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7SublnSchedCondItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7SublnSchedCondItmCond

  construct(owner : GL7SublnSchedCondItmCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublnSchedCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublnSchedCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublnSchedCondItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7SublnSchedCondItem.addToConditions(condition as GL7SublnSchedCondItmCond)
  }
}