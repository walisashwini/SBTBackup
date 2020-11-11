package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdAutomaticStatusForDesignatedOperationsDTO {
   return _parent
  }
  

  
}