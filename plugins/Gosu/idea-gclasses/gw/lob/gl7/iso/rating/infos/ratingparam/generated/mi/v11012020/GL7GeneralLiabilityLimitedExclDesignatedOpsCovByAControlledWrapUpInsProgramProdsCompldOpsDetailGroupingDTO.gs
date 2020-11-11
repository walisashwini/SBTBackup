package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return _parent
  }
  

  
}