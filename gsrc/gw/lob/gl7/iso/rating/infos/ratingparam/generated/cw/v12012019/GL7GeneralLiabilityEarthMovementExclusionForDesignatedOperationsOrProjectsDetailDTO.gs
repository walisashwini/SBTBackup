package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _descriptionOfOperationsOrProjects = _gL7SublineTypeSchExclItem.getStringProperty("DescriptionOfOperationsOrProjects")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _descriptionOfOperationsOrProjects : java.lang.String as DescriptionOfOperationsOrProjects = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO {
   return _parent
  }
  

  
}