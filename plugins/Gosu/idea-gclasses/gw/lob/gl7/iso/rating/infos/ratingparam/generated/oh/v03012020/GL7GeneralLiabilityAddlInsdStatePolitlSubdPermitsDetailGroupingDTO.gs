package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO {
   return _parent
  }
  

  
}