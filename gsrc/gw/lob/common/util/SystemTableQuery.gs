package gw.lob.common.util

uses gw.api.database.Query
uses gw.lob.common.util.lookuptype.ExactMatchFilter
uses gw.lob.common.util.lookuptype.GreaterThanOrEqualFilter
uses gw.lob.common.util.lookuptype.LessThanOrEqualFilter
uses gw.lob.common.util.lookuptype.LookupTypeFilter

uses SystemTableQueryUtil#*

class SystemTableQuery {
  private final static var VALUE_COLUMN = "Value"
  private final static var EXACT_MATCH = "ExactMatch"
  private final static var GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"
  private final static var LESS_THAN_OR_EQUAL = "LessThanOrEqual"

  private final static var LOOKUP_TYPE_MAPPING : Map<String, LookupTypeFilter> = {
      GREATER_THAN_OR_EQUAL -> new GreaterThanOrEqualFilter(),
      LESS_THAN_OR_EQUAL -> new LessThanOrEqualFilter(),
      EXACT_MATCH -> new ExactMatchFilter()}

  static function query(entityType : Type<KeyableBean>, parameters : List<SysTableReadParam>) : List<String> {
    return query(entityType, parameters, VALUE_COLUMN)
  }

  static function query(entityType : Type<KeyableBean>, parameters : List<SysTableReadParam>, effDatedFilter : SystemTableEffDatedParam) : List<String> {
    return query(entityType, parameters, VALUE_COLUMN, effDatedFilter)
  }

  static function query(entityType : Type<KeyableBean>) : List<String> {
    return query(entityType, {} as Map<String, Object>)
  }

  static function query(entityType : Type<KeyableBean>, parametersMap : Map<String, Object>) : List<String> {
    var parameters = parametersMap
        .filterByValues(\v -> v typeis Comparable)
        .entrySet()
        .map(\e -> SysTableReadParam.of(e.Key, EXACT_MATCH, e.Value as Comparable<Object>))
    return query(entityType, parameters, VALUE_COLUMN)
  }

  private static function query(entityType : Type<KeyableBean>, parameters : List<SysTableReadParam>, returnColumn : String) : List<String> {
    return addFilter(Query.make(entityType), parameters)
        .select()
        .map(\result -> result.getFieldValue(returnColumn)?.toString())
  }

  private static function query(entityType : Type<KeyableBean>, parameters : List<SysTableReadParam>, returnColumn : String, effDatedFilter : SystemTableEffDatedParam) : List<String> {
    var query = addFilter(Query.make(entityType), parameters)
    addJurisdictionFilter(query, entityType, effDatedFilter.Jurisdiction)

    var resultRows = query.select()
    var jurisdictionRows = resultRows
        .where(\row -> row.getFieldValue(getJurisdictionColumn(entityType).Name) != null)

    var results = jurisdictionRows.isEmpty()
        ? resultRows       // if there are no jurisdiction rows, all rows are cw rows
        : jurisdictionRows // else use the jurisdiction rows

    return results
        .where(\row -> effDatedFilter.ReferenceDate.isBetweenDates(getEffectiveDateFromRow(row), getExpirationDateFromRow(row)))
        .map(\result -> result.getFieldValue(returnColumn)?.toString())
  }

  private static function addFilter(query : Query, parameters : List<SysTableReadParam>) : Query {
    for (param in parameters) {
      var lookupTypeFilter = LOOKUP_TYPE_MAPPING[param.LookupType]
      if (lookupTypeFilter == null) {
        throw "Unsupported system table lookup type: ${param.LookupType}"
      }
      lookupTypeFilter.filter(param.ColumnName, query, param.Value)
    }
    return query
  }
}