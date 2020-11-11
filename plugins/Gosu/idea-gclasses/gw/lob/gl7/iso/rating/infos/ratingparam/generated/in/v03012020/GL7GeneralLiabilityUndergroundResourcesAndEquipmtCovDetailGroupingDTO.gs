package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO {
   return _current as GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO {
   return _parent
  }
  

  
}