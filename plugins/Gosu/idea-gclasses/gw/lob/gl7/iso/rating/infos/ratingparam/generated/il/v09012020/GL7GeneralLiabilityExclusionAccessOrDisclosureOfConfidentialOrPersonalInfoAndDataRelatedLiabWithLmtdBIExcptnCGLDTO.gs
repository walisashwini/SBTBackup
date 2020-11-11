package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInfoAndDataRelatedLiabWithLmtdBIExcptnCGLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInfoAndDataRelatedLiabWithLmtdBIExcptnCGLDTO {

  public construct(_gL7ExclAccessOrDisclosureOfConfidentialOrPersonal2 : GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAccessOrDisclosureOfConfidentialOrPersonal2, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInfoAndDataRelatedLiabWithLmtdBIExcptnCGLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}