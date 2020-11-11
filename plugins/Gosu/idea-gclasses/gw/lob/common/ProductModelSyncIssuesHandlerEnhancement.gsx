package gw.lob.common

uses gw.api.web.job.JobWizardHelper
uses java.util.ArrayList
uses gw.web.productmodel.ProductModelSyncIssueWrapper
uses gw.web.productmodel.ProductModelSyncIssueSeverity
uses java.util.List

enhancement ProductModelSyncIssuesHandlerEnhancement : gw.web.productmodel.ProductModelSyncIssuesHandler {

  static function syncWithoutInfosAndWarnings(coverables : Coverable[], modifiables : Modifiable[], answerContainers : AnswerContainer[],
                                      period : PolicyPeriod, helper : JobWizardHelper) {
    syncWithIssuesWithoutInfosAndWarnings(helper,
        \ issues -> {
          for (c in coverables) {
            issues.addAll(c.createOrSyncCoverages())
            issues.addAll(c.createOrSyncExclusions())
            issues.addAll(c.createOrSyncConditions())
          }
          for (m in modifiables) {
            issues.addAll(m.syncModifiers())
          }
          for (ac in answerContainers) {
            issues.addAll(ac.syncQuestions())
          }
          if (period != null) {
            issues.addAll(period.syncOffering())
            issues.addAll(period.syncPolicyTerm())
            issues.addAll(period.syncPolicyLines())
          }
        }
    )
  }

  static function syncCoveragesWithoutInfosAndWarnings(coverables : Coverable[], helper : JobWizardHelper) {
    syncWithIssuesWithoutInfosAndWarnings(helper,
        \ issues -> {
          for (c in coverables) {
            issues.addAll(c.createOrSyncCoverages())
          }
        }
    )
  }

  private static function filterAndDisplayIssuesAfterSyncWithoutInfosAndWarnings(issues : List<ProductModelSyncIssueWrapper>,
                                                                 helper : JobWizardHelper) {
    issues.where( \ i -> i.ShouldDisplayDuringNormalSync and i.Severity == ProductModelSyncIssueSeverity.ERROR)
        .each(\i -> helper.addSyncIssueToWebMessages(i))
  }

  private static function syncWithIssuesWithoutInfosAndWarnings(helper : JobWizardHelper,
                                                        addIssues(issues : ArrayList<ProductModelSyncIssueWrapper>) ) {
    var issuesList = new ArrayList<ProductModelSyncIssueWrapper>()
    addIssues(issuesList)
    if(helper != null){
      filterAndDisplayIssuesAfterSyncWithoutInfosAndWarnings( issuesList, helper )
    }
  }
}