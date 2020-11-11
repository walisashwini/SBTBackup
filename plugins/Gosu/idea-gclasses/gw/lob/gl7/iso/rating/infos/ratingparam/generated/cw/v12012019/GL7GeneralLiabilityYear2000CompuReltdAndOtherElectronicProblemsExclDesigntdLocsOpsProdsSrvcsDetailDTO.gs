package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _bodilyInjuryExcluded = _gL7SublineTypeSchExclItem.getOptionProperty("BodilyInjuryExcluded")
    _description = _gL7SublineTypeSchExclItem.getStringProperty("Description")
    _personalAndAdvertisingInjuryExcluded = _gL7SublineTypeSchExclItem.getOptionProperty("PersonalAndAdvertisingInjuryExcluded")
    _propertyDamageExcluded = _gL7SublineTypeSchExclItem.getOptionProperty("PropertyDamageExcluded")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _propertyDamageExcluded : java.lang.String as PropertyDamageExcluded = ""

  @VisibleInRateflow
  protected var _personalAndAdvertisingInjuryExcluded : java.lang.String as PersonalAndAdvertisingInjuryExcluded = ""

  @VisibleInRateflow
  protected var _description : java.lang.String as Description = ""

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
  

  protected var _parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO {
   return _parent
  }
  

  
}