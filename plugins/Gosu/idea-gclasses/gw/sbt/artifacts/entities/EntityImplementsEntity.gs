package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class EntityImplementsEntity extends NamedXmlContent {

  construct(content : byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content : XmlElement) {
    super(content)
  }

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  override property get Name() : String {
    return _content.getAttributeValue("name")
  }

  override property set Name(name : String) {
    _content.setAttributeValue("name", name)
  }
}