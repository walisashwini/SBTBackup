package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsWithExceptionForBIOnYourPremDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclY2KCompReltdOtherElectrProbWithExceptionFor : GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclY2KCompReltdOtherElectrProbWithExceptionFor
    _manualPremium = _gL7ExclY2KCompReltdOtherElectrProbWithExceptionFor.GL7ManualPremium90Term.Value
    _displayName = _gL7ExclY2KCompReltdOtherElectrProbWithExceptionFor.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsWithExceptionForBIOnYourPremDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor {
   return _dataModel as GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}