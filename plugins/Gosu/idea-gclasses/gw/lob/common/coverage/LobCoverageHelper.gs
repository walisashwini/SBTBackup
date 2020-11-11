package gw.lob.common.coverage

uses gw.api.productmodel.ClausePattern
uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.LobPropertyService

class LobCoverageHelper implements CoverageHelper {

  override function canToggleCoverage(coverable : Coverable, clausePattern : ClausePattern) : boolean {
    return true
  }

  override function onToggleCoverage(coverable : Coverable, clausePattern : ClausePattern, jobWizardHelper : JobWizardHelper, toggleValue : Boolean) {
    coverable.setCoverageConditionOrExclusionExists(clausePattern, toggleValue)
    LobPropertyService.Instance.updateClauseDependentProperties(clausePattern, coverable, jobWizardHelper)
  }
}