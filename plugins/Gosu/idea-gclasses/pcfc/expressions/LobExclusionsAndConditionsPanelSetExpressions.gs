package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobExclusionsAndConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobExclusionsAndConditionsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobExclusionsAndConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobExclusionsAndConditionsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddExclusionsOrCondition) at LobExclusionsAndConditionsPanelSet.pcf: line 44, column 66
    function action_2 () : void {
      LobCoveragePatternSearchPopup.push(coverable, CoveragePatternSearchType.TC_EXCLCOND, coverageCategories, includeExclude)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddExclusionsOrCondition) at LobExclusionsAndConditionsPanelSet.pcf: line 44, column 66
    function action_dest_3 () : pcf.api.Destination {
      return pcf.LobCoveragePatternSearchPopup.createDestination(coverable, CoveragePatternSearchType.TC_EXCLCOND, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionsPanel) at LobExclusionsAndConditionsPanelSet.pcf: line 49, column 32
    function def_onEnter_5 (def :  pcf.LobClausesDV) : void {
      def.onEnter(coverable, addedExclusionsToShow, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef (id=ConditionsPanel) at LobExclusionsAndConditionsPanelSet.pcf: line 55, column 32
    function def_onEnter_7 (def :  pcf.LobClausesDV) : void {
      def.onEnter(coverable, addedConditionsToShow, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionsPanel) at LobExclusionsAndConditionsPanelSet.pcf: line 49, column 32
    function def_refreshVariables_6 (def :  pcf.LobClausesDV) : void {
      def.refreshVariables(coverable, addedExclusionsToShow, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef (id=ConditionsPanel) at LobExclusionsAndConditionsPanelSet.pcf: line 55, column 32
    function def_refreshVariables_8 (def :  pcf.LobClausesDV) : void {
      def.refreshVariables(coverable, addedConditionsToShow, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'initialValue' attribute on Variable at LobExclusionsAndConditionsPanelSet.pcf: line 31, column 79
    function initialValue_0 () : gw.api.productmodel.ClausePattern[] {
      return coverable == null ? null : filteredExclusions().map(\ excl -> excl.Pattern )
    }
    
    // 'initialValue' attribute on Variable at LobExclusionsAndConditionsPanelSet.pcf: line 35, column 79
    function initialValue_1 () : gw.api.productmodel.ClausePattern[] {
      return coverable == null ? null : filteredConditions().map(\ cond -> cond.Pattern )
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddExclusionsOrCondition) at LobExclusionsAndConditionsPanelSet.pcf: line 44, column 66
    function onPick_4 (PickedValue :  gw.api.productmodel.ClausePattern[]) : void {
      createExclusionsAndConditions( PickedValue )
    }
    
    property get addedConditionsToShow () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("addedConditionsToShow", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set addedConditionsToShow ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("addedConditionsToShow", 0, $arg)
    }
    
    property get addedExclusionsToShow () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("addedExclusionsToShow", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set addedExclusionsToShow ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("addedExclusionsToShow", 0, $arg)
    }
    
    property get additionalInsuredHelper () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return getRequireValue("additionalInsuredHelper", 0) as gw.lob.common.AbstractAdditionalInsuredHelper
    }
    
    property set additionalInsuredHelper ($arg :  gw.lob.common.AbstractAdditionalInsuredHelper) {
      setRequireValue("additionalInsuredHelper", 0, $arg)
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coverageCategories () : String[] {
      return getRequireValue("coverageCategories", 0) as String[]
    }
    
    property set coverageCategories ($arg :  String[]) {
      setRequireValue("coverageCategories", 0, $arg)
    }
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getRequireValue("coverageHelper", 0) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setRequireValue("coverageHelper", 0, $arg)
    }
    
    property get includeExclude () : boolean {
      return getRequireValue("includeExclude", 0) as java.lang.Boolean
    }
    
    property set includeExclude ($arg :  boolean) {
      setRequireValue("includeExclude", 0, $arg)
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
    
    function createExclusionsAndConditions(patterns: gw.api.productmodel.ClausePattern[]) {
      for (pattern in patterns) {
        if (pattern typeis gw.api.productmodel.ExclusionPattern) {
          coverable.createExclusion(pattern)
        } else if (pattern typeis gw.api.productmodel.ConditionPattern){
          coverable.createCondition(pattern)
        }
      }
    }
    
    function filteredExclusions() : Exclusion[] {
      var excllist : Exclusion[]
      if (coverable == null ) {
        return null
      }
      if (includeExclude) {
        return coverable.getExclusionsInCategories( coverageCategories )?.toTypedArray()
      } else {
        return coverable.getExclusionsNotInCategories( coverageCategories )?.toTypedArray()
      }
    }
    
    function filteredConditions() : PolicyCondition[] {
      var condlist : PolicyCondition[]
      if (coverable == null ) {
        return null
      }
      if (includeExclude ) {
        return coverable.getConditionsInCategories( coverageCategories )?.toTypedArray()
      } else {
        return coverable.getConditionsNotInCategories( coverageCategories )?.toTypedArray()
      }
    }
    
    
  }
  
  
}