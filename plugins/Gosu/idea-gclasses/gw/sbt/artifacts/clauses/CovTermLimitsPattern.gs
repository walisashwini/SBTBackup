package gw.sbt.artifacts.clauses

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class CovTermLimitsPattern extends XmlContent implements HasPublicId {
  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  static property get ComparableAttributes() : List<String> {
    return {
        "minVal",
        "maxVal",
        "currency"
    }
  }

  override property get PublicId() : String {
    return _content.getAttributeValue("public-id")
  }

  function copy() : CovTermLimitsPattern {
    return new CovTermLimitsPattern(XmlUtil.copyElement(_content), XmlDeclarations)
  }
}