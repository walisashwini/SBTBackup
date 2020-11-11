package gw.lob.gl7

uses gw.coverage.ExclusionAdapterBase

@Export
class GL7ExposureExclExclusionAdapter extends ExclusionAdapterBase {
  var _owner : GL7ExposureExcl
  
  construct(owner : GL7ExposureExcl) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction {
    return _owner.GL7Exposure.CoverableState
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.GL7Exposure.PolicyLine
  }

  override property get OwningCoverable() : Coverable {
    return _owner.GL7Exposure
  }

  override function addToExclusionArray(p0: Exclusion) {
    _owner.GL7Exposure.addToExclusions(p0 as GL7ExposureExcl)
  }

  override function removeFromParent() {
    _owner.GL7Exposure.removeFromExclusions(_owner)
  }

}
