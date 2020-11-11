package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedProjectsAggregateLimitDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedProjectsAggregateLimitDTO {

  public construct(_gL7DesignatedProjectsAggLimit : GL7DesignatedProjectsAggLimit, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DesignatedProjectsAggLimit, parent )
    _designatedProjectsAggregateLimitDetail = _gL7DesignatedProjectsAggLimit.GL7ScheduledItems != null ? new GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailGroupingDTO(_gL7DesignatedProjectsAggLimit.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get DesignatedProjectsAggregateLimitDetail() : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailGroupingDTO {
   return _designatedProjectsAggregateLimitDetail as GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}