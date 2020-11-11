package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {

  public construct(_gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2 : GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2, parent )
    _limitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO(_gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO {
   return _limitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}