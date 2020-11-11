package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUnmannedAircraftDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUnmannedAircraftDTO {

  public construct(_gL7UnmannedAircraft : GL7UnmannedAircraft, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7UnmannedAircraft, parent )
    _unmannedAircraftCovABIPDCoverage = _gL7UnmannedAircraft.GL7UnmannedAircraftCovABIPD != null ? new GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO(_gL7UnmannedAircraft.GL7UnmannedAircraftCovABIPD, this) : null
    _unmannedAircraftCovBPAICoverage = _gL7UnmannedAircraft.GL7UnmannedAircraftCovBPAI != null ? new GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO(_gL7UnmannedAircraft.GL7UnmannedAircraftCovBPAI, this) : null
    _unmannedAircraftTerrorismCoverage = _gL7UnmannedAircraft.GL7UnmannedAircraftTerr != null ? new GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO(_gL7UnmannedAircraft.GL7UnmannedAircraftTerr, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get UnmannedAircraftTerrorismCoverage() : GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO {
   return _unmannedAircraftTerrorismCoverage as GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get UnmannedAircraftCovBPAICoverage() : GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO {
   return _unmannedAircraftCovBPAICoverage as GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO
  }
  

  
  @VisibleInRateflow
  property get UnmannedAircraftCovABIPDCoverage() : GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO {
   return _unmannedAircraftCovABIPDCoverage as GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent as GL7GeneralLiabilityClassificationDTO
  }
  

  
}