package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO {
   return _current as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return _parent
  }
  

  
}