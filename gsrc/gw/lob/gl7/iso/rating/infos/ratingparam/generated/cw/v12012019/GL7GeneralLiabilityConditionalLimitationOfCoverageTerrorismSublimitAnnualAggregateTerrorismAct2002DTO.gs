package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002DTO extends gw.rating.LineModelObject {

  public construct(_gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct : GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct
    _aggregateLimit = _gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct.GL7AggLimit2Term.OptionValue.DisplayName
    _manualPremium = _gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct.GL7ManualPremium33Term.Value
    _displayName = _gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002DTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _aggregateLimit : java.lang.String as AggregateLimit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct {
   return _dataModel as GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct
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