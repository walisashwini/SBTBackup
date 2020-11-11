package gw.sbt.artifacts.clauses

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class PackageTermPattern extends XmlContent implements ContentWrapper {
  construct(content : byte[]) {
    super(content)
  }

  construct(content : XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
  }

  function copy() : PackageTermPattern {
    return new PackageTermPattern(this.Bytes)
  }

  property get Value() : String {
    return Xml.getAttributeValue("value")
  }

  static property get ComparableAttributes() : List<String> {
    return {
        "aggregationModel",
        "restrictionModel",
        "valueType",
        "priority"
    }
  }
}