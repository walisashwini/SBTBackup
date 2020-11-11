package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje : GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje, parent )
    _addlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetail = _gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailGroupingDTO(_gL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetail() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailGroupingDTO {
   return _addlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetail as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}