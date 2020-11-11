package gw.lob.gl7.tree.filter

uses gw.api.filters.StandardBeanFilter
uses gw.lob.gl7.pcf.GL7TreeNodeExpandCollapseContext
uses gw.lob.gl7.tree.GL7AbstractSummaryRow

class GL7LocationFilters {
  static function eachLocation(expandCollapseContext: GL7TreeNodeExpandCollapseContext, line: GL7GeneralLiabilityLine): StandardBeanFilter[] {
    return line.Branch.PolicyLocations
        .orderBy(\l -> l.LocationNum)
        .map(\location -> new StandardBeanFilter(location.DisplayName, new StandardBeanFilter.ObjectFilter() {
          override function accept(obj : Object) : boolean {
            return (obj as GL7AbstractSummaryRow).Location == location
          }
        }) {
          override function applyFilter(obj: Object): boolean {
            expandCollapseContext?.setLocation(location)
            return super.applyFilter(obj)
          }
        }).toTypedArray()
  }
}