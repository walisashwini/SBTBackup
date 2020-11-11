package gw.sbt.artifacts.lookuptables

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement


class LookupTableDistinguishingField extends XmlContent {
  var _field : String as Field

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _field = _content.getAttributeValue("field")
  }

}