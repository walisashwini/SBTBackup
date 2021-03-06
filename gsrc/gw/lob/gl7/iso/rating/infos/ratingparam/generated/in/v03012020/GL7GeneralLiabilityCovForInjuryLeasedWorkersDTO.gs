package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCovForInjuryLeasedWorkersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCovForInjuryLeasedWorkersDTO {

  public construct(_gL7CovForInjuryLeasedWorkers : GL7CovForInjuryLeasedWorkers, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CovForInjuryLeasedWorkers, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCovForInjuryLeasedWorkersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}