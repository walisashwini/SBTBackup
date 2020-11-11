package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItem
    _descriptionOfPremises = _gL7SublineTypeSchCondItem.getStringProperty("DescriptionOfPremises")
    _descriptionOfProject = _gL7SublineTypeSchCondItem.getStringProperty("DescriptionOfProject")
    _displayName = _gL7SublineTypeSchCondItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _descriptionOfProject : java.lang.String as DescriptionOfProject = ""

  @VisibleInRateflow
  protected var _descriptionOfPremises : java.lang.String as DescriptionOfPremises = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCondItem {
   return _dataModel as GL7SublineTypeSchCondItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO {
   return _parent
  }
  

  
}