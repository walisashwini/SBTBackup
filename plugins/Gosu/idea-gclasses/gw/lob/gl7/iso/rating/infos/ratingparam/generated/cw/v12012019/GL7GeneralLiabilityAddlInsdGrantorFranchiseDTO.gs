package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdGrantorFranchise : GL7AddlInsdGrantorFranchise, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdGrantorFranchise
    _displayName = _gL7AddlInsdGrantorFranchise.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdGrantorFranchiseDetail : GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailGroupingDTO as readonly AddlInsdGrantorFranchiseDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdGrantorFranchise {
   return _dataModel as GL7AddlInsdGrantorFranchise
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