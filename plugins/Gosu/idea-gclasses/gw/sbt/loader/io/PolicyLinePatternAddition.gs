package gw.sbt.loader.io

uses gw.sbt.artifacts.policyline.PolicyLinePattern
uses gw.sbt.config.ConfigurationFile

class PolicyLinePatternAddition extends FileModification<PolicyLinePattern> {

  construct(policyLine: String, content: PolicyLinePattern) {
    super(ConfigurationFile.policyLinePattern(policyLine + ".xml", policyLine), content)
  }
}