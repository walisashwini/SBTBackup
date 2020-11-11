package gw.lob.gl7

uses entity.GL7Cost
uses entity.PolicyLine
uses entity.windowed.GL7CostVersionList
uses gw.api.policy.AbstractPolicyLineMethodsImpl
uses gw.api.productmodel.CoveragePattern
uses gw.api.domain.Schedule
uses gw.api.system.PLDependenciesGateway
uses gw.api.tree.RowTreeRootNode
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.gl7.financials.GL7WorksheetNodeBuilder
uses gw.lob.gl7.rating.GL7ExposureUtil
uses gw.lob.gl7.rating.GL7RatingEngine
uses gw.lob.gl7.rating.GL7SysTableRatingEngine
uses gw.lob.gl7.synchronizer.GL7LineSynchronizer
uses gw.lob.gl7.validation.GL7LineValidation
uses gw.pl.persistence.core.Key
uses gw.policy.PolicyLineValidation
uses gw.rating.AbstractRatingEngine
uses gw.rating.worksheet.treenode.WorksheetTreeNodeUtil
uses gw.validation.PCValidationContext

uses java.math.BigDecimal

@Export
class GL7PolicyLineMethods extends AbstractPolicyLineMethodsImpl {
  private final static var JOB_TYPES_AFTER_CANCELLATION = {typekey.Job.TC_REINSTATEMENT, typekey.Job.TC_REWRITENEWACCOUNT, typekey.Job.TC_REWRITE}

  var _line : entity.GL7GeneralLiabilityLine

  construct(line : entity.GL7GeneralLiabilityLine) {
    super(line)
    _line = line
  }

  override function syncComputedValues() {
    super.syncComputedValues()
    prorateBasesFromCancellation()
    prorateBasesAfterCancellation()
    new GL7LineSynchronizer(_line).syncSublineTypeFields()
  }

  override property get CoveredStates() : Jurisdiction[] {
    return _line.GL7SublineTypes*.Sublines*.Jurisdiction
  }

  override property get AllCoverables() : Coverable[] {
    var list: List<Coverable> = {_line}
    list.addAll(_line.GL7SublineTypes?.toList())
    list.addAll(_line.GL7SublineTypes*.Sublines?.toList())
    list.addAll(_line.GL7SublineTypes*.Locations?.toList())
    list.addAll(_line.GL7SublineTypes*.Locations*.GL7Exposures?.toList())
    list.addAll(_line.GL7SublineTypes*.Locations*.GL7Exposures*.UnmannedAircrafts?.toList())
    return list.toTypedArray()
  }

  override property get AllCoverages() : Coverage[] {
    var list: List<Coverage> = {}
    for (cb in AllCoverables) {
      list.addAll(cb.CoveragesFromCoverable.toList())
    }
    return list.toTypedArray()
  }

  override property get AllExclusions() : Exclusion[] {
    var list: List<Exclusion> = {}
    for (cb in AllCoverables) {
      list.addAll(cb.ExclusionsFromCoverable.toList())
    }
    return list.toTypedArray()
  }

  override property get AllSchedules() : Schedule[] {
    return _line.AllCoverables*.CoveragesConditionsAndExclusionsFromCoverable.whereTypeIs(Schedule)
  }

  override property get AllConditions() : PolicyCondition[] {
    var list: List<PolicyCondition> = {}
    for (cb in AllCoverables) {
      list.addAll(cb.ConditionsFromCoverable.toList())
    }
    return list.toTypedArray()
  }

  override property get AllModifiables() : Modifiable[] {
    return _line.GL7SublineTypes*.Sublines
  }

  /**
   * All costs across the term, in window mode.
   */
  override property get CostVLs() : Iterable<GL7CostVersionList> {
    return _line.VersionList.GL7Costs
  }

  override property get Transactions() : Set<Transaction> {
    var branch = _line.Branch
    return branch.getSlice(branch.PeriodStart).GL7Transactions.toSet()
  }

  override property get SupportsRatingOverrides() : boolean {
    return true
  }

  override function getAllCostsForCoverage(covered : Coverable, covPat : CoveragePattern) : List<Cost> {
    return _line.Branch.AllCosts.where(\ cost -> {
      return cost typeis GL7Cost and
             cost.Coverage != null and
             cost.Coverage.Pattern.PublicID == covPat.PublicID and
             cost.Coverage.OwningCoverable == covered
    })
  }

  override function createPolicyLineValidation(validationContext : PCValidationContext)
      : PolicyLineValidation<entity.GL7GeneralLiabilityLine> {
    return new GL7LineValidation(validationContext, _line)  
  }

  override function createPolicyLineDiffHelper(reason : DiffReason, policyLine : PolicyLine) : GL7DiffHelper {
    return new GL7DiffHelper(reason, this._line, policyLine as entity.GL7GeneralLiabilityLine)
  }

  override function getWorksheetRootNode(showConditionals : boolean) : RowTreeRootNode {
    var worksheetBuilder = new GL7WorksheetNodeBuilder(_line, showConditionals)
    var treeNodes =  worksheetBuilder.WorksheetNodes
    return WorksheetTreeNodeUtil.buildRootNode(treeNodes)
  }

  /***
   * This function decides whether to allow a location to be removed in the UI.
   * This default implementation is provided simply as a reminder that you are likely to want to override default behavior here, too.
   */
  override function canSafelyDeleteLocation( location: PolicyLocation ) : String {
    var notSafeReason = super.canSafelyDeleteLocation(location)
    
    if (notSafeReason.equalsIgnoreCase("")) {
      // Put line-specific reasons why a location cannot safely be deleted here.
    }
    
    return notSafeReason
  }

  override function doGetTIVForCoverage(cov : Coverage) : BigDecimal {
    switch (cov.FixedId.Type) {
      // Enter case statements for each type of coverage here
    }
    return BigDecimal.ZERO
  }

  override function createRatingEngine(method : RateMethod, parameters : Map<RateEngineParameter, Object>) : AbstractRatingEngine<GL7Line> {
    if (RateMethod.TC_SYSTABLE == method) {
      return new GL7SysTableRatingEngine(_line as GL7Line)
    }
    return ScriptParameters.getParameterValue("EnableSysTableRatingEngine_EXT") as boolean and not PLDependenciesGateway.ServerMode.Production
        ? new GL7SysTableRatingEngine(_line as GL7Line)
        : new GL7RatingEngine(_line as productmodel.GL7Line, parameters[RateEngineParameter.TC_RATEBOOKSTATUS] as RateBookStatus)
  }

  override property get BaseStateRequired() : boolean {
    // Change this if you want to force a base state to be set for this line of business.
    return true
  }

  override property get LocationsInUseOnOrAfterSliceDate(): Set<Key> {
    var locationsInUseOnOrAfterSliceDate = _line.Branch.PolicyLocations
        .where(\location -> location.ExpirationDate.after(_line.SliceDate))*.FixedId
    return locationsInUseOnOrAfterSliceDate.union({_line.Branch.PrimaryLocation.FixedId})
  }

  override function onPrimaryLocationCreation(location : PolicyLocation) {
    //_line.addToLineSpecificLocations(location.AccountLocation)
  }

  override function resetAutoNumberSequences() {
    _line.GL7SublineTypes.each(\ subline -> {
      subline.initializeNumberingOfLocations(_line.Bundle)
      subline.LocationAutoNumberSeq.reset()
    })
    _line.GL7ExposuresWM.each(\ exposure -> {
      exposure.initializeNumberingOfUnmannedAircrafts(_line.Bundle)
      exposure.UnmannedAircraftAutoNumberSeq.reset()
    })
    renumberAutoNumberSequences()
    AllSchedules*.resetAutoNumberSequence()
  }

  override function cloneAutoNumberSequences() {
    _line.GL7SublineTypes.each(\ subline -> {
      subline.LocationAutoNumberSeq?.clone(subline.Bundle)
    })
    AllSchedules*.cloneAutoNumberSequence()
    _line.GL7ExposuresWM.each(\ exposure -> {
      exposure.UnmannedAircraftAutoNumberSeq?.clone(exposure.Bundle)
    })
  }

  override function bindAutoNumberSequences() {
    renumberAutoNumberSequences()
    _line.GL7SublineTypes.each(\ subline -> subline.bindNumberingOfLocations() )
    AllSchedules*.bindAutoNumberSequence()
    _line.GL7ExposuresWM.each(\ exposure -> exposure.bindNumberingOfUnmannedAircrafts(_line))
  }

  override function renumberAutoNumberSequences() {
    _line.GL7SublineTypes.each(\ subline -> {
      subline.renumberNewLocations()
    })
    AllSchedules*.renumberNewScheduledItems()

    _line.GL7ExposuresWM.each(\ exposure -> {
      exposure.renumberNewUnmannedAircrafts(_line)
    })
  }

  override property get Auditable() : boolean {
    return true
  }

  override function onRenewalInitialize() {
    syncExposureClassCode()
    scaleBasesForNewTerm()
  }

  /**
   * Scales bases for all basis scalable exposures to cancellation date. Only slices that include cancellation date are modified.
   * Slices ending before cancellation date should be rated without basis change. Slices starting after cancellation date
   * are not rated at all.
   */
  override function prorateBasesFromCancellation() {
    if(_line.Branch.Job typeis Cancellation) {
      for(exposure in _line.GL7SublineTypes*.Locations*.GL7Exposures) {
        var sourceExposure = exposure.BasedOn
        if (sourceExposure != null and exposure.IsBasisScalable and exposure.EffectiveDateRange.includes(_line.Branch.EndOfCoverageDate)) {
          GL7ExposureUtil.scaleExposureToCancelledPeriodDateRange(exposure.Unsliced, sourceExposure.DomainModel.ExposureAmount, sourceExposure.DomainModel.ProdsCompltdOpsExposureAmount, _line.Branch.EndOfCoverageDate)
        }
      }
    }
  }

  /**
   * Scales bases for all basis scalable exposures after cancellation. Only slices that were affected by cancellation are modified.
   * Slices ending before cancellation date already have scaled basis. Slices starting after cancellation date are not rated at all.
   * Scaling is different for Reinstatement and Rewrite job. For Reinstatement original basis must be restored.
   * For Rewrite scaled basis must be calculated from cancellation date forward.
   */
  private function prorateBasesAfterCancellation() {
    if(JOB_TYPES_AFTER_CANCELLATION.contains(_line.Branch.Job.Subtype)) {
      var allExpVers = _line.VersionList.GL7SublineTypes*.Locations*.GL7Exposures
      var listOfExpVers = new ArrayList<GL7Exposure>()
      for(listOfExpVL in allExpVers){
        listOfExpVL.each(\expVL -> listOfExpVers.addAll(expVL.AllVersions) )
      }
      for(exposure in listOfExpVers) {
        var sourceExposure = exposure.BasedOn.BasedOn
        if (sourceExposure != null and exposure.IsBasisScalable) {
          if(_line.Branch.Job typeis Reinstatement) {
            GL7ExposureUtil.restoreExposureAfterCancellation(exposure.Unsliced, sourceExposure.DomainModel.ExposureAmount, sourceExposure.DomainModel.ProdsCompltdOpsExposureAmount)
          } else {
            GL7ExposureUtil.recalculateExposureAfterCancellation(exposure.Unsliced, sourceExposure.DomainModel.ExposureAmount, sourceExposure.DomainModel.ProdsCompltdOpsExposureAmount,
                              _line.Branch.BasedOn.CancellationDate, sourceExposure.EffectiveDateRange)
          }
        }
      }
    }
  }

  /**
   * Scales bases for all basis scalable exposures in a new term. When creating a new term last exposure slice information
   * from the prior term is used to create the first slice in the new term. This method scales bases to the new exposure
   * effective date range.
   */
  private function scaleBasesForNewTerm() {
    if(_line.Branch.Job typeis Renewal) {
      for(exposure in _line.GL7SublineTypes*.Locations*.GL7Exposures.where( \ elt -> elt.PremOpsExposure as boolean)) {
        var sourceExposure = exposure.BasedOn
        if (sourceExposure != null and exposure.IsBasisScalable) {
          GL7ExposureUtil.scaleExposureBasisToDateRange(exposure, exposure.EffectiveDateRange, sourceExposure.EffectiveDateRange)
        }
      }
    }
  }

  //implicitly set the class code again to refresh all the dependencies on class code (ie. premium basis)
  private function syncExposureClassCode() {
    if (_line.Branch.Job typeis Renewal) {  // only applicable for Policy Revnewal
      for (exposure in _line.GL7SublineTypes*.Locations*.GL7Exposures) {
        var sourceExposure = exposure.BasedOn
        if (sourceExposure != null) {
          //get the classcode property
          var classCodeProperty = (exposure as GL7Exposure).DomainModel.sublineSpecificPropertiesFor<String>(GL7ExposureModel.PropertyType.ClassCode).single()
          //get the classcode value
          var classCodeValue = (exposure as GL7Exposure).DomainModel.ClassCode
          //re-set classcode to trigger the value-dependency update.
          if (classCodeProperty != null and classCodeValue.HasContent) {
            classCodeProperty.set(classCodeValue)
            LobPropertyService.Instance.updateEntityDependentProperties(new PropertyInstanceInfo(classCodeProperty))
          }
        }
      }
    }
  }
}
