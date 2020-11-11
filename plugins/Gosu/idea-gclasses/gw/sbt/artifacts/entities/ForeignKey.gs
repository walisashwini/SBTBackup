package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.NamedXmlContent
uses gw.xml.XmlElement

class ForeignKey extends NamedXmlContent {

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  construct(content : XmlElement) {
    super(content)
  }

  property get Description() : String {
    return getAttributeValue("desc")
  }

  property get NullOK() : String {
    return getAttributeValue("nullok")
  }

  property get FKEntity() : String {
    return getAttributeValue("fkentity")
  }
}