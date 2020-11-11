package gw.lob.common.productmodel.sync

uses gw.api.web.job.JobWizardHelper
uses gw.web.productmodel.ProductModelSyncIssueSeverity
uses gw.web.productmodel.ProductModelSyncIssueWrapper
uses java.util.List

class ProductModelSyncIssuesDisplayErrors extends ProductModelSyncIssuesDisplayBase {
  construct(jobWizardHelper: JobWizardHelper) {
    super(jobWizardHelper)
  }

  override function filterIssues(issues: List<ProductModelSyncIssueWrapper>): List<ProductModelSyncIssueWrapper> {
    return issues.where(\issue -> issue.ShouldDisplayDuringNormalSync and issue.Severity == ProductModelSyncIssueSeverity.ERROR)
  }
}