package gw.lob.common.productmodel.sync

uses gw.api.web.job.JobWizardHelper
uses gw.web.productmodel.ProductModelSyncIssueWrapper
uses java.util.List

abstract class ProductModelSyncIssuesDisplayBase implements JobWizardHelperDisplay {
  var _jobWizardhelper: JobWizardHelper

  construct(jobWizardHelper: JobWizardHelper) {
    _jobWizardhelper = jobWizardHelper
  }

  override function displaySyncIssues(issues: List<ProductModelSyncIssueWrapper>) {
    filterIssues(issues).each(\issue -> _jobWizardhelper.addSyncIssueToWebMessages(issue))
  }

  abstract function filterIssues(issues: List<ProductModelSyncIssueWrapper>) : List<ProductModelSyncIssueWrapper>
}