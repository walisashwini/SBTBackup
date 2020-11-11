package gw.lob.common.dependency

uses com.guidewire.pc.system.dependency.PCDependencies
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.ConditionPattern
uses gw.api.productmodel.CoveragePattern
uses gw.api.productmodel.ExclusionPattern
uses gw.api.upgrade.Coercions
uses gw.api.web.RequestVar
uses gw.plugin.Plugins

class RequestScopedCache {
  static var clausePatternRefDateCache = new RequestVar<Map<String, Date>>()
  static var coverableRefDateCache = new RequestVar<Map<Coverable, Date>>()
  static var coverableConstraintCache = new RequestVar<Map<Coverable, GraphTraversalConstraint>>()

  static function getCoverableRefDate(coverable: Coverable): Date {
    if (coverableRefDateCache.RequestAvailable) {
      var cache = coverableRefDateCache.get()

      if (cache == null) {
        cache = new HashMap<Coverable, Date>()
        coverableRefDateCache.set(cache)
      }

      var referenceDate = cache.get(coverable)
      if (referenceDate == null) {
        referenceDate = loadReferenceDateFromCoverable(coverable)
        cache.put(coverable, referenceDate)
      }
      return referenceDate

    } else {
      return loadReferenceDateFromCoverable(coverable)
    }
  }

  static function getClausePatternRefDate(coverable: Coverable, clauseCode : String): Date {
    if (clausePatternRefDateCache.RequestAvailable) {
      var cache = clausePatternRefDateCache.get()

      if (cache == null) {
        cache = new HashMap<String, Date>()
        clausePatternRefDateCache.set(cache)
      }

      var referenceDate = cache.get(clauseCode)
      if (referenceDate == null) {
        referenceDate = loadReferenceDateFromClause(coverable, clauseCode)
        if (referenceDate != null) {
          cache.put(clauseCode, referenceDate)
        }
      }
      return referenceDate
    } else {
      return loadReferenceDateFromClause(coverable, clauseCode)
    }
  }

  /**
   * Get GraphTraversalConstraint instance for the coverable.
   * If constraint class is not defined, an instance of JurisdictionGraphTraversalConstraint will be created
   */
  reified static function getCoverableCriteria<T extends GraphTraversalConstraint>(coverable: Coverable, constraintClass: Type<T>): GraphTraversalConstraint {
    if (coverableConstraintCache.RequestAvailable) {
      var cache = coverableConstraintCache.get()

      if (cache == null) {
        cache = new HashMap<Coverable, GraphTraversalConstraint>()
        coverableConstraintCache.set(cache)
      }

      var constraint = cache.get(coverable)
      if (constraint == null) {
        constraint = loadConstraintFromCoverable(coverable, constraintClass)
        cache.put(coverable, constraint)
      }
      return constraint

    } else {
      return loadConstraintFromCoverable(coverable, constraintClass)
    }
  }

  //
  // The following methods with the prefix 'loadXXX' has significant impact on performance.
  //

  static private function loadReferenceDateFromCoverable(coverable: Coverable): Date {
    return coverable.CoverableReferenceDate ?: coverable.BranchUntyped.PeriodStart
  }


  static private function loadReferenceDateFromClause(coverable : Coverable, clauseCode : String) : Date {
    var refDate : Date = null
    var pattern = PCDependencies.getProductModel().getPatternByCodeIdentifier(clauseCode, ClausePattern)
    if (pattern typeis ClausePattern) {
      var plugin = Plugins.get(gw.plugin.productmodel.IReferenceDatePlugin)
      if (pattern typeis CoveragePattern) {
        refDate = plugin.getCoverageReferenceDate(pattern, coverable)
      } else if (pattern typeis ExclusionPattern) {
        refDate = plugin.getExclusionReferenceDate(pattern, coverable)
      } else if (pattern typeis ConditionPattern) {
        refDate = plugin.getConditionReferenceDate(pattern, coverable)
      }
    }
    return refDate
  }

  reified static private function loadConstraintFromCoverable<T extends GraphTraversalConstraint>(coverable : Coverable, constraintClass: Type<T>): GraphTraversalConstraint {
    var params = Coercions.makeArray<gw.lang.reflect.IType>({Object})
    var args = {coverable}.toArray()
    var constraint = constraintClass.TypeInfo.getCallableConstructor(params).Constructor.newInstance(args) as T
    return constraint
  }
}