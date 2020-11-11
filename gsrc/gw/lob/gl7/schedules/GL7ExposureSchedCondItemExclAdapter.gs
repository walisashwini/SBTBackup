package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7ExposureSchedCondItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7ExpSchedCondItemExcl

  construct(owner : GL7ExpSchedCondItemExcl) {
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
    _owner.GL7ExposureSchedCondItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7ExposureSchedCondItem.addToExclusions(exclusion as GL7ExpSchedCondItemExcl)
  }
}