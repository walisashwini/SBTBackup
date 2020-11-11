package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPremiumAuditNoncomplianceChargeOwnersContractorsDTO extends gw.rating.LineModelObject {

  public construct(_gL7PremiumAuditNoncomplianceChargeOwnersContractor : GL7PremiumAuditNoncomplianceChargeOwnersContractor, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PremiumAuditNoncomplianceChargeOwnersContractor
    _auditNoncomplianceChargeFactor = _gL7PremiumAuditNoncomplianceChargeOwnersContractor.GL7AuditNoncomplianceChargeFactor1Term.Value
    _numberOfWrittenAttempts = _cf.makeIntegerFrom (_gL7PremiumAuditNoncomplianceChargeOwnersContractor.GL7NumberOfWrittenAttempts1Term.Value)
    _reassessmentCharge = _gL7PremiumAuditNoncomplianceChargeOwnersContractor.GL7ReassessmentCharge1Term.Value
    _totalAdvancePremium = _gL7PremiumAuditNoncomplianceChargeOwnersContractor.GL7TotalAdvancePremium1Term.Value
    _displayName = _gL7PremiumAuditNoncomplianceChargeOwnersContractor.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPremiumAuditNoncomplianceChargeOwnersContractorsDTO {
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
  property get AsDataModel() : GL7PremiumAuditNoncomplianceChargeOwnersContractor {
   return _dataModel as GL7PremiumAuditNoncomplianceChargeOwnersContractor
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