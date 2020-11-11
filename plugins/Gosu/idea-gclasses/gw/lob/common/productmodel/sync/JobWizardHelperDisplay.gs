package gw.lob.common.productmodel.sync

uses gw.web.productmodel.ProductModelSyncIssueWrapper
uses java.util.List

interface JobWizardHelperDisplay {
  function displaySyncIssues(issues: List<ProductModelSyncIssueWrapper>)
}