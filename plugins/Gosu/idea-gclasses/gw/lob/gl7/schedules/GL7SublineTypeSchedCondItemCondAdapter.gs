package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7SublineTypeSchedCondItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7SublnTypSchCondItmCond

  construct(owner : GL7SublnTypSchCondItmCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineTypeSchCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineTypeSchCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublineTypeSchCondItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7SublineTypeSchCondItem.addToConditions(condition as GL7SublnTypSchCondItmCond)
  }
}