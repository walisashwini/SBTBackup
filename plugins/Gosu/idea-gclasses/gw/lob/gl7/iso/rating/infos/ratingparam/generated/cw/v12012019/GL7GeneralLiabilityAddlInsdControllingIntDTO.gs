package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdControllingIntDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdControllingInt : GL7AddlInsdControllingInt, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdControllingInt
    _displayName = _gL7AddlInsdControllingInt.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdControllingIntDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdControllingIntDetail : GL7GeneralLiabilityAddlInsdControllingIntDetailGroupingDTO as readonly AddlInsdControllingIntDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdControllingInt {
   return _dataModel as GL7AddlInsdControllingInt
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}