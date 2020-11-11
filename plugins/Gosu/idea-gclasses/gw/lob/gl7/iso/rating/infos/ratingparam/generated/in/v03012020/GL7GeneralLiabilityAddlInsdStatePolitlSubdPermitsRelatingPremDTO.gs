package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO {

  public construct(_gL7AddlInsdStatePolitlSubdPermitsRelatingPrem : GL7AddlInsdStatePolitlSubdPermitsRelatingPrem, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdStatePolitlSubdPermitsRelatingPrem, parent )
    _addlInsdStatePolitlSubdPermitsRelatingPremDetail = _gL7AddlInsdStatePolitlSubdPermitsRelatingPrem.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailGroupingDTO(_gL7AddlInsdStatePolitlSubdPermitsRelatingPrem.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdStatePolitlSubdPermitsRelatingPremDetail() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailGroupingDTO {
   return _addlInsdStatePolitlSubdPermitsRelatingPremDetail as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}