package gw.sbt.artifacts.lookuptables

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement


class LookupTableDimension  extends XmlContent {
  var _field : String as Field
  var _valuePath : String as ValuePath
  var _precedence : String as Precedence

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
    _valuePath = _content.getAttributeValue("valuePath")
    _precedence = _content.getAttributeValue("precedence")
  }

}