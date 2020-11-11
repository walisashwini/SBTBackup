package gw.lob.common.util.lookuptype

uses gw.api.database.Query

class LessThanOrEqualFilter implements LookupTypeFilter {
  override function filter(columnName: String, query: Query, arg: Comparable<Object>) {
    query.compare(columnName, GreaterThanOrEquals, arg)
  }
}