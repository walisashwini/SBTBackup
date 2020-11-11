package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDisclosureOfPremiumThrough123105CertifiedActsTerrorismPursuantTerrorismAct2002DTO extends gw.rating.LineModelObject {

  public construct(_gL7DisclosureOfPremiumThrough123105CertifiedActsTe : GL7DisclosureOfPremiumThrough123105CertifiedActsTe, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7DisclosureOfPremiumThrough123105CertifiedActsTe
    _actualPremiumThrough123105 = _gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7ActualPremiumThrough1231051Term.Value
    _additionalInformation = _gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7AdditionalInformation1Term.Value
    _coverageFormPartPolicy = _gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7CovFormPartPolicy1Term.Value
    _endOfYear = _gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7EndOfYear1Term.Value
    _fedShareTerrorismLossesA = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7FedShareTerrLossesA1Term.Value)
    _fedShareTerrorismLossesB = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7FedShareTerrLossesB1Term.Value)
    _yearA = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7YearA1Term.Value)
    _yearB = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumThrough123105CertifiedActsTe.GL7YearB1Term.Value)
    _displayName = _gL7DisclosureOfPremiumThrough123105CertifiedActsTe.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDisclosureOfPremiumThrough123105CertifiedActsTerrorismPursuantTerrorismAct2002DTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _yearB : java.lang.Integer as YearB = 0

  @VisibleInRateflow
  protected var _yearA : java.lang.Integer as YearA = 0

  @VisibleInRateflow
  protected var _fedShareTerrorismLossesB : java.lang.Integer as FedShareTerrorismLossesB = 0

  @VisibleInRateflow
  protected var _fedShareTerrorismLossesA : java.lang.Integer as FedShareTerrorismLossesA = 0

  @VisibleInRateflow
  protected var _endOfYear : java.lang.String as EndOfYear = ""

  @VisibleInRateflow
  protected var _coverageFormPartPolicy : java.lang.String as CoverageFormPartPolicy = ""

  @VisibleInRateflow
  protected var _additionalInformation : java.lang.String as AdditionalInformation = ""

  @VisibleInRateflow
  protected var _actualPremiumThrough123105 : java.math.BigDecimal as ActualPremiumThrough123105 = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DisclosureOfPremiumThrough123105CertifiedActsTe {
   return _dataModel as GL7DisclosureOfPremiumThrough123105CertifiedActsTe
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