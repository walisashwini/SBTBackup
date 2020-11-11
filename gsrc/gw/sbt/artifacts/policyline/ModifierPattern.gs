package gw.sbt.artifacts.policyline

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.xml.XmlElement
uses gw.sbt.util.XmlUtil

class ModifierPattern extends XmlContent implements HasPublicId {
  private static final var RATEFACTOR_PATTERNS_NODE  = "RateFactorPatterns"
  private static final var RATEFACTOR_PATTERNS_CHILD_NODE  = "RateFactorPattern"

  var _rateFactorPatterns: XmlElement as RateFactorPatterns                         // the node: <ModifierPatterns>...</ModifierPatterns>
  var _rateFactorPatternList: List<RateFactorPattern> as RateFactorPatternList = {} // the list of patterns

  construct(content: XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
    resetRateFactorPatternList()
  }

  private function createEmptyRateFactorPatternsNode() : XmlElement {
    var node = new XmlElement(RATEFACTOR_PATTERNS_NODE)
    Xml.addChild(node)
    return node
  }

  function copy(): ModifierPattern {
    return new ModifierPattern(XmlUtil.copyElement(Xml), XmlDeclarations)
  }

  function removeRateFactorPatterns() {
    Xml.removeChildren(RATEFACTOR_PATTERNS_NODE)
    Xml.addChild(new XmlElement(RATEFACTOR_PATTERNS_NODE))
    //reset the RateFactorPattern List
    resetRateFactorPatternList()
  }

  function addRateFactorPattern(pattern: RateFactorPattern) {
    _rateFactorPatterns.addChild(XmlUtil.copyElement(pattern.Xml))
    _rateFactorPatternList.add(pattern)
  }

  private function resetRateFactorPatternList() {
    var patterns = Xml.getChildren(RATEFACTOR_PATTERNS_NODE)
    if( not patterns.Empty ) { // should have one and only one RateFactorPattern under each ModifierPattern
      _rateFactorPatterns = patterns.get(0)
    } else { // just in case
      _rateFactorPatterns = createEmptyRateFactorPatternsNode()
    }
    var rateFactorPatternList = _rateFactorPatterns.getChildren(RATEFACTOR_PATTERNS_CHILD_NODE)
    _rateFactorPatternList = rateFactorPatternList.map(\xml -> new RateFactorPattern(xml, XmlDeclarations))
  }

  override property get PublicId() : String {
    return _content.getAttributeValue("public-id")
  }

}