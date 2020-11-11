package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorOfLicensesAutomaticStatusReqdLicensorDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorOfLicensesAutomaticStatusReqdLicensorDTO {

  public construct(_gL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic : GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorOfLicensesAutomaticStatusReqdLicensorDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}