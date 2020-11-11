package gw.sbt.artifacts.systables

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses java.util.Collections
uses java.util.Set
uses java.util.List

class SystemTableRegistry extends XmlContent {

  construct() {
    super(XmlElement.parse("<import/>"))
  }

  construct(content : byte[]) {
    super(content)
  }

  construct(content : XmlElement) {
    super(content)
  }

  function add(fileDefinition : SystemTableRegistryFileDefinition) {
    _content.addChild(fileDefinition.Xml)
  }

  property get All() : List<SystemTableRegistryFileDefinition> {
    return getChildren().map( \ fileDefinition -> new SystemTableRegistryFileDefinition(fileDefinition))
  }

  property get AllSystemTableFileNames(): Set<String> {
    return All*.FileName?.toSet() ?: Collections.emptySet()
  }

  function getSystemTableFileDefinition(systemTableFileName: String) : SystemTableRegistryFileDefinition {
    return All.firstWhere( \fileDefinition -> fileDefinition.FileName == systemTableFileName)
  }
}