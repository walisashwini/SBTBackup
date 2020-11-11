package gw.lob.gl7

uses entity.GL7SublineMod
uses gw.api.productmodel.CoveragePattern
uses gw.api.system.PCDependenciesGateway
uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.LobPropertyService
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants
uses gw.lob.gl7.synchronizer.GL7LineSynchronizer
uses gw.lob.gl7.synchronizer.GL7LocationSynchronizer
uses gw.web.productmodel.ProductModelSyncIssueWrapper

enhancement GL7LineEnhancement : entity.GL7GeneralLiabilityLine {

  function sublineTypeFor(subline : String) : GL7SublineType {
    return this.GL7SublineTypes.firstWhere(\part -> part.Subline == subline)
  }

  function sublineTypeExists(sublineType : String) : boolean {
    return sublineTypeFor(sublineType) != null
  }

  function sublineForJurisdiction(jurisdiction : Jurisdiction, sublineType : String) : GL7Subline {
    return sublineTypeFor(sublineType).Sublines.firstWhere(\subline -> subline.Jurisdiction == jurisdiction)
  }

  function jurisdictionsForSubline(sublineType : String) : List<typekey.Jurisdiction> {
    return sublineTypeFor(sublineType).Sublines*.Jurisdiction.toList()
  }

  function jurisdictionExists(jurisdiction : Jurisdiction, subline : String) : boolean {
    return sublineForJurisdiction(jurisdiction, subline) != null
  }

  function syncLineWizardStepOnEnter(wizard : JobWizardHelper) {
    this.GL7SublineTypes.each(\sublineType ->
      LobPropertyService.Instance.syncCoverableProperties(sublineType, wizard)
    )
  }

  function syncLineWizardStepOnExit(wizard : JobWizardHelper) {
    var issues : List<ProductModelSyncIssueWrapper> = {}
    this.syncLocationAddressFields()
    this.syncSublineTypeFields()

    var exclIssues = this.syncSublineExclusions()
    var addlCovIssues = this.syncSublineTypeAddlCoverages()

    issues.addAll(exclIssues)
    issues.addAll(addlCovIssues)

    if (wizard != null) {
      issues.each(\issue -> wizard.addSyncIssueToWebMessages(issue))
    }
  }

  function syncSublineTypeFields() {
    new GL7LineSynchronizer(this).syncSublineTypeFields()
  }

  function syncSublineTypeAddlCoverages() : List<ProductModelSyncIssueWrapper> {
    return new GL7LineSynchronizer(this).syncSublineTypeAddlCoverages()
  }

  function syncSublineExclusions() : List<ProductModelSyncIssueWrapper> {
    return new GL7LineSynchronizer(this).synchronizeAmdmtLiquorLiabExcl()
  }

  function syncLocationAddressFields() {
    this.GL7SublineTypes*.Locations.each(\location -> new GL7LocationSynchronizer(location).syncAll())
  }

  function syncAllModifiers() {
    this.Branch.GL7Line.AllModifiables.each(\modifiable -> modifiable.syncModifiers())
  }

  function setScheduleRatingModificationApplies() {
    // For 2019 where ScheduleRatingModificationApplies is moved to SublineType level as a collection
    this.GL7SublineTypes.each(\sublineType -> setScheduleRatingModificationApplies(sublineType))

    // For 2017 where ScheduleRatingModificationApplies is moved to subline level as a collection
    this.GL7SublineTypes*.Sublines.each(\subline -> setScheduleRatingModificationApplies(subline))
  }

  property get JurisdictionsWithSublines() : Set<Jurisdiction> {
    return this.GL7SublineTypes*.Sublines*.Jurisdiction.toSet()
  }

  property get JurisdictionsWithSublinesWM() : Set<Jurisdiction> {
    var sublines = this.VersionList.GL7SublineTypes*.Sublines
    var sublineVersions = sublines.flatMap(\subline -> subline.allVersionsFlat<GL7Subline>())
    return sublineVersions*.Jurisdiction.toSet()
  }

  property get JurisdictionsAvailableForLine() : List<String> {
    var jurisdictionUtil = new GL7JurisdictionUtil(this.Branch)
    var usJurisdictions = Jurisdiction.getTypeKeys(false).where(\j -> j.hasCategory(Country.TC_US))*.Code.toList()
    return usJurisdictions.where(\jurisdiction -> jurisdictionUtil.productAvailableForState(typekey.Jurisdiction.get(jurisdiction)))
  }

  function sublinesForJurisdiction(jurisdiction : Jurisdiction) : List<GL7Subline> {
    return this.GL7SublineTypes
        .flatMap(\sublineType -> sublineType.Sublines)
        .where(\subline -> subline.Jurisdiction == jurisdiction)
        .toList()
  }

  function sublineTypesForJurisdictionWM(jurisdiction : Jurisdiction) : List<GL7SublineType> {
    return this.VersionList.GL7SublineTypes.allVersionsFlat<GL7SublineType>()
        .where(\sublineType -> sublineType.VersionList.Sublines.allVersionsFlat<GL7Subline>().hasMatch(\sl -> sl.Jurisdiction == jurisdiction))
        .toList()
  }

  function removeGL7SublineType(sublineType : GL7SublineType) {
    // End all basis scalable exposures related to the subline type being removed, so that the Bases get scaled
    var exposures = this.GL7SublineTypes.firstWhere(\st -> st == sublineType).Locations*.BasisScalableGL7Exposures
    exposures.each(\exp -> exp.endExposureWM(this.Branch.EditEffectiveDate))
    this.removeFromGL7SublineTypes(sublineType)
  }

  property get GL7ExposuresWM() : GL7Exposure[] {
    var exposuresVLs = this.VersionList.GL7SublineTypes*.Locations*.GL7Exposures.toList().flatten()
    var exposures = exposuresVLs.map(\g -> g.AllVersions).toList().flatten().toTypedArray()
    return exposures
  }

  property get GL7Exposures() : GL7Exposure[] {
    return this.GL7SublineTypes*.Locations*.GL7Exposures
  }

  property get GL7UnmannedAircraftsWM() : GL7UnmannedAircraft[] {
    var unmannedAircraftVLs = this.VersionList.GL7SublineTypes*.Locations*.GL7Exposures*.UnmannedAircrafts.toList().flatten()
    var unmannedAircrafts = unmannedAircraftVLs.map(\g -> g.AllVersions).toList().flatten().toTypedArray()
    return unmannedAircrafts
  }

  property get GL7UnmannedAircrafts() : GL7UnmannedAircraft[] {
    return this.GL7Exposures*.UnmannedAircrafts
  }


  property get isUnmannedAircraftAvailable() : boolean {
    var covLmtCovForUnmannedAircraft = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraft, CoveragePattern)
    var covLmtCovForUnmannedAircraftCovA = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovAOnly, CoveragePattern)
    var covLmtCovForUnmannedAircraftCovB = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovBOnly, CoveragePattern)
    var covLmtCovForUnmannedAircraftRailroad = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftRailroad, CoveragePattern)
    var covLmtCovForUnmannedAircraftOwnerContractors = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftOwnersContractors, CoveragePattern)
    return this.GL7SublineTypes.hasMatch(\sublineType -> {
      return sublineType.hasCoverage(covLmtCovForUnmannedAircraft)
          or sublineType.hasCoverage(covLmtCovForUnmannedAircraftCovA)
          or sublineType.hasCoverage(covLmtCovForUnmannedAircraftCovB)
          or sublineType.hasCoverage(covLmtCovForUnmannedAircraftRailroad)
          or sublineType.hasCoverage(covLmtCovForUnmannedAircraftOwnerContractors)
    })
  }

  // Use reflection to find and set ScheduleRatingModificationApplies
  // at either SublineType level in CW2019 or Subline level in CW2017
  static function setScheduleRatingModificationApplies(coverable : Coverable) {
    if (LobCompatibilityHelper.hasField(coverable, GL7CompatibilityConstants.ScheduleRatingModificationApplies)) {
      var scheduleModifiers : GL7SublineMod[]
      if (coverable typeis GL7SublineType) {
        scheduleModifiers = coverable.Sublines*.Modifiers.where(\mod -> mod.ScheduleRate)
      } else {
        scheduleModifiers = (coverable as GL7Subline).Modifiers.where(\mod -> mod.ScheduleRate)
      }
      var isFactorFound = scheduleModifiers*.RateFactors.hasMatch(\rf -> rf.AssessmentWithinLimits != 0)
      LobCompatibilityHelper.setFieldValue(coverable, GL7CompatibilityConstants.ScheduleRatingModificationApplies, isFactorFound.toYesNoString())
    }
  }

  static function getScheduleRatingModificationApplies(coverable : Coverable) : Boolean {
    if (LobCompatibilityHelper.hasField(coverable, GL7CompatibilityConstants.ScheduleRatingModificationApplies)) {
      return LobCompatibilityHelper.getFieldValue(coverable, GL7CompatibilityConstants.ScheduleRatingModificationApplies) == "Yes"
    }
    return null
  }
}