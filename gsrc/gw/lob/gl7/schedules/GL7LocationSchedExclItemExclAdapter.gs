package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7LocationSchedExclItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7LocSchedExclItemExcl

  construct(owner : GL7LocSchedExclItemExcl) {
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
    _owner.GL7LocationSchedExclItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7LocationSchedExclItem.addToExclusions(exclusion as GL7LocSchedExclItemExcl)
  }
}