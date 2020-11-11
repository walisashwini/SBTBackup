package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOpsCovByConsolidatedWrapUpInsProgramPolLvlDTO {
   return _parent
  }
  

  
}