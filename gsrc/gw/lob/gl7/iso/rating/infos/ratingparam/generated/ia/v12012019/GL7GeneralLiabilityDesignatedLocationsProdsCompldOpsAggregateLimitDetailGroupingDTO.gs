package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO {
   return _current as GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO {
   return _parent
  }
  

  
}