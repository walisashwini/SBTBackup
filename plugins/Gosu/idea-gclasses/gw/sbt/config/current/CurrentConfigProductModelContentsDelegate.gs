package gw.sbt.config.current

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.forms.CustomFormInferencesContent
uses gw.sbt.artifacts.forms.FormPatterns
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
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement
uses org.apache.commons.io.FilenameUtils

class CurrentConfigProductModelContentsDelegate extends ProductModelContentsDelegate {
  var _currentConfig: CurrentConfigContents as CurrentConfig
  var _config: TargetConfiguration as Config
  var _policyLinePatternCode: String as PolicyLinePatternCode

  var _cachedFormPatterns: List< PolicyFormPattern > = {}

  construct(currentConfig : CurrentConfigContents) {
    _policyLinePatternCode = currentConfig.PolicyLinePatternCode
    _currentConfig = currentConfig
    _config = currentConfig.Config
  }

  override function getClausePattern(policyLinePatternCode : String, clausePublicId: String) : PolicyClausePattern {
    var clausePatternFile = ConfigurationFile.clausePattern(clausePublicId + ".xml", policyLinePatternCode)
    return parse(clausePatternFile, \ contents -> new PolicyClausePattern(contents))
  }

  override function getClausePatternLookups(policyLinePatternCode : String,
                                            jurisdiction : String,
                                            clausePublicId : String) : ClausePatternLookups {
    var lookupsFile = ConfigurationFile.clausePatternLookups(clausePublicId + "-lookups.xml", PolicyLinePatternCode,
        jurisdiction)

    if(not Config.exists(lookupsFile)){
      return ClausePatternLookups.Empty
    }

    return parse(lookupsFile, \ contents ->
        new ClausePatternLookups(XmlElement.parse(contents), XmlUtil.getXmlDeclarations(contents)))
  }

  override property get CustomFormInferences(): CustomFormInferencesContent {
    return parse(ConfigurationFile.customFormInference(), \ contents -> new CustomFormInferencesContent(contents))
  }

  override function getPolicyFormPattern(formCode: String): PolicyFormPattern {
    throw "unimplemented"
  }

  //Only integration tests read policy form patterns from filesystem instead of reading from DB.
  override function getAllPolicyFormPatterns() : List<PolicyFormPattern> {
    if (_cachedFormPatterns.Empty) {
      var formPatternFile = ConfigurationFile.formPatternFile(_policyLinePatternCode)
      if (formPatternFile == null or not Config.exists(formPatternFile)) {
        return {}
      }
      _cachedFormPatterns = new FormPatterns(Config.contents(formPatternFile)).All
    }
    return _cachedFormPatterns
  }
  
  override function getClausePatternFromClauses(clausePublicId: String): PolicyClausePattern {
    return getClausePattern(PolicyLinePatternCode, clausePublicId)
  }

  override function getClauseLookups(clausePublicId : String, jurisdiction : String) : ClausePatternLookups {
    var configFiles = ConfigurationFile.clausePatternLookups(jurisdiction, clausePublicId + "-lookups.xml", PolicyLinePatternCode, Config)

    // no lookups found
    if (configFiles.Empty) return null

    var lookupsXml: XmlElement
    var xmlDeclarations: String
    configFiles.each(\configFile -> {
      var bytes = Config.contents(configFile)
      var xml = XmlElement.parse(bytes)
      xmlDeclarations = XmlUtil.getXmlDeclarations(bytes)
      if (lookupsXml == null) {
        lookupsXml = xml
      } else {
        lookupsXml.$Children.addAll(xml.$Children)
      }
    })
    return new ClausePatternLookups(lookupsXml, xmlDeclarations)
  }

  override function getProductLookups(productCode: String, jurisdiction: String) : ProductLookups {
    var productLookupsFile = ConfigurationFile.productLookups(productCode + "-lookups.xml", productCode, jurisdiction)
    return parse(productLookupsFile, \ contents -> ProductLookups.fromBytes(contents))
  }

  override function getProduct(productCode : String) : Product {
    var productFile = ConfigurationFile.productPattern(productCode)
    return parse(productFile, \ contents -> new Product(contents))
  }

  override function getPolicyLinePatternLookups(policyLine: String, jurisdiction: String) : PolicyLinePatternLookups {
    var lookupsFile = ConfigurationFile.policyLinePatternLookups(policyLine + "-lookups.xml", policyLine, jurisdiction)
    return parse(lookupsFile, \ contents -> PolicyLinePatternLookups.fromBytes(contents))
  }

  override function getPolicyLinePattern(policyLine: String): PolicyLinePattern {
    var policyLinePatternFile = ConfigurationFile.policyLinePattern(policyLine + ".xml", policyLine)
    return parse(policyLinePatternFile, \ contents -> new PolicyLinePattern(contents))
  }

  override function getModifierMinMax(policyLine : String, jurisdiction : String) : ModifierMinMax {
    var modifierMinMaxFile = ConfigurationFile.modifierMinMax(policyLine, jurisdiction)
    return parse(modifierMinMaxFile, \ contents -> new ModifierMinMax(contents))
  }

  override function getBureauCodes(filenameWithExtension : String) : SystemTable {
    return CurrentConfig.getSystemTable(filenameWithExtension)
  }

  override property get SystemTableRegistry(): SystemTableRegistry {
    var systemTableRegistryContent = Config?.contents(ConfigurationFile.systemTableRegistryFile())
    return systemTableRegistryContent != null && systemTableRegistryContent.length > 0 ? new SystemTableRegistry(systemTableRegistryContent) : null
  }

  override function getSystemTable(filenameWithExtension : String) : SystemTable {
    return CurrentConfig.getSystemTable(filenameWithExtension)
  }

  override property get ScheduleConfig(): ScheduleConfig {
    return parse(ConfigurationFile.scheduleConfig(_currentConfig.ProductAbbreviation), \ contents -> new ScheduleConfig(contents))
  }

  reified private function parse<T>(file : ConfigurationFile, ifExists(contents : byte[]) : T) : T {
    return Config.exists(file)
        ? ifExists(Config.contents(file))
        : null
  }

  override function getAllClausePatterns(policyLinePatternCode: String) : List<PolicyClausePattern> {
    var list : List<PolicyClausePattern> = {}
    var fileNames = Config.listFileNames(ConfigurationFile.clausePatternFolder(policyLinePatternCode))
    if (fileNames.HasElements) {
      fileNames.each(\fileName -> {
        if (not fileName.endsWith("-lookups.xml") and not fileName.endsWith(".metadata")) { // filter out lookup and metadata files.
          var patternFile = ConfigurationFile.clausePattern(fileName, policyLinePatternCode)
          list.add(new PolicyClausePattern(Config.contents(patternFile)))
        }
      })
    }
    return list
  }

  override function getClausePatternIdsWithCWLookup(policyLinePatternCode : String) : List<String> {
    var list : List<String> = {}
    var fileNames = Config.listFileNames(ConfigurationFile.clausePatternFolder(policyLinePatternCode))
    if (fileNames.HasElements) {
      list.addAll(fileNames.where(\fileName -> fileName.endsWith("-lookups.xml"))
          .map(\lookupFileName -> lookupFileName.substring(0, lookupFileName.indexOf("-lookups.xml"))))
    }
    return list
  }

  override protected function contentExists(file : ConfigurationFile) : boolean {
    return Config.exists(file)
  }

  override protected function contentOf(file : ConfigurationFile) : byte[] {
    return Config.contents(file)
  }
}

