package gw.sbt.artifacts.metadata

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.util.Formatter
uses gw.xml.XmlElement

class StatescopeSBTVersionMetadata extends XmlContent {
  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get EffDate() : Date {
    return extractEffectiveDate(getValueOf("EffDate"))
  }

  private function getValueOf(className : String) : String {
    return getChildren("span").firstWhere( \ span -> span.getAttributeValue("class") == className).$Text
  }

  private function extractEffectiveDate(effDate: String) : Date {
    return Formatter.stringToDate(effDate, "MM/dd/yyyy")
  }

}