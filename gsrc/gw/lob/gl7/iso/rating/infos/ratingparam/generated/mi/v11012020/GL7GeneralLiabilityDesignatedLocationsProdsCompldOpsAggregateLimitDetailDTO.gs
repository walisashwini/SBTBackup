package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO {
   return _parent as GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO
  }
  

  
}