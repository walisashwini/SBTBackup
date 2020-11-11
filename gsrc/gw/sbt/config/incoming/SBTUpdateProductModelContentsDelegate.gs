package gw.sbt.config.incoming

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups
uses gw.sbt.artifacts.lookups.ProductLookups
uses gw.sbt.artifacts.policyline.ModifierMinMax
uses gw.sbt.artifacts.policyline.PolicyLinePattern
uses gw.sbt.artifacts.products.Product
uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRegistry
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.ProductModelContentsDelegate

class SBTUpdateProductModelContentsDelegate extends ProductModelContentsDelegate {
  var _cachedClausePatterns: Map<String, PolicyClausePattern> = {}
  var _updateContents: SBTUpdateContents as UpdateContents
  construct(updateContents: SBTUpdateContents) {
    _updateContents = updateContents
  }

  override function getClausePattern(policyLinePatternCode: String, clausePublicId: String): PolicyClausePattern {
    var clausePattern = _cachedClausePatterns.get(policyLinePatternCode + "_" + clausePublicId)
    if (clausePattern == null) {
      var clausePatternContent = UpdateContents.getContent(ConfigurationFile.clausePattern(clausePublicId + ".xml", policyLinePatternCode))
      if (clausePatternContent != null) {
        clausePattern = new PolicyClausePattern(clausePatternContent)
        _cachedClausePatterns.put(getCachedClausePatternKey(policyLinePatternCode, clausePublicId), clausePattern)
      }
    }
    return clausePattern
  }

  override function getClausePatternLookups(policyLinePatternCode: String, jurisdiction: String, clausePublicId: String) : ClausePatternLookups {
    var lookups = UpdateContents.getContent(ConfigurationFile.clausePatternLookups(clausePublicId + "-lookups.xml", policyLinePatternCode, jurisdiction))
    if (lookups == null) return ClausePatternLookups.Empty
    return ClausePatternLookups.fromBytes(lookups)
  }

  override property get CustomFormInferences(): CustomFormInferencesContent {
    var customFormInferenceSystableContent = UpdateContents.getXmlContent("systables/" + CustomFormInferencesContent.SYSTABLE_FILENAME)
    if (customFormInferenceSystableContent != null) {
      return new CustomFormInferencesContent (customFormInferenceSystableContent)
    }
    return null
  }

  override property get SystemTableRegistry(): SystemTableRegistry {
    var systemTableRegistryContent = UpdateContents.getContent(ConfigurationFile.systemTableRegistryFile())
    return systemTableRegistryContent != null && systemTableRegistryContent.length > 0 ? new SystemTableRegistry(systemTableRegistryContent) : null
  }

  override function getSystemTable(filenameWithExtension : String) : SystemTable {
    var systemTableContent = UpdateContents.getContent(ConfigurationFile.systable(filenameWithExtension))
    return (systemTableContent != null and systemTableContent.Count> 0) ? new SystemTable(systemTableContent, filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf("."))) : null
  }

  override function getAllPolicyFormPatterns() : List<PolicyFormPattern> {
    throw "unimplemented"
  }

  override function getPolicyFormPattern(formCode: String): PolicyFormPattern {
    var formContent = UpdateContents.getXmlContent("forms/${formCode}.xml")
    return formContent == null ? null : new PolicyFormPattern(formContent)
  }

  override function getClausePatternFromClauses(clausePublicId: String): PolicyClausePattern {
    var clausePattern = UpdateContents.getContent("clauses/${clausePublicId}/${clausePublicId}.xml")
    return new PolicyClausePattern(clausePattern)
  }

  override function getClauseLookups(clausePublicId: String, jurisdiction: String): ClausePatternLookups {
    var lookups = UpdateContents.getContent("clauses/${clausePublicId}/${clausePublicId}-lookups.xml")
    return ClausePatternLookups.fromBytes(lookups)
  }

  override function getProductLookups(productCode : String, jurisdiction : String) : ProductLookups {
    var productLookups = UpdateContents.getContent(ConfigurationFile.productLookups(productCode + "-lookups.xml", productCode, jurisdiction))
    if (productLookups == null) return null
    return ProductLookups.fromBytes(productLookups)
  }

  override function getProduct(productCode : String) : Product {
    var product = UpdateContents.getContent(ConfigurationFile.productPattern(productCode))
    if (product == null) return null
    return new Product(product)
  }

  override function getPolicyLinePatternLookups(policyLine: String, jurisdiction: String) : PolicyLinePatternLookups {
    var policyLinePatternLookups = UpdateContents.getContent(
        ConfigurationFile.policyLinePatternLookups(policyLine + "-lookups.xml", policyLine, jurisdiction))
    return policyLinePatternLookups == null
      ? null
      : PolicyLinePatternLookups.fromBytes(policyLinePatternLookups)
  }

  override function getPolicyLinePattern(policyLine: String): PolicyLinePattern {
    var policyLinePattern = UpdateContents.getContent(ConfigurationFile.policyLinePattern(policyLine + ".xml", policyLine))
    if (policyLinePattern == null) {
      return null
    }
    return new PolicyLinePattern(policyLinePattern)
  }

  override function getModifierMinMax(policyLine : String, jurisdiction : String) : ModifierMinMax {
    var modifierMinMax = UpdateContents.getContent(ConfigurationFile.modifierMinMax(policyLine, jurisdiction))
    if (modifierMinMax == null) {
      return null
    }
    return new ModifierMinMax(modifierMinMax)
  }

  override function getClausePatternIdsWithCWLookup(policyLinePatternCode : String) : List<String> {
    throw "unimplemented"
  }

  override property get ScheduleConfig(): ScheduleConfig {
    var content = UpdateContents.getContent(ConfigurationFile.scheduleConfig(_updateContents.ProductAbbreviation))
    return (content == null) ? null : new ScheduleConfig(content)
  }

  override function getBureauCodes(filenameWithExtension : String) : SystemTable {
    return UpdateContents.getSystemTable(filenameWithExtension)
  }

  override function getAllClausePatterns(policyLinePatternCode: String) : List<PolicyClausePattern> {
    var processedClausesPublicIds = _cachedClausePatterns.Keys.map( \ key -> key.split("_")[1])
    var unprocessedClausePatterns = UpdateContents._content.Keys
        .where(\ filePath ->
            not processedClausesPublicIds.hasMatch( \ processedPublicId -> filePath.contains(processedPublicId + ".xml")) and
                isClausePatternXml(policyLinePatternCode, filePath))
        .map(\ filePath -> new PolicyClausePattern(UpdateContents.getContent(filePath)))

    unprocessedClausePatterns.addAll(_cachedClausePatterns.Values)

    return unprocessedClausePatterns
  }

  private function getCachedClausePatternKey(policyLinePatternCode : String, clausePublicId: String) : String {
    return policyLinePatternCode + "_" + clausePublicId
  }

  private function isClausePatternXml(policyLinePatternCode: String, filePath : String) : boolean {
    return filePath.startsWith(ConfigurationFile.clausePatternPrefix(policyLinePatternCode)) and
        not filePath.endsWith("-lookups.xml") and
        filePath.endsWith(".xml")
  }

  override protected function contentExists(file : ConfigurationFile) : boolean {
    return UpdateContents.contentExist(file.Path)
  }

  override protected function contentOf(file : ConfigurationFile) : byte[] {
    return UpdateContents.getContent(file.Path)
  }
}
