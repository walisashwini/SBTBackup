package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/LobEntityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobEntityDVExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/LobEntityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobEntityDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobEntityDV.pcf: line 29, column 43
    function def_onEnter_1 (def :  pcf.LobInputSet) : void {
      def.onEnter(displayable)
    }
    
    // 'def' attribute on InputSetRef at LobEntityDV.pcf: line 29, column 43
    function def_refreshVariables_2 (def :  pcf.LobInputSet) : void {
      def.refreshVariables(displayable)
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getIteratedValue(1) as gw.lob.common.displayable.LobDisplayable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/widgets/LobEntityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobEntityDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LobEntityDV.pcf: line 23, column 78
    function initialValue_0 () : java.util.List<gw.lob.common.displayable.LobDisplayable> {
      return gw.lob.common.displayable.LobDisplayableFactory.getEntityDisplayables(entity, lobDisplayableClass, jobWizardHelper, isScreenEditable)
    }
    
    // 'value' attribute on InputIterator at LobEntityDV.pcf: line 27, column 105
    function value_3 () : java.util.List<gw.lob.common.displayable.LobDisplayable> {
      return displayables
    }
    
    property get displayables () : java.util.List<gw.lob.common.displayable.LobDisplayable> {
      return getVariableValue("displayables", 0) as java.util.List<gw.lob.common.displayable.LobDisplayable>
    }
    
    property set displayables ($arg :  java.util.List<gw.lob.common.displayable.LobDisplayable>) {
      setVariableValue("displayables", 0, $arg)
    }
    
    property get entity () : KeyableBean {
      return getRequireValue("entity", 0) as KeyableBean
    }
    
    property set entity ($arg :  KeyableBean) {
      setRequireValue("entity", 0, $arg)
    }
    
    property get isScreenEditable () : boolean {
      return getRequireValue("isScreenEditable", 0) as java.lang.Boolean
    }
    
    property set isScreenEditable ($arg :  boolean) {
      setRequireValue("isScreenEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lobDisplayableClass () : Type {
      return getRequireValue("lobDisplayableClass", 0) as Type
    }
    
    property set lobDisplayableClass ($arg :  Type) {
      setRequireValue("lobDisplayableClass", 0, $arg)
    }
    
    
  }
  
  
}