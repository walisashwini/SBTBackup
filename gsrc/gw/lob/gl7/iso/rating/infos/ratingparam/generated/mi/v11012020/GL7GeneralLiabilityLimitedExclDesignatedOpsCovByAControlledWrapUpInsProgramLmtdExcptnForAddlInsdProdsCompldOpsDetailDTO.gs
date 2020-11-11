package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO
  }
  

  
}