package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO {
   return _current as GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedProjectsProdsCompldOpsAggregateLimitDTO {
   return _parent
  }
  

  
}