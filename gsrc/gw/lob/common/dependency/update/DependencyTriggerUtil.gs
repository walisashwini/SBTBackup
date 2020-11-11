package gw.lob.common.dependency.update

uses gw.api.productmodel.ClausePattern

class DependencyTriggerUtil {
  protected static function syncUpdatedMap(clauseKey : String, before: Map<String, String>, after: Map<String, String>, updatedMap : Map<String, Boolean>) {
    before.eachKey(\key -> {
      if (key.equals(clauseKey)) {
        putOrUpdateMap(key, isClauseChanged(key, before, after), updatedMap)
      } else {
        putOrUpdateMap(key, isTermChanged(key, before, after), updatedMap)
      }
    })
  }

  protected static function generateClauseKey(clausePattern : ClausePattern) : String {
    return clausePattern.CodeIdentifier
  }

  protected static function generateTermKey(clausePattern : ClausePattern, termCodeIdentifier: String) : String {
    return generateClauseKey(clausePattern) + "_" + termCodeIdentifier
  }

  protected static function getClauseValueMap(clausePattern : ClausePattern, clause: entity.Clause) : Map<String, String> {
    var res = new HashMap<String, String>()
    if (clause == null) {
      res.put(generateClauseKey(clausePattern), null)
      clausePattern.CovTerms.forEach( \ covTermPattern -> {
        res.put(generateTermKey(clausePattern, covTermPattern.CodeIdentifier), null)
      })
    } else {
      res.put(generateClauseKey(clausePattern), '1')
      clausePattern.CovTerms.forEach( \ covTermPattern -> {
        res.put(generateTermKey(clausePattern, covTermPattern.CodeIdentifier), clause.getCovTermByCodeIdentifier(covTermPattern.CodeIdentifier).ValueAsString)
      })
    }
    return res
  }

  // Is Clause Changed: Unavailable -> Unavailable (false) & Unavailable -> Available, Available -> Unavailable, Available -> Available (true)
  protected static function isClauseChanged(clauseKey : String, before : Map<String, String>, after : Map<String, String>) : boolean {
    return before.get(clauseKey) == null && after.get(clauseKey) == null ? false : true
  }

  protected static function isTermChanged(termKey : String, before : Map<String, String>, after : Map<String, String>) : boolean {
    return before.get(termKey) != after.get(termKey)
  }

  internal static function putOrUpdateMap(key: String, changed: boolean, updatedMap : Map<String, Boolean>) {
    if (updatedMap.containsKey(key)) {
      if (changed)
        updatedMap.put(key, true)
    } else {
      updatedMap.put(key, changed)
    }
  }
}