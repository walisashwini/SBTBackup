package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdConcessionairesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdConcessionairesDTO {

  public construct(_gL7AddlInsdConcessionaires : GL7AddlInsdConcessionaires, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdConcessionaires, parent )
    _addlInsdConcessionairesDetail = _gL7AddlInsdConcessionaires.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdConcessionairesDetailGroupingDTO(_gL7AddlInsdConcessionaires.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdConcessionairesDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdConcessionairesDetail() : GL7GeneralLiabilityAddlInsdConcessionairesDetailGroupingDTO {
   return _addlInsdConcessionairesDetail as GL7GeneralLiabilityAddlInsdConcessionairesDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}