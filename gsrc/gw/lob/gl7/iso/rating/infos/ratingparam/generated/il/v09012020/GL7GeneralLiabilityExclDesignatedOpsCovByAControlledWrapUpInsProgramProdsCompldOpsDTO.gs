package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {

  public construct(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2 : GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2, parent )
    _exclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail = _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO {
   return _exclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}