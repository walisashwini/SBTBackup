package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityContractualLiabRailroadsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityContractualLiabRailroadsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _designatedJobSite = _gL7SublineTypeSchCovItem.getStringProperty("DesignatedJobSite")
    _railroad = _gL7SublineTypeSchCovItem.getStringProperty("Railroad")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityContractualLiabRailroadsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _railroad : java.lang.String as Railroad = ""

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
  

  protected var _parent : GL7GeneralLiabilityContractualLiabRailroadsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityContractualLiabRailroadsDTO {
   return _parent
  }
  

  
}