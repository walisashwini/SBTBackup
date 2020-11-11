package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO {
   return _current as GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO {
   return _parent
  }
  

  
}