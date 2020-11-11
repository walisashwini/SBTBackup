package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2 : GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2
    _displayName = _gL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailGroupingDTO as readonly ExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2 {
   return _dataModel as GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2
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