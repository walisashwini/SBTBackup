package gw.sbt.artifacts.lookuptables

uses gw.sbt.artifacts.XmlContent


uses gw.xml.XmlElement

class LookupTables extends XmlContent {
  var _lookupTablesXml : List<LookupTable> as LookupTables

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _lookupTablesXml = {}
    _lookupTablesXml.addAll(
        getChildren("LookupTable").map( \ sectionChild -> new LookupTable(sectionChild)))
  }


  public function addTable(table : LookupTable) {
    _lookupTablesXml.add(table)
    _content.addChild(table.Xml)
  }

}