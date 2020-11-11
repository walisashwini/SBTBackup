package gw.lob.gl7

uses gw.coverage.ExclusionAdapterBase

@Export
class GL7SublineExclusionAdapter extends ExclusionAdapterBase {
  var _owner : GL7SublineExcl
  
  construct(owner : GL7SublineExcl) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7Subline.Jurisdiction
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7Subline.SublineType.Line
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Subline
  }

  override function addToExclusionArray(excl : Exclusion) {
    _owner.GL7Subline.addToExclusions(excl as GL7SublineExcl)
  }

  override function removeFromParent() {
    _owner.GL7Subline.removeFromExclusions(_owner)
  }

}