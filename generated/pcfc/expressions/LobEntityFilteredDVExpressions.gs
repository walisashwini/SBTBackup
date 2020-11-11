package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/LobEntityFilteredDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobEntityFilteredDVExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/LobEntityFilteredDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobEntityFilteredDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobEntityFilteredDV.pcf: line 30, column 43
    function def_onEnter_1 (def :  pcf.LobInputSet) : void {
      def.onEnter(displayable)
    }
    
    // 'def' attribute on InputSetRef at LobEntityFilteredDV.pcf: line 30, column 43
    function def_refreshVariables_2 (def :  pcf.LobInputSet) : void {
      def.refreshVariables(displayable)
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getIteratedValue(1) as gw.lob.common.displayable.LobDisplayable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/widgets/LobEntityFilteredDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobEntityFilteredDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LobEntityFilteredDV.pcf: line 24, column 98
    function initialValue_0 () : java.util.List<gw.lob.common.displayable.LobDisplayable> {
      return gw.lob.common.displayable.LobDisplayableFactory.getEntityDisplayables(entity, lobDisplayableClass, jobWizardHelper, isScreenEditable).where( \ displayable -> includeDisplayable(displayable))
    }
    
    // 'value' attribute on InputIterator at LobEntityFilteredDV.pcf: line 28, column 105
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
    
    property get includeDisplayable () : block(displayable : gw.lob.common.displayable.LobDisplayable) : boolean {
      return getRequireValue("includeDisplayable", 0) as block(displayable : gw.lob.common.displayable.LobDisplayable) : boolean
    }
    
    property set includeDisplayable ($arg :  block(displayable : gw.lob.common.displayable.LobDisplayable) : boolean) {
      setRequireValue("includeDisplayable", 0, $arg)
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