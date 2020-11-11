package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO {
   return _current as GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrsDTO {
   return _parent
  }
  

  
}