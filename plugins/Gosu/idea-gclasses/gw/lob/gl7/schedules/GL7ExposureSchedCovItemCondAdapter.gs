package gw.lob.gl7.schedules

uses gw.coverage.ConditionAdapterBase

class GL7ExposureSchedCovItemCondAdapter extends ConditionAdapterBase {

  var _owner : GL7ExpSchedCovItemCond

  construct(owner : GL7ExpSchedCovItemCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7ExposureSchedCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7ExposureSchedCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7ExposureSchedCovItem.removeConditionFromCoverable(_owner)
  }

  override function addToConditionArray(condition : PolicyCondition) {
    _owner.GL7ExposureSchedCovItem.addToConditions(condition as GL7ExpSchedCovItemCond)
  }
}