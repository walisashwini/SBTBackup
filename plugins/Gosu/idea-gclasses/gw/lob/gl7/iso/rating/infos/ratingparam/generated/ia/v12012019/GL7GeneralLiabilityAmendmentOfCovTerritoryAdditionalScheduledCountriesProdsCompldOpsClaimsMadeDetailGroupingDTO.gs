package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO {
   return _current as GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsClaimsMadeDTO {
   return _parent
  }
  

  
}