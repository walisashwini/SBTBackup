package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAccessDisclosureConfidentialPrsnlInfoDataRelatedLiabLmtdBIExcptnNotInclddOwnrsContrctrsProdsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAccessDisclosureConfidentialPrsnlInfoDataRelatedLiabLmtdBIExcptnNotInclddOwnrsContrctrsProdsDTO {

  public construct(_gL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe : GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAccessDisclosureConfidentialPrsnlInfoDataRelatedLiabLmtdBIExcptnNotInclddOwnrsContrctrsProdsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}