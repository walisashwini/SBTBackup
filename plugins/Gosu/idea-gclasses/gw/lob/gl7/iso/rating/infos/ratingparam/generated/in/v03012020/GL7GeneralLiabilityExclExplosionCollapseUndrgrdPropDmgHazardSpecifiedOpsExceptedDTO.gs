package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO {

  public construct(_gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1 : GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1, parent )
    _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetail = _gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetailGroupingDTO(_gL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetail() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetailGroupingDTO {
   return _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetail as GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}