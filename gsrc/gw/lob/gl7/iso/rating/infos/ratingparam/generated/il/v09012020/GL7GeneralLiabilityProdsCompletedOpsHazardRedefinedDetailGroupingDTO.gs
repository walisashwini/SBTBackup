package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO {
   return _current as GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO {
   return _parent
  }
  

  
}