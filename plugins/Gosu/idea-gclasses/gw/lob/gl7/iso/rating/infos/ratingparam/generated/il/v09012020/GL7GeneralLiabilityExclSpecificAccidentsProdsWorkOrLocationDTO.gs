package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO {

  public construct(_gL7ExclSpecificAccidentsProdsWorkOrLocation : GL7ExclSpecificAccidentsProdsWorkOrLocation, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclSpecificAccidentsProdsWorkOrLocation, parent )
    _exclSpecificAccidentsProdsWorkOrLocationDetail = _gL7ExclSpecificAccidentsProdsWorkOrLocation.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailGroupingDTO(_gL7ExclSpecificAccidentsProdsWorkOrLocation.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclSpecificAccidentsProdsWorkOrLocationDetail() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailGroupingDTO {
   return _exclSpecificAccidentsProdsWorkOrLocationDetail as GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}