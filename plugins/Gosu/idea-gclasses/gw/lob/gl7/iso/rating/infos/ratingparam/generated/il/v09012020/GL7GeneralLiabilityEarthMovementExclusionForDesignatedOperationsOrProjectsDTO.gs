package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO {

  public construct(_gL7EarthMovementExclForDesignatedOpsOrProjects : GL7EarthMovementExclForDesignatedOpsOrProjects, parent : GL7GeneralLiabilityDTO) {
    super( _gL7EarthMovementExclForDesignatedOpsOrProjects, parent )
    _earthMovementExclusionForDesignatedOperationsOrProjectsDetail = _gL7EarthMovementExclForDesignatedOpsOrProjects.GL7ScheduledItems != null ? new GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailGroupingDTO(_gL7EarthMovementExclForDesignatedOpsOrProjects.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get EarthMovementExclusionForDesignatedOperationsOrProjectsDetail() : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailGroupingDTO {
   return _earthMovementExclusionForDesignatedOperationsOrProjectsDetail as GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}