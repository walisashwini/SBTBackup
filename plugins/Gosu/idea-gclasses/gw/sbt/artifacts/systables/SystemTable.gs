package gw.sbt.artifacts.systables

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.loader.SystemTableHelper
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement
uses java.util.List
uses gw.sbt.util.LoaderUtil

class SystemTable extends XmlContent {

  var _tableName : String // same as backingEntity's name
  var _fileName : String as readonly FileName
  var _allRows : List<SystemTableRow> as AllRows

  var _backingEntity: Entity as BackingEntity

  construct(content : byte[]) {
    super(content)
    _tableName = getChildren().first().$QName.LocalPart
    init()
  }

  construct(content : XmlElement) {
    super(content)
    init()
  }

  construct(content : byte[], fileName : String) {
    super(content)
    _tableName = getChildren().first().$QName.LocalPart
    _fileName = fileName
    init()
  }

  private function init() {
    var effectiveDatePair = SystemTableHelper.EFFECTIVE_DATE_COLUMN_MAP.get(_tableName)
    _allRows = getChildren().map( \ rowXml -> new SystemTableRow(rowXml, effectiveDatePair.First, effectiveDatePair.Second))
  }

  // In production, _tableName should always be set (from one of the rows). Some of the tests, however, use empty
  // tables, but set the backing entity.
  property get TableName() : String {
    return _tableName ?: BackingEntity.EntityName
  }

  property set TableName(tableName : String) {
    _tableName = tableName
  }

  property get FileNameWithExtension() : String {
    return _fileName + ".xml"
  }

  function getAllColumns(): List<SystemTableColumn> {
    var allColumnNames : Set<String> = {}
    AllRows*.ColumnNames.each(\columnNamesPerRow -> allColumnNames.addAll(columnNamesPerRow))

    return allColumnNames.map( \ columnName -> new SystemTableColumn() { :Name = columnName})
  }

  function getRows(jurisdiction : String, lineCode : String = null, includeCW : boolean = false) : List<SystemTableRow> {
    if (lineCode != null) {
      return AllRows.where(\row -> (row.Jurisdiction == jurisdiction or (includeCW and LoaderUtil.isJurisdictionCW(row.Jurisdiction))) and
          (row.PolicyLinePatternCode == null or row.PolicyLinePatternCode.Empty or row.PolicyLinePatternCode == lineCode))
    } else {
      return AllRows.where(\row -> (row.Jurisdiction == jurisdiction or (includeCW and LoaderUtil.isJurisdictionCW(row.Jurisdiction))))
    }
  }

  function addRow(row : SystemTableRow) {
    _content.$Children.add(row._content)
    _allRows.add(row)
  }

  function addRows(rows : List<SystemTableRow>) {
    rows.each( \ row -> addRow(row))
  }

  function removeAllRows(){
    _content.removeChildren(getChildren().first().$QName)
    _allRows.clear()
  }

  public static function createEmpty() : SystemTable {
    return new SystemTable(new XmlElement("import"))
  }

  function copy(): SystemTable {
    return new SystemTable(Xml.bytes(), _fileName)
  }
}