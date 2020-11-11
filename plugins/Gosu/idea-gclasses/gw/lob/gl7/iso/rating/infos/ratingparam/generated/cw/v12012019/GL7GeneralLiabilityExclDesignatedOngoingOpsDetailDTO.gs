package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _descriptionOfOperation = _gL7SublineTypeSchExclItem.getStringProperty("DescriptionOfOperation")
    _specifiedLocation = _gL7SublineTypeSchExclItem.getStringProperty("SpecifiedLocation")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOngoingOpsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _specifiedLocation : java.lang.String as SpecifiedLocation = ""

  @VisibleInRateflow
  protected var _descriptionOfOperation : java.lang.String as DescriptionOfOperation = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO {
   return _parent
  }
  

  
}