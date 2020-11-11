package gw.lob.gl7.tree.filter

uses com.guidewire.pl.system.filters.BeanBasedQueryFilter
uses gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext

class GL7AllLocationsFilter  implements BeanBasedQueryFilter {
  protected var _expandCollapseContext : GL7TreeNodeExpandCollapseContext

  construct(expandCollapseContext : GL7TreeNodeExpandCollapseContext) {
    _expandCollapseContext = expandCollapseContext
  }

  override function applyFilter(p0: Object): boolean {
    _expandCollapseContext?.setLocation(null)
    return true
  }

}