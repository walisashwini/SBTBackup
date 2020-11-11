package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO
  }
  

  
}