package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobSchedulePopupCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobSchedulePopupCVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobSchedulePopupCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LobSchedulePopupCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobSchedulePopupCV.pcf: line 87, column 58
    function def_onEnter_7 (def :  pcf.LobCoverageInputSet) : void {
      def.onEnter(clausePattern, scheduledItemCoverable, openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on InputSetRef at LobSchedulePopupCV.pcf: line 87, column 58
    function def_refreshVariables_8 (def :  pcf.LobCoverageInputSet) : void {
      def.refreshVariables(clausePattern, scheduledItemCoverable, openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'mode' attribute on InputSetRef at LobSchedulePopupCV.pcf: line 87, column 58
    function mode_9 () : java.lang.Object {
      return clausePattern.CodeIdentifier
    }
    
    property get clausePattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobSchedulePopupCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobSchedulePopupCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobSchedulePopupCV.pcf: line 63, column 196
    function def_onEnter_3 (def :  pcf.ScheduledItemPropertyV2InputSet) : void {
      def.onEnter(clause, propertyInfo, selectedScheduledItem, jobWizardHelper, new gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2())
    }
    
    // 'def' attribute on InputSetRef at LobSchedulePopupCV.pcf: line 63, column 196
    function def_refreshVariables_4 (def :  pcf.ScheduledItemPropertyV2InputSet) : void {
      def.refreshVariables(clause, propertyInfo, selectedScheduledItem, jobWizardHelper, new gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2())
    }
    
    property get propertyInfo () : gw.api.productmodel.SchedulePropertyInfo {
      return getIteratedValue(1) as gw.api.productmodel.SchedulePropertyInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobSchedulePopupCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobSchedulePopupCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LobSchedulePopupCV.pcf: line 35, column 25
    function initialValue_0 () : Coverable {
      return selectedScheduledItem typeis Coverable ? selectedScheduledItem : null
    }
    
    // 'initialValue' attribute on Variable at LobSchedulePopupCV.pcf: line 40, column 58
    function initialValue_1 () : gw.api.productmodel.SchedulePropertyInfo[] {
      return schedule.PropertyInfos
    }
    
    // 'initialValue' attribute on Variable at LobSchedulePopupCV.pcf: line 45, column 51
    function initialValue_2 () : gw.api.productmodel.ClausePattern[] {
      return schedule.ScheduledItemMultiPatterns?.where( \ pattern -> (selectedScheduledItem as Coverable)?.isClauseSelectedOrAvailable(pattern)) ?: {}
    }
    
    // 'sortBy' attribute on IteratorSort at LobSchedulePopupCV.pcf: line 84, column 36
    function sortBy_6 (clausePattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return clausePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=ClausePatternValues) at LobSchedulePopupCV.pcf: line 81, column 90
    function value_10 () : gw.api.productmodel.ClausePattern[] {
      return clausePatterns
    }
    
    // 'value' attribute on InputIterator (id=PropertyInfoValues) at LobSchedulePopupCV.pcf: line 61, column 96
    function value_5 () : gw.api.productmodel.SchedulePropertyInfo[] {
      return propertyInfos
    }
    
    // 'visible' attribute on PanelColumn (id=CoverageInputs) at LobSchedulePopupCV.pcf: line 71, column 48
    function visible_11 () : java.lang.Boolean {
      return clausePatterns.HasElements
    }
    
    // 'visible' attribute on Card (id=DetailCard) at LobSchedulePopupCV.pcf: line 49, column 58
    function visible_12 () : java.lang.Boolean {
      return not (schedule.ScheduledItems.Count == 0)
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
    
    property get clausePatterns () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("clausePatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set clausePatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("clausePatterns", 0, $arg)
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
    
    property get propertyInfos () : gw.api.productmodel.SchedulePropertyInfo[] {
      return getVariableValue("propertyInfos", 0) as gw.api.productmodel.SchedulePropertyInfo[]
    }
    
    property set propertyInfos ($arg :  gw.api.productmodel.SchedulePropertyInfo[]) {
      setVariableValue("propertyInfos", 0, $arg)
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getRequireValue("schedule", 0) as gw.api.domain.Schedule
    }
    
    property set schedule ($arg :  gw.api.domain.Schedule) {
      setRequireValue("schedule", 0, $arg)
    }
    
    property get scheduledItemCoverable () : Coverable {
      return getVariableValue("scheduledItemCoverable", 0) as Coverable
    }
    
    property set scheduledItemCoverable ($arg :  Coverable) {
      setVariableValue("scheduledItemCoverable", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    property get selectedScheduledItem () : entity.ScheduledItem {
      return getRequireValue("selectedScheduledItem", 0) as entity.ScheduledItem
    }
    
    property set selectedScheduledItem ($arg :  entity.ScheduledItem) {
      setRequireValue("selectedScheduledItem", 0, $arg)
    }
    
    
  }
  
  
}