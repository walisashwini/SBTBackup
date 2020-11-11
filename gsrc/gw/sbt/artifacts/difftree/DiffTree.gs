package gw.sbt.artifacts.difftree

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses java.util.List

class DiffTree extends XmlContent {
  var _sections : List<DiffTreeSection> as Sections

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _sections = {}
    _sections.addAll(
        getChildren("Section").map( \ sectionChild -> new DiffTreeSection(sectionChild)))
  }

}