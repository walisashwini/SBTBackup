package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7LocationSchedExclItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7LocSchedExclItemCov

  construct(owner : GL7LocSchedExclItemCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedExclItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7LocationSchedExclItem.addToCoverages(coverage as GL7LocSchedExclItemCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}