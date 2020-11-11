package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO {

  public construct(_gL7DesignatedLocationsProdsCompldOpsAggLimit : GL7DesignatedLocationsProdsCompldOpsAggLimit, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7DesignatedLocationsProdsCompldOpsAggLimit, parent )
    _designatedLocationsProdsCompldOpsAggregateLimitDetail = _gL7DesignatedLocationsProdsCompldOpsAggLimit.GL7ScheduledItems != null ? new GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailGroupingDTO(_gL7DesignatedLocationsProdsCompldOpsAggLimit.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get DesignatedLocationsProdsCompldOpsAggregateLimitDetail() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailGroupingDTO {
   return _designatedLocationsProdsCompldOpsAggregateLimitDetail as GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}