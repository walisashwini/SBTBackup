package gw.sbt.artifacts.systables

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class SystemTableRegistryFileDefinition extends XmlContent {
  construct(content: byte[]) {
    super(content)
  }

  construct(content: XmlElement) {
    super(content)
  }

  property get FileName(): String {
    return getAttributeValue("Name")
  }
}