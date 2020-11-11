package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAutomaticInsuredStatusForNewlyAcquiredOrFormedLimitedLiabCompaniesEDLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAutomaticInsuredStatusForNewlyAcquiredOrFormedLimitedLiabCompaniesEDLDTO {

  public construct(_gL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL : GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAutomaticInsuredStatusForNewlyAcquiredOrFormedLimitedLiabCompaniesEDLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}