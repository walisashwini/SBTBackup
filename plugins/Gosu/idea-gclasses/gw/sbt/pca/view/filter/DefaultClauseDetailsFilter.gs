package gw.sbt.pca.view.filter

uses com.guidewire.pl.system.filters.BeanBasedQueryFilter

class DefaultClauseDetailsFilter implements BeanBasedQueryFilter {
  override function applyFilter(obj: Object): boolean {
    return true
  }
}

