package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditDetailsPanelSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AuditDetailsPanelSet_GL7GeneralLiability extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.AuditDetailsPanelSet_GL7GeneralLiability, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.AuditDetailsPanelSet_GL7GeneralLiability, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod})
  }
  
  
}