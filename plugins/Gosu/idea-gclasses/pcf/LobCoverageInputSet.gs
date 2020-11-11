package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobCoverageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobCoverageInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coveragePattern :  gw.api.productmodel.ClausePattern, $coverable :  Coverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobCoverageInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$coveragePattern, $coverable, $openForEdit, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  function refreshVariables ($coveragePattern :  gw.api.productmodel.ClausePattern, $coverable :  Coverable, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobCoverageInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$coveragePattern, $coverable, $openForEdit, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  
}