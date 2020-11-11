package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedCovItem
    _locationAndDescription = _gL7LocationSchedCovItem.getStringProperty("LocationAndDescription")
    _nameOfAdditionalInsured = _gL7LocationSchedCovItem.getStringProperty("NameOfAdditionalInsured")
    _displayName = _gL7LocationSchedCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _nameOfAdditionalInsured : java.lang.String as NameOfAdditionalInsured = ""

  @VisibleInRateflow
  protected var _locationAndDescription : java.lang.String as LocationAndDescription = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedCovItem {
   return _dataModel as GL7LocationSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO {
   return _parent
  }
  

  
}