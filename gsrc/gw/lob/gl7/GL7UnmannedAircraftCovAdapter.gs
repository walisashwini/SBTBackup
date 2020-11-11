package gw.lob.gl7

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable

@Export
class GL7UnmannedAircraftCovAdapter extends CoverageAdapterBase {
  var _owner : GL7UnmannedAircraftCov  
  
  construct(owner : GL7UnmannedAircraftCov)  {
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

  
  override function addToCoverageArray( clause: Coverage ) : void  {
    _owner.UnmannedAircraft.addToCoverages(clause as GL7UnmannedAircraftCov)
  }

  override function removeFromParent() : void  {
    _owner.UnmannedAircraft.removeFromCoverages(_owner)
  }

  override property get ReinsurableCoverable() : ReinsurableCoverable {
    return _owner.BranchValue
  }
}