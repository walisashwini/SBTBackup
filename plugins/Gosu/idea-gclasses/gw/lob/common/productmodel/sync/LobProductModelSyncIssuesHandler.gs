package gw.lob.common.productmodel.sync

uses gw.api.domain.Clause
uses gw.api.domain.covterm.OptionCovTerm
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.ConditionPattern
uses gw.api.productmodel.CoveragePattern
uses gw.api.productmodel.ExclusionPattern
uses gw.lob.common.LobPropertyService
uses gw.web.productmodel.ProductModelSyncIssueWrapper
uses org.slf4j.LoggerFactory

class LobProductModelSyncIssuesHandler {
  static function createOrSyncClauses(coverable: Coverable,
                                      helper: JobWizardHelperDisplay) {
    var issues = new ArrayList<ProductModelSyncIssueWrapper>()

    issues.addAll(coverable.createOrSyncCoverages())
    issues.addAll(coverable.createOrSyncConditions())
    issues.addAll(coverable.createOrSyncExclusions())

    if (helper != null) {
      helper.displaySyncIssues(issues)
    }
  }

  static function syncSpecifiedClause(coverable: Coverable,
                                      clausePattern: ClausePattern,
                                      helper: JobWizardHelperDisplay) {

    var issues = new ArrayList<ProductModelSyncIssueWrapper>()

    if (clausePattern typeis CoveragePattern) {
      issues.addAll(coverable.createOrSyncCoverages({clausePattern}))
    } else if (clausePattern typeis ConditionPattern) {
      issues.addAll(coverable.createOrSyncConditions({clausePattern}))
    } else if (clausePattern typeis ExclusionPattern) {
      issues.addAll(coverable.createOrSyncExclusions({clausePattern}))
    } else {
      LoggerFactory.getLogger("DEPENDENCY").error("Unknown ClausePattern type: " + typeof(clausePattern))
    }

    var clause = coverable.getCoverageConditionOrExclusion(clausePattern)
    if (clause != null) {
      for (term in clause.CovTerms) {
        if (term typeis OptionCovTerm) {
          term.syncOptionTermToTheOnlyOption()
        } else {
          LobPropertyService.Instance.setCovTermDefaultValueWithSingleValueRange(term)
        }
      }
    }

    if (helper != null) {
      helper.displaySyncIssues(issues)
    }
  }

  static function syncSpecifiedClauses(clauses: Clause[], helper: JobWizardHelperDisplay) {
    clauses.each(\clause -> syncTermsForSpecifiedClause(clause, helper))
  }

  private static function syncTermsForSpecifiedClause(clause: Clause, helper: JobWizardHelperDisplay) {
    syncSpecifiedClause(clause.OwningCoverable, clause.Pattern, helper)
  }
}
