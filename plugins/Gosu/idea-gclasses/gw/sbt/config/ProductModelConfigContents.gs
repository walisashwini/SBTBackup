package gw.sbt.config

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups
uses gw.sbt.artifacts.lookups.ProductLookups
uses gw.sbt.artifacts.policyline.ModifierMinMax
uses gw.sbt.artifacts.policyline.PolicyLinePattern
uses gw.sbt.artifacts.products.Product
uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRegistry

interface ProductModelConfigContents {

  function getBureauCodes(filenameWithExtension : String) : SystemTable

  function getClausePattern(policyLinePatternCode : String, clausePublicId : String) : PolicyClausePattern

  function getClausePatternLookups(policyLinePatternCode : String, jurisdiction : String, clausePublicId : String) : ClausePatternLookups

  function getClausePatternFromClauses(clausePublicId : String) : PolicyClausePattern

  function getClauseLookups(clausePublicId : String, jurisdiction : String) : ClausePatternLookups

  property get ScheduleConfig() : ScheduleConfig

  function getPolicyFormPattern(formCode : String) : PolicyFormPattern

  function getAllPolicyFormPatterns() : List<PolicyFormPattern>

  property get CustomFormInferences() : CustomFormInferencesContent

  property get SystemTableRegistry() : SystemTableRegistry

  function getSystemTable(filenameWithExtension: String) : SystemTable

  function getProductLookups(productCode : String, jurisdiction : String) : ProductLookups

  function getProduct(productCode: String): Product

  function getAllClausePatterns(policyLinePatternCode: String) : List<PolicyClausePattern>

  function getPolicyLinePatternLookups(policyLinePatternCode: String, jurisdiction: String) : PolicyLinePatternLookups

  function getPolicyLinePatternLookupsForStateAndCW(policyLinePatternCode: String, jurisdiction: String)
      : PolicyLinePatternLookups

  function getPolicyLinePattern(policyLinePatternCode : String) : PolicyLinePattern

  function getModifierMinMax(policyLinePatternCode: String, jurisdiction: String) : ModifierMinMax

  function getClausePatternIdsWithCWLookup(policyLinePatternCode: String) : List<String>
}
