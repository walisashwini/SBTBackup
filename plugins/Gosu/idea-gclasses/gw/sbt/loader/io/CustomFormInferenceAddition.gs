package gw.sbt.loader.io

uses gw.sbt.artifacts.forms.CustomPolicyFormInference
uses gw.sbt.config.ConfigurationFile

class CustomFormInferenceAddition extends FileModification<CustomPolicyFormInference> {

  static final var CUSTOM_FORM_INFERENCE = ConfigurationFile.customFormInference()

  construct(content : CustomPolicyFormInference) {
    super(CUSTOM_FORM_INFERENCE, content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeCustomFormInference(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteCustomFormInference(this)
  }

}