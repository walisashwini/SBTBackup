package gw.forms

uses gw.forms.generic.AbstractSimpleAvailabilityForm
uses gw.lang.reflect.IType

uses java.lang.SuppressWarnings

@SuppressWarnings({"HiddenPackage"})
class FormInferenceClassFactory {
  private static final var _formInferenceClasses = AbstractSimpleAvailabilityForm.Type.Subtypes
  private static final var lineNameToPackage = {
      "CA7Line" -> "ca7",
      "CP7Line" -> "cp7",
      "BP7Line" -> "bp7",
      "WC7Line" -> "wc7",
      "WCMLine" -> "wcm",
      "CR7Line" -> "cr7",
      "GL7Line" -> "gl7"
  }
  private construct() {
  }

  public static function getFormInferenceClass(formNumber: String, jurisdiction: String, lineCode: String, effectiveDate: Date): AbstractSimpleAvailabilityForm {
    var simpleAvailabilityForm: AbstractSimpleAvailabilityForm
    var inferenceClassType: IType
    var formInferenceClassFromConfig = FormInferenceSupport.Instance.getFormInferenceClass(lineNameToPackage.get(lineCode), formNumber, jurisdiction, effectiveDate)

    if (formInferenceClassFromConfig != null) {
      inferenceClassType = _formInferenceClasses.singleWhere(\type -> type.Name == formInferenceClassFromConfig)
      simpleAvailabilityForm = getSimpleAvailabilityForm(inferenceClassType)
    } else if (isFormAvailable(formNumber, jurisdiction, lineCode)) {
      inferenceClassType = _formInferenceClasses.singleWhere(\type -> type.Name == getFormInferenceClassName(formNumber, jurisdiction, lineCode))
      simpleAvailabilityForm = getSimpleAvailabilityForm(inferenceClassType)
    } else if (isFormAvailable(formNumber, "cw", lineCode)) {
      inferenceClassType = _formInferenceClasses.singleWhere(\type -> type.Name == getFormInferenceClassName(formNumber, "cw", lineCode))
      simpleAvailabilityForm = getSimpleAvailabilityForm(inferenceClassType)
    }
    return simpleAvailabilityForm
  }

  private static function isFormAvailable(formNumber: String, jurisdiction: String, lineCode: String): boolean {
    return _formInferenceClasses.hasMatch(\type -> type.Name == getFormInferenceClassName(formNumber, jurisdiction, lineCode))
  }

  private static function getFormInferenceClassName(formNumber: String, jurisdiction: String, lineCode: String): String {
    return "gw.lob." + lineNameToPackage.get(lineCode).toLowerCase() + ".forms." + jurisdiction.toLowerCase() + ".generated." + formNumber
  }

  private static function getSimpleAvailabilityForm(inferenceClassType: IType): AbstractSimpleAvailabilityForm {
    return inferenceClassType.TypeInfo.getCallableConstructor({}).Constructor.newInstance({}) as AbstractSimpleAvailabilityForm
  }
}