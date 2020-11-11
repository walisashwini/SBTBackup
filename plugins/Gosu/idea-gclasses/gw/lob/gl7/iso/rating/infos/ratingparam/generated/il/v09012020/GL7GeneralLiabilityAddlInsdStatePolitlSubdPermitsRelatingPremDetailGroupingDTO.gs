package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO {
   return _parent
  }
  

  
}