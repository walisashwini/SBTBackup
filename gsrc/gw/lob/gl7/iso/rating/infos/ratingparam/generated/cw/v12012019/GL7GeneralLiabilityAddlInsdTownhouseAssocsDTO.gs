package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdTownhouseAssocsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdTownhouseAssocs : GL7AddlInsdTownhouseAssocs, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdTownhouseAssocs
    _displayName = _gL7AddlInsdTownhouseAssocs.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdTownhouseAssocsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdTownhouseAssocs {
   return _dataModel as GL7AddlInsdTownhouseAssocs
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}