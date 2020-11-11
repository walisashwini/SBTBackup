package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1 : GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1
    _manualPremium = _gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1.GL7ManualPremium182Term.Value
    _displayName = _gL7ExclDamageToWorkPerformedBySubcontractorsOnYou1.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetail : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetailGroupingDTO as readonly ExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1 {
   return _dataModel as GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}