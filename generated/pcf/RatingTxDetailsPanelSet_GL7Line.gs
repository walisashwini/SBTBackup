package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingTxDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RatingTxDetailsPanelSet_GL7Line extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($thePeriod :  PolicyPeriod, $totalPremLabel :  String, $totalCostLabel :  String, $revOpenForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.RatingTxDetailsPanelSet_GL7Line, SECTION_WIDGET_CLASS).setVariables(false, {$thePeriod, $totalPremLabel, $totalCostLabel, $revOpenForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($thePeriod :  PolicyPeriod, $totalPremLabel :  String, $totalCostLabel :  String, $revOpenForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.RatingTxDetailsPanelSet_GL7Line, SECTION_WIDGET_CLASS).setVariables(true, {$thePeriod, $totalPremLabel, $totalCostLabel, $revOpenForEdit, $jobWizardHelper})
  }
  
  
}