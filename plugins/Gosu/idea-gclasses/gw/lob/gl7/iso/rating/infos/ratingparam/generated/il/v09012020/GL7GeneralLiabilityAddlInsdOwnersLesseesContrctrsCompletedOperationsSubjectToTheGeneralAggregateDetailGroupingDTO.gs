package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO {
   return _parent
  }
  

  
}