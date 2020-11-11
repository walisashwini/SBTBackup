package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO {

  public construct(_gL7ProflLiabExclSpasOrPersonalEnhancementFacilitie : GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProflLiabExclSpasOrPersonalEnhancementFacilitie, parent )
    _proflLiabExclSpasOrPersonalEnhancementFacilitiesDetail = _gL7ProflLiabExclSpasOrPersonalEnhancementFacilitie.GL7ScheduledItems != null ? new GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailGroupingDTO(_gL7ProflLiabExclSpasOrPersonalEnhancementFacilitie.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ProflLiabExclSpasOrPersonalEnhancementFacilitiesDetail() : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailGroupingDTO {
   return _proflLiabExclSpasOrPersonalEnhancementFacilitiesDetail as GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}