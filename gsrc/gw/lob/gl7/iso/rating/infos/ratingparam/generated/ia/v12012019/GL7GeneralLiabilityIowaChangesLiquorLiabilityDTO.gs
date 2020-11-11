package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityIowaChangesLiquorLiabilityDTO extends gw.rating.LineModelObject {

  public construct(_gL7IAChangesLiquorLiab : GL7IAChangesLiquorLiab, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7IAChangesLiquorLiab
    _displayName = (_cf.stateMatches(_gL7IAChangesLiquorLiab.OwningCoverable, Parameters)) ? _gL7IAChangesLiquorLiab.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityIowaChangesLiquorLiabilityDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7IAChangesLiquorLiab {
   return _dataModel as GL7IAChangesLiquorLiab
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