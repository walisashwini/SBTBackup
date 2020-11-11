package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class EntityColumnParam extends XmlContent {

  construct(content: byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

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

  property get Value() : String {
    return _content.getAttributeValue("value")
  }

  property set Value(val : String) {
    _content.setAttributeValue("value", val)
  }

}