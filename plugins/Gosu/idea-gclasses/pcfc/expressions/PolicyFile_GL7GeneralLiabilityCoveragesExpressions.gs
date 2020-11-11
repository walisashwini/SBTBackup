package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7GeneralLiabilityCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_GL7GeneralLiabilityCoveragesExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7GeneralLiabilityCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_GL7GeneralLiabilityCoveragesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_GL7GeneralLiabilityCoverages) at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 10, column 73
    function afterEnter_4 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_GL7GeneralLiabilityCoverages) at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 10, column 73
    static function canVisit_5 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'parent' attribute on Page (id=PolicyFile_GL7GeneralLiabilityCoverages) at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 10, column 73
    static function parent_6 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_GL7GeneralLiabilityCoverages {
      return super.CurrentLocation as pcf.PolicyFile_GL7GeneralLiabilityCoverages
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7GeneralLiabilityCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_GL7Line_Coverages_ScreenExpressionsImpl extends PolicyFile_GL7GeneralLiabilityCoveragesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 32, column 103
    function def_onEnter_2 (def :  pcf.GL7SublinesCV) : void {
      def.onEnter(sublines, false, null, gw.lob.gl7.GL7Category.CategoriesForSublineTypes)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 32, column 103
    function def_refreshVariables_3 (def :  pcf.GL7SublinesCV) : void {
      def.refreshVariables(sublines, false, null, gw.lob.gl7.GL7Category.CategoriesForSublineTypes)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 24, column 38
    function initialValue_0 () : productmodel.GL7Line {
      return policyPeriod.GL7Line
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_GL7GeneralLiabilityCoverages.pcf: line 28, column 91
    function initialValue_1 () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType> {
      return gw.lob.gl7.presenters.GL7CoverablePerSubline.forSublinesOn(line)
    }
    
    property get line () : productmodel.GL7Line {
      return getVariableValue("line", 1) as productmodel.GL7Line
    }
    
    property set line ($arg :  productmodel.GL7Line) {
      setVariableValue("line", 1, $arg)
    }
    
    property get sublines () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType> {
      return getVariableValue("sublines", 1) as gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType>
    }
    
    property set sublines ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType>) {
      setVariableValue("sublines", 1, $arg)
    }
    
    
  }
  
  
}