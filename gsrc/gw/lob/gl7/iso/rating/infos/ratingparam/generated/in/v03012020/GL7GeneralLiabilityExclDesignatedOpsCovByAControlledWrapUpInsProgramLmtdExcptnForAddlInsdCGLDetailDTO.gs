package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return _parent as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO
  }
  

  
}