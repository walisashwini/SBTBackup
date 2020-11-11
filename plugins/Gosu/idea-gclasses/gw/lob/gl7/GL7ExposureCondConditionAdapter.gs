package gw.lob.gl7

uses gw.coverage.ConditionAdapterBase

@Export
class GL7ExposureCondConditionAdapter extends ConditionAdapterBase {
  var _owner : GL7ExposureCond
  
  construct(owner : GL7ExposureCond) {
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

  override function addToConditionArray(p0 : PolicyCondition) {
    _owner.GL7Exposure.addToConditions(p0 as GL7ExposureCond)
  }

  override function removeFromParent() {
    _owner.GL7Exposure.removeFromConditions(_owner)
  }

}
