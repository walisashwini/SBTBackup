package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7SublineTypeSchedCondItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublnTypSchCondItmExcl

  construct(owner : GL7SublnTypSchCondItmExcl) {
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
    _owner.GL7SublineTypeSchCondItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7SublineTypeSchCondItem.addToExclusions(exclusion as GL7SublnTypSchCondItmExcl)
  }
}