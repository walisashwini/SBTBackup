package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7LocationSchedCondItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7LocSchedCondItemExcl

  construct(owner : GL7LocSchedCondItemExcl) {
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
    _owner.GL7LocationSchedCondItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7LocationSchedCondItem.addToExclusions(exclusion as GL7LocSchedCondItemExcl)
  }
}