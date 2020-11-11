package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO {
   return _current as GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO {
   return _parent
  }
  

  
}