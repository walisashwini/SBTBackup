package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclTelecommEquipmtServicePrvdrsErrorsOmissionsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions : GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions
    _displayName = _gL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclTelecommEquipmtServicePrvdrsErrorsOmissionsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions {
   return _dataModel as GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions
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