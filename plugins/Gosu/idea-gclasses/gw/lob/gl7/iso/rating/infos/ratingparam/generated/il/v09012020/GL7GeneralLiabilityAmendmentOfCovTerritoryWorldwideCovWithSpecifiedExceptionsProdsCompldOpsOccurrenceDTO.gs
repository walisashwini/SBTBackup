package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDTO {

  public construct(_gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2 : GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2, parent )
    _amendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetail = _gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetailGroupingDTO(_gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetail() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetailGroupingDTO {
   return _amendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetail as GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}