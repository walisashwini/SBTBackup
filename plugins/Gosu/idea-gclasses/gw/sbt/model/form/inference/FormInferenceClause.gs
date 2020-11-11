package gw.sbt.model.form.inference

uses gw.sbt.model.Risk

class FormInferenceClause {

  var _pid : String as PublicId
  var _cid : String as CodeIdentifier
  var _desc : String as Description
  var _category : String as Category
  var _parentRisk : Risk as ParentRisk

}