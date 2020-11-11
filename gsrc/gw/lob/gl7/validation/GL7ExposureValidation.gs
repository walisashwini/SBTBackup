package gw.lob.gl7.validation

uses gw.api.locale.DisplayKey
uses gw.lob.gl7.GL7ExposureModel
uses gw.validation.PCValidationBase
uses gw.validation.PCValidationContext

class GL7ExposureValidation extends PCValidationBase {

  var _exposure : GL7Exposure
  var _exposureModel : GL7ExposureModel
  static var wizardStepId = "Exposures"

  construct(valContext : PCValidationContext, exposure : GL7Exposure) {
    super(valContext)
    _exposure = exposure
    _exposureModel = new GL7ExposureModel(_exposure)
  }

  override protected function validateImpl() : void {
    Context.addToVisited(this, "validateImpl")
    checkExposureIsUnique()
    checkClassCodeAvailability()
    checkExposureAmounts()
  }

  protected function checkExposureIsUnique() {
    var line = _exposure.GL7Location.SublineType.Line

    if (line.GL7SublineTypes*.Locations*.GL7Exposures?.countWhere(\ exposure ->
        new GL7ExposureModel(exposure).ClassCode == _exposureModel.ClassCode and exposure.GL7Location.FixedId == _exposure.GL7Location.FixedId
      ) > 1
    ) {
      Result.addFieldError(_exposure,
          "ClassCode",
          ValidationLevel.TC_DEFAULT,
          DisplayKey.get("Web.Policy.GL7.Exposure.Validation.DuplicateExposure", _exposure.GL7Location.DisplayName, _exposureModel.ClassCode, _exposure.GL7Location.SublineType),
          wizardStepId)
    }
  }

  protected function checkClassCodeAvailability() {
    if (_exposure.ClassCode == "49920" && _exposure.GL7Location.PremisesOperationsTerritory == "010") {
      Result.addError(
          _exposure.GL7Location,
          ValidationLevel.TC_DEFAULT,
          DisplayKey.get("Web.Policy.GL7.Exposure.Validation.UnavailableClassCode", _exposure.GL7Location.LocationNumber, _exposure.GL7Location.SublineType, _exposureModel.ClassCode),
          GL7LocationValidation.WIZARD_STEP_ID)
    }
  }

  protected function checkExposureAmounts() {
    if ((_exposureModel.IfAnyBasis == "No" and _exposureModel.ExposureAmount < 1) or
        (HasProdsCompldOps and _exposureModel.IfAnyBasisProdsCompldOps == "No" and _exposureModel.ProdsCompltdOpsExposureAmount < 1)
    ) {
      Result.addError(
          _exposure,
          ValidationLevel.TC_DEFAULT,
          DisplayKey.get("Web.Policy.GL7.Exposure.Validation.ExposureAmountGT0", _exposureModel.ClassCode, _exposureModel.ClassDescription),
          wizardStepId
      )
    }
    // 'if any' does not apply for Product Withdrawal, exposure amount should be positive
    if (_exposureModel.IfAnyBasis == null and _exposureModel.ExposureAmount < 1) {
      Result.addError(
          _exposure,
          ValidationLevel.TC_DEFAULT,
          DisplayKey.get("Web.Policy.GL7.Exposure.Validation.ProductWithdrawalExposureAmountGT0", _exposureModel.ClassCode, _exposureModel.ClassDescription),
          wizardStepId
      )
    }
  }

  private property get HasProdsCompldOps() : boolean {
    return (_exposure.SublineTypeName == "Products/Completed Operations")
        or (_exposure.SublineTypeName == "Premises/Operations and Products/Completed Operations" and _exposure.ProdsCompldOpsCov == "Products/Completed Operations")
  }
}