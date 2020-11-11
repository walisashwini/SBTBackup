package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return _parent as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO
  }
  

  
}