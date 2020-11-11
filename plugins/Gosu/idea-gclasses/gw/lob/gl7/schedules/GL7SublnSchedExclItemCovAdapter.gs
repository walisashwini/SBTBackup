package gw.lob.gl7.schedules

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.coverage.CoverageAdapterBase

class GL7SublnSchedExclItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7SublnSchedExclItmCov

  construct(owner : GL7SublnSchedExclItmCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublnSchedExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublnSchedExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublnSchedExclItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7SublnSchedExclItem.addToCoverages(coverage as GL7SublnSchedExclItmCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}