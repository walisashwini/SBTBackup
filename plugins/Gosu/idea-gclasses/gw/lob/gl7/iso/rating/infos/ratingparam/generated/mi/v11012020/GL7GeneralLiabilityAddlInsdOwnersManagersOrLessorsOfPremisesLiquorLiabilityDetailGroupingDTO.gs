package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO {
   return _parent
  }
  

  
}