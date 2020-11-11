package gw.sbt.artifacts.difftree

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses java.util.List

class DiffTreeProperties extends XmlContent {
  var _includeFromType : String as IncludeFromType
  var _propertyDisplays : List<DiffTreePropertyDisplay> as PropertyDisplays

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _includeFromType = _content.getAttributeValue("includefromtype")

    _propertyDisplays = {}
    _propertyDisplays.addAll(
        getChildren("PropertyDisplay").map( \ propertyDisplayChild -> new DiffTreePropertyDisplay(propertyDisplayChild)))
  }

  public function addPropertyDisplay(propertyDisplay : DiffTreePropertyDisplay) {
    _propertyDisplays.add(propertyDisplay)
    _content.addChild(propertyDisplay.Xml)
  }

}