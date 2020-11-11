package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7ExposureSchedExclItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7ExpSchedExclItemExcl

  construct(owner : GL7ExpSchedExclItemExcl) {
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
    _owner.GL7ExposureSchedExclItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7ExposureSchedExclItem.addToExclusions(exclusion as GL7ExpSchedExclItemExcl)
  }
}