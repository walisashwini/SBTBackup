package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInfoAndDataRelatedLiabLmtdBIExcptnNotInclddCGLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInfoAndDataRelatedLiabLmtdBIExcptnNotInclddCGLDTO {

  public construct(_gL7ExclAccessOrDisclosureOfConfidentialOrPersonalI : GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAccessOrDisclosureOfConfidentialOrPersonalI, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInfoAndDataRelatedLiabLmtdBIExcptnNotInclddCGLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}