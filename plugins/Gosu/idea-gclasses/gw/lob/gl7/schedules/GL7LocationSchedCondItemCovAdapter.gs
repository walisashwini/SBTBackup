package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7LocationSchedCondItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7LocSchedCondItemCov

  construct(owner : GL7LocSchedCondItemCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedCondItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7LocationSchedCondItem.addToCoverages(coverage as GL7LocSchedCondItemCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}