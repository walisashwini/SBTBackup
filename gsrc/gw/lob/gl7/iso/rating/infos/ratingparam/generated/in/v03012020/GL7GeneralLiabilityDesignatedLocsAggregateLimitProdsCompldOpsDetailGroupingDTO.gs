package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO {
   return _parent
  }
  

  
}