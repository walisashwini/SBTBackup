package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityCalculationOfPremiumProductWithdrawalDTO extends gw.rating.LineModelObject {

  public construct(_gL7CalculationOfPremiumProductWithdrawal : GL7CalculationOfPremiumProductWithdrawal, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7CalculationOfPremiumProductWithdrawal
    _displayName = _gL7CalculationOfPremiumProductWithdrawal.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCalculationOfPremiumProductWithdrawalDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7CalculationOfPremiumProductWithdrawal {
   return _dataModel as GL7CalculationOfPremiumProductWithdrawal
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