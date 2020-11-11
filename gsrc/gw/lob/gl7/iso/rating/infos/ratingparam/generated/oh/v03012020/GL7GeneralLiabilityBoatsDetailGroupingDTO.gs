package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityBoatsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityBoatsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityBoatsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityBoatsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityBoatsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityBoatsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityBoatsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityBoatsDetailDTO {
   return _current as GL7GeneralLiabilityBoatsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityBoatsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityBoatsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityBoatsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityBoatsDTO {
   return _parent
  }
  

  
}