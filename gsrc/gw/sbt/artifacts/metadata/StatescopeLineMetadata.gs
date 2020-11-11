package gw.sbt.artifacts.metadata

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class StatescopeLineMetadata extends XmlContent {

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get Name() : String {
    return getValueOf("Name")
  }

  property get Code() : String {
    return getValueOf("Code")
  }

  private function getValueOf(className : String) : String {
    return getChildren("span").firstWhere( \ span -> span.getAttributeValue("class") == className).$Text
  }

}