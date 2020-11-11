package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7ExposureSchedCondItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7ExpSchedCondItemCond

  construct(owner : GL7ExpSchedCondItemCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7ExposureSchedCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7ExposureSchedCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7ExposureSchedCondItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7ExposureSchedCondItem.addToConditions(condition as GL7ExpSchedCondItemCond)
  }
}