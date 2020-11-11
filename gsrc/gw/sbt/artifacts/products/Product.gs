package gw.sbt.artifacts.products

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class Product extends XmlContent {

  construct(content : byte[]) {
    super(content)
  }

  construct(content : XmlElement) {
    super(content)
  }

  property get Abbreviation() : String {
    return getAttributeValue("abbreviation")
  }
}