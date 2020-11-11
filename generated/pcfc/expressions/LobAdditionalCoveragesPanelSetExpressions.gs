package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobAdditionalCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobAdditionalCoveragesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobAdditionalCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobAdditionalCoveragesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=Add) at LobAdditionalCoveragesPanelSet.pcf: line 40, column 113
    function action_1 () : void {
      LobCoveragePatternSearchPopup.push(coverable, CoveragePatternSearchType.TC_COVERAGE, coverageCategories, includeExclude)
    }
    
    // 'action' attribute on PickerToolbarButton (id=Add) at LobAdditionalCoveragesPanelSet.pcf: line 40, column 113
    function action_dest_2 () : pcf.api.Destination {
      return pcf.LobCoveragePatternSearchPopup.createDestination(coverable, CoveragePatternSearchType.TC_COVERAGE, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef at LobAdditionalCoveragesPanelSet.pcf: line 33, column 138
    function def_onEnter_4 (def :  pcf.LobClausesDV) : void {
      def.onEnter(coverable, addedCoveragesToShow, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef at LobAdditionalCoveragesPanelSet.pcf: line 33, column 138
    function def_refreshVariables_5 (def :  pcf.LobClausesDV) : void {
      def.refreshVariables(coverable, addedCoveragesToShow, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'initialValue' attribute on Variable at LobAdditionalCoveragesPanelSet.pcf: line 31, column 79
    function initialValue_0 () : gw.api.productmodel.ClausePattern[] {
      return coverable == null ? null : filteredCoverages().map(\c -> c.Pattern)
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=Add) at LobAdditionalCoveragesPanelSet.pcf: line 40, column 113
    function onPick_3 (PickedValue :  gw.api.productmodel.ClausePattern[]) : void {
      createCoverageList(PickedValue.whereTypeIs( gw.api.productmodel.CoveragePattern ).toList())
    }
    
    property get addedCoveragesToShow () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("addedCoveragesToShow", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set addedCoveragesToShow ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("addedCoveragesToShow", 0, $arg)
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
    
    function createCoverageList(patterns: java.util.List<gw.api.productmodel.CoveragePattern>) {
      for (pattern in patterns) {
        coverable.createCoverage(pattern)
      }
    }
    
    function filteredCoverages() : Coverage[] {
      var covlist : Coverage[]
      if (coverable == null) {
        return null
      }
      if (includeExclude) {
        return coverable.getCoveragesInCategories(coverageCategories)?.toTypedArray()
      }
      else {
        return coverable.getCoveragesNotInCategories(coverageCategories)?.toTypedArray()
      }
    }
    
    
  }
  
  
}