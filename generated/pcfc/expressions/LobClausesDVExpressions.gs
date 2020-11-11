package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobClausesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobClausesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobClausesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobClausesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobClausesDV.pcf: line 36, column 48
    function def_onEnter_1 (def :  pcf.LobCoverageInputSet) : void {
      def.onEnter(clausePattern, coverable,  CurrentLocation.InEditMode, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on InputSetRef at LobClausesDV.pcf: line 36, column 48
    function def_refreshVariables_2 (def :  pcf.LobCoverageInputSet) : void {
      def.refreshVariables(clausePattern, coverable,  CurrentLocation.InEditMode, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'mode' attribute on InputSetRef at LobClausesDV.pcf: line 36, column 48
    function mode_3 () : java.lang.Object {
      return clausePattern.CodeIdentifier
    }
    
    property get clausePattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobClausesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobClausesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at LobClausesDV.pcf: line 33, column 26
    function sortBy_0 (clausePattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return clausePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=clauseIterator) at LobClausesDV.pcf: line 30, column 80
    function value_4 () : gw.api.productmodel.ClausePattern[] {
      return clausePatterns
    }
    
    property get additionalInsuredHelper () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return getRequireValue("additionalInsuredHelper", 0) as gw.lob.common.AbstractAdditionalInsuredHelper
    }
    
    property set additionalInsuredHelper ($arg :  gw.lob.common.AbstractAdditionalInsuredHelper) {
      setRequireValue("additionalInsuredHelper", 0, $arg)
    }
    
    property get clausePatterns () : gw.api.productmodel.ClausePattern[] {
      return getRequireValue("clausePatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set clausePatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setRequireValue("clausePatterns", 0, $arg)
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getRequireValue("coverageHelper", 0) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setRequireValue("coverageHelper", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    
  }
  
  
}