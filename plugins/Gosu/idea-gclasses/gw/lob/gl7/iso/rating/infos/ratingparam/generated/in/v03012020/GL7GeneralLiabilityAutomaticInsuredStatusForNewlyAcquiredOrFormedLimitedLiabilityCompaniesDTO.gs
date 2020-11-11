package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAutomaticInsuredStatusForNewlyAcquiredOrFormedLimitedLiabilityCompaniesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAutomaticInsuredStatusForNewlyAcquiredOrFormedLimitedLiabilityCompaniesDTO {

  public construct(_gL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4 : GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAutomaticInsuredStatusForNewlyAcquiredOrFormedLimitedLiabilityCompaniesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}