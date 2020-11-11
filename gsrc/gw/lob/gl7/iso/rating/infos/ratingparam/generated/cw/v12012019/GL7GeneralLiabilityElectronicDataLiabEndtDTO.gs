package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityElectronicDataLiabEndtDTO extends gw.rating.LineModelObject {

  public construct(_gL7ElectrDataLiabEndt : GL7ElectrDataLiabEndt, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ElectrDataLiabEndt
    _exposureBasis = _gL7ElectrDataLiabEndt.GL7ExposureBasisTerm.OptionValue.DisplayName
    _limit = _cf.makeIntegerFrom (_gL7ElectrDataLiabEndt.GL7Limit1Term.Value)
    _manualPremium = _gL7ElectrDataLiabEndt.GL7ManualPremium44Term.Value
    _displayName = _gL7ElectrDataLiabEndt.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabEndtDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _limit : java.lang.Integer as Limit = 0

  @VisibleInRateflow
  protected var _exposureBasis : java.lang.String as ExposureBasis = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ClassCode")
  protected var _classCode : java.lang.String as ClassCode = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ElectrDataLiabEndt {
   return _dataModel as GL7ElectrDataLiabEndt
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