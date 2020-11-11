package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {
   return _parent
  }
  

  
}