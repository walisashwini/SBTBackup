package gw.lob.gl7

uses gw.coverage.ConditionAdapterBase

@Export
class GL7UnmannedAircraftCondAdapter extends ConditionAdapterBase {
  var _owner : GL7UnmannedAircraftCond  
  
  construct(owner : GL7UnmannedAircraftCond)  {
    super(owner)
    _owner = owner
  }

  override property get CoverageState() : Jurisdiction  {
    return _owner.UnmannedAircraft.CoverableState
  }

  override property get PolicyLine() : PolicyLine  {
    return _owner.UnmannedAircraft.PolicyLine
  }

  override property get OwningCoverable() : Coverable  {
    return _owner.UnmannedAircraft
  }

  
  override function addToConditionArray( clause: PolicyCondition ) : void  {
    _owner.UnmannedAircraft.addToConditions(clause as GL7UnmannedAircraftCond)
  }

  override function removeFromParent() : void  {
    _owner.UnmannedAircraft.removeFromConditions(_owner)
  }
}