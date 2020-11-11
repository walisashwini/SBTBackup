package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return _parent
  }
  

  
}