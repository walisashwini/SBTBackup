package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO {

  public construct(_gL7DesignatedConstrctnProjGeneralAggLimit : GL7DesignatedConstrctnProjGeneralAggLimit, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DesignatedConstrctnProjGeneralAggLimit, parent )
    _designatedConstrctnProjGeneralAggregateLimitDetail = _gL7DesignatedConstrctnProjGeneralAggLimit.GL7ScheduledItems != null ? new GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailGroupingDTO(_gL7DesignatedConstrctnProjGeneralAggLimit.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get DesignatedConstrctnProjGeneralAggregateLimitDetail() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailGroupingDTO {
   return _designatedConstrctnProjGeneralAggregateLimitDetail as GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}