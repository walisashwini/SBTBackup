package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclUndergroundResourcesAndEquip : GL7ExclUndergroundResourcesAndEquip, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclUndergroundResourcesAndEquip
    _displayName = _gL7ExclUndergroundResourcesAndEquip.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclUndergroundResourcesAndEquipmentDetail : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailGroupingDTO as readonly ExclUndergroundResourcesAndEquipmentDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclUndergroundResourcesAndEquip {
   return _dataModel as GL7ExclUndergroundResourcesAndEquip
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}