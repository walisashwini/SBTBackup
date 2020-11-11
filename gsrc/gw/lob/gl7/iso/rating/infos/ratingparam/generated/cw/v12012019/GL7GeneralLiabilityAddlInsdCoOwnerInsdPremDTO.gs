package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdCoOwnerInsdPrem : GL7AddlInsdCoOwnerInsdPrem, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdCoOwnerInsdPrem
    _displayName = _gL7AddlInsdCoOwnerInsdPrem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdCoOwnerInsdPremDetail : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailGroupingDTO as readonly AddlInsdCoOwnerInsdPremDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdCoOwnerInsdPrem {
   return _dataModel as GL7AddlInsdCoOwnerInsdPrem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}