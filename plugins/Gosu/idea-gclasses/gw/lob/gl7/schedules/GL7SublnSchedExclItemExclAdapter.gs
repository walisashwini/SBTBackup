package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7SublnSchedExclItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublnSchedExclItmExcl

  construct(owner : GL7SublnSchedExclItmExcl) {
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
    _owner.GL7SublnSchedExclItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7SublnSchedExclItem.addToExclusions(exclusion as GL7SublnSchedExclItmExcl)
  }
}