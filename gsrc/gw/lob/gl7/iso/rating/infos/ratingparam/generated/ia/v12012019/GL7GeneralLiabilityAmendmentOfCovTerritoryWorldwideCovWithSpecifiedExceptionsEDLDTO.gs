package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDTO {

  public construct(_gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie : GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie, parent )
    _amendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDetail = _gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDetailGroupingDTO(_gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDetail() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDetailGroupingDTO {
   return _amendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDetail as GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsEDLDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}