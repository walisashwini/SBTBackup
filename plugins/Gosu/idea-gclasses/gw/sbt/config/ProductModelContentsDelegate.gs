package gw.sbt.config

uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups

abstract class ProductModelContentsDelegate implements ProductModelConfigContents {

  override function getPolicyLinePatternLookupsForStateAndCW(policyLinePatternCode: String, jurisdiction: String)
      : PolicyLinePatternLookups {
    var cwLookupsFile = ConfigurationFile.policyLinePatternLookups(policyLinePatternCode + "-lookups.xml",
        policyLinePatternCode)
    var stateLookupsFile = ConfigurationFile.policyLinePatternLookups(policyLinePatternCode + "-lookups.xml",
        policyLinePatternCode, jurisdiction)
    var lookupsFiles = { cwLookupsFile, stateLookupsFile }.where(\ file -> contentExists(file))

    if (lookupsFiles.Empty) return null

    return lookupsFiles.reduce(null, \ lookupsSoFar, file -> {
      var lookupsFromFile = PolicyLinePatternLookups.fromBytes(contentOf(file))
      if (lookupsSoFar == null)
        return lookupsFromFile
      else {
        lookupsSoFar.addAll(lookupsFromFile.AllLookups)
        return lookupsSoFar
      }
    })
  }

  abstract protected function contentExists(file : ConfigurationFile) : boolean

  abstract protected function contentOf(file : ConfigurationFile) : byte[]
}