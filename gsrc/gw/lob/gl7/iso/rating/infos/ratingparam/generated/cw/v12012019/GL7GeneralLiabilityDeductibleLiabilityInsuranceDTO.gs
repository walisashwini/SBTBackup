package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDeductibleLiabilityInsuranceDTO extends gw.rating.LineModelObject {

  public construct(_gL7DedLiabInsurance : GL7DedLiabInsurance, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7DedLiabInsurance
    _limitation = _cf.makeStringFrom (_gL7DedLiabInsurance.GL7LimitationTerm.Value)
    _location = _gL7DedLiabInsurance.GL7LocationTerm.Value
    _displayName = _gL7DedLiabInsurance.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDeductibleLiabilityInsuranceDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _location : java.lang.String as Location = ""

  @VisibleInRateflow
  protected var _limitation : java.lang.String as Limitation = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DedLiabInsurance {
   return _dataModel as GL7DedLiabInsurance
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