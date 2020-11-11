package gw.lob.gl7.schedules

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.coverage.CoverageAdapterBase

class GL7SublnSchedCondItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7SublnSchedCondItmCov

  construct(owner : GL7SublnSchedCondItmCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublnSchedCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublnSchedCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublnSchedCondItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7SublnSchedCondItem.addToCoverages(coverage as GL7SublnSchedCondItmCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }
}