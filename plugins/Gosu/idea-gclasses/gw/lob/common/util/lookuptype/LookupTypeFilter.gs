package gw.lob.common.util.lookuptype

uses gw.api.database.Query
uses java.lang.Comparable

interface LookupTypeFilter {
  function filter(columnName: String, query: Query, arg: Comparable<Object>)
}