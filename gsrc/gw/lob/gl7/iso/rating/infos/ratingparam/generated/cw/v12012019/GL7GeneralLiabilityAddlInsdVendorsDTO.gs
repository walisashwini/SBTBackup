package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdVendorsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdVendors : GL7AddlInsdVendors, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdVendors
    _displayName = _gL7AddlInsdVendors.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVendorsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdVendorsDetail : GL7GeneralLiabilityAddlInsdVendorsDetailGroupingDTO as readonly AddlInsdVendorsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdVendors {
   return _dataModel as GL7AddlInsdVendors
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