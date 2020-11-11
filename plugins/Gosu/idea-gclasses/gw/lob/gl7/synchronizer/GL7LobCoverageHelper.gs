package gw.lob.gl7.synchronizer

uses gw.api.productmodel.ClausePattern
uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.LobPropertyService
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.common.coverage.LobCoverageHelper
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants

class GL7LobCoverageHelper extends LobCoverageHelper {

  override function onToggleCoverage(coverable : Coverable, clausePattern : ClausePattern, jobWizardHelper : JobWizardHelper, toggleValue : Boolean) {
    if(clausePattern.PublicID== GL7CompatibilityConstants.COV_UnmannedAircraftCovABIPD) {
     LobCompatibilityHelper.setFieldValue(coverable, GL7CompatibilityConstants.COV_UnmannedAircraftCovABIPD_CovAApplies, toYesNo(toggleValue))
    } else if(clausePattern.PublicID== GL7CompatibilityConstants.COV_UnmannedAircraftCovBPAI) {
      LobCompatibilityHelper.setFieldValue(coverable, GL7CompatibilityConstants.COV_UnmannedAircraftCovBPAI_CovBApplies, toYesNo(toggleValue))
    }
    coverable.setCoverageConditionOrExclusionExists(clausePattern, toggleValue)
    LobPropertyService.Instance.updateClauseDependentProperties(clausePattern, coverable, jobWizardHelper)
  }

  private function toYesNo(value : boolean) : String {
    return (value as Boolean).toYesNoString()
  }
}