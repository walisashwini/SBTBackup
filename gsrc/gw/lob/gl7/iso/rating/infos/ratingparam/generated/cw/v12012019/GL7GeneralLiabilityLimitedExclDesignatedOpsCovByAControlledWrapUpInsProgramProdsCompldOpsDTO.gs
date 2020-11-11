package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2 : GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2
    _displayName = _gL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _limitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail : GL7GeneralLiabilityLimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO as readonly LimitedExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2 {
   return _dataModel as GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2
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