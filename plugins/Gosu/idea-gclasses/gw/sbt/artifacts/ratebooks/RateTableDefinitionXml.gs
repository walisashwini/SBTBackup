package gw.sbt.artifacts.ratebooks

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.xml.XmlElement

class RateTableDefinitionXml extends XmlContent implements HasPublicId {

  construct(content : XmlElement) {
    super(content)
  }

  override property get PublicId() : String {
    return getAttributeValue("public-id")
  }

  property get TableCode(): String {
    return getChild("TableCode")?.$Text
  }

}