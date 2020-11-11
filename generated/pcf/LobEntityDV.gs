package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/LobEntityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobEntityDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($entity :  KeyableBean, $lobDisplayableClass :  Type, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $isScreenEditable :  boolean) : void {
    __widgetOf(this, pcf.LobEntityDV, SECTION_WIDGET_CLASS).setVariables(false, {$entity, $lobDisplayableClass, $jobWizardHelper, $isScreenEditable})
  }
  
  function refreshVariables ($entity :  KeyableBean, $lobDisplayableClass :  Type, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $isScreenEditable :  boolean) : void {
    __widgetOf(this, pcf.LobEntityDV, SECTION_WIDGET_CLASS).setVariables(true, {$entity, $lobDisplayableClass, $jobWizardHelper, $isScreenEditable})
  }
  
  
}