package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses gw.sbt.util.XmlUtil
uses java.util.List

class Entity extends XmlContent {

  construct(content: byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content: XmlElement) {
    super(content)
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  protected var _entityName: String

  static function newEntity() : Entity {
    var xml = "<entity></entity>"
    return new Entity(xml.Bytes)
  }

  property get DisplayName() : String {
    return getAttributeValue("displayName")
  }

  property get EntityName() : String {
    if (_entityName == null) {
      _entityName = getAttributeValue("entity")?:getAttributeValue("name")
    }
    return _entityName
  }

  property set EntityName(name : String) {
    _content.setAttributeValue("entity", name)
    _entityName = name
  }

  property get SuperType() : String {
    return getAttributeValue("supertype")
  }

  property get Fields() : List<NamedXmlContent> {
    return { Columns, Arrays, TypeKeys, ForeignKeys }.flatten().toList()
  }

  property get TypeKeys() : List<TypeKey> {
    return getChildren("typekey").map( \ typekeyXml -> new TypeKey(typekeyXml, XmlDeclarations) )
  }

  function getTypeKey(typeKeyColumn : String) : TypeKey {
    return TypeKeys.firstWhere( \ typeKey -> typeKey.Name == typeKeyColumn)
  }

  function addTypeKey(typeKey : TypeKey) {
    _content.addChild(typeKey.Xml)
  }

  function getColumn(columnName : String): EntityColumn {
    return Columns.firstWhere( \ column -> column.Name == columnName)
  }

  function addColumn(column : EntityColumn) {
    _content.addChild(column.Xml)
  }

  property get Columns() : List<EntityColumn> {
    return getChildren("column").map( \ columnXml -> new EntityColumn(columnXml, XmlDeclarations))
  }

  property get ForeignKeys() : List<ForeignKey> {
    return getChildren("foreignkey").map( \ xml -> new ForeignKey(xml, XmlDeclarations))
  }

  function addForeignKey(foreignKey : ForeignKey) {
    _content.addChild(foreignKey.Xml)
  }

  property get ColumnsForeignkeys() : List<NamedXmlContent> {
    var result : List<NamedXmlContent> = Columns
    result.addAll(ForeignKeys)
    return result
  }

  property get Arrays () : List<EntityArray> {
    return getChildren("array").map( \ arrayXml -> new EntityArray(arrayXml, XmlDeclarations))
  }

  function addArray(array : EntityArray) {
    _content.addChild(array.Xml)
  }


  property get ImplementsInterfaces() : List<EntityImplementsInterface> {
    return getChildren("implementsInterface").map( \ implementsInterfaceXml -> new EntityImplementsInterface(implementsInterfaceXml, XmlDeclarations) )
  }

  function addImplementsInterface(implementsInterface : EntityImplementsInterface) {
    _content.addChild(implementsInterface.Xml)
  }

  property get ImplementsEntitys() : List<EntityImplementsEntity> {
    return getChildren("implementsEntity").map( \ implementsEntityXml -> new EntityImplementsEntity(implementsEntityXml, XmlDeclarations) )
  }

  function addImplementsEntity(implementsEntity : EntityImplementsEntity) {
    _content.addChild(implementsEntity.Xml)
  }

  function copy() : Entity {
    return new Entity(this.Bytes)
  }


}