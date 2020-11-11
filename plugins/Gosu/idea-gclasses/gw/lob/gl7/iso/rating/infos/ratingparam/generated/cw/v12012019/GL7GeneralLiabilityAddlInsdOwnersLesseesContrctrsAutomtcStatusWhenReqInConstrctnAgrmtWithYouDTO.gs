package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusWhenReqInConstrctnAgrmtWithYouDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen : GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen
    _manualPremium = _gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen.GL7ManualPremium9Term.Value
    _displayName = _gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusWhenReqInConstrctnAgrmtWithYouDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen {
   return _dataModel as GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen
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