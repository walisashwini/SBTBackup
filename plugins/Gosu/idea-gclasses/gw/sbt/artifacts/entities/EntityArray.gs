package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.NamedXmlContent
uses gw.xml.XmlElement


class EntityArray extends NamedXmlContent {

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  construct(content : XmlElement) {
    super(content)
  }

  override property get Name() : String {
    return trimmedString(super.Name)
  }

  property get ArrayEntity() : String {
    var c = _content.getAttributeValue("arrayentity")

    return trimmedString(c)
  }

  property get Owner() : String {
    var c = _content.getAttributeValue("owner")

    return trimmedString(c)
  }

  property set Owner(owner : String) {
    _content.setAttributeValue("owner", owner)
  }

  property get Desc () : String {
    var c = _content.getAttributeValue("desc")

    return trimmedString(c)
  }

  property set Desc (owner : String) {
    _content.setAttributeValue("desc", owner)
  }

  property get CascadeDelete () : String {
    var c = _content.getAttributeValue("cascadeDelete")

    return trimmedString(c)
  }

  property set CascadeDelete (owner : String) {
    _content.setAttributeValue("cascadeDelete", owner)
  }

  private static function trimmedString (str : String) : String {
    var trimmedStr = (str== null || str.trim ().Empty)? null : str.trim ()

    return trimmedStr
  }
}