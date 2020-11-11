package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdStatePolitlSubdPermits : GL7AddlInsdStatePolitlSubdPermits, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdStatePolitlSubdPermits
    _displayName = _gL7AddlInsdStatePolitlSubdPermits.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdStatePolitlSubdPermitsDetail : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailGroupingDTO as readonly AddlInsdStatePolitlSubdPermitsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdStatePolitlSubdPermits {
   return _dataModel as GL7AddlInsdStatePolitlSubdPermits
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