package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO {
   return _current as GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO {
   return _parent
  }
  

  
}