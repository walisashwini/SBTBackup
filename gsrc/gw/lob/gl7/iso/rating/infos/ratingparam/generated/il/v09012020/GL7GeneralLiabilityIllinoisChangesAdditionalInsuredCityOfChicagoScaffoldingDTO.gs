package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityIllinoisChangesAdditionalInsuredCityOfChicagoScaffoldingDTO extends gw.rating.LineModelObject {

  public construct(_gL7ILChangesAdditionalInsuredCityOfChicagoScaffold : GL7ILChangesAdditionalInsuredCityOfChicagoScaffold, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ILChangesAdditionalInsuredCityOfChicagoScaffold
    _manualPremium = (_cf.stateMatches(_gL7ILChangesAdditionalInsuredCityOfChicagoScaffold.OwningCoverable, Parameters)) ? _gL7ILChangesAdditionalInsuredCityOfChicagoScaffold.GL7ManualPremium197Term.Value : _manualPremium
    _displayName = (_cf.stateMatches(_gL7ILChangesAdditionalInsuredCityOfChicagoScaffold.OwningCoverable, Parameters)) ? _gL7ILChangesAdditionalInsuredCityOfChicagoScaffold.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityIllinoisChangesAdditionalInsuredCityOfChicagoScaffoldingDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ILChangesAdditionalInsuredCityOfChicagoScaffold {
   return _dataModel as GL7ILChangesAdditionalInsuredCityOfChicagoScaffold
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}