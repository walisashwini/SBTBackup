package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {

  public construct(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr : GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr, parent )
    _exclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetail = _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailGroupingDTO(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetail() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailGroupingDTO {
   return _exclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetail as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}