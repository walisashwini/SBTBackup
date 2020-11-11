package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO {
   return _current as GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO {
   return _parent
  }
  

  
}