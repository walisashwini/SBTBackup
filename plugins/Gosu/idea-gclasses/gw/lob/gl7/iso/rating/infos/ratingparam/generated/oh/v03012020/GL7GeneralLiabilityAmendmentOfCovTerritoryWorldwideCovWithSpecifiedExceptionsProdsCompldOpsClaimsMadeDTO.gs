package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDTO {

  public construct(_gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1 : GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1, parent )
    _amendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDetail = _gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDetailGroupingDTO(_gL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDetail() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDetailGroupingDTO {
   return _amendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDetail as GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsClaimsMadeDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}