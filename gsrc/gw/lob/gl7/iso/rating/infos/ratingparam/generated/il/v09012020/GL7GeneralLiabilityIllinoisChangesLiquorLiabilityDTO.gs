package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityIllinoisChangesLiquorLiabilityDTO extends gw.rating.LineModelObject {

  public construct(_gL7ILChangesLiquorLiab : GL7ILChangesLiquorLiab, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ILChangesLiquorLiab
    _displayName = (_cf.stateMatches(_gL7ILChangesLiquorLiab.OwningCoverable, Parameters)) ? _gL7ILChangesLiquorLiab.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityIllinoisChangesLiquorLiabilityDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ILChangesLiquorLiab {
   return _dataModel as GL7ILChangesLiquorLiab
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