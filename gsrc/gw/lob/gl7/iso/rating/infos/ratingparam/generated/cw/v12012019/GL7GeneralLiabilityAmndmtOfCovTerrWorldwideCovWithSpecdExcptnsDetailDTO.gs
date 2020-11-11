package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItem
    _specifiedExceptedCountries = _gL7SublineTypeSchCondItem.getStringProperty("SpecifiedExceptedCountries")
    _displayName = _gL7SublineTypeSchCondItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _specifiedExceptedCountries : java.lang.String as SpecifiedExceptedCountries = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCondItem {
   return _dataModel as GL7SublineTypeSchCondItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfCovTerrWorldwideCovWithSpecdExcptnsDTO {
   return _parent
  }
  

  
}