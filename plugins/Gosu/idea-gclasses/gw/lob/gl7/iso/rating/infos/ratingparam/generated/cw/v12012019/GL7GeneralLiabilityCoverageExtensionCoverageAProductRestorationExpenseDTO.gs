package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityCoverageExtensionCoverageAProductRestorationExpenseDTO extends gw.rating.LineModelObject {

  public construct(_gL7CovExtensionCovAProductRestorationExpense : GL7CovExtensionCovAProductRestorationExpense, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7CovExtensionCovAProductRestorationExpense
    _eachWithdrawalLimit2 = _cf.makeIntegerFrom (_gL7CovExtensionCovAProductRestorationExpense.GL7EachWithdrawalLimit2Term.Value)
    _manualPremium = _gL7CovExtensionCovAProductRestorationExpense.GL7ManualPremium39Term.Value
    _displayName = _gL7CovExtensionCovAProductRestorationExpense.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCoverageExtensionCoverageAProductRestorationExpenseDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _eachWithdrawalLimit2 : java.lang.Integer as EachWithdrawalLimit2 = 0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7CovExtensionCovAProductRestorationExpense {
   return _dataModel as GL7CovExtensionCovAProductRestorationExpense
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