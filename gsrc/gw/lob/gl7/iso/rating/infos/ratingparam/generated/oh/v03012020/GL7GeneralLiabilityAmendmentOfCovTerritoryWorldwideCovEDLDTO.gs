package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovEDLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovEDLDTO {

  public construct(_gL7AmendmentOfCovTerritoryWorldwideCovEDL : GL7AmendmentOfCovTerritoryWorldwideCovEDL, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryWorldwideCovEDL, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovEDLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}