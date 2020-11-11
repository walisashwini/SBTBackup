package gw.lob.gl7.validation

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.domain.covterm.CovTerm
uses gw.api.domain.covterm.OptionCovTerm
uses gw.api.locale.DisplayKey
uses gw.api.productmodel.CoveragePattern
uses gw.api.productmodel.ScheduleAutoNumberPropertyInfo
uses gw.api.system.PCDependenciesGateway
uses gw.api.web.productmodel.ProductModelSyncIssue
uses gw.api.web.productmodel.UnavailableOptionValueIssue
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.common.sbt.schedules.ScheduleConfigSource
uses gw.lob.common.service.sbt.ServiceLocator
uses gw.lob.common.synchronizer.SyncPropertyMetaSupport
uses gw.lob.common.validation.CommonLineValidation
uses gw.lob.common.validation.ValidationSupport
uses gw.lob.gl7.GL7SublineTypeName
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants
uses gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
uses gw.validation.PCValidationContext
uses gw.web.productmodel.ProductModelSyncIssuesHandler

@Export
class GL7LineValidation extends CommonLineValidation<GL7GeneralLiabilityLine> {
  var gl7Line : GL7Line

  construct(valContext : PCValidationContext, polLine : entity.GL7GeneralLiabilityLine) {
    super(valContext, polLine)
    gl7Line = polLine as GL7Line
  }

  override function doValidate() {
    SyncPropertyMetaSupport.Instance.executeAllBeforeQuote(gl7Line)
    ProductModelSyncIssuesHandler.sync(Line.AllCoverables, Line.AllModifiables, null, Line.Branch, null)
    atLeastOneSubline()
    atLeastOneStateForSelectedSubline("quotable")
    atLeastOneExposure()
    validateUnmannedAircrafts()
    validateSublineSelection()
    validateSublines()
    checkSublineCombinations()
    validateMultiStateLiquorCoverage()
    super.doValidate()
    noDuplicateContactsInSchedules()
    performGeneratedValidation()
  }

  private static var JurisdictionsWithoutOwnersAndContractors = {
      Jurisdiction.TC_TX
  }

  private static var JurisdictionsWithoutRailroad = {
      Jurisdiction.TC_TX
  }

  // USGL-817
  // TODO: add expiration date once those states get the owners clause
  public static function ownersAndConractorsAvailableForJurisdiction(jurisdiction : Jurisdiction) : boolean {
    return not JurisdictionsWithoutOwnersAndContractors.contains(jurisdiction)
  }

  // USGL-817
  // TODO: add expiration date once those states get the railroad clause
  public static function railroadAvailableForJurisdiction(jurisdiction : Jurisdiction) : boolean {
    return not JurisdictionsWithoutRailroad.contains(jurisdiction)
  }

  // assumed here that sublineType passed in is for OwnersAndContractors
  // USGL-817
  private function validateAircraftsUnderOwnersAndContractors(sublineType : GL7SublineType) {
    Context.addToVisited(this, "validateAircraftsUnderOwnersAndContractors")
    var allAircraftsForOwnersAndContractors = sublineType.Locations*.GL7Exposures*.UnmannedAircrafts
    for (unmannedAircraft in allAircraftsForOwnersAndContractors) {
      if (JurisdictionsWithoutOwnersAndContractors.contains(unmannedAircraft.Exposure.GL7Location.Jurisdiction)) {
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.OwnersOrRailroadErrorForUA",
            GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft),
            unmannedAircraft.Exposure.DomainModel.ClassCode,
            sublineType.SublineTypeName))
      }
    }
  }

  // assumed here that the sublineType passed in is for Railroad
  // USGL-817
  private function validateAircraftsUnderRailroad(sublineType : GL7SublineType) {
    Context.addToVisited(this, "validateAircraftsUnderRailroad")
    var allAircraftsForRailroad = sublineType.Locations*.GL7Exposures*.UnmannedAircrafts
    for (unmannedAircraft in allAircraftsForRailroad) {
      if (JurisdictionsWithoutRailroad.contains(unmannedAircraft.Exposure.GL7Location.Jurisdiction)) {
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.OwnersOrRailroadErrorForUA",
            GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft),
            unmannedAircraft.Exposure.ClassCode,
            sublineType.SublineTypeName))
      }
    }
  }

  private function sublineTypeToValidate(sublineType : GL7SublineType) : boolean {
    //skip sublines not applicable for unmanned aircrafts
    if (not GL7SublineTypeName.UnmannedAircraftSublines.contains(sublineType.SublineTypeName)) {
      return false
    }
    //Skip the validation for future slices if OOS job.
    if (Line.Branch.Job.OOSJob and sublineType.SliceDate.after(Line.Branch.EditEffectiveDate)) {
      return false
    }
    return true
  }

  private function validateUnmannedAircrafts() {
    Context.addToVisited(this, "validateUnmannedAircrafts")
    var covForUnmannedAircraftCovABIPD = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_UnmannedAircraftCovABIPD, CoveragePattern)
    var covForUnmannedAircraftCovBPAI = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_UnmannedAircraftCovBPAI, CoveragePattern)
    for (sublineType in Line.GL7SublineTypes) {
      if (not sublineTypeToValidate(sublineType)) {
        continue
      }
      if (sublineType.SublineTypeName == GL7SublineTypeName.RAILROAD.Description and LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftRailroad)) {
        atLeastOneUnmannedAircraft(sublineType, true, false, false)
        validateAircraftsUnderRailroad(sublineType)
      } else if (sublineType.SublineTypeName == GL7SublineTypeName.OWNERS_AND_CONTRACTORS.Description and LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftOwnersContractors)) {
        atLeastOneUnmannedAircraft(sublineType, true, false, false)
        validateAircraftsUnderOwnersAndContractors(sublineType)
      } else {
        var hasLimitedCov = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraft)
        var hasCovAOnly = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovAOnly)
        var hasCovBOnly = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovBOnly)
        if (hasLimitedCov or hasCovAOnly or hasCovBOnly) {
          atLeastOneUnmannedAircraft(sublineType, hasLimitedCov, hasCovAOnly, hasCovBOnly)
          if (hasLimitedCov) { // Both covA and covB need to be selected.
            mustSelectCovA(sublineType, covForUnmannedAircraftCovABIPD.Description)
            mustSelectCovB(sublineType, covForUnmannedAircraftCovBPAI.Description)
          } else if (hasCovAOnly and hasCovBOnly) { // At least one unmanned aircraft selects covA, at least one unmanned aircraft selects covB.
            mustSelectCovAOrCovB(sublineType, covForUnmannedAircraftCovABIPD.Description, covForUnmannedAircraftCovBPAI.Description)
          } else if (hasCovAOnly) {
            mustSelectCovA(sublineType, covForUnmannedAircraftCovABIPD.Description)
          } else if (hasCovBOnly) {
            mustSelectCovB(sublineType, covForUnmannedAircraftCovBPAI.Description)
          }
        }
      }
    }
  }

  //at leat one unmanned aircraft should be added in this subline.
  private function atLeastOneUnmannedAircraft(sublineType : GL7SublineType, hasLimitedCov : boolean, hasCovAOnly : boolean, hasCovBOnly : boolean) {
    if (sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.IsEmpty) {
      if (hasLimitedCov) {
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingUnmannedAircraft",
            sublineType.DisplayName, getDescriptionForUnmannedAircraftLimitedCoverage(sublineType)))
      }
      if (hasCovAOnly) {
        var covLmtCovForUnmannedAircraftCovA = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovAOnly, CoveragePattern)
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingUnmannedAircraft",
            sublineType.DisplayName, covLmtCovForUnmannedAircraftCovA.Description))
      }
      if (hasCovBOnly) {
        var covLmtCovForUnmannedAircraftCovB = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovBOnly, CoveragePattern)
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingUnmannedAircraft",
            sublineType.DisplayName, covLmtCovForUnmannedAircraftCovB.Description))
      }
    }
  }

  private function mustSelectCovA(sublineType : GL7SublineType, covDescription : String) {
    sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.each(\unmannedAircraft -> {
      if (not unmannedAircraft.CovAApplies.isYes()) {
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingCoverage",
            getDescriptionForUnmannedAircraftLimitedCoverage(sublineType),
            covDescription,
            GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft)))
      }
    })
  }

  private function mustSelectCovB(sublineType : GL7SublineType, covDescription : String) {
    sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.each(\unmannedAircraft -> {
      if (not unmannedAircraft.CovBApplies.isYes()) {
        Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingCoverage",
            getDescriptionForUnmannedAircraftLimitedCoverage(sublineType),
            covDescription,
            GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft)))
      }
    })
  }

  private function mustSelectCovAOrCovB(sublineType : GL7SublineType, covADescription : String, covBDescription : String) {
    var hasUnmannedAircrafts = sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.HasElements
    if (not hasUnmannedAircrafts)
      return
    var covASelected = sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.hasMatch(\unmannedAircraft -> unmannedAircraft.CovAApplies.isYes())
    var covBSelected = sublineType.Locations*.GL7Exposures*.UnmannedAircrafts.hasMatch(\unmannedAircraft -> unmannedAircraft.CovBApplies.isYes())
    if (not covASelected) {
      Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingCovAOrCovB", covADescription))
    }
    if (not covBSelected) {
      Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.UnmannedAircraft.Validation.MissingCovAOrCovB", covBDescription))
    }
  }

  private function getDescriptionForUnmannedAircraftLimitedCoverage(sublineType : GL7SublineType) : String {
    if (sublineType.SublineTypeName == GL7SublineTypeName.RAILROAD.Description) {
      var covLmtCovForUnmannedAircraftRailroad = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftRailroad, CoveragePattern)
      return covLmtCovForUnmannedAircraftRailroad?.Description
    } else if (sublineType.SublineTypeName == GL7SublineTypeName.OWNERS_AND_CONTRACTORS.Description) {
      var covLmtCovForUnmannedAircraftOwnerContractors = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftOwnersContractors, CoveragePattern)
      return covLmtCovForUnmannedAircraftOwnerContractors?.Description
    } else {
      var covLmtCovForUnmannedAircraft = PCDependenciesGateway.ProductModel.getPattern(GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraft, CoveragePattern)
      return covLmtCovForUnmannedAircraft?.Description
    }
  }

  private function validateMultiStateLiquorCoverage() {
    Context.addToVisited(this, "validateMultiStateLiquorCoverage")

    var liquorSublineType = Line.GL7SublineTypes.firstWhere(\sublineType -> sublineType.Subline == GL7SublineTypeName.LIQUOR.Description)

    if (liquorSublineType != null) {
      var aggLimit = liquorSublineType.GL7Lmts.GL7AggLimit1Term
      if (aggLimit == null) {
        return
      }
      var eachCommonCauseLimit = liquorSublineType.GL7Lmts.GL7EachCommonCauseLimitTerm

      var invalidStatesForEachCommonCauseLimit = new ArrayList<String>()
      var invalidStatesForAggLimit = new ArrayList<String>()

      for (jurisdictionCoverable in liquorSublineType.Sublines.where(\jurisdictionCoverable -> jurisdictionCoverable.Jurisdiction != Line.BaseState)) {
        if (!validateCovTerm(liquorSublineType.Branch, eachCommonCauseLimit, jurisdictionCoverable.Jurisdiction)) {
          invalidStatesForEachCommonCauseLimit.add(jurisdictionCoverable.Jurisdiction.DisplayName)
        } else if (!validateCovTerm(liquorSublineType.Branch, aggLimit, jurisdictionCoverable.Jurisdiction)) {
          invalidStatesForAggLimit.add(jurisdictionCoverable.Jurisdiction.DisplayName)
        }
      }

      addValidationMessage(liquorSublineType, eachCommonCauseLimit, invalidStatesForEachCommonCauseLimit)
      addValidationMessage(liquorSublineType, aggLimit, invalidStatesForAggLimit)
    }
  }

  private function addValidationMessage(subLine: entity.GL7SublineType, limit: CovTerm,  errors: List<String>) {
    if (errors.HasElements) {
      var statesWithError = errors.join(", ")
      Result.addError(Line, ValidationLevel.TC_DEFAULT,
          DisplayKey.get("Web.Policy.GL7.Line.Validation.MultiStateLiquorCoverageLimit", subLine.DisplayName, limit.DisplayName, limit.DisplayValue, statesWithError),
          "SublineSelection")
    }
  }

  private function validateCovTerm(period: entity.PolicyPeriod, term: CovTerm, jurisdictionToVerify: Jurisdiction) : boolean {
    var issues: List<ProductModelSyncIssue>
    var baseState = period.BaseState
    try {
      period.BaseState = jurisdictionToVerify
      issues = term.checkCovTermValue()
    }finally {
      period.BaseState = baseState
    }

    var optionIssues = issues.whereTypeIs(UnavailableOptionValueIssue)
    return optionIssues.isEmpty()
  }

  private function atLeastOneSubline() {
    Context.addToVisited(this, "atLeastOneSubline")

    if (!Line.GL7SublineTypes.HasElements) {
      Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Line.Validation.AtLeastOneSubline"), "SublineSelection")
    }
  }

  private function atLeastOneStateForSelectedSubline(validationLevel : String = "default") {
    Context.addToVisited(this, "atLeastOneJurisdictionForSelectedSubline")
    if (Line.GL7SublineTypes.hasMatch(\s -> s.Sublines.IsEmpty)) {
      Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Line.Validation.AtLeastOneStatePerSubline"), "SublineSelection")
    }
  }

  private function atLeastOneExposure() {
    var job = Line.Branch.Job
    if (job typeis Submission or job typeis Renewal) {
      Context.addToVisited(this, "atLeastOneExposure")

      var wizardStepId = "SublineSelection"
      for (subline in Line.GL7SublineTypes) {
        if (subline.Locations*.GL7Exposures.Count < 1) {
          Result.addError(Line,
              ValidationLevel.TC_DEFAULT,
              DisplayKey.get("Web.Policy.GL7.Subline.Validation.AtLeastOneExposure", subline.getDisplayName()),
              wizardStepId)
        }
      }
    }
  }


  public function validateSublineUI() {
    validateSublineSelection()
    atLeastOneSubline()
    atLeastOneStateForSelectedSubline()
  }

  private function noDuplicateContactsInSchedules() {
    Context.addToVisited(this, "noDuplicateContactsInSchedules")

    var scheduleConfig = ServiceLocator.get(ScheduleConfigSource)
    var schedules = Line.GL7SublineTypes*.CoveragesFromCoverable
        .whereTypeIs(Schedule)
        .where(\sched -> sched.IsAdditionalInsuredScheduleV2)
    for (sched in schedules) {
      var duplicateNames = sched.ScheduledItems
          .partition(\item -> item.getAdditionalInsuredProperty().DisplayName)
          .filterByValues(\items -> items.Count > 1)
          .keySet()
      if (not duplicateNames.Empty) {
        var writeableColumns = scheduleConfig.getPropertyInfos(sched as Clause & Schedule)
            .countWhere(\propInfo -> not(propInfo typeis ScheduleAutoNumberPropertyInfo))

        if (writeableColumns == 1) {
          Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Line.Validation.AdditionalInsuredError"))
        } else {
          Result.addWarning(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Line.Validation.AdditionalInsuredWarning"))
        }
      }
    }
  }

  private function validateSublineSelection() {
    Context.addToVisited(this, "validateSublineSelection")

    // Underground Storage Tank can not be selected with any other Subline
    if (Line.GL7SublineTypes*.Subline.contains("Underground Storage Tank") and Line.GL7SublineTypes.Count > 1) {
      Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Line.Validation.SublineSelectionUST"))
    }
  }

  private function validateSublines() {
    Line.GL7SublineTypes.each(\subline -> new GL7SublineValidation(Context, subline).validate())
  }

  public function checkSublineCombinations() {
    Context.addToVisited(this, "checkSublineCombinations")

    /*
    for the same location and class code,
    1.	Premises/Operations and Products/Completed Operations
    2.	Premises/Operations
    3.	Products/Completed Operations

    For the same location  & Class code
    A.  You can’t have 1, 2, 3
    B.  You can’t have 1 and 2
    C.  You can’t have 1 and 3
    D.  You CAN have 1
    E.  YOU CAN have 2 and 3
    */
    var cglSublines = Line.GL7SublineTypes.where(\subline -> subline.Subline == "Premises/Operations and Products/Completed Operations")
    var premOpsSublines = Line.GL7SublineTypes.where(\subline -> subline.Subline == "Premises/Operations")
    var prodsSublines = Line.GL7SublineTypes.where(\subline -> subline.Subline == "Products/Completed Operations")
    var error = false
    // Check for conditions A to C
    if (!cglSublines.IsEmpty) {
      for (location in cglSublines*.Locations) {
        for (exposure in location.GL7Exposures) {
          //B Check
          if (!premOpsSublines.IsEmpty) {
            if (premOpsSublines*.Locations*.GL7Exposures?.hasMatch(\exp -> exp.ClassCode == exposure.ClassCode and exp.GL7Location.DisplayName == exposure.GL7Location.DisplayName)) {
              error = true
            }
          }
          //C Check
          if (!prodsSublines.IsEmpty) {
            if (prodsSublines*.Locations*.GL7Exposures?.hasMatch(\exp -> exp.ClassCode == exposure.ClassCode and exp.GL7Location.FixedId == exposure.GL7Location.FixedId)) {
              error = true
            }
          }
        }
      }
    }
    if (error) {
      Result.addError(Line, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Line.Validation.SublineCombinations"))
    }
  }

  /**
   * Validation for Audit is not supported
   */
  override function validateLineForAudit() {
    allAuditAmountsShouldBeFilledIn()
  }

  private function performGeneratedValidation() {
    ValidationSupport.Instance.validatePolicy(gl7Line, Result, Context.Level)
  }

  /**
   * Verify that all AuditedAmounts are filled in
   */
  function allAuditAmountsShouldBeFilledIn() {
    if (gl7Line.Branch.Job typeis Audit) {
      gl7Line.GL7ExposuresWM.each(\gl7Exposure -> {
        if (gl7Exposure.AuditedExposure == null and gl7Exposure.AuditedProdsCompltdOpsExposure == null) {
          Result.addError(gl7Line,
              ValidationLevel.TC_QUOTABLE,
              DisplayKey.get("Web.AuditWizard.Details.NullAmountsError"),
              DisplayKey.get("Web.AuditWizardMenu.Details"))
        }
      }
      )
    }
  }
}