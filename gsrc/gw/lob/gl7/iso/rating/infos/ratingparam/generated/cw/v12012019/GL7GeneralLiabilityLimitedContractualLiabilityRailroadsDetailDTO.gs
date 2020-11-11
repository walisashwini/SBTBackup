package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _designatedJobSite = _gL7SublineTypeSchCovItem.getStringProperty("DesignatedJobSite")
    _scheduledRailroad = _gL7SublineTypeSchCovItem.getStringProperty("ScheduledRailroad")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _scheduledRailroad : java.lang.String as ScheduledRailroad = ""

  @VisibleInRateflow
  protected var _designatedJobSite : java.lang.String as DesignatedJobSite = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO {
   return _parent
  }
  

  
}