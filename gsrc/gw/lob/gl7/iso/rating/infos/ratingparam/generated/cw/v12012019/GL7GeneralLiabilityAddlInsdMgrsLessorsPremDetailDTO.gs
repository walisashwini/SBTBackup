package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedCovItem
    _designationOfPremises = _gL7LocationSchedCovItem.getStringProperty("DesignationOfPremises")
    _manualPremium = _gL7LocationSchedCovItem.getDecimalProperty("ManualPremium")
    _displayName = _gL7LocationSchedCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _nameID : java.lang.String as NameID = ""

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _designationOfPremises : java.lang.String as DesignationOfPremises = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedCovItem {
   return _dataModel as GL7LocationSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {
   return _parent
  }
  

  
}