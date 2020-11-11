package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInformationCovBOnlyDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInformationCovBOnlyDTO {

  public construct(_gL7ExclAccessOrDisclosureOfConfidentialOrPersonal1 : GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAccessOrDisclosureOfConfidentialOrPersonal1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionAccessOrDisclosureOfConfidentialOrPersonalInformationCovBOnlyDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}