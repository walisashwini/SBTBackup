package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOngoingOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOngoingOpsDTO {

  public construct(_gL7ExclDesignatedOngoingOps : GL7ExclDesignatedOngoingOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedOngoingOps, parent )
    _exclDesignatedOngoingOpsDetail = _gL7ExclDesignatedOngoingOps.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedOngoingOpsDetailGroupingDTO(_gL7ExclDesignatedOngoingOps.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedOngoingOpsDetail() : GL7GeneralLiabilityExclDesignatedOngoingOpsDetailGroupingDTO {
   return _exclDesignatedOngoingOpsDetail as GL7GeneralLiabilityExclDesignatedOngoingOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}