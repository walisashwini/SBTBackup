package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7SublnSchedCondItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublnSchedCondItmExcl

  construct(owner : GL7SublnSchedCondItmExcl) {
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
    _owner.GL7SublnSchedCondItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7SublnSchedCondItem.addToExclusions(exclusion as GL7SublnSchedCondItmExcl)
  }
}