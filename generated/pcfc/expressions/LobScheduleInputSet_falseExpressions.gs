package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduleInputSet.false.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduleInputSet_falseExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduleInputSet.false.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduleInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.false.pcf: line 29, column 93
    function initialValue_0 () : gw.api.domain.Clause & gw.api.domain.Schedule {
      return clause typeis gw.api.domain.Schedule ? clause : null
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.false.pcf: line 33, column 77
    function initialValue_1 () : gw.api.productmodel.ClausePattern {
      return clause typeis gw.api.domain.Schedule ? schedule.ScheduledItemMultiPatterns?.first() : null 
    }
    
    property get additionalInsuredHelper () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return getRequireValue("additionalInsuredHelper", 0) as gw.lob.common.AbstractAdditionalInsuredHelper
    }
    
    property set additionalInsuredHelper ($arg :  gw.lob.common.AbstractAdditionalInsuredHelper) {
      setRequireValue("additionalInsuredHelper", 0, $arg)
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
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
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get schedule () : gw.api.domain.Clause & gw.api.domain.Schedule {
      return getVariableValue("schedule", 0) as gw.api.domain.Clause & gw.api.domain.Schedule
    }
    
    property set schedule ($arg :  gw.api.domain.Clause & gw.api.domain.Schedule) {
      setVariableValue("schedule", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    property get scheduledItemPattern () : gw.api.productmodel.ClausePattern {
      return getVariableValue("scheduledItemPattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set scheduledItemPattern ($arg :  gw.api.productmodel.ClausePattern) {
      setVariableValue("scheduledItemPattern", 0, $arg)
    }
    
    
  }
  
  
}