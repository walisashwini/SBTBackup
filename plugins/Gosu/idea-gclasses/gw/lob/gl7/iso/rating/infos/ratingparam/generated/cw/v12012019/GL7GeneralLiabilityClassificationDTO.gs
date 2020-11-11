package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationDTO extends gw.rating.LineModelObject {

  public construct(_gL7Exposure : GL7Exposure, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7Exposure
    _classCode = _gL7Exposure.ClassCode
    _classDescription = _gL7Exposure.ClassDescription
    _classificationType = _gL7Exposure.ClassificationType
    _eDLClassCode = _gL7Exposure.EDLClassCode
    _eDLClassDescription = _gL7Exposure.EDLClassDescription
    _eDLExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.EDLExposure
    _eDLPremiumRatingBase = _gL7Exposure.EDLPremiumRatingBase
    _estdContractCostWORRHzd = _gL7Exposure.EstdContractCostWORRHzd
    _estimatedContractCostRatio = _gL7Exposure.EstimatedContractCostRatio
    _ifAnyBasis = _gL7Exposure.IfAnyBasis
    _ifAnyBasisProdsCompldOps = _gL7Exposure.IfAnyBasisProdsCompldOps
    _injurySuprvsrInspctrsOtherEmpsCov = _gL7Exposure.InjurySuprvsrInspctrsOtherEmpsCov
    _limitedCovForPersonalAndAdvertisingInjury = _gL7Exposure.LimitedCovForPersonalAndAdvertisingInjury
    _liquorClassCode = _gL7Exposure.LiquorClassCode
    _liquorClassDescription = _gL7Exposure.LiquorClassDescription
    _liquorDedFactorOverride = _gL7Exposure.LiquorDedFactorOverride
    _liquorDeductible = _gL7Exposure.LiquorDeductible
    _liquorELPOverride = _gL7Exposure.LiquorELPOverride
    _liquorExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.LiquorExposure
    _liquorPremiumBasis = _gL7Exposure.LiquorPremiumBasis
    _lmtdProdsWithdrawalDeductibleFactorOverride = _gL7Exposure.LmtdProdsWithdrawalDeductibleFactorOverride
    _medPayCovForStud = _gL7Exposure.MedPayCovForStud
    _miscIfAnyBasis = _gL7Exposure.MiscIfAnyBasis
    _municipalityOperatesAFireDepartment = _gL7Exposure.MunicipalityOperatesAFireDepartment
    _numPassgrFreightTrains = _gL7Exposure.NumPassgrFreightTrains
    _otherThanProdsCompldOpsCov = _gL7Exposure.OtherThanProdsCompldOpsCov
    _ownersContractorsClassCode = _gL7Exposure.OwnersContractorsClassCode
    _ownersContractorsClassDescription = _gL7Exposure.OwnersContractorsClassDescription
    _ownersContractorsELPOverOneMillionOverride = _gL7Exposure.OwnersContractorsELPOverOneMillionOverride
    _ownersContractorsELPOverride = _gL7Exposure.OwnersContractorsELPOverride
    _ownersContractorsExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.OwnersContractorsExposure
    _ownersContractorsPremiumBasis = _gL7Exposure.OwnersContractorsPremiumBasis
    _pollutionClassCode = _gL7Exposure.PollutionClassCode
    _pollutionClassDescription = _gL7Exposure.PollutionClassDescription
    _pollutionExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.PollutionExposure
    _pollutionPremiumBasis = _gL7Exposure.PollutionPremiumBasis
    _premOpsBIDeductible = _gL7Exposure.PremOpsBIDeductible
    _premOpsBIDeductibleFactorOverride = _gL7Exposure.PremOpsBIDeductibleFactorOverride
    _premOpsBIPDDeductible = _gL7Exposure.PremOpsBIPDDeductible
    _premOpsBIPDDeductibleFactorOverride = _gL7Exposure.PremOpsBIPDDeductibleFactorOverride
    _premOpsELPOverride = _gL7Exposure.PremOpsELPOverride
    _premOpsExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.PremOpsExposure
    _premOpsIncrdLimitTableAssignment = _gL7Exposure.PremOpsIncrdLimitTableAssignment
    _premOpsIncrdLimitTableAssignmentOverride = _gL7Exposure.PremOpsIncrdLimitTableAssignmentOverride
    _premOpsPDDeductible = _gL7Exposure.PremOpsPDDeductible
    _premOpsPDDeductibleFactorOverride = _gL7Exposure.PremOpsPDDeductibleFactorOverride
    _premOpsPremiumBasis = _gL7Exposure.PremOpsPremiumBasis
    _prodsCompldOpsBIDeductible = _gL7Exposure.ProdsCompldOpsBIDeductible
    _prodsCompldOpsBIDeductibleFactorOverride = _gL7Exposure.ProdsCompldOpsBIDeductibleFactorOverride
    _prodsCompldOpsBIPDDeductible = _gL7Exposure.ProdsCompldOpsBIPDDeductible
    _prodsCompldOpsBIPDDeductibleFactorOverride = _gL7Exposure.ProdsCompldOpsBIPDDeductibleFactorOverride
    _prodsCompldOpsCov = _gL7Exposure.ProdsCompldOpsCov
    _prodsCompldOpsELPOverride = _gL7Exposure.ProdsCompldOpsELPOverride
    _prodsCompldOpsExposure = _gL7Exposure.AuditedProdsCompltdOpsExposure ?: _gL7Exposure.ProdsCompldOpsExposure
    _prodsCompldOpsIncrdLimitTableAssignment = _gL7Exposure.ProdsCompldOpsIncrdLimitTableAssignment
    _prodsCompldOpsIncrdLimitTableAssignmentOverride = _gL7Exposure.ProdsCompldOpsIncrdLimitTableAssignmentOverride
    _prodsCompldOpsPDDeductible = _gL7Exposure.ProdsCompldOpsPDDeductible
    _prodsCompldOpsPDDeductibleFactorOverride = _gL7Exposure.ProdsCompldOpsPDDeductibleFactorOverride
    _prodsCompldOpsPremiumBasis = _gL7Exposure.ProdsCompldOpsPremiumBasis
    _productCoverage = _gL7Exposure.ProductCoverage
    _productWithdrawalCoverage = _gL7Exposure.ProductWithdrawalCoverage
    _productWithdrawalDeductible = _gL7Exposure.ProductWithdrawalDeductible
    _productWithdrawalDeductibleFactorOverride = _gL7Exposure.ProductWithdrawalDeductibleFactorOverride
    _productWithdrawalELPOverride = _gL7Exposure.ProductWithdrawalELPOverride
    _productWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment = _gL7Exposure.ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment
    _productWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride = _gL7Exposure.ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride
    _productWithdrawalExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.ProductWithdrawalExposure
    _productWithdrawalPremiumBasis = _gL7Exposure.ProductWithdrawalPremiumBasis
    _railroadClassCode = _gL7Exposure.RailroadClassCode
    _railroadClassDescription = _gL7Exposure.RailroadClassDescription
    _railroadExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.RailroadExposure
    _railroadPremiumBasis = _gL7Exposure.RailroadPremiumBasis
    _sprayPainting = _gL7Exposure.SprayPainting
    _totalCostWorkTrainsOrOtherRREquipmtAssigned = _gL7Exposure.TotalCostWorkTrainsOrOtherRREquipmtAssigned
    _uSTClassCode = _gL7Exposure.USTClassCode
    _uSTClassDescription = _gL7Exposure.USTClassDescription
    _uSTExposure = _gL7Exposure.AuditedExposure ?: _gL7Exposure.USTExposure
    _uSTPremiumBasis = _gL7Exposure.USTPremiumBasis
    _displayName = _gL7Exposure.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _unmannedAircraft : GL7GeneralLiabilityUnmannedAircraftGroupingDTO as readonly UnmannedAircraft  

  @VisibleInRateflow
  protected var _terrorism : GL7GeneralLiabilityTerrorismDTO as readonly Terrorism  

  @VisibleInRateflow
  protected var _snowplowOperationsCoverage : GL7GeneralLiabilitySnowplowOperationsCoverageDTO as readonly SnowplowOperationsCoverage  

  @VisibleInRateflow
  protected var _exclusionCoverageCMedicalPaymentsClassification : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO as readonly ExclusionCoverageCMedicalPaymentsClassification  

  @VisibleInRateflow
  protected var _classificationRailroadCoverage : GL7GeneralLiabilityClassificationRailroadCoverageDTO as readonly ClassificationRailroadCoverage  

  @VisibleInRateflow
  protected var _classificationProdsCompldOpsCoverage : GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO as readonly ClassificationProdsCompldOpsCoverage  

  @VisibleInRateflow
  protected var _classificationPremOpsCoverage : GL7GeneralLiabilityClassificationPremOpsCoverageDTO as readonly ClassificationPremOpsCoverage  

  @VisibleInRateflow
  protected var _classificationPollutionCoverage : GL7GeneralLiabilityClassificationPollutionCoverageDTO as readonly ClassificationPollutionCoverage  

  @VisibleInRateflow
  protected var _classificationOwnersContractorsCoverage : GL7GeneralLiabilityClassificationOwnersContractorsCoverageDTO as readonly ClassificationOwnersContractorsCoverage  

  @VisibleInRateflow
  protected var _classificationLiquorCoverage : GL7GeneralLiabilityClassificationLiquorCoverageDTO as readonly ClassificationLiquorCoverage  

  @VisibleInRateflow
  protected var _classificationExclusionCoverageBProductWithdrawalLiability : GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO as readonly ClassificationExclusionCoverageBProductWithdrawalLiability  

  @VisibleInRateflow
  protected var _classificationExclusionCoverageAProductWithdrawalExpense : GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO as readonly ClassificationExclusionCoverageAProductWithdrawalExpense  

  @VisibleInRateflow
  protected var _classificationElectronicDataLiabilityCoverage : GL7GeneralLiabilityClassificationElectronicDataLiabilityCoverageDTO as readonly ClassificationElectronicDataLiabilityCoverage  

  @VisibleInRateflow
  protected var _canoesOrRowboats : GL7GeneralLiabilityCanoesOrRowboatsDTO as readonly CanoesOrRowboats  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _uSTPremiumBasis : java.lang.String as USTPremiumBasis = ""

  @VisibleInRateflow
  protected var _uSTExposure : java.lang.Long as USTExposure = 0

  @VisibleInRateflow
  protected var _uSTClassDescription : java.lang.String as USTClassDescription = ""

  @VisibleInRateflow
  protected var _uSTClassCode : java.lang.String as USTClassCode = ""

  @VisibleInRateflow
  protected var _uSTAggregateLimit : java.lang.String as USTAggregateLimit = ""

  @VisibleInRateflow
  protected var _totalCostWorkTrainsOrOtherRREquipmtAssigned : java.lang.Integer as TotalCostWorkTrainsOrOtherRREquipmtAssigned = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("TerrCovUnderlyigPolicyStatCode")
  protected var _terrorismCovUnderlyigPolicyStatCode : java.lang.String as TerrorismCovUnderlyigPolicyStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  protected var _sprayPainting : java.lang.String as SprayPainting = ""

  @VisibleInRateflow
  protected var _specialCombinedMinPremiumClassIndicatorLookup : java.lang.Integer as SpecialCombinedMinPremiumClassIndicatorLookup = 0

  @VisibleInRateflow
  protected var _specialCombinedMinPremiumClassIndicator : java.lang.String as SpecialCombinedMinPremiumClassIndicator = ""

  @VisibleInRateflow
  protected var _railroadPremiumBasis : java.lang.String as RailroadPremiumBasis = ""

  @VisibleInRateflow
  protected var _railroadHomogeneityIndex : java.lang.String as RailroadHomogeneityIndex = ""

  @VisibleInRateflow
  protected var _railroadExposure : java.lang.Long as RailroadExposure = 0

  @VisibleInRateflow
  protected var _railroadEachOccurrenceLimit : java.lang.String as RailroadEachOccurrenceLimit = ""

  @VisibleInRateflow
  protected var _railroadELP : java.lang.String as RailroadELP = ""

  @VisibleInRateflow
  protected var _railroadClassDescription : java.lang.String as RailroadClassDescription = ""

  @VisibleInRateflow
  protected var _railroadClassCode : java.lang.String as RailroadClassCode = ""

  @VisibleInRateflow
  protected var _railroadAggregateLimit : java.lang.String as RailroadAggregateLimit = ""

  @VisibleInRateflow
  protected var _railroad : java.lang.String as Railroad = ""

  @VisibleInRateflow
  protected var _productWithdrawalPremiumBasis : java.lang.String as ProductWithdrawalPremiumBasis = ""

  @VisibleInRateflow
  protected var _productWithdrawalExposure : java.lang.Long as ProductWithdrawalExposure = 0

  @VisibleInRateflow
  protected var _productWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride : java.lang.String as ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride = ""

  @VisibleInRateflow
  protected var _productWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment : java.lang.String as ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _productWithdrawalELPOverride : java.math.BigDecimal as ProductWithdrawalELPOverride = 0.0

  @VisibleInRateflow
  protected var _productWithdrawalELP : java.lang.String as ProductWithdrawalELP = ""

  @VisibleInRateflow
  protected var _productWithdrawalDeductibleFactorOverride : java.math.BigDecimal as ProductWithdrawalDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _productWithdrawalDeductible : java.lang.String as ProductWithdrawalDeductible = ""

  @VisibleInRateflow
  protected var _productWithdrawalCoverage : java.lang.String as ProductWithdrawalCoverage = ""

  @VisibleInRateflow
  protected var _productCoverage : java.lang.String as ProductCoverage = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsPremiumBasis : java.lang.String as ProdsCompldOpsPremiumBasis = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsPDDeductibleFactorOverride : java.math.BigDecimal as ProdsCompldOpsPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsPDDeductible : java.lang.String as ProdsCompldOpsPDDeductible = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsIncrdLimitTableAssignmentOverride : java.lang.String as ProdsCompldOpsIncrdLimitTableAssignmentOverride = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsIncrdLimitTableAssignment : java.lang.String as ProdsCompldOpsIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsIncrdLimitFactor : java.math.BigDecimal as ProdsCompldOpsIncrdLimitFactor = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsHomogeneityIndex : java.lang.String as ProdsCompldOpsHomogeneityIndex = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsExposure : java.lang.Long as ProdsCompldOpsExposure = 0

  @VisibleInRateflow
  protected var _prodsCompldOpsELPOverride : java.math.BigDecimal as ProdsCompldOpsELPOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsELP : java.lang.String as ProdsCompldOpsELP = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsCov : java.lang.String as ProdsCompldOpsCov = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsBIPDDeductibleFactorOverride : java.math.BigDecimal as ProdsCompldOpsBIPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsBIPDDeductible : java.lang.String as ProdsCompldOpsBIPDDeductible = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsBIDeductibleFactorOverride : java.math.BigDecimal as ProdsCompldOpsBIDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsBIDeductible : java.lang.String as ProdsCompldOpsBIDeductible = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsAggregateLimitGovernmentalSubdivision : java.lang.String as ProdsCompldOpsAggregateLimitGovernmentalSubdivision = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsAggregateLimit : java.lang.String as ProdsCompldOpsAggregateLimit = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _premOpsProdsEachOccurrenceLimitGovernmentalSubdivision : java.lang.String as PremOpsProdsEachOccurrenceLimitGovernmentalSubdivision = ""

  @VisibleInRateflow
  protected var _premOpsProdsEachOccurrenceLimit : java.lang.String as PremOpsProdsEachOccurrenceLimit = ""

  @VisibleInRateflow
  protected var _premOpsPremiumBasis : java.lang.String as PremOpsPremiumBasis = ""

  @VisibleInRateflow
  protected var _premOpsPDDeductibleFactorOverride : java.math.BigDecimal as PremOpsPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsPDDeductible : java.lang.String as PremOpsPDDeductible = ""

  @VisibleInRateflow
  protected var _premOpsIncrdLimitTableAssignmentOverride : java.lang.String as PremOpsIncrdLimitTableAssignmentOverride = ""

  @VisibleInRateflow
  protected var _premOpsIncrdLimitTableAssignment : java.lang.String as PremOpsIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _premOpsIncrdLimitFactor : java.math.BigDecimal as PremOpsIncrdLimitFactor = 0.0

  @VisibleInRateflow
  protected var _premOpsHomogeneityIndex : java.lang.String as PremOpsHomogeneityIndex = ""

  @VisibleInRateflow
  protected var _premOpsExposureCalc : java.lang.Long as PremOpsExposureCalc = 0

  @VisibleInRateflow
  protected var _premOpsExposure : java.lang.Long as PremOpsExposure = 0

  @VisibleInRateflow
  protected var _premOpsELPOverride : java.math.BigDecimal as PremOpsELPOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsELP : java.lang.String as PremOpsELP = ""

  @VisibleInRateflow
  protected var _premOpsBIPDDeductibleFactorOverride : java.math.BigDecimal as PremOpsBIPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsBIPDDeductible : java.lang.String as PremOpsBIPDDeductible = ""

  @VisibleInRateflow
  protected var _premOpsBIDeductibleFactorOverride : java.math.BigDecimal as PremOpsBIDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsBIDeductible : java.lang.String as PremOpsBIDeductible = ""

  @VisibleInRateflow
  protected var _pollutionPremiumBasis : java.lang.String as PollutionPremiumBasis = ""

  @VisibleInRateflow
  protected var _pollutionExposure : java.lang.Long as PollutionExposure = 0

  @VisibleInRateflow
  protected var _pollutionClassDescription : java.lang.String as PollutionClassDescription = ""

  @VisibleInRateflow
  protected var _pollutionClassCode : java.lang.String as PollutionClassCode = ""

  @VisibleInRateflow
  protected var _pollutionAggregateLimit : java.lang.String as PollutionAggregateLimit = ""

  @VisibleInRateflow
  protected var _pollution : java.lang.String as Pollution = ""

  @VisibleInRateflow
  protected var _perPersonLimitOtherThanPD : java.lang.String as PerPersonLimitOtherThanPD = ""

  @VisibleInRateflow
  protected var _perPersonLimit : java.lang.String as PerPersonLimit = ""

  @VisibleInRateflow
  protected var _ownersContractorsPremiumBasis : java.lang.String as OwnersContractorsPremiumBasis = ""

  @VisibleInRateflow
  protected var _ownersContractorsHomogeneityIndex : java.lang.String as OwnersContractorsHomogeneityIndex = ""

  @VisibleInRateflow
  protected var _ownersContractorsExposure : java.lang.Long as OwnersContractorsExposure = 0

  @VisibleInRateflow
  protected var _ownersContractorsELPOverride : java.math.BigDecimal as OwnersContractorsELPOverride = 0.0

  @VisibleInRateflow
  protected var _ownersContractorsELPOverOneMillionOverride : java.math.BigDecimal as OwnersContractorsELPOverOneMillionOverride = 0.0

  @VisibleInRateflow
  protected var _ownersContractorsELP : java.lang.String as OwnersContractorsELP = ""

  @VisibleInRateflow
  protected var _ownersContractorsClassDescription : java.lang.String as OwnersContractorsClassDescription = ""

  @VisibleInRateflow
  protected var _ownersContractorsClassCode : java.lang.String as OwnersContractorsClassCode = ""

  @VisibleInRateflow
  protected var _otherThanProdsCompldOpsCov : java.lang.String as OtherThanProdsCompldOpsCov = ""

  @VisibleInRateflow
  protected var _numPassgrFreightTrains : java.lang.String as NumPassgrFreightTrains = ""

  @VisibleInRateflow
  protected var _municipalityOperatesAFireDepartment : java.lang.String as MunicipalityOperatesAFireDepartment = ""

  @VisibleInRateflow
  protected var _miscIfAnyBasis : java.lang.String as MiscIfAnyBasis = ""

  @VisibleInRateflow
  protected var _medPayCovForStud : java.lang.String as MedPayCovForStud = ""

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalProductWithdrawalFactor : java.math.BigDecimal as LmtdProdsWithdrawalProductWithdrawalFactor = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalPremium : java.math.BigDecimal as LmtdProdsWithdrawalPremium = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalLCM : java.math.BigDecimal as LmtdProdsWithdrawalLCM = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalIncreasedLimitsFactor : java.math.BigDecimal as LmtdProdsWithdrawalIncreasedLimitsFactor = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalFinalRate : java.math.BigDecimal as LmtdProdsWithdrawalFinalRate = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalFinalILF : java.math.BigDecimal as LmtdProdsWithdrawalFinalILF = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalDeductibleFactorOverride : java.math.BigDecimal as LmtdProdsWithdrawalDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalDeductibleFactorForRating : java.math.BigDecimal as LmtdProdsWithdrawalDeductibleFactorForRating = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalDeductible : java.lang.String as LmtdProdsWithdrawalDeductible = ""

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalCSLILF : java.math.BigDecimal as LmtdProdsWithdrawalCSLILF = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalBaseRate : java.math.BigDecimal as LmtdProdsWithdrawalBaseRate = 0.0

  @VisibleInRateflow
  protected var _lmtdProdsWithdrawalAggregateLimit : java.lang.String as LmtdProdsWithdrawalAggregateLimit = ""

  @VisibleInRateflow
  protected var _liquorPremiumBasis : java.lang.String as LiquorPremiumBasis = ""

  @VisibleInRateflow
  protected var _liquorLiabGrade : java.lang.String as LiquorLiabGrade = ""

  @VisibleInRateflow
  protected var _liquorHomogeneityIndex : java.lang.String as LiquorHomogeneityIndex = ""

  @VisibleInRateflow
  protected var _liquorExposure : java.lang.Long as LiquorExposure = 0

  @VisibleInRateflow
  protected var _liquorELPOverride : java.math.BigDecimal as LiquorELPOverride = 0.0

  @VisibleInRateflow
  protected var _liquorELP : java.lang.String as LiquorELP = ""

  @VisibleInRateflow
  protected var _liquorDeductible : java.lang.String as LiquorDeductible = ""

  @VisibleInRateflow
  protected var _liquorDedFactorOverride : java.math.BigDecimal as LiquorDedFactorOverride = 0.0

  @VisibleInRateflow
  protected var _liquorClassDescription : java.lang.String as LiquorClassDescription = ""

  @VisibleInRateflow
  protected var _liquorClassCode : java.lang.String as LiquorClassCode = ""

  @VisibleInRateflow
  protected var _liquorAggregateLimit : java.lang.String as LiquorAggregateLimit = ""

  @VisibleInRateflow
  protected var _liquor : java.lang.String as Liquor = ""

  @VisibleInRateflow
  protected var _limitedCovForPersonalAndAdvertisingInjury : java.lang.String as LimitedCovForPersonalAndAdvertisingInjury = ""

  @VisibleInRateflow
  protected var _injurySuprvsrInspctrsOtherEmpsCov : java.lang.String as InjurySuprvsrInspctrsOtherEmpsCov = ""

  @VisibleInRateflow
  protected var _incidentLimit : java.lang.String as IncidentLimit = ""

  @VisibleInRateflow
  protected var _ifAnyBasisProdsCompldOps : java.lang.String as IfAnyBasisProdsCompldOps = ""

  @VisibleInRateflow
  protected var _ifAnyBasis : java.lang.String as IfAnyBasis = ""

  @VisibleInRateflow
  protected var _generalAggregateLimitGovernmentalSubdivision : java.lang.String as GeneralAggregateLimitGovernmentalSubdivision = ""

  @VisibleInRateflow
  protected var _generalAggregateLimit : java.lang.String as GeneralAggregateLimit = ""

  @VisibleInRateflow
  protected var _finalProductWithdrawalIncrdLimitTableAssignment : java.lang.String as FinalProductWithdrawalIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _finalProdsCompldOpsIncrdLimitTableAssignment : java.lang.String as FinalProdsCompldOpsIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _finalProdsCompldOpsELP : java.math.BigDecimal as FinalProdsCompldOpsELP = 0.0

  @VisibleInRateflow
  protected var _finalPremOpsIncrdLimitTableAssignmentInt : java.lang.Integer as FinalPremOpsIncrdLimitTableAssignmentInt = 0

  @VisibleInRateflow
  protected var _finalPremOpsIncrdLimitTableAssignment : java.lang.String as FinalPremOpsIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _estimatedContractCostRatio : java.math.BigDecimal as EstimatedContractCostRatio = 0.0

  @VisibleInRateflow
  protected var _estdContractCostWORRHzd : java.math.BigDecimal as EstdContractCostWORRHzd = 0.0

  @VisibleInRateflow
  protected var _eachPollutionIncidentLimit : java.lang.String as EachPollutionIncidentLimit = ""

  @VisibleInRateflow
  protected var _eachCommonCauseLimit : java.lang.String as EachCommonCauseLimit = ""

  @VisibleInRateflow
  protected var _eDLPremiumRatingBase : java.lang.String as EDLPremiumRatingBase = ""

  @VisibleInRateflow
  protected var _eDLExposure : java.lang.Long as EDLExposure = 0

  @VisibleInRateflow
  protected var _eDLClassDescription : java.lang.String as EDLClassDescription = ""

  @VisibleInRateflow
  protected var _eDLClassCode : java.lang.String as EDLClassCode = ""

  @VisibleInRateflow
  protected var _county : java.lang.String as County = ""

  @VisibleInRateflow
  protected var _classificationType : java.lang.String as ClassificationType = ""

  @VisibleInRateflow
  protected var _classDescription : java.lang.String as ClassDescription = ""

  @VisibleInRateflow
  protected var _classCode : java.lang.String as ClassCode = ""

  @VisibleInRateflow
  protected var _additionalInterestCount : java.lang.Integer as AdditionalInterestCount = 0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Exposure {
   return _dataModel as GL7Exposure
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