package gw.sbt.loader.io

uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses gw.sbt.artifacts.forms.CustomPolicyFormInference

class CustomFormInferenceCache {

  var _customFormInferences: CustomFormInferencesContent
  var _currentBytes: byte[] as readonly Bytes

  internal construct(initial : byte[]){
    reset(initial)
  }

  internal function add(content : CustomPolicyFormInference){
    //before adding a customFormInference, remove the existing one first if presented
    _customFormInferences.remove(content.FormCode)
    _customFormInferences.add(content)
    _currentBytes = _customFormInferences.Bytes
  }

  internal function undo(previousContent: byte[]){
    if (previousContent != null){
      reset(previousContent)
    }
  }

  private function reset(content: byte[]){
    _currentBytes = content
    if (content.Count > 0) {
      _customFormInferences = new CustomFormInferencesContent (content)
    } else {
      _customFormInferences = new CustomFormInferencesContent ()
    }
  }

}