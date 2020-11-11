package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityClassificationDTO> {

  public construct(_gL7Exposures : GL7Exposure[], parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7Exposures, parent )
    _parent = parent
    _dataModel = _gL7Exposures
    _all = _gL7Exposures.map(\obj -> new GL7GeneralLiabilityClassificationDTO(obj, parent)).toList().cast(GL7GeneralLiabilityClassificationDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityClassificationDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityClassificationDTO {
   return _current as GL7GeneralLiabilityClassificationDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityClassificationDTO> {
   return _all as java.util.List<GL7GeneralLiabilityClassificationDTO>
  }
  

  var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}