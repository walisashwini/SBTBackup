package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLocationDTO extends gw.rating.LineModelObject {

  public construct(_gL7Location : GL7Location, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7Location
    _liquorDeductible = _gL7Location.LiquorDeductible
    _liquorLiabTerr = _gL7Location.LiquorLiabTerr
    _liquorLiabTerritory = _gL7Location.LiquorLiabTerritory
    _ownersContractorsTerritory = _gL7Location.OwnersContractorsTerritory
    _pollutionTerritory = _gL7Location.PollutionTerritory
    _premOpsBIDeductible = _gL7Location.PremOpsBIDeductible
    _premOpsBIPDDeductible = _gL7Location.PremOpsBIPDDeductible
    _premOpsPDDeductible = _gL7Location.PremOpsPDDeductible
    _premisesOperationsTerr = _gL7Location.PremisesOperationsTerr
    _premisesOperationsTerritory = _gL7Location.PremisesOperationsTerritory
    _prodsCompldOpsBIDeductible = _gL7Location.ProdsCompldOpsBIDeductible
    _prodsCompldOpsBIPDDeductible = _gL7Location.ProdsCompldOpsBIPDDeductible
    _prodsCompldOpsPDDeductible = _gL7Location.ProdsCompldOpsPDDeductible
    _prodsCompldOpsTerritory = _gL7Location.ProdsCompldOpsTerritory
    _productWithdrawalDeductible = _gL7Location.ProductWithdrawalDeductible
    _railroadTerritory = _gL7Location.RailroadTerritory
    _zipCode = _gL7Location.ZipCode
    _zipCodeOverride = _gL7Location.ZipCodeOverride
    _displayName = _gL7Location.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLocationDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _limitationOfCoverageToInsuredPremisesLocLvl : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO as readonly LimitationOfCoverageToInsuredPremisesLocLvl  

  @VisibleInRateflow
  protected var _exclusionCoverageCMedicalPaymentsLocation : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO as readonly ExclusionCoverageCMedicalPaymentsLocation  

  @VisibleInRateflow
  protected var _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExcepted : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO as readonly ExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExcepted  

  @VisibleInRateflow
  protected var _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOps : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO as readonly ExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOps  

  @VisibleInRateflow
  protected var _exclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOps : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO as readonly ExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOps  

  @VisibleInRateflow
  protected var _exclAllHazardsInConnectionWithDesignatedPrem : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO as readonly ExclAllHazardsInConnectionWithDesignatedPrem  

  @VisibleInRateflow
  protected var _designatedLocsAggregateLimitProdsCompldOps : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO as readonly DesignatedLocsAggregateLimitProdsCompldOps  

  @VisibleInRateflow
  protected var _designatedLocationsProdsCompldOpsAggregateLimit : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO as readonly DesignatedLocationsProdsCompldOpsAggregateLimit  

  @VisibleInRateflow
  protected var _designatedLocLiquorAggLimit : GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO as readonly DesignatedLocLiquorAggLimit  

  @VisibleInRateflow
  protected var _designatedLocGeneralAggLimit : GL7GeneralLiabilityDesignatedLocGeneralAggLimitDTO as readonly DesignatedLocGeneralAggLimit  

  @VisibleInRateflow
  protected var _classification : GL7GeneralLiabilityClassificationGroupingDTO as readonly Classification  

  @VisibleInRateflow
  protected var _addlInsdOwnersOrOtherIntsFromWhomLandLeased : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO as readonly AddlInsdOwnersOrOtherIntsFromWhomLandLeased  

  @VisibleInRateflow
  protected var _addlInsdOwnersManagersOrLessorsOfPremisesLiquorLiability : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO as readonly AddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiability  

  @VisibleInRateflow
  protected var _addlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregate : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO as readonly AddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregate  

  @VisibleInRateflow
  protected var _addlInsdOwnersLesseesContrctrsCompldOpsLocLvl : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO as readonly AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl  

  @VisibleInRateflow
  protected var _addlInsdMortgageeAssigneeOrRecvr : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO as readonly AddlInsdMortgageeAssigneeOrRecvr  

  @VisibleInRateflow
  protected var _addlInsdMgrsLessorsPrem : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO as readonly AddlInsdMgrsLessorsPrem  

  @VisibleInRateflow
  protected var _addlInsdCoOwnerInsdPrem : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO as readonly AddlInsdCoOwnerInsdPrem  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _zipCodeOverride : java.lang.String as ZipCodeOverride = ""

  @VisibleInRateflow
  protected var _zipCode : java.lang.String as ZipCode = ""

  @VisibleInRateflow
  protected var _railroadTerritory : java.lang.String as RailroadTerritory = ""

  @VisibleInRateflow
  protected var _productWithdrawalDeductible : java.lang.String as ProductWithdrawalDeductible = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsTerritory : java.lang.String as ProdsCompldOpsTerritory = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsPDDeductible : java.lang.String as ProdsCompldOpsPDDeductible = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsBIPDDeductible : java.lang.String as ProdsCompldOpsBIPDDeductible = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsBIDeductible : java.lang.String as ProdsCompldOpsBIDeductible = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _premisesOperationsTerritory : java.lang.String as PremisesOperationsTerritory = ""

  @VisibleInRateflow
  protected var _premisesOperationsTerr : java.lang.String as PremisesOperationsTerr = ""

  @VisibleInRateflow
  protected var _premOpsPDDeductible : java.lang.String as PremOpsPDDeductible = ""

  @VisibleInRateflow
  protected var _premOpsBIPDDeductible : java.lang.String as PremOpsBIPDDeductible = ""

  @VisibleInRateflow
  protected var _premOpsBIDeductible : java.lang.String as PremOpsBIDeductible = ""

  @VisibleInRateflow
  protected var _pollutionTerritory : java.lang.String as PollutionTerritory = ""

  @VisibleInRateflow
  protected var _ownersContractorsTerritory : java.lang.String as OwnersContractorsTerritory = ""

  @VisibleInRateflow
  protected var _liquorLiabTerritory : java.lang.String as LiquorLiabTerritory = ""

  @VisibleInRateflow
  protected var _liquorLiabTerr : java.lang.String as LiquorLiabTerr = ""

  @VisibleInRateflow
  protected var _liquorDeductible : java.lang.String as LiquorDeductible = ""

  @VisibleInRateflow
  protected var _county : java.lang.String as County = ""

  @VisibleInRateflow
  protected var _additionalInterestCount : java.lang.Integer as AdditionalInterestCount = 0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Location {
   return _dataModel as GL7Location
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