package gw.forms.generic

uses gw.api.locale.DisplayKey
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.ClausePatternLookup
uses gw.api.productmodel.PolicyLinePattern
uses gw.api.productmodel.PolicyLinePatternLookup
uses gw.forms.FormData
uses gw.forms.FormInferenceContext
uses gw.forms.GenericFormInference
uses gw.validation.PCValidationBase
uses gw.xml.XMLNode
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory
uses entity.PolicyLine

class MultipleClausesSelectionForm extends FormData implements GenericFormInference {
  protected var _clausePatternsMap : Map<ClausePattern, Coverable[]> as ClausePatternsMap
  var _line : PolicyLine

  protected property get ClausePatternCodes() : String[] {
    return Pattern.FormPatternClauseCodes*.Code
  }

  override property get DisplayName() : String {
    return DisplayKey.get("Forms.Generic.MultipleClausesSelectionForm")
  }

  override function getLookupDates(context : FormInferenceContext) : Map<Jurisdiction, Date> {

    //TODO this function seems to be used to initialize the class-level field values; can we do this in a constructor?
    _line = getLine(context)
    if (_line == null) {
      return Collections.emptyMap()
    }
    _clausePatternsMap = initClausePatterns(context)

    var clauseJurisdictionDateMap = new HashMap<Jurisdiction, Date>()
    for (clausePattern in _clausePatternsMap.Keys) {
      var coverables = _clausePatternsMap.get(clausePattern)
      clauseJurisdictionDateMap.putAll(getLookupDatesForClause(context, clausePattern, coverables))
    }
    return clauseJurisdictionDateMap
  }

  private function initClausePatterns(context : FormInferenceContext) : Map<ClausePattern, Coverable[]> {
    var patterns = new TreeMap<ClausePattern, Coverable[]>(new ClausePatternComparator())
    Pattern.FormPatternClauseCodes.each( \ clauseCode -> {
      var pattern = ClausePatternLookup.getByCodeIdentifier(clauseCode.Code)
      if(pattern != null) {
        var coverables = context.getCoverablesForClausePattern(pattern)
        patterns.put(pattern, coverables)
      } else {
        LoggerFactory.getLogger("Application.Forms").warn(MarkerFactory.getMarker(MultipleClausesSelectionForm.Type.Name), MultipleClausesSelectionForm.Type.Name + ": Clause Pattern with code ${clauseCode.Code} was not found when loading finding patterns referenced by forms")
      }
    })
    return patterns
  }

  private function getLookupDatesForClause(context : FormInferenceContext, clausePattern : ClausePattern, coverables : Coverable[]) : Map<Jurisdiction, Date> {
    var jurisdictionDateMap = new HashMap<Jurisdiction, Date>()
    for (cov in coverables) {
      var clause = cov.getCoverageConditionOrExclusion(clausePattern)
      if (atLineLevel(clausePattern)) {
        for (coveredState in context.getLineCoveredStates(_line)) {
          jurisdictionDateMap.put(coveredState, getEarliestDate(jurisdictionDateMap.get(coveredState), clause.ReferenceDate))
        }
      } else {
        var cs = context.getCoverableState(cov)
        jurisdictionDateMap.put(cs, getEarliestDate(jurisdictionDateMap.get(cs), clause.ReferenceDate))
      }
    }

    return jurisdictionDateMap
  }

  override function populateInferenceData(context: FormInferenceContext, availableStates: Set<Jurisdiction>) {
    for (clausePattern in _clausePatternsMap.Keys) {
      var coverables = _clausePatternsMap.get(clausePattern)
      coverables = populateInferenceDataForClause(clausePattern, coverables, context, availableStates)
      _clausePatternsMap.put(clausePattern, coverables)
    }
  }

  private function populateInferenceDataForClause(clausePattern : ClausePattern, coverables : Coverable[],
                                                  context : FormInferenceContext, availableStates : Set<Jurisdiction>) : Coverable[] {
    if (atLineLevel(clausePattern)) {
      // for policy line clause patterns, check if any of the covered states is in the list of available states
      if (Collections.disjoint(availableStates, context.getLineCoveredStates(_line))) {
        return {}
      } else {
        // if there's a match return all coverables
        return coverables
      }
    } else {
      // if the clause is not policy level, check the CoverableState of each coverable against the lost of availabile states
      return coverables.where(\c -> availableStates.contains(context.getCoverableState(c)))
    }
  }

  override property get InferredByCurrentData(): boolean {
    for (clausePattern in _clausePatternsMap.Keys) {
      var coverables = _clausePatternsMap.get(clausePattern)
      if(coverables.hasMatch(\ c -> c.hasCoverageConditionOrExclusion(clausePattern))) {
        return true
      }
    }
    return false
  }

  override function addDataForComparisonOrExport(contentNode: XMLNode) {
    //Add the coverables on which the clauses exists
    var allCoverableNode = new XMLNode("Coverables")
    contentNode.addChild(allCoverableNode)
    for (cov in _clausePatternsMap.Values.flatMap( \ elt -> elt.toList())) {
      var clauses = cov.CoveragesConditionsAndExclusionsFromCoverable.where(\clause -> _clausePatternsMap.containsKey(clause.Pattern))
      // Add the coverable and the clause patterns
      var coverableNode = new XMLNode("Coverable")
      allCoverableNode.addChild(coverableNode)
      coverableNode.addChild(createTextNode("FixedId", cov.TypeIDString))
      var clausePatternsNode = new XMLNode("ClausePatterns")
      coverableNode.addChild(clausePatternsNode)
      clauses.each(\clausePattern -> clausePatternsNode.addChild(createTextNode("ClausePattern", clausePattern.Pattern.CodeIdentifier)))
    }
  }

  override function clearCustomFields(formPattern : FormPattern) {
    formPattern.FormPatternClauseCodes.each(\ w -> formPattern.removeFromFormPatternClauseCodes(w))
  }

  function validateCustomFields(formPattern : FormPattern, validation : PCValidationBase) {
    if (!formPattern.FormPatternClauseCodes.HasElements) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "Form Pattern Clause Codes"))
    }
  }

  override property get ValidPolicylines() : List<PolicyLinePattern> {
    return PolicyLinePatternLookup.getAll()
  }

  override property get PolicyLineRequired(): boolean {
    return true
  }

  private function getEarliestDate(d1 : Date, d2 : Date) : Date {
    if (d1 == null) {
      return d2
    } else if (d2 == null) {
      return d1
    } else if (d2.before(d1)) {
      return d2
    } else {
      return d1
    }
  }

  private function formatDateTime(date : Date) : String {
    return gw.api.util.StringUtil.formatDate(date, "yyyy-MM-dd HH:mm:ss.SSS")
  }

  private class ClausePatternComparator implements Comparator<ClausePattern> {
    override function compare(o1: ClausePattern, o2: ClausePattern): int {
      return o1.CodeIdentifier.compareTo(o2.CodeIdentifier)
    }
  }

  private function atLineLevel(pattern : ClausePattern) : boolean {
    return pattern.OwningEntityType == _line.Pattern.PolicyLineSubtype.Code
  }
}