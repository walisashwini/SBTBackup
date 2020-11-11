package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclAllHazardsInConnectionWithDesignatedPrem : GL7ExclAllHazardsInConnectionWithDesignatedPrem, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclAllHazardsInConnectionWithDesignatedPrem
    _description = _gL7ExclAllHazardsInConnectionWithDesignatedPrem.GL7Description7Term.Value
    _manualPremium = _gL7ExclAllHazardsInConnectionWithDesignatedPrem.GL7ManualPremium181Term.Value
    _displayName = _gL7ExclAllHazardsInConnectionWithDesignatedPrem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclAllHazardsInConnectionWithDesignatedPremDetail : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO as readonly ExclAllHazardsInConnectionWithDesignatedPremDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _description : java.lang.String as Description = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclAllHazardsInConnectionWithDesignatedPrem {
   return _dataModel as GL7ExclAllHazardsInConnectionWithDesignatedPrem
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