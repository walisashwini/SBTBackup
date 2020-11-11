package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7UnmannedAircraftTerr : GL7UnmannedAircraftTerr, parent : GL7GeneralLiabilityUnmannedAircraftDTO) {
  
    _parent = parent
    _dataModel = _gL7UnmannedAircraftTerr
    _displayName = _gL7UnmannedAircraftTerr.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _coveragePremium : java.math.BigDecimal as CoveragePremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7UnmannedAircraftTerr {
   return _dataModel as GL7UnmannedAircraftTerr
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityUnmannedAircraftDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return _parent
  }
  

  
}