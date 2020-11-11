package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDTO {

  public construct(_gL7AmendmentOfCovTerritoryAdditionalScheduledCount : GL7AmendmentOfCovTerritoryAdditionalScheduledCount, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryAdditionalScheduledCount, parent )
    _amendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetail = _gL7AmendmentOfCovTerritoryAdditionalScheduledCount.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailGroupingDTO(_gL7AmendmentOfCovTerritoryAdditionalScheduledCount.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetail() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailGroupingDTO {
   return _amendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetail as GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}