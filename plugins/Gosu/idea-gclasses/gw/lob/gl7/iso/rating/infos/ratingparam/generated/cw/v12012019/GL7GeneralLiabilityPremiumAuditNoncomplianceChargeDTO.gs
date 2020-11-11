package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPremiumAuditNoncomplianceChargeDTO extends gw.rating.LineModelObject {

  public construct(_gL7PremiumAuditNoncomplianceCharge : GL7PremiumAuditNoncomplianceCharge, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PremiumAuditNoncomplianceCharge
    _auditNoncomplianceChargeFactor = _gL7PremiumAuditNoncomplianceCharge.GL7AuditNoncomplianceChargeFactorTerm.Value
    _numberOfWrittenAttempts = _cf.makeIntegerFrom (_gL7PremiumAuditNoncomplianceCharge.GL7NumberOfWrittenAttemptsTerm.Value)
    _reassessmentCharge = _gL7PremiumAuditNoncomplianceCharge.GL7ReassessmentChargeTerm.Value
    _totalAdvancePremium = _gL7PremiumAuditNoncomplianceCharge.GL7TotalAdvancePremiumTerm.Value
    _displayName = _gL7PremiumAuditNoncomplianceCharge.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPremiumAuditNoncomplianceChargeDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _totalAdvancePremium : java.math.BigDecimal as TotalAdvancePremium = 0.0

  @VisibleInRateflow
  protected var _reassessmentCharge : java.math.BigDecimal as ReassessmentCharge = 0.0

  @VisibleInRateflow
  protected var _numberOfWrittenAttempts : java.lang.Integer as NumberOfWrittenAttempts = 0

  @VisibleInRateflow
  protected var _auditNoncomplianceChargeFactor : java.math.BigDecimal as AuditNoncomplianceChargeFactor = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PremiumAuditNoncomplianceCharge {
   return _dataModel as GL7PremiumAuditNoncomplianceCharge
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