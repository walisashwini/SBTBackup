package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityIllinoisChangesContractorsHomeRepairAndRemodelingDTO extends gw.rating.LineModelObject {

  public construct(_gL7ILChangesContractorsHomeRepairAndRemodeling : GL7ILChangesContractorsHomeRepairAndRemodeling, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ILChangesContractorsHomeRepairAndRemodeling
    _deductible = (_cf.stateMatches(_gL7ILChangesContractorsHomeRepairAndRemodeling.OwningCoverable, Parameters)) ? _cf.makeIntegerFrom (_gL7ILChangesContractorsHomeRepairAndRemodeling.GL7Ded1Term.Value) : _deductible
    _displayName = (_cf.stateMatches(_gL7ILChangesContractorsHomeRepairAndRemodeling.OwningCoverable, Parameters)) ? _gL7ILChangesContractorsHomeRepairAndRemodeling.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityIllinoisChangesContractorsHomeRepairAndRemodelingDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _rate : java.math.BigDecimal as Rate = 0.0

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _deductible : java.lang.Integer as Deductible = 0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ILChangesContractorsHomeRepairAndRemodeling {
   return _dataModel as GL7ILChangesContractorsHomeRepairAndRemodeling
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