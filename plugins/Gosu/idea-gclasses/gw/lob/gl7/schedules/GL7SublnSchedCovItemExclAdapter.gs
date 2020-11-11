package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7SublnSchedCovItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublnSchedCovItmExcl

  construct(owner : GL7SublnSchedCovItmExcl) {
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
    _owner.GL7SublnSchedCovItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7SublnSchedCovItem.addToExclusions(exclusion as GL7SublnSchedCovItmExcl)
  }
}