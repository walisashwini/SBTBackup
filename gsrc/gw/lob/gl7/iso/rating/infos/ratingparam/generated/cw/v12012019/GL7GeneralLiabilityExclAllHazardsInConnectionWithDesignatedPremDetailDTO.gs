package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedExclItem : GL7LocationSchedExclItem, parent : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedExclItem
    _description = _gL7LocationSchedExclItem.getStringProperty("Description")
    _locationOfPremise = _gL7LocationSchedExclItem.getStringProperty("LocationOfPremise")
    _displayName = _gL7LocationSchedExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _locationOfPremise : java.lang.String as LocationOfPremise = ""

  @VisibleInRateflow
  protected var _description : java.lang.String as Description = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedExclItem {
   return _dataModel as GL7LocationSchedExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {
   return _parent
  }
  

  
}