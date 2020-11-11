package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdStatePolitlSubdPermitsRelatingPrem : GL7AddlInsdStatePolitlSubdPermitsRelatingPrem, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdStatePolitlSubdPermitsRelatingPrem
    _displayName = _gL7AddlInsdStatePolitlSubdPermitsRelatingPrem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdStatePolitlSubdPermitsRelatingPremDetail : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsRelatingPremDetailGroupingDTO as readonly AddlInsdStatePolitlSubdPermitsRelatingPremDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdStatePolitlSubdPermitsRelatingPrem {
   return _dataModel as GL7AddlInsdStatePolitlSubdPermitsRelatingPrem
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