package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVendorsAutomaticStatusWhenRequiredInAgreementDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVendorsAutomaticStatusWhenRequiredInAgreementDTO {

  public construct(_gL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr : GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVendorsAutomaticStatusWhenRequiredInAgreementDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}