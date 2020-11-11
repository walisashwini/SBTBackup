package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO extends gw.rating.LineModelObject {

  public construct(_gL7DesignatedLocLiquorAggLimit : GL7DesignatedLocLiquorAggLimit, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7DesignatedLocLiquorAggLimit
    _designatedLocation = _gL7DesignatedLocLiquorAggLimit.GL7DesignatedLocationTerm.Value
    _manualPremium = _gL7DesignatedLocLiquorAggLimit.GL7ManualPremium180Term.Value
    _displayName = _gL7DesignatedLocLiquorAggLimit.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _designatedLocation : java.lang.String as DesignatedLocation = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DesignatedLocLiquorAggLimit {
   return _dataModel as GL7DesignatedLocLiquorAggLimit
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}