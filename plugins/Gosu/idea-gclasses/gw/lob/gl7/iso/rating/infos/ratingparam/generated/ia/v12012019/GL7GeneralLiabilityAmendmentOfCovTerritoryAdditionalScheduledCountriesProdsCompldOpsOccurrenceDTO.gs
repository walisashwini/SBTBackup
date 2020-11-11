package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO {

  public construct(_gL7AmendmentOfCovTerritoryAdditionalScheduledCoun1 : GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryAdditionalScheduledCoun1, parent )
    _amendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetail = _gL7AmendmentOfCovTerritoryAdditionalScheduledCoun1.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailGroupingDTO(_gL7AmendmentOfCovTerritoryAdditionalScheduledCoun1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetail() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailGroupingDTO {
   return _amendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetail as GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}