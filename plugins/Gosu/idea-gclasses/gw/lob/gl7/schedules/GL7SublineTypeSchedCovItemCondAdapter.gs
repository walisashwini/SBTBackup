package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7SublineTypeSchedCovItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7SublnTypSchCovItmCond

  construct(owner : GL7SublnTypSchCovItmCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineTypeSchCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineTypeSchCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublineTypeSchCovItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7SublineTypeSchCovItem.addToConditions(condition as GL7SublnTypSchCovItmCond)
  }
}