package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCovForInjuryLeasedWorkersUndergroundStorageTanksDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCovForInjuryLeasedWorkersUndergroundStorageTanksDTO {

  public construct(_gL7CovForInjuryLeasedWorkersUndergroundStorageTank : GL7CovForInjuryLeasedWorkersUndergroundStorageTank, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CovForInjuryLeasedWorkersUndergroundStorageTank, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCovForInjuryLeasedWorkersUndergroundStorageTanksDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}