package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO> {

  public construct(_gL7LocationSchedExclItems : GL7LocationSchedExclItem[], parent : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO) {
    super( _gL7LocationSchedExclItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedExclItems
    _all = _gL7LocationSchedExclItems.map(\obj -> new GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO {
   return _current as GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {
   return _parent
  }
  

  
}