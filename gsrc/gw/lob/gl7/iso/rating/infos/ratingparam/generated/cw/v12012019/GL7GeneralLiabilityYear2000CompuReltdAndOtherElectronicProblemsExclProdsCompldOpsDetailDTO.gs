package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _bodilyInjuryExcluded = _gL7SublineTypeSchExclItem.getOptionProperty("BodilyInjuryExcluded")
    _excludedProductsOrCompletedOps = _gL7SublineTypeSchExclItem.getStringProperty("ExcludedProductsOrCompletedOps")
    _propertyDamageExcluded = _gL7SublineTypeSchExclItem.getOptionProperty("PropertyDamageExcluded")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _propertyDamageExcluded : java.lang.String as PropertyDamageExcluded = ""

  @VisibleInRateflow
  protected var _excludedProductsOrCompletedOps : java.lang.String as ExcludedProductsOrCompletedOps = ""

  @VisibleInRateflow
  protected var _bodilyInjuryExcluded : java.lang.String as BodilyInjuryExcluded = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO {
   return _parent
  }
  

  
}