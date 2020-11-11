package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class EntityImplementsInterface extends NamedXmlContent {

  construct(content: byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content: XmlElement) {
    super(content)
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get IFace() : String {
    return _content.getAttributeValue("iface")
  }

  property set IFace(name : String) {
    _content.setAttributeValue("iface", name)
  }

  property get Impl() : String {
    return _content.getAttributeValue("impl")
  }

  property set Impl(val : String) {
    _content.setAttributeValue("impl", val)
  }

  override property get Name() : String {
    return IFace
  }

  override property set Name(name : String) {
    IFace = name
  }
}