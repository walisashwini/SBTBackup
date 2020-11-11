package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedCovItem
    _descriptionOfPremises = _gL7LocationSchedCovItem.getStringProperty("DescriptionOfPremises")
    _locationOfPremises = _gL7LocationSchedCovItem.getStringProperty("LocationOfPremises")
    _displayName = _gL7LocationSchedCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _locationOfPremises : java.lang.String as LocationOfPremises = ""

  @VisibleInRateflow
  protected var _descriptionOfPremises : java.lang.String as DescriptionOfPremises = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedCovItem {
   return _dataModel as GL7LocationSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO {
   return _parent
  }
  

  
}