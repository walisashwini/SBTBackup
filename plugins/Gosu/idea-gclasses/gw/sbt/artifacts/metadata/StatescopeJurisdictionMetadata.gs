package gw.sbt.artifacts.metadata

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses gw.sbt.util.Formatter
uses java.util.Date

class StatescopeJurisdictionMetadata extends XmlContent {

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get Name() : String {
    return getValueOf("Name")
  }

  property get Code() : String {
    return getValueOf("Code")
  }

  property get Version() : String {
    return getValueOf("Version")
  }

  property get EffDate() : Date {
    return extractEffectiveDate(getValueOf("EffDate"))
  }

  property get StateBureau() : String {
    return getValueOf("StateBureau")
  }

  private function getValueOf(className : String) : String {
    return getChildren("span").firstWhere( \ span -> span.getAttributeValue("class") == className).$Text
  }

  private function extractEffectiveDate(effDate: String) : Date {
    return Formatter.stringToDate(effDate, "MM/dd/yyyy")
  }
}