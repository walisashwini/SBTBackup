package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDTO {

  public construct(_gL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg : GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg, parent )
    _exclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetail = _gL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailGroupingDTO(_gL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetail() : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailGroupingDTO {
   return _exclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetail as GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}