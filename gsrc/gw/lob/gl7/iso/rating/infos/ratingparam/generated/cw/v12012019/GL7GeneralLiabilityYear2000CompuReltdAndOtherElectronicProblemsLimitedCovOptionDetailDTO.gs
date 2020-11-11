package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _bodilyInjuryCoverage = _gL7SublineTypeSchExclItem.getOptionProperty("BodilyInjuryCoverage")
    _descriptionOfLocOperationProdOrSrvcCovered = _gL7SublineTypeSchExclItem.getStringProperty("DescriptionOfLocOperationProdOrSrvcCovered")
    _manualPremium = _gL7SublineTypeSchExclItem.getDecimalProperty("ManualPremium")
    _personalAndAdvertisingInjuryCoverage = _gL7SublineTypeSchExclItem.getOptionProperty("PersonalAndAdvertisingInjuryCoverage")
    _propertyDamageCoverage = _gL7SublineTypeSchExclItem.getOptionProperty("PropertyDamageCoverage")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _propertyDamageCoverage : java.lang.String as PropertyDamageCoverage = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _personalAndAdvertisingInjuryCoverage : java.lang.String as PersonalAndAdvertisingInjuryCoverage = ""

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _descriptionOfLocOperationProdOrSrvcCovered : java.lang.String as DescriptionOfLocOperationProdOrSrvcCovered = ""

  @VisibleInRateflow
  protected var _bodilyInjuryCoverage : java.lang.String as BodilyInjuryCoverage = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO {
   return _parent
  }
  

  
}