package gw.sbt.reader.content

uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses gw.sbt.reader.content.inference.DefaultInferenceReader
uses gw.sbt.reader.content.inference.InferenceReader
uses gw.sbt.reader.content.inference.MandatoryInferenceReader
uses gw.sbt.reader.content.inference.NoneInferenceReader
uses gw.sbt.reader.content.inference.SimpleInferenceClauseReader
uses gw.sbt.reader.content.inference.SimpleInferenceCovTermsReader
uses gw.sbt.reader.content.inference.SimpleInferenceMultiClauseReader
uses gw.sbt.reader.content.inference.SimpleInferenceMultiTypekeyReader
uses gw.sbt.reader.content.inference.SimpleInferenceTypekeyReader

uses java.util.HashMap

class FormInferenceReader {
  function read(formPattern: PolicyFormPattern, customFormInferences: CustomFormInferencesContent, updateContents: ConfigContents): FormInference {
    if (customFormInferences != null) {
      var inference = customFormInferences.All.firstWhere(\inference -> inference.FormCode == formPattern.Code)
      if (inference != null) {
        return new FormInference() {
            : Type = FormInferenceType.CUSTOM,
            : Details = inference.InferenceClass
        }
      }
    }

    return {
      new MandatoryInferenceReader(),
      new SimpleInferenceClauseReader(),
      new SimpleInferenceCovTermsReader(),
      new SimpleInferenceMultiClauseReader(),
      new SimpleInferenceTypekeyReader (),
      new SimpleInferenceMultiTypekeyReader (),
      new NoneInferenceReader()
    }
    .reduce(new HashMap<String, InferenceReader>(), \map, reader -> {
      reader.MatchingInferenceClasses.each(\inferenceClass -> map.put(inferenceClass, reader))
      return map
    })
    .toAutoMap(\k -> new DefaultInferenceReader ())
    .get(formPattern.GenericInferenceClass)
    .read(formPattern, updateContents)
  }
}