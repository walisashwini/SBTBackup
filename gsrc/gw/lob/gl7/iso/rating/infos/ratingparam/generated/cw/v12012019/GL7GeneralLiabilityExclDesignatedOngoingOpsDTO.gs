package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclDesignatedOngoingOpsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclDesignatedOngoingOps : GL7ExclDesignatedOngoingOps, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclDesignatedOngoingOps
    _manualPremium = _gL7ExclDesignatedOngoingOps.GL7ManualPremium57Term.Value
    _displayName = _gL7ExclDesignatedOngoingOps.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOngoingOpsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclDesignatedOngoingOpsDetail : GL7GeneralLiabilityExclDesignatedOngoingOpsDetailGroupingDTO as readonly ExclDesignatedOngoingOpsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclDesignatedOngoingOps {
   return _dataModel as GL7ExclDesignatedOngoingOps
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