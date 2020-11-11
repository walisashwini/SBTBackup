package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP : GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP
    _manualPremium = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP.GL7ManualPremium392Term.Value
    _displayName = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _limitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetail : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetailGroupingDTO as readonly LimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramLmtdExcptnForAddlInsdCGLLDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP {
   return _dataModel as GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP
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