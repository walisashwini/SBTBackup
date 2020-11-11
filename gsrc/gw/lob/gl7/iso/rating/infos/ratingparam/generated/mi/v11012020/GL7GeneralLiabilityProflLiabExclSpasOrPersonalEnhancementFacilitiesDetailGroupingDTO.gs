package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO {
   return _current as GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO {
   return _parent
  }
  

  
}