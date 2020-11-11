package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDTO {

  public construct(_gL7DesignatedProjectsProdsCompldOpsAggLimit : GL7DesignatedProjectsProdsCompldOpsAggLimit, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DesignatedProjectsProdsCompldOpsAggLimit, parent )
    _designatedProjectsProdsCompldOpsAggregateLimitDetail = _gL7DesignatedProjectsProdsCompldOpsAggLimit.GL7ScheduledItems != null ? new GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailGroupingDTO(_gL7DesignatedProjectsProdsCompldOpsAggLimit.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get DesignatedProjectsProdsCompldOpsAggregateLimitDetail() : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailGroupingDTO {
   return _designatedProjectsProdsCompldOpsAggregateLimitDetail as GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}