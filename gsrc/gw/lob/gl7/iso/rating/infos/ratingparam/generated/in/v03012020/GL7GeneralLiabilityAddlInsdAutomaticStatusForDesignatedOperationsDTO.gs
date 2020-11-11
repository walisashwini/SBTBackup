package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDTO {

  public construct(_gL7AddlInsdAutomaticStatusForDesignatedOps : GL7AddlInsdAutomaticStatusForDesignatedOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdAutomaticStatusForDesignatedOps, parent )
    _addlInsdAutomaticStatusForDesignatedOperationsDetail = _gL7AddlInsdAutomaticStatusForDesignatedOps.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailGroupingDTO(_gL7AddlInsdAutomaticStatusForDesignatedOps.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdAutomaticStatusForDesignatedOperationsDetail() : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailGroupingDTO {
   return _addlInsdAutomaticStatusForDesignatedOperationsDetail as GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}