package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO {

  public construct(_gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns : GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns, parent )
    _limitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetail = _gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailGroupingDTO(_gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetail() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailGroupingDTO {
   return _limitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetail as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}