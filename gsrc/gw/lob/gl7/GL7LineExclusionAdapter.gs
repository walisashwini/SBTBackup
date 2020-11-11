package gw.lob.gl7

uses gw.coverage.ExclusionAdapterBase

@Export
class GL7LineExclusionAdapter extends ExclusionAdapterBase {

  var _owner : GL7LineExcl

  construct(owner : GL7LineExcl) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7Line.Branch.BaseState
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7Line
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Line
  }

  override function addToExclusionArray(excl : Exclusion ) {
    _owner.GL7Line.addToExclusions(excl as GL7LineExcl)
  }

  override function removeFromParent() {
    _owner.GL7Line.removeFromExclusions(_owner)
  }

}