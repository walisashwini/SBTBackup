package gw.lob.gl7.validation

uses gw.api.locale.DisplayKey
uses gw.lob.common.displayable.LobDisplayable
uses gw.lob.gl7.GL7JurisdictionUtil
uses gw.validation.PCValidationBase
uses gw.validation.PCValidationContext

@Export
class GL7LocationValidation extends PCValidationBase  {

  public static final var WIZARD_STEP_ID : String = "Locations"
  var _location : GL7Location as Location

  construct(valContext : PCValidationContext, location : GL7Location) {
    super(valContext)
    _location = location
  }

  override protected function validateImpl() {
    Context.addToVisited(this, "validateImpl")
    checkExposuresRequiringSplitAfterLocationChanges()
    checkExposures()

    if (Context.Level == TC_QUOTABLE)
      stateAvailableForPolicyPeriod(_location.Location)
  }

  private function checkExposures() {
    _location.GL7Exposures.each(\ exposure -> new GL7ExposureValidation(Context, exposure).validate())
  }

  public function stateAvailableForPolicyPeriod(policyLocation : PolicyLocation) {
    var jurisdiction = Jurisdiction.get(policyLocation.State.Code)
    var jurisdictionUtil = new GL7JurisdictionUtil(policyLocation.Branch)

    if (not jurisdictionUtil.productAvailableForState(jurisdiction)) {
      Result.addError(policyLocation, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Location.Validation.StateNotAvailableForPeriod", policyLocation.LocationNum, policyLocation.State.Abbreviation))
    }
  }

  function checkExposuresRequiringSplitAfterLocationChanges() {
    Context.addToVisited(this, "checkExposuresRequiringSplitAfterLocationChanges")

    /**
     * Check for conditions when the validation is not necessary:
     * - new subline
     * - slice not matching current policy transaction date
     */
    if(_location.BasedOn == null or _location.SliceDate != _location.Branch.EditEffectiveDate) {
      return
    }

    if(Context.isAtLeast(ValidationLevel.TC_QUOTABLE)) {
      noExposuresRequiringSplitAfterLocationDeductibleChangesExist()
    }
  }

  private function noExposuresRequiringSplitAfterLocationDeductibleChangesExist() {
    var effectiveDate = _location.Branch.EditEffectiveDate
    var changedDeductibles = _location.GL7LocationDeductiblesChangedFromBasedOn
    // If no deductible has changed, there's no need to proceed further
    if(changedDeductibles.Empty) {
      return
    }
    var changedDisplayables = changedDeductibles.map(\prop -> new LobDisplayable(_location, prop.PropertyInfo.Name, null, true))

    var scalableExposuresForCurrentSlice = _location.BasisScalableGL7Exposures
    var exposuresThatRequireSplit = scalableExposuresForCurrentSlice.where(\exp -> exp.EffectiveDate.before(effectiveDate) and exp.ExpirationDate.after(effectiveDate))

    if (exposuresThatRequireSplit.HasElements) {
      Result.addWarning(_location, ValidationLevel.TC_QUOTABLE, DisplayKey.get("Web.Policy.GL7.Location.Validation.VariableBasisExposuresMustBeSplitDueToDeductibles", _location.DisplayName, changedDisplayables*.Label.join(", "), exposuresThatRequireSplit*.DisplayName.join(",")))
    }
  }

}