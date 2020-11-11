package gw.sbt.artifacts

uses gw.xml.XmlElement

class NamedXmlContent extends XmlContent {
  construct(content: XmlElement) {
    super(content)
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get Name() : String {
    return _content.getAttributeValue("name")
  }

  property set Name(name : String) {
    _content.setAttributeValue("name", name)
  }
}