package gw.sbt.artifacts.lookuptables

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement


class LookupTableFilter extends XmlContent {
  var _field : String as Field
  var _valuePath : String as ValuePath
  var _exactMatch : String as ExactMatch

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
    _exactMatch = _content.getAttributeValue("exactMatch")
  }

}