package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO {
   return _current as GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclUndergroundResourcesAndEquipmentDTO {
   return _parent
  }
  

  
}