package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOngoingOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOngoingOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO {
   return _parent
  }
  

  
}