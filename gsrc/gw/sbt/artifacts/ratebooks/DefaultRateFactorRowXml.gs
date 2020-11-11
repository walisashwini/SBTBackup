package gw.sbt.artifacts.ratebooks

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.xml.XmlElement

class DefaultRateFactorRowXml extends XmlContent implements HasPublicId {

  construct(content : XmlElement) {
    super(content)
  }

  override property get PublicId() : String {
    return getAttributeValue("public-id")
  }

  property set PublicId(pid: String) {
    setAttributeValue("public-id", pid)
  }

  property set RateTablePublicId(rateTablePid: String) {
    getChild("RateTable").setAttributeValue("public-id", rateTablePid)
  }

  property get RateTablePublicId() : String {
    return getChild("RateTable").getAttributeValue("public-id")
  }

}