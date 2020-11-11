package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO
  }
  

  
}