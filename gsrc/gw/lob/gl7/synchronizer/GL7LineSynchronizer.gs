package gw.lob.gl7.synchronizer

uses gw.api.productmodel.CoveragePattern
uses gw.api.productmodel.ExclusionPattern
uses gw.api.system.PCDependenciesGateway
uses gw.lob.common.LobPropertyService
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.common.dependency.ExistenceSupport
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.displayable.LobFieldMetaSupport
uses gw.lob.gl7.GL7SublineTypeName
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants
uses gw.web.productmodel.ProductModelSyncIssueWrapper

class GL7LineSynchronizer {

  private static final var SUBLINETYPE_TERRORISM_ENDORSEMENT = "GL7TerrEndorsement"
  private static final var SUBLINETYPE_TERRORISM_DISCLOSURE_PURSUANT = "GL7DisclosurePursuantToTerrRiskInsuranceActOf2002"
  private static final var SUBLINETYPE_TERRORISM_EXTENDED_REPORTING_PERIOD = "GL7ExtendedReportingPeriodForTerr"

  private static final var EXPOSURE_TERRORISM = "GL7Terr"
  private static final var EXPOSURE_TERRORISM_OTHER_COVERAGE = "GL7TerrAllOtherSubline"
  private static final var EXPOSURE_TERRORISM_PREMOPS_COVERAGE = "GL7TerrPremOps"
  private static final var EXPOSURE_TERRORISM_PRODSCOMPLD_COVERAGE = "GL7TerrProdsCompldOps"

  private static final var EXPOSURE_MEDICAL_PAYMENTS_COVC_EXCLUSION = "GL7ExclCovCMedPayLocClassLvl1"

  private static final var SCHEDULE_RATING_MOD_APPLIES_OFF = "No"

  private static final var MEDICAL_PAYMENTS_EXCL_OFF = "No"

  private var _line : GL7GeneralLiabilityLine
  private var _sublines : GL7SublineType[]

  construct(line : GL7GeneralLiabilityLine) {
    _line = line
  }

  construct(inputSubline : GL7SublineType[]) {
    _sublines = inputSubline
  }

  private property get Sublines() : GL7SublineType[] {
    return _sublines?:_line.GL7SublineTypes
  }

  function syncSublineTypeFields() {

    Sublines.each(\sublineType -> {
      LobCompatibilityHelper.setFieldValue(sublineType, GL7CompatibilityConstants.SUBLINETYPE_PersonalAndAdvertisingInjuryExcl, toYesNo(sublineType.GL7ExclPersonalAdvertisingInjuryExists))

      var medPaymentsLobFieldMeta = LobFieldMetaSupport.Instance.findFieldMeta(sublineType, GL7CompatibilityConstants.SUBLINETYPE_MedicalPaymentsExcl)
      if (not medPaymentsLobFieldMeta.Visible) { // prior to CW201912, this field was hidden so no user decision was read in. But now we want user decision to override this computation
        LobCompatibilityHelper.setFieldValue(sublineType, GL7CompatibilityConstants.SUBLINETYPE_MedicalPaymentsExcl, toYesNo(hasMedicalPaymentsExclusionFor(sublineType)))
      } else {
        if (LobCompatibilityHelper.getFieldValue(sublineType, GL7CompatibilityConstants.SUBLINETYPE_MedicalPaymentsExcl) == MEDICAL_PAYMENTS_EXCL_OFF) {
          var exclPattern = PCDependenciesGateway.ProductModel.getPattern(EXPOSURE_MEDICAL_PAYMENTS_COVC_EXCLUSION, ExclusionPattern)
          if (exclPattern != null) {
            sublineType.Locations.each(\location -> {
              location.GL7Exposures.each(\exposure -> {
                var exclusion = exposure.getExclusion(exclPattern)
                var exclusionIsMandatory = ExistenceSupport.Instance.getClauseExistence(exposure, EXPOSURE_MEDICAL_PAYMENTS_COVC_EXCLUSION) == ExistenceType.TC_REQUIRED
                if (not exclusionIsMandatory and exclusion != null) {
                  exposure.removeExclusionFromCoverable(exclusion)
                }
              })
            })
          }
        }
      }

      LobCompatibilityHelper.setFieldValue(sublineType, GL7CompatibilityConstants.SUBLINETYPE_DamageToPremisesRentedToYouExcl, toYesNo(sublineType.GL7ExclDamageToPremRentedToYouExists))
      syncSublineFields(sublineType)
      syncUnmannedAircraftCoverages(sublineType)
    })
  }

  function syncSublineTypeAddlCoverages() : List<ProductModelSyncIssueWrapper> {
    var issues : List<ProductModelSyncIssueWrapper> = {}
    Sublines.each(\sublineType -> {
      issues.addAll(synchronizeTerrorismCoverage(sublineType, {
          SUBLINETYPE_TERRORISM_ENDORSEMENT,
          SUBLINETYPE_TERRORISM_DISCLOSURE_PURSUANT,
          SUBLINETYPE_TERRORISM_EXTENDED_REPORTING_PERIOD
      }))
      sublineType.Locations*.GL7Exposures.each(\exposure -> synchronizeTerrorismCoverage(exposure, {
          EXPOSURE_TERRORISM,
          EXPOSURE_TERRORISM_OTHER_COVERAGE,
          EXPOSURE_TERRORISM_PREMOPS_COVERAGE,
          EXPOSURE_TERRORISM_PRODSCOMPLD_COVERAGE
      }))
    })
    return issues
  }

  private function synchronizeTerrorismCoverage(coverable : Coverable, coverageCodeIdentifier : String[]) : List<ProductModelSyncIssueWrapper> {
    var coverageList = new LinkedList<CoveragePattern>()
    coverageCodeIdentifier.each(\codeIdentifier -> coverageList.add(PCDependenciesGateway.ProductModel.getPatternByCodeIdentifier(codeIdentifier, CoveragePattern)))
    return coverable.createOrSyncCoverages(coverageList.toTypedArray())
  }

  private function syncSublineFields(sublineType : GL7SublineType) {
    sublineType.Sublines.each(\subline -> {
      subline.DamageToPremisesRentedToYouExclGovernmentalSubdivision = toYesNo(sublineType.GL7ExclDamageToPremRentedToYouExists)
    })

    if (LobCompatibilityHelper.hasField(sublineType, GL7CompatibilityConstants.ScheduleRatingModificationApplies) and
        LobCompatibilityHelper.getFieldValue(sublineType, GL7CompatibilityConstants.ScheduleRatingModificationApplies) == SCHEDULE_RATING_MOD_APPLIES_OFF) {
      // Only synchronize the ScheduleRatingModificationApplies dependent fields when it's reset to off
      LobPropertyService.Instance.updateEntityDependentProperties(
          new PropertyInstanceInfo(LobCompatibilityHelper.getBoundPropertyReference(sublineType, GL7CompatibilityConstants.ScheduleRatingModificationApplies)))
    }
  }

  private function syncUnmannedAircraftCoverages(sublineType : GL7SublineType) {
    if (sublineType.SublineTypeName == GL7SublineTypeName.RAILROAD.Description) {
      if (not LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftRailroad)) {
        removeUnmannedAircrafts(sublineType)
      }
    } else if (sublineType.SublineTypeName == GL7SublineTypeName.OWNERS_AND_CONTRACTORS.Description) {
      if (not LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftOwnersContractors)) {
        removeUnmannedAircrafts(sublineType)
      }
    } else if (sublineType.SublineTypeName == GL7SublineTypeName.CGL.Description or sublineType.SublineTypeName == GL7SublineTypeName.PREMISE_OPERATIONS.Description ) {
      var covLmtdCovForDesignatedUnmannedAircraftPremiumToRe = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftPremiumToRe, CoveragePattern)
      var hasBoth = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraft)
      var hasCovA = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovAOnly)
      var hasCovB = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovBOnly)
      if (hasBoth or hasCovA or hasCovB) {
        LobCompatibilityHelper.setFieldValue(sublineType, GL7CompatibilityConstants.LimitedCovForDesignatedUnmannedAircraft, "Yes")
        if (sublineType.isCoverageAvailable(covLmtdCovForDesignatedUnmannedAircraftPremiumToRe)) {
          sublineType.setCoverageExists(covLmtdCovForDesignatedUnmannedAircraftPremiumToRe, Boolean.TRUE)
        }
      } else {
        LobCompatibilityHelper.setFieldValue(sublineType, GL7CompatibilityConstants.LimitedCovForDesignatedUnmannedAircraft, "No")
        sublineType.setCoverageExists(covLmtdCovForDesignatedUnmannedAircraftPremiumToRe, Boolean.FALSE)
        removeUnmannedAircrafts(sublineType)
      }

      if (not hasBoth) {
        if (not hasCovA) {  // remove CovA for all unmanned aircrafts
          sublineType.Locations*.GL7Exposures*.UnmannedAircrafts
              .each(\unmannedAircraft -> {
                LobCompatibilityHelper.removeCoverage(unmannedAircraft, GL7CompatibilityConstants.COV_UnmannedAircraftCovABIPD)
                LobCompatibilityHelper.setFieldValue(unmannedAircraft, GL7CompatibilityConstants.COV_UnmannedAircraftCovABIPD_CovAApplies, "No")
              }
              )
        }
        if (not hasCovB) { // remove CovA for all unmanned aircrafts
          sublineType.Locations*.GL7Exposures*.UnmannedAircrafts
              .each(\unmannedAircraft -> {
                LobCompatibilityHelper.removeCoverage(unmannedAircraft, GL7CompatibilityConstants.COV_UnmannedAircraftCovBPAI)
                LobCompatibilityHelper.setFieldValue(unmannedAircraft, GL7CompatibilityConstants.COV_UnmannedAircraftCovBPAI_CovBApplies, "No")
              })
        }
      }

      sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.each(\unmannedAircraft -> synchronizeTerrorismCoverage(unmannedAircraft, {
          GL7CompatibilityConstants.COV_UnmannedAircraftTerr
      }))
    }
  }

  private function removeUnmannedAircrafts(sublineType : GL7SublineType){
    sublineType.Locations*.GL7Exposures*.UnmannedAircrafts
        .each(\unmannedAircraft -> {
          unmannedAircraft.Exposure.removeAndRenumberUnmannedAircrafts(unmannedAircraft, sublineType.Line)
        })
    sublineType.Locations*.GL7Exposures*.UnmannedAircrafts*.remove()
  }

  private function hasMedicalPaymentsExclusionFor(subline : GL7SublineType) : boolean {
    return subline.Locations.hasMatch(\location ->
        location.GL7ExclCovCMedPayLocClassLvlExists or
            location.GL7Exposures.hasMatch(\exposure -> exposure.GL7ExclCovCMedPayLocClassLvl1Exists))
  }

  private function toYesNo(value : boolean) : String {
    return (value as Boolean).toYesNoString()
  }

  public function synchronizeAmdmtLiquorLiabExcl() : List<ProductModelSyncIssueWrapper> {
    var issues : List<ProductModelSyncIssueWrapper> = {}
    var clauseNames = {"GL7StateAmndmtOfLiquorLiabExclExcptnScheddActivs", "GL7StateAmndmtOfLiquorLiabExclExcptnScheddActivsPr"}

    clauseNames.each(\clauseName -> {
      var exclPattern = PCDependenciesGateway.ProductModel.getPattern(clauseName, ExclusionPattern)
      if (exclPattern != null) {
        _line.GL7SublineTypes*.Sublines.each(\sbln -> {
          issues.addAll(sbln.createOrSyncExclusions({exclPattern}))
        })
      }
    })

    return issues
  }

}