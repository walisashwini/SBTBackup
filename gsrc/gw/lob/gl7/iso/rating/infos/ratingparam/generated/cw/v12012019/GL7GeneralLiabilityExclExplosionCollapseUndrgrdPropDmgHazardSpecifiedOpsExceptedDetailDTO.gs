package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedExclItem : GL7LocationSchedExclItem, parent : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO) {
  
    _parent = parent
    _dataModel = _gL7LocationSchedExclItem
    _coveredHazard = _gL7LocationSchedExclItem.getStringProperty("CoveredHazard")
    _description = _gL7LocationSchedExclItem.getStringProperty("Description")
    _location = _gL7LocationSchedExclItem.getStringProperty("Location")
    _displayName = _gL7LocationSchedExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _location : java.lang.String as Location = ""

  @VisibleInRateflow
  protected var _description : java.lang.String as Description = ""

  @VisibleInRateflow
  protected var _coveredHazard : java.lang.String as CoveredHazard = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LocationSchedExclItem {
   return _dataModel as GL7LocationSchedExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO {
   return _parent
  }
  

  
}