package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityTerrorismProdsCompldOpsCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7TerrProdsCompldOps : GL7TerrProdsCompldOps, parent : GL7GeneralLiabilityTerrorismDTO) {
  
    _parent = parent
    _dataModel = _gL7TerrProdsCompldOps
    _displayName = _gL7TerrProdsCompldOps.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismProdsCompldOpsCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _terrorismILF : java.math.BigDecimal as TerrorismILF = 0.0

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7TerrProdsCompldOps {
   return _dataModel as GL7TerrProdsCompldOps
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityTerrorismDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityTerrorismDTO {
   return _parent
  }
  

  
}