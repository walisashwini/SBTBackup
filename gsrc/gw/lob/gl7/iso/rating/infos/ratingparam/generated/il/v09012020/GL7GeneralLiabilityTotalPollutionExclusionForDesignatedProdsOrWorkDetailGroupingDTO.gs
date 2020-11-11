package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO {
   return _current as GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO {
   return _parent
  }
  

  
}