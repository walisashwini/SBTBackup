package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO {

  public construct(_gL7DesignatedLocsAggLimitProdsCompldOps : GL7DesignatedLocsAggLimitProdsCompldOps, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7DesignatedLocsAggLimitProdsCompldOps, parent )
    _designatedLocsAggregateLimitProdsCompldOpsDetail = _gL7DesignatedLocsAggLimitProdsCompldOps.GL7ScheduledItems != null ? new GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailGroupingDTO(_gL7DesignatedLocsAggLimitProdsCompldOps.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get DesignatedLocsAggregateLimitProdsCompldOpsDetail() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailGroupingDTO {
   return _designatedLocsAggregateLimitProdsCompldOpsDetail as GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}