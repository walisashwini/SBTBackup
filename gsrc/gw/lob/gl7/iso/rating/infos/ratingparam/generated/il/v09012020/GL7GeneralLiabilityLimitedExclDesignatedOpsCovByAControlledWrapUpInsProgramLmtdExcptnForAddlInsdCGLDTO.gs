package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {

  public construct(_gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP : GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP, parent )
    _limitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetail = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailGroupingDTO(_gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetail() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailGroupingDTO {
   return _limitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetail as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}