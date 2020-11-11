package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO {
   return _parent as GL7GeneralLiabilityProflLiabExclSpasOrPersonalEnhancementFacilitiesDTO
  }
  

  
}