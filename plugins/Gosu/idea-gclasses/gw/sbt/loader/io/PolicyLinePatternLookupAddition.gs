package gw.sbt.loader.io

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups

class PolicyLinePatternLookupAddition extends FileAddition<PolicyLinePatternLookups> {

  construct(policyLine : String, jurisdiction : String, content : PolicyLinePatternLookups) {
    super(ConfigurationFile.policyLinePatternLookups(policyLine + "-lookups.xml", policyLine, jurisdiction), content)
  }
}