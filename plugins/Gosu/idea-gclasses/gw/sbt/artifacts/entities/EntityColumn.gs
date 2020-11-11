package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.NamedXmlContent
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class EntityColumn extends NamedXmlContent {

  construct(content: XmlElement) {
    super(content)
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  static function newColumn(name : String = null, type : String = null) : EntityColumn {
    var columnElement = XmlUtil.createXmlElementWithInheritedNamespace(
        "<column getterScriptability=\"doesNotExist\" nullok=\"true\" setterScriptability=\"doesNotExist\" type=\"bit\"/>", EntityExtension.NAMESPACE)

    var column = new EntityColumn(columnElement)
    if (name != null) {
      column.Name = name
    }

    // Add additional required column parameters if column type is decimal
    if (type != null) {
      column.Type = type
      if(type.equalsIgnoreCase("decimal")) {
        column.setDirectTermColumnParams()
      }
    }

    return column
  }

  property get Type() : String {
    return _content.getAttributeValue("type")
  }

  property set Type(type : String) {
    _content.setAttributeValue("type", type)
  }

  property get ColumnParams() : List<EntityColumnParam> {
    return getChildren("columnParam")?.map(\columnParam -> new EntityColumnParam(columnParam, XmlDeclarations))
  }

  function addColumnParam(newColumnParam: EntityColumnParam) {
    _content.addChild(newColumnParam.Xml)
  }

  private static final var COLUMN_DEFAULT_SIZE = "0"
  private static final var COLUMN_SIZE_SPLITTER = "."
  //column size in display format
  // for varchar: display the size directly
  // for decimal: display as 'precision.scale' format, like '10.2'
  // for others: display as 0
  property get DisplaySize() : String {
    if (not EntityColumnHelper.TYPE_TO_SIZEATTRIBUTE_MAP.containsKey(Type))
      return COLUMN_DEFAULT_SIZE
    var sizeAttributes = EntityColumnHelper.TYPE_TO_SIZEATTRIBUTE_MAP.get(Type)
    var sizeInDisplayFmt = new StringJoiner(COLUMN_SIZE_SPLITTER) // size attributes splitted as '.'
    sizeAttributes.each(\attr -> {
      var sizeParam = ColumnParams?.firstWhere(\param -> param.Name == attr)
      if (sizeParam != null) {
        sizeInDisplayFmt.add(sizeParam.Value?:COLUMN_DEFAULT_SIZE)
      }
    })
    if (sizeInDisplayFmt.length() == 0) {
      return COLUMN_DEFAULT_SIZE
    } else {
      return sizeInDisplayFmt.toString()
    }
  }

  private function setDirectTermColumnParams() {
    _content.addChild(XmlUtil.createXmlElementWithInheritedNamespace("<columnParam name=\"scale\" value=\"4\"/>", EntityExtension.NAMESPACE))
    _content.addChild(XmlUtil.createXmlElementWithInheritedNamespace("<columnParam name=\"precision\" value=\"20\"/>", EntityExtension.NAMESPACE))
  }

}