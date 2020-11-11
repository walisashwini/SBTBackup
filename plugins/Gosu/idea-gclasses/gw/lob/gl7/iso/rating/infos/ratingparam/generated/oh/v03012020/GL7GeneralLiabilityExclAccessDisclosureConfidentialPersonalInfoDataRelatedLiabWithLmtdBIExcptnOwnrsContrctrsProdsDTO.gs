package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAccessDisclosureConfidentialPersonalInfoDataRelatedLiabWithLmtdBIExcptnOwnrsContrctrsProdsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAccessDisclosureConfidentialPersonalInfoDataRelatedLiabWithLmtdBIExcptnOwnrsContrctrsProdsDTO {

  public construct(_gL7ExclAccessDisclosureConfidentialPersonalInfoDat : GL7ExclAccessDisclosureConfidentialPersonalInfoDat, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAccessDisclosureConfidentialPersonalInfoDat, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAccessDisclosureConfidentialPersonalInfoDataRelatedLiabWithLmtdBIExcptnOwnrsContrctrsProdsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}