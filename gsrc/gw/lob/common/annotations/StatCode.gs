package gw.lob.common.annotations

uses gw.lang.annotation.AnnotationUsage

@AnnotationUsage(PropertyTarget, One)
class StatCode implements IAnnotation {
  private var _columnName: String as readonly ColumnName = ""

  construct(columnName: String) {
    _columnName = columnName
  }
}