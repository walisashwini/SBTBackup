package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationDTO {

  public construct(_gL7Exposure : GL7Exposure, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7Exposure, parent )
    _contractor = (_cf.stateMatches(_gL7Exposure, Parameters)) ? _gL7Exposure.Contractor : _contractor
    _liquorExposureOnPremises = (_cf.stateMatches(_gL7Exposure, Parameters)) ? _gL7Exposure.LiquorExposureOnPremises : _liquorExposureOnPremises
    _canoesOrRowboats = _gL7Exposure.GL7CanoesOrRowboats != null ? new GL7GeneralLiabilityCanoesOrRowboatsDTO(_gL7Exposure.GL7CanoesOrRowboats, this) : null
    _classificationElectronicDataLiabilityCoverage = _gL7Exposure.GL7ClassificationElectrDataLiab != null ? new GL7GeneralLiabilityClassificationElectronicDataLiabilityCoverageDTO(_gL7Exposure.GL7ClassificationElectrDataLiab, this) : null
    _classificationExclusionCoverageAProductWithdrawalExpense = _gL7Exposure.GL7ClassificationExclCovAProductWithdrawalExpense != null ? new GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO(_gL7Exposure.GL7ClassificationExclCovAProductWithdrawalExpense, this) : null
    _classificationExclusionCoverageBProductWithdrawalLiability = _gL7Exposure.GL7ClassificationExclCovBProductWithdrawalLiab != null ? new GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO(_gL7Exposure.GL7ClassificationExclCovBProductWithdrawalLiab, this) : null
    _classificationLiquorCoverage = _gL7Exposure.GL7ClassificationLiquor != null ? new GL7GeneralLiabilityClassificationLiquorCoverageDTO(_gL7Exposure.GL7ClassificationLiquor, this) : null
    _classificationOwnersContractorsCoverage = _gL7Exposure.GL7ClassificationOwnersContractors != null ? new GL7GeneralLiabilityClassificationOwnersContractorsCoverageDTO(_gL7Exposure.GL7ClassificationOwnersContractors, this) : null
    _classificationPollutionCoverage = _gL7Exposure.GL7ClassificationPollution != null ? new GL7GeneralLiabilityClassificationPollutionCoverageDTO(_gL7Exposure.GL7ClassificationPollution, this) : null
    _classificationPremOpsCoverage = _gL7Exposure.GL7ClassificationPremOps != null ? new GL7GeneralLiabilityClassificationPremOpsCoverageDTO(_gL7Exposure.GL7ClassificationPremOps, this) : null
    _classificationProdsCompldOpsCoverage = _gL7Exposure.GL7ClassificationProdsCompldOps != null ? new GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO(_gL7Exposure.GL7ClassificationProdsCompldOps, this) : null
    _classificationRailroadCoverage = _gL7Exposure.GL7ClassificationRailroad != null ? new GL7GeneralLiabilityClassificationRailroadCoverageDTO(_gL7Exposure.GL7ClassificationRailroad, this) : null
    _exclusionCoverageCMedicalPaymentsClassification = _gL7Exposure.GL7ExclCovCMedPayLocClassLvl1 != null ? new GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO(_gL7Exposure.GL7ExclCovCMedPayLocClassLvl1, this) : null
    _snowplowOperationsCoverage = _gL7Exposure.GL7SnowplowOps != null ? new GL7GeneralLiabilitySnowplowOperationsCoverageDTO(_gL7Exposure.GL7SnowplowOps, this) : null
    _terrorism = _gL7Exposure.GL7Terr != null ? new GL7GeneralLiabilityTerrorismDTO(_gL7Exposure.GL7Terr, this) : null
    _unmannedAircraft = _gL7Exposure.UnmannedAircrafts?.where(\elm -> _cf.stateMatches(elm, Parameters)) != null ? new GL7GeneralLiabilityUnmannedAircraftGroupingDTO(_gL7Exposure.UnmannedAircrafts?.where(\elm -> _cf.stateMatches(elm, Parameters)), this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get UnmannedAircraft() : GL7GeneralLiabilityUnmannedAircraftGroupingDTO {
   return _unmannedAircraft as GL7GeneralLiabilityUnmannedAircraftGroupingDTO
  }
  

  
  @VisibleInRateflow
  property get Terrorism() : GL7GeneralLiabilityTerrorismDTO {
   return _terrorism as GL7GeneralLiabilityTerrorismDTO
  }
  

  
  @VisibleInRateflow
  property get SnowplowOperationsCoverage() : GL7GeneralLiabilitySnowplowOperationsCoverageDTO {
   return _snowplowOperationsCoverage as GL7GeneralLiabilitySnowplowOperationsCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ExclusionCoverageCMedicalPaymentsClassification() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {
   return _exclusionCoverageCMedicalPaymentsClassification as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationRailroadCoverage() : GL7GeneralLiabilityClassificationRailroadCoverageDTO {
   return _classificationRailroadCoverage as GL7GeneralLiabilityClassificationRailroadCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationProdsCompldOpsCoverage() : GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO {
   return _classificationProdsCompldOpsCoverage as GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationPremOpsCoverage() : GL7GeneralLiabilityClassificationPremOpsCoverageDTO {
   return _classificationPremOpsCoverage as GL7GeneralLiabilityClassificationPremOpsCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationPollutionCoverage() : GL7GeneralLiabilityClassificationPollutionCoverageDTO {
   return _classificationPollutionCoverage as GL7GeneralLiabilityClassificationPollutionCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationOwnersContractorsCoverage() : GL7GeneralLiabilityClassificationOwnersContractorsCoverageDTO {
   return _classificationOwnersContractorsCoverage as GL7GeneralLiabilityClassificationOwnersContractorsCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationLiquorCoverage() : GL7GeneralLiabilityClassificationLiquorCoverageDTO {
   return _classificationLiquorCoverage as GL7GeneralLiabilityClassificationLiquorCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationExclusionCoverageBProductWithdrawalLiability() : GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO {
   return _classificationExclusionCoverageBProductWithdrawalLiability as GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationExclusionCoverageAProductWithdrawalExpense() : GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO {
   return _classificationExclusionCoverageAProductWithdrawalExpense as GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO
  }
  

  
  @VisibleInRateflow
  property get ClassificationElectronicDataLiabilityCoverage() : GL7GeneralLiabilityClassificationElectronicDataLiabilityCoverageDTO {
   return _classificationElectronicDataLiabilityCoverage as GL7GeneralLiabilityClassificationElectronicDataLiabilityCoverageDTO
  }
  

  
  @VisibleInRateflow
  property get CanoesOrRowboats() : GL7GeneralLiabilityCanoesOrRowboatsDTO {
   return _canoesOrRowboats as GL7GeneralLiabilityCanoesOrRowboatsDTO
  }
  

  @VisibleInRateflow
  var _liquorExposureOnPremises : java.lang.String as LiquorExposureOnPremises = ""

  @VisibleInRateflow
  var _contractor : java.lang.String as Contractor = ""

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}