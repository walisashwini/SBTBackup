package gw.sbt.artifacts.policyline

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses gw.sbt.util.XmlUtil

class PolicyLinePattern extends XmlContent {
  private static final var MODIFIER_PATTERNS_NODE = "ModifierPatterns"
  private static final var MODIFIER_PATTERNS_CHILD_NODE = "ModifierPattern"

  private static final var AVAILABLE_COVERAGE_CURRENCIES_NODE = "AvailableCoverageCurrencies"
  private static final var AVAILABLE_COVERAGE_CURRENCIES_CHILD_NODE = "AvailableCoverageCurrency"

  private static final var COVERAGE_CATEGORIES_NODE = "CoverageCategories"
  private static final var COVERAGE_CATEGORIES_CHILD_NODE = "CoverageCategory"

  var _modifierPatternList : List<ModifierPattern> as ModifierPatterns = {}
  var _availableCoverageCurrencyList : List<AvailableCoverageCurrency> as AvailableCoverageCurrencies = {}
  var _coverageCategoryList : List<CoverageCategory> as CoverageCategories = {}

  construct(content: byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content: XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
    var modifierPatterns = Xml.getChild(MODIFIER_PATTERNS_NODE)?.getChildren(MODIFIER_PATTERNS_CHILD_NODE)
    if (modifierPatterns != null){
      _modifierPatternList = modifierPatterns.map(\xml -> new ModifierPattern(xml, XmlDeclarations))
    }

    var availableCoverageCurrencies = Xml.getChild(AVAILABLE_COVERAGE_CURRENCIES_NODE)?.getChildren(AVAILABLE_COVERAGE_CURRENCIES_CHILD_NODE)
    if (availableCoverageCurrencies != null){
      _availableCoverageCurrencyList = availableCoverageCurrencies.map(\xml -> new AvailableCoverageCurrency(xml, XmlDeclarations))
    }

    var coverageCategories = Xml.getChild(COVERAGE_CATEGORIES_NODE)?.getChildren(COVERAGE_CATEGORIES_CHILD_NODE)
    if (coverageCategories != null){
      _coverageCategoryList = coverageCategories.map(\xml -> new CoverageCategory(xml, XmlDeclarations))
    }
  }

  function createEmptyPolicyLinePattern() : PolicyLinePattern {
    var copyOfPolicyLinePattern = new PolicyLinePattern(XmlUtil.copyElement(Xml), XmlDeclarations)
    copyOfPolicyLinePattern.Xml.removeChildren(MODIFIER_PATTERNS_NODE)
    copyOfPolicyLinePattern.ModifierPatterns = {}
    copyOfPolicyLinePattern.Xml.removeChildren(AVAILABLE_COVERAGE_CURRENCIES_NODE)
    copyOfPolicyLinePattern.AvailableCoverageCurrencies = {}
    copyOfPolicyLinePattern.Xml.removeChildren(COVERAGE_CATEGORIES_CHILD_NODE)
    copyOfPolicyLinePattern.CoverageCategories = {}
    return copyOfPolicyLinePattern
  }

  function copy(): PolicyLinePattern {
    return new PolicyLinePattern(XmlUtil.copyElement(Xml), XmlDeclarations)
  }

  function getModifierPattern(publicId: String): ModifierPattern {
    return ModifierPatterns.firstWhere(\pattern -> pattern.PublicId == publicId)
  }

  function getCoverageCategory(publicId: String): CoverageCategory {
    return CoverageCategories.firstWhere(\coverageCategory -> coverageCategory.PublicId == publicId)
  }

  function addCoverageCategory(coverageCategory: CoverageCategory) {
    CoverageCategories.add(coverageCategory)
    var categoryXml = Xml.getChild(COVERAGE_CATEGORIES_NODE)
    if (categoryXml == null){
      categoryXml = createEmptyChildNode(COVERAGE_CATEGORIES_NODE)
    }
    categoryXml.addChild(XmlUtil.copyElement(coverageCategory.Xml))
  }

  function getAvailableCoverageCurrency(publicId: String): AvailableCoverageCurrency {
    return AvailableCoverageCurrencies.firstWhere(\currency -> currency.PublicId == publicId)
  }

  function addAvailableCoverageCurrency(currency: AvailableCoverageCurrency) {
    AvailableCoverageCurrencies.add(currency)
    var currencyXml = Xml.getChild(AVAILABLE_COVERAGE_CURRENCIES_NODE)
    if (currencyXml == null){
      currencyXml = createEmptyChildNode(AVAILABLE_COVERAGE_CURRENCIES_NODE)
    }
    currencyXml.addChild(XmlUtil.copyElement(currency.Xml))
  }

  function addModifierPattern(modifierPattern: ModifierPattern) {
    ModifierPatterns.add(modifierPattern)
    var modifierPatternsXml = Xml.getChild(MODIFIER_PATTERNS_NODE)
    if (modifierPatternsXml == null){
      modifierPatternsXml = createEmptyChildNode(MODIFIER_PATTERNS_NODE)
    }
    modifierPatternsXml.addChild(XmlUtil.copyElement(modifierPattern.Xml))
  }

  private function createEmptyChildNode(nodeName: String) : XmlElement {
    var node = new XmlElement(nodeName)
    Xml.addChild(node)
    return node
  }

  function updateModifierPattern(modifierPatternWithNewRateFactors: ModifierPattern) {
    var currentModifierPattern = getModifierPattern(modifierPatternWithNewRateFactors.PublicId)
    if(currentModifierPattern == null) {
      addModifierPattern(modifierPatternWithNewRateFactors)
    } else {
      modifierPatternWithNewRateFactors.RateFactorPatternList.each( \ pattern -> {
        currentModifierPattern.RateFactorPatterns.addChild(XmlUtil.copyElement(pattern.Xml))
      })
    }
  }
}