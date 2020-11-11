package gw.sbt.artifacts.bureaus

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class BureauLob extends XmlContent {
  var _code : String as Lob
  var _bureauCodeFiles : List<BureauCodeFileDefinition> as BureauCodeFiles

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _code = _content.getAttributeValue("code")

    _bureauCodeFiles = {}
    _bureauCodeFiles.addAll(getChildren("BureauCode").map(\bureauCode -> new BureauCodeFileDefinition(bureauCode)))
  }
}