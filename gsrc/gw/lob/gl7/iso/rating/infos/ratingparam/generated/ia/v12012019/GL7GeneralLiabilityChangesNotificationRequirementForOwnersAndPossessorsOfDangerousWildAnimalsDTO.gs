package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityChangesNotificationRequirementForOwnersAndPossessorsOfDangerousWildAnimalsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ChangesNotificationRequirementForOwnersAndPosse : GL7ChangesNotificationRequirementForOwnersAndPosse, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ChangesNotificationRequirementForOwnersAndPosse
    _displayName = (_cf.stateMatches(_gL7ChangesNotificationRequirementForOwnersAndPosse.OwningCoverable, Parameters)) ? _gL7ChangesNotificationRequirementForOwnersAndPosse.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityChangesNotificationRequirementForOwnersAndPossessorsOfDangerousWildAnimalsDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ChangesNotificationRequirementForOwnersAndPosse {
   return _dataModel as GL7ChangesNotificationRequirementForOwnersAndPosse
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}