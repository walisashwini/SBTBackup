package gw.lob.gl7.schedules

uses gw.coverage.ExclusionAdapterBase

class GL7SublineTypeSchedExclItemExclAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublnTypSchExclItmExcl

  construct(owner : GL7SublnTypSchExclItmExcl) {
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
    _owner.GL7SublineTypeSchExclItem.removeExclusionFromCoverable(_owner)
  }

  override function addToExclusionArray(exclusion : Exclusion) {
    _owner.GL7SublineTypeSchExclItem.addToExclusions(exclusion as GL7SublnTypSchExclItmExcl)
  }
}