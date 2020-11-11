package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO {

  public construct(_gL7TotalPollutionExclForDesignatedProdsOrWork : GL7TotalPollutionExclForDesignatedProdsOrWork, parent : GL7GeneralLiabilityDTO) {
    super( _gL7TotalPollutionExclForDesignatedProdsOrWork, parent )
    _totalPollutionExclusionForDesignatedProdsOrWorkDetail = _gL7TotalPollutionExclForDesignatedProdsOrWork.GL7ScheduledItems != null ? new GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailGroupingDTO(_gL7TotalPollutionExclForDesignatedProdsOrWork.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get TotalPollutionExclusionForDesignatedProdsOrWorkDetail() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailGroupingDTO {
   return _totalPollutionExclusionForDesignatedProdsOrWorkDetail as GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}