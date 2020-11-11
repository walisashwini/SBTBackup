package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO {
   return _current as GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityDesignatedProjectsAggregateLimitDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedProjectsAggregateLimitDTO {
   return _parent
  }
  

  
}