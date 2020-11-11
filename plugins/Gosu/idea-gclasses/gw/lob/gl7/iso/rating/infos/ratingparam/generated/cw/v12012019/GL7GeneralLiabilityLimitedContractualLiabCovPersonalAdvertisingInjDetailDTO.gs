package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItem
    _designatedContractOrAgreement = _gL7SublineTypeSchCondItem.getStringProperty("DesignatedContractOrAgreement")
    _displayName = _gL7SublineTypeSchCondItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _designatedContractOrAgreement : java.lang.String as DesignatedContractOrAgreement = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCondItem {
   return _dataModel as GL7SublineTypeSchCondItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO {
   return _parent
  }
  

  
}