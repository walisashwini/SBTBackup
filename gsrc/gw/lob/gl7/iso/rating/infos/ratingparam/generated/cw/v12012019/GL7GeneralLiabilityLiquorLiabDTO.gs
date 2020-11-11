package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLiquorLiabDTO extends gw.rating.LineModelObject {

  public construct(_gL7LiquorLiab : GL7LiquorLiab, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LiquorLiab
    _liquorClassCode = _gL7LiquorLiab.GL7LiquorClassCodeTerm.OptionValue.DisplayName
    _manualPremium = _gL7LiquorLiab.GL7ManualPremium133Term.Value
    _displayName = _gL7LiquorLiab.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLiquorLiabDTO {
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
  protected var _liquorClassCode : java.lang.String as LiquorClassCode = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LiquorLiab {
   return _dataModel as GL7LiquorLiab
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