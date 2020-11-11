package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {

  public construct(_gL7ExclAllHazardsInConnectionWithDesignatedPrem : GL7ExclAllHazardsInConnectionWithDesignatedPrem, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7ExclAllHazardsInConnectionWithDesignatedPrem, parent )
    _exclAllHazardsInConnectionWithDesignatedPremDetail = _gL7ExclAllHazardsInConnectionWithDesignatedPrem.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO(_gL7ExclAllHazardsInConnectionWithDesignatedPrem.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclAllHazardsInConnectionWithDesignatedPremDetail() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO {
   return _exclAllHazardsInConnectionWithDesignatedPremDetail as GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}