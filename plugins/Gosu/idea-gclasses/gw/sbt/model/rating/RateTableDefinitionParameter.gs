package gw.sbt.model.rating

uses java.lang.Integer

class RateTableDefinitionParameter {
  var _sortOrder: Integer as SortOrder
  var _columnName: String as ColumnName
  var _physicalColumnName: String as PhysicalColumnName

}