package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO {
   return _parent
  }
  

  
}