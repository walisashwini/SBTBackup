package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7SublineSelectionDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7SublineSelectionDV, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $openForEdit})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7SublineSelectionDV, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $openForEdit})
  }
  
  
}