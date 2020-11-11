package gw.lob.common.coverage

uses gw.api.productmodel.ClausePattern
uses gw.api.web.job.JobWizardHelper

interface CoverageHelper {
  /**
   * return true if coverage can be added or removed using the checkbox
   */
  function canToggleCoverage(coverable : Coverable, clausePattern : ClausePattern) : boolean

  /**
   * Called when a checkbox in a coverage input set is toggled
   */
  function onToggleCoverage(coverable : Coverable, clausePattern : ClausePattern, jobWizardHelper : JobWizardHelper, toggleValue : Boolean)
}