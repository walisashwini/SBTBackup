package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdExecsAdminsTrstesBeneficsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdExecsAdminsTrstesBenefics : GL7AddlInsdExecsAdminsTrstesBenefics, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdExecsAdminsTrstesBenefics
    _displayName = _gL7AddlInsdExecsAdminsTrstesBenefics.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdExecsAdminsTrstesBeneficsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdExecsAdminsTrstesBenefics {
   return _dataModel as GL7AddlInsdExecsAdminsTrstesBenefics
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