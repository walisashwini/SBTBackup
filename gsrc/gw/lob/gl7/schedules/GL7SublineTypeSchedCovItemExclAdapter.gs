package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7SublineTypeSchedCovItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublnTypSchCovItmExcl

  construct(owner : GL7SublnTypSchCovItmExcl) {
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
    _owner.GL7SublineTypeSchCovItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7SublineTypeSchCovItem.addToExclusions(exclusion as GL7SublnTypSchCovItmExcl)
  }
}