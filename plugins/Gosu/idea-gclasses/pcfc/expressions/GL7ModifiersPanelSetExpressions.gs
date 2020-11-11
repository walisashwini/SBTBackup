package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7ModifiersPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7ModifiersPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=oosePanelSet) at GL7ModifiersPanelSet.pcf: line 22, column 26
    function def_onEnter_1 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7ModifiersPanelSet.pcf: line 24, column 109
    function def_onEnter_3 (def :  pcf.LOBModifiablesModifiersPanelSet) : void {
      def.onEnter(policyPeriod.GL7Line.AllModifiables, rateFactorRangeGenerator)
    }
    
    // 'def' attribute on PanelRef (id=oosePanelSet) at GL7ModifiersPanelSet.pcf: line 22, column 26
    function def_refreshVariables_2 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7ModifiersPanelSet.pcf: line 24, column 109
    function def_refreshVariables_4 (def :  pcf.LOBModifiablesModifiersPanelSet) : void {
      def.refreshVariables(policyPeriod.GL7Line.AllModifiables, rateFactorRangeGenerator)
    }
    
    // 'initialValue' attribute on Variable at GL7ModifiersPanelSet.pcf: line 19, column 69
    function initialValue_0 () : gw.lob.common.util.modifiers.RateFactorRangeGenerator {
      return new gw.lob.common.util.modifiers.DefaultRateFactorProvider()
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rateFactorRangeGenerator () : gw.lob.common.util.modifiers.RateFactorRangeGenerator {
      return getVariableValue("rateFactorRangeGenerator", 0) as gw.lob.common.util.modifiers.RateFactorRangeGenerator
    }
    
    property set rateFactorRangeGenerator ($arg :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) {
      setVariableValue("rateFactorRangeGenerator", 0, $arg)
    }
    
    
  }
  
  
}