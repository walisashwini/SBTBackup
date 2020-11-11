package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdProdsCompldOpsDTO {
   return _parent
  }
  

  
}