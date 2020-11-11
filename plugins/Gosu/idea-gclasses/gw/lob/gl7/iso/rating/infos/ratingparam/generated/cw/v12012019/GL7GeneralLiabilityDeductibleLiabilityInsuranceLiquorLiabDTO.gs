package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiabDTO extends gw.rating.LineModelObject {

  public construct(_gL7DedLiabInsuranceLiquorLiab : GL7DedLiabInsuranceLiquorLiab, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7DedLiabInsuranceLiquorLiab
    _limitation = _gL7DedLiabInsuranceLiquorLiab.GL7Limitation1Term.Value
    _location = _gL7DedLiabInsuranceLiquorLiab.GL7Location1Term.Value
    _displayName = _gL7DedLiabInsuranceLiquorLiab.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiabDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _location : java.lang.String as Location = ""

  @VisibleInRateflow
  protected var _limitation : java.lang.String as Limitation = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DedLiabInsuranceLiquorLiab {
   return _dataModel as GL7DedLiabInsuranceLiquorLiab
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