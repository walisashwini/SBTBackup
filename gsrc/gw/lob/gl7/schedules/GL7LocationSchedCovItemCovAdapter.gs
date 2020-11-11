package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7LocationSchedCovItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7LocSchedCovItemCov

  construct(owner : GL7LocSchedCovItemCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedCovItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7LocationSchedCovItem.addToCoverages(coverage as GL7LocSchedCovItemCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}