package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionPremOpsProdsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionPremOpsProdsDTO {

  public construct(_gL7SilicaOrSilicaReltdDustExclPremOpsProds : GL7SilicaOrSilicaReltdDustExclPremOpsProds, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SilicaOrSilicaReltdDustExclPremOpsProds, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionPremOpsProdsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}