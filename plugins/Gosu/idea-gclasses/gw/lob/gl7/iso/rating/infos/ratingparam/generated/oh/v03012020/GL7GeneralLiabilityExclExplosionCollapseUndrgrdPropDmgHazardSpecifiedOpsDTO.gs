package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO {

  public construct(_gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif : GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif, parent )
    _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetail = _gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetailGroupingDTO(_gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetail() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetailGroupingDTO {
   return _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetail as GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}