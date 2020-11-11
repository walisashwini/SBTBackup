package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns : GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns
    _manualPremium = _gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns.GL7ManualPremium700Term.Value
    _displayName = _gL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _limitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetail : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetailGroupingDTO as readonly LimitedExclDesignatedOpsCovByConsolidatedWrapUpInsProgramDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns {
   return _dataModel as GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns
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