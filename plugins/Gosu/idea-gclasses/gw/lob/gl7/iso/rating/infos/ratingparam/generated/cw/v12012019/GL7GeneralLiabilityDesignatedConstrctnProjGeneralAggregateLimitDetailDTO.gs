package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _designatedConstructionProject = _gL7SublineTypeSchCovItem.getStringProperty("DesignatedConstructionProject")
    _manualPremium = _gL7SublineTypeSchCovItem.getDecimalProperty("ManualPremium")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _designatedConstructionProject : java.lang.String as DesignatedConstructionProject = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedConstrctnProjGeneralAggregateLimitDTO {
   return _parent
  }
  

  
}