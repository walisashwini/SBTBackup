package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO {
   return _parent as GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO
  }
  

  
}