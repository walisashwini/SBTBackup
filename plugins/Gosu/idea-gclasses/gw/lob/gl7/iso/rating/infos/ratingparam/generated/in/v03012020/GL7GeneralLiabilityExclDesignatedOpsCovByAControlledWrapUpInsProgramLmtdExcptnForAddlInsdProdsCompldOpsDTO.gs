package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO {

  public construct(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1 : GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1, parent )
    _exclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetail = _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailGroupingDTO(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetail() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailGroupingDTO {
   return _exclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetail as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}