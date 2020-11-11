package gw.lob.common.validation

uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.displayable.LobDisplayable
uses gw.lob.common.displayable.LobFieldMeta
uses gw.lob.common.displayable.LobFieldMetaSupport
uses gw.validation.PCValidationBase
uses gw.validation.PCValidationContext
uses java.math.BigDecimal
uses java.text.SimpleDateFormat
uses gw.api.locale.DisplayKey

class FieldValueRangeValidation<T extends LobDisplayable> extends PCValidationBase {

  private var _policyLine: PolicyLine

  construct(valContext: PCValidationContext, policyLine: PolicyLine) {
    super(valContext)
    this._policyLine = policyLine
  }

  override function validateImpl() {
    validateCoverableValueRangeField()
  }

  function validateCoverableValueRangeField() {
    Context.addToVisited(this, "validateCoverableValueRangeField")
    if (Context.isAtLeast(ValidationLevel.TC_QUOTABLE)){
      this._policyLine.AllCoverables.each(\cov -> {
        this.fieldValueRangeValidation(cov)
      })
    }
  }

  function fieldValueRangeValidation(cov: Coverable, lobFieldMetaSupport : LobFieldMetaSupport) {
    var entityFieldMetas = lobFieldMetaSupport.findEntityProperties(cov)
    entityFieldMetas.each(\propName -> {
      var fieldMeta = lobFieldMetaSupport.findFieldMeta(cov, propName)
      var propRef = new LobPropertyReference(cov, propName)

      var isAvailable = LobPropertyService.Instance.isEntityColumnAvailable(propRef, fieldMeta)
      var hasRange = (getMin(fieldMeta) != null or getMax(fieldMeta) != null)

      if (isAvailable and hasRange) {
        var value = cov.getFieldValue(propName)
        if (value != null) {
          switch (fieldMeta.WidgetType) {
            case LobFieldWidgetType.TC_DATE:
              if (value typeis Date) {
                validateDateType(cov, value, fieldMeta)
              } else {
                validateDateType(cov, value as String, fieldMeta)
              }
              break
            default:
            validateNumberType(cov, value as String, fieldMeta)
              break
          }
        }
      }
    })
  }

  function fieldValueRangeValidation(cov: Coverable) {
    fieldValueRangeValidation(cov, LobFieldMetaSupport.Instance)
  }

  private function validateDateType(cov: Coverable, value: String, lobFieldMeta: LobFieldMeta) {
    var dateFormat = new SimpleDateFormat("MM/dd/yyyy")
    var valueDate = dateFormat.parse(value)
    validateDateType(cov, valueDate, lobFieldMeta)
  }

  private function validateDateType(cov: Coverable, valueDate: Date, lobFieldMeta: LobFieldMeta) {
    var dateFormat = new SimpleDateFormat("MM/dd/yyyy")
    if (getMin(lobFieldMeta) != null){
      var minDate = dateFormat.parse(getMin(lobFieldMeta))
      if (valueDate.before(minDate)){
        Result.addError(cov, ValidationLevel.TC_QUOTABLE, DisplayKey.get("Web.Policy.Validation.ValueBelowMin", DisplayKey.get(lobFieldMeta.Label), cov.DisplayName, getMin(lobFieldMeta)))
      }
    }

    if (getMax(lobFieldMeta) != null){
      var maxDate = dateFormat.parse(getMax(lobFieldMeta))
      if (valueDate.after(maxDate)){
        Result.addError(cov, ValidationLevel.TC_QUOTABLE, DisplayKey.get("Web.Policy.Validation.ValueAboveMax", DisplayKey.get(lobFieldMeta.Label), cov.DisplayName, getMax(lobFieldMeta)))
      }
    }
  }

  private function validateNumberType(cov: Coverable, value: String, lobFieldMeta: LobFieldMeta) {
    var valueNumber = new BigDecimal(value)

    if (getMin(lobFieldMeta) != null){
      var minNumber = new BigDecimal(getMin(lobFieldMeta))
      if (valueNumber < minNumber){
        Result.addError(cov, ValidationLevel.TC_QUOTABLE, DisplayKey.get("Web.Policy.Validation.ValueBelowMin", DisplayKey.get(lobFieldMeta.Label), cov.DisplayName, getMin(lobFieldMeta)))
      }
    }

    if (getMax(lobFieldMeta) != null){
      var maxNumber = new BigDecimal(getMax(lobFieldMeta))
      if (valueNumber > maxNumber){
        Result.addError(cov, ValidationLevel.TC_QUOTABLE, DisplayKey.get("Web.Policy.Validation.ValueAboveMax", DisplayKey.get(lobFieldMeta.Label), cov.DisplayName, getMax(lobFieldMeta)))
      }
    }
  }

  protected function getMin(fieldMeta : LobFieldMeta) : String {
    return fieldMeta.Min
  }

  protected function getMax(fieldMeta : LobFieldMeta) : String {
    return fieldMeta.Max
  }
}