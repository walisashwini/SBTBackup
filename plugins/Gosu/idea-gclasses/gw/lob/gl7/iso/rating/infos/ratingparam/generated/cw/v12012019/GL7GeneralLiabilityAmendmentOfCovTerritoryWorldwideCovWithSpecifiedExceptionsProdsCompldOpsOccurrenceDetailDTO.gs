package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _specifiedExceptedCountries = _gL7SublineTypeSchCovItem.getStringProperty("SpecifiedExceptedCountries")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _specifiedExceptedCountries : java.lang.String as SpecifiedExceptedCountries = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfCovTerritoryWorldwideCovWithSpecifiedExceptionsProdsCompldOpsOccurrenceDTO {
   return _parent
  }
  

  
}