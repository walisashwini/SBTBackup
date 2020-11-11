package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityMedPayCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7MedPay : GL7MedPay, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7MedPay
    _limit = _gL7MedPay.GL7Limit2Term.OptionValue.DisplayName
    _displayName = _gL7MedPay.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityMedPayCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _limit : java.lang.String as Limit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7MedPay {
   return _dataModel as GL7MedPay
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