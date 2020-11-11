package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityTerrorismEndorsementCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7TerrEndorsement : GL7TerrEndorsement, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7TerrEndorsement
    _certifiedActsofTerrorismExposureClassFactorOverride = _gL7TerrEndorsement.GL7CertifiedActsofTerrExposureClassFactorOverrideTerm.Value
    _displayName = _gL7TerrEndorsement.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismEndorsementCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _endorsementPremium : java.math.BigDecimal as EndorsementPremium = 0.0

  @VisibleInRateflow
  protected var _certifiedActsofTerrorismExposureClassFactorOverride : java.math.BigDecimal as CertifiedActsofTerrorismExposureClassFactorOverride = 0.0

  @VisibleInRateflow
  protected var _certifiedActsofTerrorismExposureClassFactor : java.math.BigDecimal as CertifiedActsofTerrorismExposureClassFactor = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7TerrEndorsement {
   return _dataModel as GL7TerrEndorsement
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