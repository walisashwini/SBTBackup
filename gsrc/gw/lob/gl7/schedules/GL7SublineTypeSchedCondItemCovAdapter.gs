package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7SublineTypeSchedCondItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7SublnTypSchCondItmCov

  construct(owner : GL7SublnTypSchCondItmCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineTypeSchCondItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineTypeSchCondItem.ScheduleCondition.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7SublineTypeSchCondItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7SublineTypeSchCondItem.addToCoverages(coverage as GL7SublnTypSchCondItmCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}