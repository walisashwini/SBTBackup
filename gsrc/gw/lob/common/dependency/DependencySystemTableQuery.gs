package gw.lob.common.dependency

uses gw.api.database.Query
uses gw.api.upgrade.Coercions
uses gw.lang.reflect.IType
uses gw.lob.common.util.SystemTableQueryUtil
uses gw.pl.persistence.core.Bean
uses gw.util.LRUCache
uses gw.util.Pair

uses java.io.Serializable

class DependencySystemTableQuery {
  static final var COUNTRY_WIDE = "CW"
  static final var EFFECTIVEDATE = "EffectiveDate"
  static final var EXPIRATIONDATE = "ExpirationDate"
  static final var PRIORITY = "Priority"

  static var _cache = Collections.synchronizedMap(new LRUCache<CacheKey, List<Map<String, String>>>(1000))

  static function querySystemTable(tableName : String, paramData : SystemTableQueryData) : List<Map<String, String>> {
    var cacheKey = new CacheKey(tableName, paramData)
    var results = _cache.get(cacheKey)
    if (results == null) {
      results = queryTable(tableName, paramData)
      _cache.put(cacheKey, results)
    }
    return results
  }

  static function querySystemTableSingleColumn(tableName : String, paramData : SystemTableQueryData, valueColumnName : String = null) : List<String> {
    var entityType = DependencyUtil.getTypeByRelativeName(tableName)
    var hasPriority = entityType.TypeInfo.getProperty(PRIORITY) != null
    if (hasPriority) {
      // there is a column for Priority - use it to sort the list
      paramData.ValueColumns.add(PRIORITY)
    }

    var results = querySystemTable(tableName, paramData)
    if (valueColumnName == null) {
      valueColumnName = paramData.ValueColumns.first()
    }

    if (hasPriority) {
      var entries = results.map(\elt -> new Pair(elt.get(valueColumnName), elt.get(PRIORITY) == null ? 0 : elt.get(PRIORITY).toInt())).orderBy(\elt -> elt.Second)
      // in this case the query returns 2 columns
      // use a Pair object where the first field is the Value and the second field is the Priority
      // order by Priority (second in Pair) and return a list with Values (first in Pair)
      return entries.map(\elt -> elt.First).stream().distinct().toArray().toList() as List<String>
    }

    return results.map(\elt -> elt.get(valueColumnName))
  }

  static function createQuery(entityType : Type<KeyableBean>, paramData : SystemTableQueryData) : Query {
    var query = Query.make(entityType)
    addParamFilter(query, paramData.ParamMap)
    if (paramData.Jurisdiction != null) {
      SystemTableQueryUtil.addJurisdictionFilter(query, entityType, paramData.Jurisdiction)
    }
    if (paramData.ReferenceDate != null) {
      SystemTableQueryUtil.addDateFilter(query, paramData.ReferenceDate)
    }
    return query
  }

  private static function createQueryForDeletion(entityType : Type<KeyableBean>, paramData : SystemTableQueryData) : Query {
    var query = Query.make(entityType)
    addParamFilter(query, paramData.ParamMap)
    SystemTableQueryUtil.addFilterForDeletion(query, entityType, paramData.Jurisdiction, paramData.ReferenceDate)
    return query
  }

  private static function addParamFilter(query : Query, arguments : Map<String, String>) {
    arguments.eachKeyAndValue(\argKey, argValue -> query.compare(argKey, Equals, castedValue(query.EntityType, argKey, argValue)))
  }

  private static function castedValue(entityType : IType, propName : String, value : String) : Object {
    var valueType = entityType.TypeInfo.getProperty(propName).FeatureType
    if (valueType == Integer) {
      return Coercions.makeIntFrom(value)
    }
    return value
  }

  private static function queryTable(tableName : String, paramData : SystemTableQueryData) : List<Map<String, String>> {
    var jurisdictionInSearch = paramData.Jurisdiction?.DisplayName
    var entityType = DependencyUtil.getTypeByRelativeName(tableName)
    var jurisdictionColumnName = SystemTableQueryUtil.getJurisdictionColumn(entityType).Name
    var query = createQuery(entityType, paramData)
    var values = generateMapResult(query, paramData, jurisdictionColumnName, false)
    var queryForDeletion = createQueryForDeletion(entityType, paramData)
    var deletedValues = generateMapResult(queryForDeletion, paramData, jurisdictionColumnName, true)
    return generateResult(jurisdictionInSearch, values, deletedValues)
  }

  private static function generateResult(jurisdictionInSearch : String, values : LinkedHashMap<Integer, Map<String, QueryResult>>, deletedValues : LinkedHashMap<Integer, Map<String, QueryResult>>) : List<Map<String, String>> {
    var resList : List<Map<String, String>> = {}
    values.eachKeyAndValue(\k, validValue -> {
      var deletedValue = deletedValues.get(k)
      if (jurisdictionInSearch != null && deletedValue != null) {
        var cwdelete = deletedValue.get(COUNTRY_WIDE)
        var cwvalid = validValue.get(COUNTRY_WIDE)
        var statedelete = deletedValue.get(jurisdictionInSearch)
        var statevalid = validValue.get(jurisdictionInSearch)
        if (cwdelete != null) {
          if (cwvalid != null && shouldDelete(cwvalid, cwdelete)) {
            validValue.remove(COUNTRY_WIDE)
          }
          deletedValue.remove(COUNTRY_WIDE)
        }
        if (statedelete != null) {
          if (cwvalid != null && shouldDelete(cwvalid, statedelete)) {
            validValue.remove(COUNTRY_WIDE)
          }
          if (statevalid != null && shouldDelete(statevalid, statedelete)) {
            validValue.remove(jurisdictionInSearch)
          }
        }
      }
      if (!validValue.isEmpty()) {
        resList.add(validValue.values().first()._value)
      }
    })
    return resList
  }

  private static function generateCacheKeyBaseOnValueColumnValues(persistenceBean : Bean, paramData : SystemTableQueryData) : int {
    var columnValueList : List<String> = {}
    paramData.ValueColumns.each(\elt -> {
      columnValueList.add(elt)
      columnValueList.add(persistenceBean.getFieldValue(elt)?.toString())
    })
    return Objects.hash(columnValueList.toArray())
  }

  private static function generateMapResult(query : Query, paramData : SystemTableQueryData, jurisdictionColumnName : String, forDelete : boolean) : LinkedHashMap<Integer, Map<String, QueryResult>> {
    var values : LinkedHashMap<Integer, Map<String, QueryResult>> = {}
    query.select().each(\result -> {
      var cacheKey = generateCacheKeyBaseOnValueColumnValues(result, paramData)
      var jurisdiction = result.getFieldValue(jurisdictionColumnName) != null ? result.getFieldValue(jurisdictionColumnName).toString() : COUNTRY_WIDE
      var effectiveDate = DependencyUtil.convertStringToDate(result.getFieldValue(EFFECTIVEDATE)?.toString())
      var expirationDate = DependencyUtil.convertStringToDate(result.getFieldValue(EXPIRATIONDATE)?.toString())
      var valueMap = paramData.ValueColumns.mapToKeyAndValue(\column -> column, \column -> result.getFieldValue(column)?.toString())
      var cacheValue = new QueryResult(jurisdiction, effectiveDate, expirationDate, valueMap)
      var existing = values.get(cacheKey)
      if (existing != null) {
        var existingJurisdictionValue = existing.get(jurisdiction)
        if (existingJurisdictionValue == null) {
          existing.put(jurisdiction, cacheValue)
        } else {
          if ((!forDelete && effectiveDate >= existingJurisdictionValue._effectiveDate) || (forDelete && expirationDate >= existingJurisdictionValue._expirationDate)) {
            existing.put(jurisdiction, cacheValue)
          }
        }
      } else {
        values.put(cacheKey, {jurisdiction -> cacheValue})
      }
    })
    return values
  }

  private static function shouldDelete(validData : QueryResult, deleteData : QueryResult) : boolean {
    if (deleteData._effectiveDate >= validData._effectiveDate && (validData._expirationDate == null || deleteData._expirationDate <= validData._expirationDate)) {
      return true
    }
    return false
  }

  static class CacheKey {
    var _tableName : String
    var _paramData : SystemTableQueryData

    construct(tableName : String, paramData : SystemTableQueryData) {
      _tableName = tableName
      _paramData = paramData
    }

    override function hashCode() : int {
      return Objects.hash({_tableName, _paramData})
    }

    override function equals(obj : Object) : boolean {
      return obj typeis CacheKey and _tableName == obj._tableName and _paramData == obj._paramData
    }
  }

  static class QueryResult {
    var _jurisdiction : String
    var _effectiveDate : Date
    var _expirationDate : Date
    var _value : Map<String, String>

    construct(jurisdiction : String, effectiveDate : Date, expirationDate : Date, value : Map<String, String>) {
      _jurisdiction = jurisdiction
      _effectiveDate = effectiveDate
      _expirationDate = expirationDate
      _value = value
    }

    override function hashCode() : int {
      return Objects.hash({_jurisdiction, _effectiveDate, _expirationDate, _value})
    }

    override function equals(obj : Object) : boolean {
      return obj typeis QueryResult and _jurisdiction == obj._jurisdiction and _effectiveDate == obj._effectiveDate and _expirationDate == obj._expirationDate and _value == obj._value
    }
  }
}
