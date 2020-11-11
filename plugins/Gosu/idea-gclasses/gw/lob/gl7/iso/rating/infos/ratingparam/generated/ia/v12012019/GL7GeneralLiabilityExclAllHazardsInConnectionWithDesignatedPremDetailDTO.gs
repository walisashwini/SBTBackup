package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO {

  public construct(_gL7LocationSchedExclItem : GL7LocationSchedExclItem, parent : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO) {
    super( _gL7LocationSchedExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {
   return _parent as GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO
  }
  

  
}