package gw.lob.gl7.schedules

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.coverage.CoverageAdapterBase

class GL7ExposureSchedExclItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7ExpSchedExclItemCov

  construct(owner : GL7ExpSchedExclItemCov) {
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
    _owner.GL7ExposureSchedExclItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7ExposureSchedExclItem.addToCoverages(coverage as GL7ExpSchedExclItemCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}