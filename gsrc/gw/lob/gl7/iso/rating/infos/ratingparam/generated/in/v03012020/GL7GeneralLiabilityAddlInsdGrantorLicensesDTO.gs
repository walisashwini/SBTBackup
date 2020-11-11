package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorLicensesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorLicensesDTO {

  public construct(_gL7AddlInsdGrantorLicenses : GL7AddlInsdGrantorLicenses, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdGrantorLicenses, parent )
    _addlInsdGrantorLicensesDetail = _gL7AddlInsdGrantorLicenses.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdGrantorLicensesDetailGroupingDTO(_gL7AddlInsdGrantorLicenses.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorLicensesDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdGrantorLicensesDetail() : GL7GeneralLiabilityAddlInsdGrantorLicensesDetailGroupingDTO {
   return _addlInsdGrantorLicensesDetail as GL7GeneralLiabilityAddlInsdGrantorLicensesDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}