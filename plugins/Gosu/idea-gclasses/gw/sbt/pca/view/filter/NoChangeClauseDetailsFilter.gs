package gw.sbt.pca.view.filter

uses com.guidewire.pl.system.filters.BeanBasedQueryFilter
uses gw.sbt.pca.view.presenter.RowPresenter

class NoChangeClauseDetailsFilter implements BeanBasedQueryFilter {
  override function applyFilter(obj: Object): boolean {
    var rowPresenter = obj as RowPresenter
    return rowPresenter.DiffType != UpdateDiffType.TC_NOCHANGE
  }
}