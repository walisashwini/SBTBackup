package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7LocationSchedCovItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7LocSchedCovItemCond

  construct(owner : GL7LocSchedCovItemCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedCovItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7LocationSchedCovItem.addToConditions(condition as GL7LocSchedCovItemCond)
  }
}