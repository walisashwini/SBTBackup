package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclExistenceOrMaintenanceOfStreetsRdsHwysOrBridgesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclExistenceOrMaintenanceOfStreetsRdsHwysOrBridgesDTO {

  public construct(_gL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri : GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclExistenceOrMaintenanceOfStreetsRdsHwysOrBridgesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}