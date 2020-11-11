package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor : GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor
    _manualPremium = _gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor.GL7ManualPremium247Term.Value
    _displayName = _gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetail : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailGroupingDTO as readonly AddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor {
   return _dataModel as GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor
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