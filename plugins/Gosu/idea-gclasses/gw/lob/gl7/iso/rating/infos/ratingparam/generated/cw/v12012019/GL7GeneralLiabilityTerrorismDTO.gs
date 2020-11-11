package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityTerrorismDTO extends gw.rating.LineModelObject {

  public construct(_gL7Terr : GL7Terr, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7Terr
    _displayName = _gL7Terr.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _terrorismProdsCompldOpsCoverage : GL7GeneralLiabilityTerrorismProdsCompldOpsCoverageDTO as readonly TerrorismProdsCompldOpsCoverage  

  @VisibleInRateflow
  protected var _terrorismPremOpsCoverage : GL7GeneralLiabilityTerrorismPremOpsCoverageDTO as readonly TerrorismPremOpsCoverage  

  @VisibleInRateflow
  protected var _terrorismAllOtherSublineCoverage : GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO as readonly TerrorismAllOtherSublineCoverage  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _terrorismExposureClassesProducts : java.lang.String as TerrorismExposureClassesProducts = ""

  @VisibleInRateflow
  protected var _terrorismExposureClassesPremises : java.lang.String as TerrorismExposureClassesPremises = ""

  @VisibleInRateflow
  protected var _terrorismExposureClassesOther : java.lang.String as TerrorismExposureClassesOther = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _certifiedActsOfTerrorismNuclBioChemRadioFactor : java.math.BigDecimal as CertifiedActsOfTerrorismNuclBioChemRadioFactor = 0.0

  @VisibleInRateflow
  protected var _certifiedActsOfTerrorismExposureClassFactorProducts : java.math.BigDecimal as CertifiedActsOfTerrorismExposureClassFactorProducts = 0.0

  @VisibleInRateflow
  protected var _certifiedActsOfTerrorismExposureClassFactorPremises : java.math.BigDecimal as CertifiedActsOfTerrorismExposureClassFactorPremises = 0.0

  @VisibleInRateflow
  protected var _certifiedActsOfTerrorismExposureClassFactorOther : java.math.BigDecimal as CertifiedActsOfTerrorismExposureClassFactorOther = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Terr {
   return _dataModel as GL7Terr
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent
  }
  

  
}