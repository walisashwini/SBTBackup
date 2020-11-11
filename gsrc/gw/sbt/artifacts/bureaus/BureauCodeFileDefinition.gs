package gw.sbt.artifacts.bureaus

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class BureauCodeFileDefinition extends XmlContent {
  var _fileName : String as FileName
  var _label : String as Label

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _fileName = _content.getChild("FileName").$Text
    _label = _content.getChild("Label").$Text
  }

  property get FileNameWithExtension() : String {
    return _fileName + ".xml"
  }
}