package gw.sbt.artifacts.ratebooks

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.xml.XmlElement

class RateTableXml extends XmlContent implements HasPublicId {

  construct(content : XmlElement) {
    super(content)
  }

  property get DefinitionPublicId() : String {
    return getChild("Definition").getAttributeValue("public-id")
  }

  property set RateBookPublicId(rateBookPid: String) {
    getChild("RateBook").setAttributeValue("public-id", rateBookPid)
  }

  property get RateBookPublicId() : String {
    return getChild("RateBook").getAttributeValue("public-id")
  }

  override property get PublicId() : String {
    return getAttributeValue("public-id")
  }
}