package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLocationGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLocationGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLocationDTO> {

  public construct(_gL7Locations : GL7Location[], parent : GL7GeneralLiabilityDTO) {
    super( _gL7Locations, parent )
    _parent = parent
    _dataModel = _gL7Locations
    _all = _gL7Locations.map(\obj -> new GL7GeneralLiabilityLocationDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLocationDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLocationDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLocationDTO {
   return _current as GL7GeneralLiabilityLocationDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLocationDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLocationDTO>
  }
  

  var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}