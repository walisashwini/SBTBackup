package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _designatedProductOrDescriptionOfWork = _gL7SublineTypeSchExclItem.getStringProperty("DesignatedProductOrDescriptionOfWork")
    _manualPremium = _gL7SublineTypeSchExclItem.getDecimalProperty("ManualPremium")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _designatedProductOrDescriptionOfWork : java.lang.String as DesignatedProductOrDescriptionOfWork = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO {
   return _parent
  }
  

  
}