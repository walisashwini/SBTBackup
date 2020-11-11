package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovProdsCompldOpsOccurrenceDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovProdsCompldOpsOccurrenceDTO {

  public construct(_gL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1 : GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovProdsCompldOpsOccurrenceDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}