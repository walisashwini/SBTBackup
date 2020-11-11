package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO extends gw.rating.LineModelObject {

  public construct(_gL7UndergroundResourcesAndEquipmtCov : GL7UndergroundResourcesAndEquipmtCov, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7UndergroundResourcesAndEquipmtCov
    _aggregateLimit = _cf.makeStringFrom (_gL7UndergroundResourcesAndEquipmtCov.GL7AggLimit9Term.Value)
    _manualPremium = _gL7UndergroundResourcesAndEquipmtCov.GL7ManualPremium167Term.Value
    _displayName = _gL7UndergroundResourcesAndEquipmtCov.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _undergroundResourcesAndEquipmtCovDetail : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailGroupingDTO as readonly UndergroundResourcesAndEquipmtCovDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("UndergroundResourcesEquipmtCov")
  protected var _undergroundResourcesAndEquipmtCov : java.lang.String as UndergroundResourcesAndEquipmtCov = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("SpecialClassificationsIncludin")
  protected var _specialClassificationsIncludingNuclearEnergyLiability : java.lang.String as SpecialClassificationsIncludingNuclearEnergyLiability = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _aggregateLimit : java.lang.String as AggregateLimit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7UndergroundResourcesAndEquipmtCov {
   return _dataModel as GL7UndergroundResourcesAndEquipmtCov
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