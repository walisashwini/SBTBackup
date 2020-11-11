package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedCovItem
    _designatedLocations = _gL7LocationSchedCovItem.getStringProperty("DesignatedLocations")
    _displayName = _gL7LocationSchedCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _designatedLocations : java.lang.String as DesignatedLocations = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedCovItem {
   return _dataModel as GL7LocationSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO {
   return _parent
  }
  

  
}