package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7ExposureSchedCovItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7ExpSchedCovItemCov

  construct(owner : GL7ExpSchedCovItemCov) {
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
    _owner.GL7ExposureSchedCovItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7ExposureSchedCovItem.addToCoverages(coverage as GL7ExpSchedCovItemCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}