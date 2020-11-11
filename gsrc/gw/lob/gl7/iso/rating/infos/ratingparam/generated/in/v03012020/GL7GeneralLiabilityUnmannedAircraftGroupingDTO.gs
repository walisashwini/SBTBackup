package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUnmannedAircraftGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUnmannedAircraftGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityUnmannedAircraftDTO> {

  public construct(_gL7UnmannedAircrafts : GL7UnmannedAircraft[], parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7UnmannedAircrafts, parent )
    _parent = parent
    _dataModel = _gL7UnmannedAircrafts
    _all = _gL7UnmannedAircrafts.map(\obj -> new GL7GeneralLiabilityUnmannedAircraftDTO(obj, parent)).toList().cast(GL7GeneralLiabilityUnmannedAircraftDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityUnmannedAircraftDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return _current as GL7GeneralLiabilityUnmannedAircraftDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityUnmannedAircraftDTO> {
   return _all as java.util.List<GL7GeneralLiabilityUnmannedAircraftDTO>
  }
  

  var _parent : GL7GeneralLiabilityClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent
  }
  

  
}