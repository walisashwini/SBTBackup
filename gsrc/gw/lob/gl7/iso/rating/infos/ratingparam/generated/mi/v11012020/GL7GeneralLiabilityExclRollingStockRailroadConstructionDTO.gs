package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclRollingStockRailroadConstructionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclRollingStockRailroadConstructionDTO {

  public construct(_gL7ExclRollingStockRailroadConstruction : GL7ExclRollingStockRailroadConstruction, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclRollingStockRailroadConstruction, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclRollingStockRailroadConstructionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}