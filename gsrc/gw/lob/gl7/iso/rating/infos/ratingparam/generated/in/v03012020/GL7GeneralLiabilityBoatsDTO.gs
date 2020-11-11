package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityBoatsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityBoatsDTO {

  public construct(_gL7Boats : GL7Boats, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Boats, parent )
    _boatsDetail = _gL7Boats.GL7ScheduledItems != null ? new GL7GeneralLiabilityBoatsDetailGroupingDTO(_gL7Boats.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityBoatsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get BoatsDetail() : GL7GeneralLiabilityBoatsDetailGroupingDTO {
   return _boatsDetail as GL7GeneralLiabilityBoatsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}