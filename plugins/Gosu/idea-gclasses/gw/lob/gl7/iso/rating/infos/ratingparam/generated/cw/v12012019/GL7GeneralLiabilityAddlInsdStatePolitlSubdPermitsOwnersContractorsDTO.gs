package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdStatePolitlSubdPermitsOwnersContractors : GL7AddlInsdStatePolitlSubdPermitsOwnersContractors, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdStatePolitlSubdPermitsOwnersContractors
    _displayName = _gL7AddlInsdStatePolitlSubdPermitsOwnersContractors.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdStatePolitlSubdPermitsOwnersContractorsDetail : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailGroupingDTO as readonly AddlInsdStatePolitlSubdPermitsOwnersContractorsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdStatePolitlSubdPermitsOwnersContractors {
   return _dataModel as GL7AddlInsdStatePolitlSubdPermitsOwnersContractors
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