package gw.lob.common.util.lookuptype

uses gw.api.database.Query
uses java.lang.Comparable

class ExactMatchFilter implements LookupTypeFilter {
  override function filter(columnName: String, query: Query, arg: Comparable<Object>) {
    query.compare(columnName, Equals, arg)
  }
}