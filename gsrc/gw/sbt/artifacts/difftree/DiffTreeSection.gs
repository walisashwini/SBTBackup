package gw.sbt.artifacts.difftree

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses java.util.List

class DiffTreeSection extends XmlContent {
  var _label : String as Label
  var _rootEntities : List<DiffTreeRootEntity> as RootEntities

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _label = _content.getAttributeValue("label")

    _rootEntities = {}
    _rootEntities.addAll(
        getChildren("RootEntity").map( \ rootEntityChild -> new DiffTreeRootEntity(rootEntityChild)))
  }

}