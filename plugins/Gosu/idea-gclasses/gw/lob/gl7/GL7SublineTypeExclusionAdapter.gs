package gw.lob.gl7

uses gw.coverage.ExclusionAdapterBase

@Export
class GL7SublineTypeExclusionAdapter extends ExclusionAdapterBase {

  var _owner : GL7SublineTypeExcl
  
  construct(owner : GL7SublineTypeExcl) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7SublineType.Branch.BaseState
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7SublineType.Line
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7SublineType
  }

  override function addToExclusionArray(excl : Exclusion ) {
    _owner.GL7SublineType.addToExclusions(excl as GL7SublineTypeExcl)
  }

  override function removeFromParent() {
    _owner.GL7SublineType.removeFromExclusions(_owner)
  }

}