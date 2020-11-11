package gw.lob.gl7

uses gw.coverage.ExclusionAdapterBase

@Export
class GL7UnmannedAircraftExclAdapter extends ExclusionAdapterBase {
  var _owner : GL7UnmannedAircraftExcl  
  
  construct(owner : GL7UnmannedAircraftExcl)  {
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

  
  override function addToExclusionArray( clause: Exclusion ) : void  {
    _owner.UnmannedAircraft.addToExclusions(clause as GL7UnmannedAircraftExcl)
  }

  override function removeFromParent() : void  {
    _owner.UnmannedAircraft.removeFromExclusions(_owner)
  }
}