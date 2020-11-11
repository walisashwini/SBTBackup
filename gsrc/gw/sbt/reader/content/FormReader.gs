package gw.sbt.reader.content

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.index.SBTUpdateEntry
uses gw.sbt.index.SBTUpdateIndex
uses gw.sbt.model.form.PolicyForm
uses java.util.List

class FormReader {

  function read(updateIndex: SBTUpdateIndex, updateContents: SBTUpdateContents) : List<PolicyForm> {
    var formEntries = updateIndex.Forms
    return formEntries.map( \ entry -> newPolicyForm(entry, updateContents)).toList()
  }

  private function newPolicyForm(entry : SBTUpdateEntry, updateContents: SBTUpdateContents) : PolicyForm {
    var formPattern = updateContents.getPolicyFormPattern(entry.ContentId)
    var policyForm = createPolicyForm(formPattern, updateContents);

    policyForm.Intent = new IntentReader().read(entry)
    if(formPattern.UseInsteadOfCode.HasContent){
      policyForm.UseInsteadOfCWForm =
          createPolicyForm(updateContents.getPolicyFormPattern(formPattern.UseInsteadOfCode), updateContents)
    }

    return policyForm
  }

  private function createPolicyForm(formPattern : PolicyFormPattern, updateContents: SBTUpdateContents) : PolicyForm {
    return new PolicyForm() {
        :Priority = formPattern.Priority,
        :Number = formPattern.FormNumber,
        :Code = formPattern.Code,
        :Edition = formPattern.Edition,
        :Description = formPattern.Description,
        :EffectiveAvailability = formPattern.EffectiveStateCwAvailability,
        :Availabilities = formPattern.Availabilities,
        :Inference = new FormInferenceReader().read(formPattern, updateContents.CustomFormInferences, updateContents),
        :InternalGroupCode = formPattern.InternalGroupCode
    }
  }

}