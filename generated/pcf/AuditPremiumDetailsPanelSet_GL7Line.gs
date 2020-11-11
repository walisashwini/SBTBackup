package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditPremiumDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AuditPremiumDetailsPanelSet_GL7Line extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($auditInfo :  AuditInformation, $period :  PolicyPeriod, $isEditable :  boolean) : void {
    __widgetOf(this, pcf.AuditPremiumDetailsPanelSet_GL7Line, SECTION_WIDGET_CLASS).setVariables(false, {$auditInfo, $period, $isEditable})
  }
  
  function refreshVariables ($auditInfo :  AuditInformation, $period :  PolicyPeriod, $isEditable :  boolean) : void {
    __widgetOf(this, pcf.AuditPremiumDetailsPanelSet_GL7Line, SECTION_WIDGET_CLASS).setVariables(true, {$auditInfo, $period, $isEditable})
  }
  
  
}