package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO {
   return _current as GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO {
   return _parent
  }
  

  
}