package gw.forms

uses gw.forms.generic.AbstractSimpleAvailabilityForm
uses gw.lob.common.forms.GeneratedAvailabilityForm
uses gw.lob.common.parameters.Parameters
uses org.slf4j.LoggerFactory

class FormInferenceSimpleAvailabilityChecker extends AbstractSimpleAvailabilityForm {
  private static final var LOG = LoggerFactory.getLogger(FormInferenceSimpleAvailabilityChecker.Type)

  override function isAvailable(context: FormInferenceContext, availableStates: Set<Jurisdiction>): boolean {
    var parameters = createParameters(context, availableStates)
    return parameters.hasMatch(\parameter -> {
      var jurisdictionCode = parameter.getParam(Parameters.JURISDICTION_PARAMETER_NAME)
      var referenceDate = getLookupDates(context).get(Jurisdiction.getTypeKey(jurisdictionCode))
      var formInferenceClass = FormInferenceClassFactory.getFormInferenceClass(Pattern.Code, jurisdictionCode, getLineCode(context), referenceDate)
      if (formInferenceClass == null) {
        LOG.warn("Cannot find form class for: ${this.Pattern.Code} jurisdiction: ${jurisdictionCode}")
        return false
      }
      if (formInferenceClass typeis GeneratedAvailabilityForm){
        formInferenceClass.Parameters = parameter
      }
      return formInferenceClass.isAvailable(context, availableStates)
    }
    )
  }

  protected function createParameters(context: FormInferenceContext, availableStates: Set<Jurisdiction>): List<Parameters> {
    var parametersList: List< gw.lob.common.parameters.Parameters > = {}
    for (jurisdiction in availableStates) {
      parametersList.add(new Parameters().withParam(Parameters.JURISDICTION_PARAMETER_NAME, jurisdiction.Code))
    }
    return parametersList
  }

  protected function getLineCode(context: FormInferenceContext): String {
    return context.Period.LinePatterns.single().CodeIdentifier
  }
}