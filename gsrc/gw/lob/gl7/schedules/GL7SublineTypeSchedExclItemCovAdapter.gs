package gw.lob.gl7.schedules

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

class GL7SublineTypeSchedExclItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7SublnTypSchExclItmCov

  construct(owner : GL7SublnTypSchExclItmCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineTypeSchExclItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineTypeSchExclItem.ScheduleExclusion.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublineTypeSchExclItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7SublineTypeSchExclItem.addToCoverages(coverage as GL7SublnTypSchExclItmCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}