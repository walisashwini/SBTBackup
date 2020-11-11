package gw.lob.gl7

uses gw.forms.FormInferenceContext
uses gw.forms.FormInferenceSimpleAvailabilityChecker
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.parameters.Parameters

uses java.util.Set

class GL7FormInferenceSimpleAvailabilityChecker extends FormInferenceSimpleAvailabilityChecker {
  override protected function createParameters(context: FormInferenceContext, availableStates: Set<Jurisdiction>): List<Parameters> {
    var parametersList: List< gw.lob.common.parameters.Parameters > = {}

    context.Period.GL7Line.GL7SublineTypes.each(\sublineType -> sublineType.Sublines.each(\subline -> {
      if (availableStates.contains(subline.Jurisdiction)){
        parametersList.add(new Parameters()
            .withParam("GL7SublineType", sublineType.Subline)
            .withParam(Parameters.JURISDICTION_PARAMETER_NAME, DependencyUtil.getJurisdiction(subline)))
      }
    }))
    return parametersList
  }

  override protected function getLineCode(context: FormInferenceContext): String {
    return "GL7Line"
  }
}