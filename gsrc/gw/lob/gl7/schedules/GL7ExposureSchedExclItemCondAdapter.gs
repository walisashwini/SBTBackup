package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7ExposureSchedExclItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7ExpSchedExclItemCond

  construct(owner : GL7ExpSchedExclItemCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7ExposureSchedExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7ExposureSchedExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7ExposureSchedExclItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7ExposureSchedExclItem.addToConditions(condition as GL7ExpSchedExclItemCond)
  }
}