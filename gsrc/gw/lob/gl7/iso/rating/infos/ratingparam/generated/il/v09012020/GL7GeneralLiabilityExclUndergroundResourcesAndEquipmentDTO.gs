package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO {

  public construct(_gL7ExclUndergroundResourcesAndEquip : GL7ExclUndergroundResourcesAndEquip, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclUndergroundResourcesAndEquip, parent )
    _exclUndergroundResourcesAndEquipmentDetail = _gL7ExclUndergroundResourcesAndEquip.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailGroupingDTO(_gL7ExclUndergroundResourcesAndEquip.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclUndergroundResourcesAndEquipmentDetail() : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailGroupingDTO {
   return _exclUndergroundResourcesAndEquipmentDetail as GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}