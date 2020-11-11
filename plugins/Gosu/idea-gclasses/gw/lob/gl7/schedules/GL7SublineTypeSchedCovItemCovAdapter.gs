package gw.lob.gl7.schedules

uses gw.api.reinsurance.ReinsurableCoverable
uses gw.coverage.CoverageAdapterBase

class GL7SublineTypeSchedCovItemCovAdapter extends CoverageAdapterBase {

  var _owner : GL7SublnTypSchCovItmCov

  construct(owner : GL7SublnTypSchCovItmCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineTypeSchCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineTypeSchCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() {
    _owner.GL7SublineTypeSchCovItem.removeCoverageFromCoverable(_owner)
  }

  override function addToCoverageArray(coverage : Coverage) {
    _owner.GL7SublineTypeSchCovItem.addToCoverages(coverage as GL7SublnTypSchCovItmCov)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return typeSafeReinsurableCoverable(_owner.BranchValue)
  }

}