package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses java.util.List

interface InferenceReader {

  function read(formPattern : PolicyFormPattern, updateContents : ConfigContents) : FormInference

  property get MatchingInferenceClasses() : List<String>
}