package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobAdditionalCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobAdditionalCoveragesPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  Coverable, $coverageCategories :  String[], $includeExclude :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobAdditionalCoveragesPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $coverageCategories, $includeExclude, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  function refreshVariables ($coverable :  Coverable, $coverageCategories :  String[], $includeExclude :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobAdditionalCoveragesPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $coverageCategories, $includeExclude, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  
}