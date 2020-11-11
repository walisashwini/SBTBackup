package gw.sbt.artifacts.entities

uses gw.xml.XmlElement
uses gw.sbt.util.XmlUtil

class EntityExtension extends Entity {

  public static final var NAMESPACE : String = "http://guidewire.com/datamodel"

  construct(content: byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  static function newEntityExtension(entityName : String) : EntityExtension {
    var xml = "<extension xmlns=\"${NAMESPACE}\" entityName=\"${entityName}\"></extension>"
    return new EntityExtension(xml.Bytes)
  }

  override property get EntityName() : String {
    if (_entityName == null) {
      _entityName = getAttributeValue("entityName")
    }
    return _entityName
  }

  override property set EntityName(name : String) {
    _content.setAttributeValue("entityName", name)
    _entityName = name
  }

  override function copy() : EntityExtension {
    return new EntityExtension(this.Bytes)
  }


}