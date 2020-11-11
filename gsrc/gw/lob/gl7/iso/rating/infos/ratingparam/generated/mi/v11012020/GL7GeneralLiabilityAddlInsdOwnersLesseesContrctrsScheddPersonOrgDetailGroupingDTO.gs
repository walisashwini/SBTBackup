package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO {
   return _parent
  }
  

  
}