package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdGrantorOfLicensesAutomaticStatusReqdLicensorDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic : GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic
    _displayName = _gL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorOfLicensesAutomaticStatusReqdLicensorDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic {
   return _dataModel as GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic
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