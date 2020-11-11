package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityElectronicDataLiabCoverageCovAWithAccessOrDisclosureOfConfidentialOrPersonalInformationExclCovBDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityElectronicDataLiabCoverageCovAWithAccessOrDisclosureOfConfidentialOrPersonalInformationExclCovBDTO {

  public construct(_gL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo : GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabCoverageCovAWithAccessOrDisclosureOfConfidentialOrPersonalInformationExclCovBDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}