package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionOwnersContractorsProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionOwnersContractorsProdsCompldOpsDTO {

  public construct(_gL7SilicaOrSilicaReltdDustExclOwnersContractorsPro : GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SilicaOrSilicaReltdDustExclOwnersContractorsPro, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionOwnersContractorsProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}