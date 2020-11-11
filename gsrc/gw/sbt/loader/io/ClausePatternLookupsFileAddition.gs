package gw.sbt.loader.io

uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.config.ConfigurationFile

class ClausePatternLookupsFileAddition extends ProductModelFileAddition<Lookups> {

  construct(policyLine : String, jurisdiction : String, clausePublicId : String, content : Lookups) {
    super(ConfigurationFile.clausePatternLookups(clausePublicId + "-lookups.xml", policyLine, jurisdiction), content)
  }
}