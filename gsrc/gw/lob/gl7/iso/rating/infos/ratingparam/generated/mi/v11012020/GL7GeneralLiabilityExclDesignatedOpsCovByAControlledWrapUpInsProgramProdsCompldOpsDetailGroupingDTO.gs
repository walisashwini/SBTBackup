package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return _parent
  }
  

  
}