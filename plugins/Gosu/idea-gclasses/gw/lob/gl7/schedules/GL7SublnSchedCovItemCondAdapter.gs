package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7SublnSchedCovItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7SublnSchedCovItmCond

  construct(owner : GL7SublnSchedCovItmCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublnSchedCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublnSchedCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublnSchedCovItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7SublnSchedCovItem.addToConditions(condition as GL7SublnSchedCovItmCond)
  }
}