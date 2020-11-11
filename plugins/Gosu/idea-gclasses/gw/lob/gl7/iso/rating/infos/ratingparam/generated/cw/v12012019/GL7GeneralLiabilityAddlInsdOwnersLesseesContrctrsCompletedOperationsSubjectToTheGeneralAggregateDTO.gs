package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje : GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje
    _manualPremium = _gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje.GL7ManualPremium245Term.Value
    _displayName = _gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetail : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailGroupingDTO as readonly AddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje {
   return _dataModel as GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje
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