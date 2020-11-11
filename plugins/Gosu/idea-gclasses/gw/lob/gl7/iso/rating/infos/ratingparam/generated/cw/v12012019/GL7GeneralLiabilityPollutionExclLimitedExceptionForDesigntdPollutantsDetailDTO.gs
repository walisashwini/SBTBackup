package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _designatedPollutant = _gL7SublineTypeSchExclItem.getStringProperty("DesignatedPollutant")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _designatedPollutant : java.lang.String as DesignatedPollutant = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPollutionExclLimitedExceptionForDesigntdPollutantsDTO {
   return _parent
  }
  

  
}