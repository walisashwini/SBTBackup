package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7LocationSchedCovItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7LocSchedCovItemExcl

  construct(owner : GL7LocSchedCovItemExcl) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return PolicyLine.BaseState
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7LocationSchedCovItem
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7LocationSchedCovItem.ScheduleCoverage.PolicyLine
  }

  override function removeFromParent() : void {
    _owner.GL7LocationSchedCovItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7LocationSchedCovItem.addToExclusions(exclusion as GL7LocSchedCovItemExcl)
  }
}