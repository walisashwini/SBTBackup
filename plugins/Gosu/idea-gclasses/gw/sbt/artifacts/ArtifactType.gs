package gw.sbt.artifacts

uses gw.sbt.artifacts.policyline.ModifierPattern
uses gw.sbt.artifacts.policyline.RateFactorPattern
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.model.form.PolicyForm
uses java.lang.IllegalArgumentException

enum ArtifactType {
  CLAUSE,
  COV_TERM,
  COV_TERM_OPTION,
  POLICY_FORM,
  MODIFIER,
  RATE_FACTOR

  static function forArtifact(artifact : Object) : ArtifactType {
    switch (typeof artifact) {
      case Clause : return CLAUSE
      case CovTerm : return COV_TERM
      case CovTermOption : return COV_TERM_OPTION
      case PolicyForm : return POLICY_FORM
      case ModifierPattern: return MODIFIER
      case RateFactorPattern: return RATE_FACTOR
      default:
        throw new IllegalArgumentException("Cannot determine artifact type for object type '${typeof artifact}' for ${artifact}")
    }
  }
}