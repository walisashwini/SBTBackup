package gw.sbt.loader.io

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.config.ConfigurationFile

class ClausePatternFileAddition extends ProductModelFileAddition<PolicyClausePattern> {

  construct(policyLine : String, clausePublicId : String, content : PolicyClausePattern) {
    super(ConfigurationFile.clausePattern(clausePublicId + ".xml", policyLine), content)
  }
}