package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased : GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased
    _displayName = _gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdOwnersOrOtherIntsFromWhomLandLeasedDetail : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailGroupingDTO as readonly AddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased {
   return _dataModel as GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased
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