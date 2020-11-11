package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/StringInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StringInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($displayable :  gw.lob.common.displayable.Displayable<String>, $fieldDependencyInput :  boolean, $wizard :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.StringInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$displayable, $fieldDependencyInput, $wizard})
  }
  
  function refreshVariables ($displayable :  gw.lob.common.displayable.Displayable<String>, $fieldDependencyInput :  boolean, $wizard :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.StringInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$displayable, $fieldDependencyInput, $wizard})
  }
  
  
}