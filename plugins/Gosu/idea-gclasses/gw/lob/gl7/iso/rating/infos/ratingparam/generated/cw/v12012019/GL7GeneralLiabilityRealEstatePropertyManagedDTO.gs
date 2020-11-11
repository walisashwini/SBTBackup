package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityRealEstatePropertyManagedDTO extends gw.rating.LineModelObject {

  public construct(_gL7RealEstatePropertyManaged : GL7RealEstatePropertyManaged, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7RealEstatePropertyManaged
    _displayName = _gL7RealEstatePropertyManaged.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityRealEstatePropertyManagedDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7RealEstatePropertyManaged {
   return _dataModel as GL7RealEstatePropertyManaged
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