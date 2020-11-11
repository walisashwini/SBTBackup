package gw.lob.gl7.tree

uses gw.api.filters.StandardBeanFilter

abstract class GL7AbstractSummaryRow<T> {
  var _children : List< GL7AbstractSummaryRow > as Children
  var _rowEntity: T as RowEntity

  construct(rowEntity : T) {
    _rowEntity = rowEntity
    _children = {}
  }

  abstract property get Description() : String
  abstract property get Location() : PolicyLocation

  protected function addChildRow(childRow : GL7AbstractSummaryRow) {
    Children.add(childRow)
  }
}
