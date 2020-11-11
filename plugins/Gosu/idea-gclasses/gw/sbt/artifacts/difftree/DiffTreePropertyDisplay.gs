package gw.sbt.artifacts.difftree

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class DiffTreePropertyDisplay extends XmlContent {
  var _propertyName : String as PropertyName

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _propertyName = _content.getAttributeValue("propertyname")
  }

}