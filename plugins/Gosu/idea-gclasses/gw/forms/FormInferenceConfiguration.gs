package gw.forms

uses gw.lob.common.dependency.schema.form_inference_config.anonymous.elements.FormInferenceType_Version

interface FormInferenceConfiguration {
  /**
   *
   * @param lobCode like ca7, cp7 etc
   * @param formCode CP60141185
   * @param jurisdiction
   * @param effectiveDate date to query the configuration xml
   * @return the <b>first</b> version from the form-inference-config.xml
   */
  function getFormInferenceVersion(lobCode: String, formCode: String, jurisdiction: String, effectiveDate: Date) : FormInferenceType_Version;

  /**
   * Reload all the config xmls
   * @param configPath folder contains all the form-inference-config xmls
   */
  function reload(configPath: String);
}