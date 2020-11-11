package gw.lob.gl7.schedules

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.coverage.CoverageAdapterBase

class GL7SublnSchedCovItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7SublnSchedCovItmCov

  construct(owner : GL7SublnSchedCovItmCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublnSchedCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublnSchedCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublnSchedCovItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7SublnSchedCovItem.addToCoverages(coverage as GL7SublnSchedCovItmCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}