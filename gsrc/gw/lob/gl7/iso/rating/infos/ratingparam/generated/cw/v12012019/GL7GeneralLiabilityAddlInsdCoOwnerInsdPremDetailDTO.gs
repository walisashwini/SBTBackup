package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedCovItem
    _locationOfPremises = _gL7LocationSchedCovItem.getStringProperty("LocationOfPremises")
    _displayName = _gL7LocationSchedCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _nameID : java.lang.String as NameID = ""

  @VisibleInRateflow
  protected var _locationOfPremises : java.lang.String as LocationOfPremises = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedCovItem {
   return _dataModel as GL7LocationSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {
   return _parent
  }
  

  
}