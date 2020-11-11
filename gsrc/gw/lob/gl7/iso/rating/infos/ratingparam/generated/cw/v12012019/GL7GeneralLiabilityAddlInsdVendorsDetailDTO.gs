package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdVendorsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdVendorsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _additionalInsured = _gL7SublineTypeSchCovItem.getStringProperty("AdditionalInsured")
    _addressName = _gL7SublineTypeSchCovItem.getStringProperty("AddressName")
    _manualPremium = _gL7SublineTypeSchCovItem.getDecimalProperty("ManualPremium")
    _products = _gL7SublineTypeSchCovItem.getStringProperty("Products")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVendorsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _products : java.lang.String as Products = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _addressName : java.lang.String as AddressName = ""

  @VisibleInRateflow
  protected var _additionalInsured : java.lang.String as AdditionalInsured = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAddlInsdVendorsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdVendorsDTO {
   return _parent
  }
  

  
}