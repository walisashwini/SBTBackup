package gw.lob.gl7.presenters

uses gw.api.locale.DisplayKey
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.ConditionPattern
uses gw.api.productmodel.CoveragePattern
uses gw.api.productmodel.ExclusionPattern
uses gw.api.productmodel.PolicyLinePattern
uses gw.lob.common.LobPropertyService
uses gw.productmodel.ClausePatternSearchCriteria

uses java.lang.IllegalStateException

class GL7CoverageSearchPresenter<T extends Coverable> {
  var _coverablePerSubline : GL7CoverablePerSubline<T>
  var _coverageCategories : String[] as readonly CoverageCategories
  var _searchType : CoveragePatternSearchType
  var _searchCriteria : ClausePatternSearchCriteria as readonly SearchCriteria
  var _label : String

  construct(coverablePerSubline : GL7CoverablePerSubline<T>,
            coverageCategories : String[],
            searchType : CoveragePatternSearchType,
            label : String = null) {
    _coverablePerSubline = coverablePerSubline
    _coverageCategories = coverageCategories
    _searchType = searchType
    _label = label
  }

  property get SearchCriteria() : ClausePatternSearchCriteria {
    if (_searchCriteria == null) initializeSearchCriteria()
    return _searchCriteria
  }

  // Bind this to a SearchPanel widget's searchCriteria property instead of the SearchCriteria getter, so that
  // the Reset button will reset the criteria fields.
  function initializeSearchCriteria() : ClausePatternSearchCriteria {
    _searchCriteria = new ClausePatternSearchCriteria() {
        :SearchType = _searchType,
        :PolicyLinePatternCode = Line.PatternCode
    }
    return _searchCriteria
  }

  private property get Line() : GL7GeneralLiabilityLine {
    return _coverablePerSubline.Line
  }

  function searchResults() : ClauseSpec[] {
    var matchingClausePatterns = _searchCriteria.performSearch().toList()
        .where(\ pattern -> CoverageCategories.contains(pattern.CoverageCategory.CodeIdentifier))
    return _coverablePerSubline.Entries.flatMap(\ entry -> {
      var clausePatternsForCoverable = matchingClausePatterns.where(\ pattern ->
          entry.Coverable.isCoverageConditionOrExclusionAvailable(pattern) and
          not entry.Coverable.hasCoverageConditionOrExclusion(pattern))
      return clausePatternsForCoverable.map(\ pattern -> new ClauseSpec(entry.Coverable, entry.SublineType, pattern))
    })
  }

  function addCoverages(clauseSpecs : ClauseSpec[]) {
    clauseSpecs.each(\ clauseSpec -> clauseSpec.addClause())
  }

  private property get SearchType() : CoveragePatternSearchType {
    return _searchCriteria.SearchType
  }

  property get Title() : String {
    return DisplayKey.get("Web.Coverage.GL7.SearchPage.Title", _searchType, _label)
  }

  property get SearchActionLabel() : String {
    if (SearchType == TC_COVERAGE)
      return DisplayKey.get("Web.Coverage.SearchPage.AddSelectedCoverages")
    else if ({
        CoveragePatternSearchType.TC_CONDITION,
        CoveragePatternSearchType.TC_EXCLUSION,
        CoveragePatternSearchType.TC_EXCLCOND
    }.contains(SearchType))
      return DisplayKey.get("Web.Coverage.SearchPage.AddSelectedExclusionsAndConditions")
    else
      throw new IllegalStateException("Invalid coverage pattern search type: " + typeof SearchType)
  }

  property get PolicyLinePattern() : PolicyLinePattern {
    return Line.Pattern
  }


  static class ClauseSpec {
    var _coverable : Coverable as readonly Coverable
    var _subline : GL7SublineType as readonly Subline
    var _pattern : ClausePattern as readonly Pattern

    construct(coverable : Coverable, subline : GL7SublineType, pattern : ClausePattern) {
      _coverable = coverable
      _subline = subline
      _pattern = pattern
    }

    function addClause() {
      if (Pattern typeis CoveragePattern)
        Coverable.createCoverage(Pattern)
      else if (Pattern typeis ConditionPattern)
        Coverable.createCondition(Pattern)
      else if (Pattern typeis ExclusionPattern)
        Coverable.createExclusion(Pattern)
      else
        throw new IllegalStateException("Cannot add clause for pattern of type " + typeof Pattern)

      LobPropertyService.Instance.updateClauseDependentProperties(Pattern, Coverable)
    }
  }
}