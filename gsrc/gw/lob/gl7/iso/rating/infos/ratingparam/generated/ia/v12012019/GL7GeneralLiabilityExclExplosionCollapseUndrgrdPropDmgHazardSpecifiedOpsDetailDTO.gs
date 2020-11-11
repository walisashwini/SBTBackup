package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetailDTO {

  public construct(_gL7LocationSchedExclItem : GL7LocationSchedExclItem, parent : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO) {
    super( _gL7LocationSchedExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO {
   return _parent as GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO
  }
  

  
}