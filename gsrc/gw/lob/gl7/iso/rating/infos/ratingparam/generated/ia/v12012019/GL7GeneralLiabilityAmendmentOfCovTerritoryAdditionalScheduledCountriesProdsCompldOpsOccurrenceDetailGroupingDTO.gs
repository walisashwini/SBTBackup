package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO {
   return _current as GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfCovTerritoryAdditionalScheduledCountriesProdsCompldOpsOccurrenceDTO {
   return _parent
  }
  

  
}