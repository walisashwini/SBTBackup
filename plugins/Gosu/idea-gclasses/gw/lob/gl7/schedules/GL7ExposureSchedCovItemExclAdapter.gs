package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7ExposureSchedCovItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7ExpSchedCovItemExcl

  construct(owner : GL7ExpSchedCovItemExcl) {
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
    _owner.GL7ExposureSchedCovItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7ExposureSchedCovItem.addToExclusions(exclusion as GL7ExpSchedCovItemExcl)
  }
}