package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7ExposureSchedCondItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7ExpSchedCondItemCov

  construct(owner : GL7ExpSchedCondItemCov) {
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
    _owner.GL7ExposureSchedCondItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7ExposureSchedCondItem.addToCoverages(coverage as GL7ExpSchedCondItemCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}