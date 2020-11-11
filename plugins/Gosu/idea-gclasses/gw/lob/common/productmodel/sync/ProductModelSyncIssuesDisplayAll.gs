package gw.lob.common.productmodel.sync

uses gw.api.web.job.JobWizardHelper
uses gw.web.productmodel.ProductModelSyncIssueWrapper
uses java.util.List

class ProductModelSyncIssuesDisplayAll extends ProductModelSyncIssuesDisplayBase {
  construct(jobWizardHelper: JobWizardHelper) {
    super(jobWizardHelper)
  }

  override function filterIssues(issues: List<ProductModelSyncIssueWrapper>): List<ProductModelSyncIssueWrapper> {
    return issues
  }
}