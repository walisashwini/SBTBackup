package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclInternetServicePrvdrsAndInternetAccessPrvdrsErrorsOmissionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclInternetServicePrvdrsAndInternetAccessPrvdrsErrorsOmissionsDTO {

  public construct(_gL7ExclInternetServicePrvdrsAndInternetAccessPrvdr : GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclInternetServicePrvdrsAndInternetAccessPrvdr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclInternetServicePrvdrsAndInternetAccessPrvdrsErrorsOmissionsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}