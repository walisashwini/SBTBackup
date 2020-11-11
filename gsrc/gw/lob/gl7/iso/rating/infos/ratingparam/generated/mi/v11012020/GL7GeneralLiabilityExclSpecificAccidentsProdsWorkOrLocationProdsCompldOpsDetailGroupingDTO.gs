package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationProdsCompldOpsDTO {
   return _parent
  }
  

  
}