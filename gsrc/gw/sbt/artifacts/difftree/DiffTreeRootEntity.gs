package gw.sbt.artifacts.difftree

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class DiffTreeRootEntity extends XmlContent {
  var _type : String as Type
  var _properties : DiffTreeProperties as Properties

  construct(content : byte[]) {
    super(content)
    init()
  }

  construct(xml : XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _type = _content.getAttributeValue("type")

    var propertiesChild = getChildren("Properties")
        .firstWhere( \ propertiesChild -> new DiffTreeProperties(propertiesChild).IncludeFromType == _type )
    if(propertiesChild != null) {
      _properties = new DiffTreeProperties(propertiesChild)
    }
  }

  public function addProperties(properties : DiffTreeProperties) {
    _properties = properties
    _content.addChild(properties.Xml)
  }

}