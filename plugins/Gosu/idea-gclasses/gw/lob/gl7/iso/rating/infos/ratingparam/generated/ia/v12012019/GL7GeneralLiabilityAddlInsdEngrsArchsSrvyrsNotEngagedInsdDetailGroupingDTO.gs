package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdEngrsArchsSrvyrsNotEngagedInsdDTO {
   return _parent
  }
  

  
}