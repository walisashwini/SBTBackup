package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclProductsProfessionalServicesOpticalHearingAidEstablishmentsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclProdsProfessionalServicesOpticalHearingAidE : GL7ExclProdsProfessionalServicesOpticalHearingAidE, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclProdsProfessionalServicesOpticalHearingAidE
    _manualPremium = _gL7ExclProdsProfessionalServicesOpticalHearingAidE.GL7ManualPremium77Term.Value
    _displayName = _gL7ExclProdsProfessionalServicesOpticalHearingAidE.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclProductsProfessionalServicesOpticalHearingAidEstablishmentsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclProdsProfessionalServicesOpticalHearingAidE {
   return _dataModel as GL7ExclProdsProfessionalServicesOpticalHearingAidE
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