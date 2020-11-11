package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/LobEntityFilteredDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobEntityFilteredDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($entity :  KeyableBean, $lobDisplayableClass :  Type, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $isScreenEditable :  boolean, $includeDisplayable :  block(displayable : gw.lob.common.displayable.LobDisplayable) : boolean) : void {
    __widgetOf(this, pcf.LobEntityFilteredDV, SECTION_WIDGET_CLASS).setVariables(false, {$entity, $lobDisplayableClass, $jobWizardHelper, $isScreenEditable, $includeDisplayable})
  }
  
  function refreshVariables ($entity :  KeyableBean, $lobDisplayableClass :  Type, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $isScreenEditable :  boolean, $includeDisplayable :  block(displayable : gw.lob.common.displayable.LobDisplayable) : boolean) : void {
    __widgetOf(this, pcf.LobEntityFilteredDV, SECTION_WIDGET_CLASS).setVariables(true, {$entity, $lobDisplayableClass, $jobWizardHelper, $isScreenEditable, $includeDisplayable})
  }
  
  
}