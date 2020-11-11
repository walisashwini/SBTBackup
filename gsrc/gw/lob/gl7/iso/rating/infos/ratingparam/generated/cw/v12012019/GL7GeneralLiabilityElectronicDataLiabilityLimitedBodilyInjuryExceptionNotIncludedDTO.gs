package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityElectronicDataLiabilityLimitedBodilyInjuryExceptionNotIncludedDTO extends gw.rating.LineModelObject {

  public construct(_gL7ElectrDataLiabLmtdBIExceptionNotIncluded : GL7ElectrDataLiabLmtdBIExceptionNotIncluded, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ElectrDataLiabLmtdBIExceptionNotIncluded
    _limit = _cf.makeIntegerFrom (_gL7ElectrDataLiabLmtdBIExceptionNotIncluded.GL7Limit9Term.Value)
    _manualPremium = _gL7ElectrDataLiabLmtdBIExceptionNotIncluded.GL7ManualPremium326Term.Value
    _displayName = _gL7ElectrDataLiabLmtdBIExceptionNotIncluded.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabilityLimitedBodilyInjuryExceptionNotIncludedDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _limit : java.lang.Integer as Limit = 0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ElectrDataLiabLmtdBIExceptionNotIncluded {
   return _dataModel as GL7ElectrDataLiabLmtdBIExceptionNotIncluded
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