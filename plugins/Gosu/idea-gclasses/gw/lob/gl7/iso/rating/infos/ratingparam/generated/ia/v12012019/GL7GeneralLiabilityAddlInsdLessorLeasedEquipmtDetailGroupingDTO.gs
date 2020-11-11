package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO {
   return _parent
  }
  

  
}