package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityMisdeliveryLiquidProductsCovDTO extends gw.rating.LineModelObject {

  public construct(_gL7MisdeliveryLiquidProdsCov : GL7MisdeliveryLiquidProdsCov, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7MisdeliveryLiquidProdsCov
    _displayName = _gL7MisdeliveryLiquidProdsCov.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityMisdeliveryLiquidProductsCovDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7MisdeliveryLiquidProdsCov {
   return _dataModel as GL7MisdeliveryLiquidProdsCov
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