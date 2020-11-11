package gw.sbt.model.form.inference

class FormInferenceCovTermValue {

  var _desc: String as Description

  var _covTerm: CovTerm as CovTerm

  static class CovTerm {
    var _pid: String as PublicId
    var _cid: String as CodeIdentifier
    var _desc: String as Description

    var _clause: FormInferenceClause as Clause
  }
}
