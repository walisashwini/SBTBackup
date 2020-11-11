package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublinesCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7SublinesCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublinesCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7SublinesCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7SublinesCV.pcf: line 81, column 176
    function def_onEnter_14 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.onEnter(coverablePerSubline, {coverageCategories.AdditionalCoverage.PublicID}, jobWizardHelper, line.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at GL7SublinesCV.pcf: line 88, column 50
    function def_onEnter_17 (def :  pcf.GL7ExclusionsAndConditionsPerSublinePanelSet) : void {
      def.onEnter(coverablePerSubline, {coverageCategories.Exclusion.PublicID, coverageCategories.Condition.PublicID}, jobWizardHelper, line.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=GL7AdditionalInsuredsPanelSet) at GL7SublinesCV.pcf: line 95, column 45
    function def_onEnter_19 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.onEnter(coverablePerSubline, {coverageCategories.AdditionalInsured.PublicID}, jobWizardHelper, line.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7SublinesCV.pcf: line 81, column 176
    function def_refreshVariables_15 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.refreshVariables(coverablePerSubline, {coverageCategories.AdditionalCoverage.PublicID}, jobWizardHelper, line.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at GL7SublinesCV.pcf: line 88, column 50
    function def_refreshVariables_18 (def :  pcf.GL7ExclusionsAndConditionsPerSublinePanelSet) : void {
      def.refreshVariables(coverablePerSubline, {coverageCategories.Exclusion.PublicID, coverageCategories.Condition.PublicID}, jobWizardHelper, line.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=GL7AdditionalInsuredsPanelSet) at GL7SublinesCV.pcf: line 95, column 45
    function def_refreshVariables_20 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.refreshVariables(coverablePerSubline, {coverageCategories.AdditionalInsured.PublicID}, jobWizardHelper, line.DisplayName, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at GL7SublinesCV.pcf: line 23, column 27
    function initialValue_0 () : Coverable[] {
      return coverablePerSubline.SublineSortedCoverables
    }
    
    // 'initialValue' attribute on Variable at GL7SublinesCV.pcf: line 28, column 36
    function initialValue_1 () : entity.GL7GeneralLiabilityLine {
      return coverablePerSubline.Line
    }
    
    // 'initialValue' attribute on Variable at GL7SublinesCV.pcf: line 32, column 53
    function initialValue_2 () : gw.lob.common.coverage.CoverageHelper {
      return new gw.lob.common.coverage.LobCoverageHelper()
    }
    
    // 'initialValue' attribute on Variable at GL7SublinesCV.pcf: line 36, column 59
    function initialValue_3 () : gw.lob.common.schedules.ScheduledItemHelper {
      return new gw.lob.common.schedules.LobScheduledItemHelper()
    }
    
    // 'onSelect' attribute on Card (id=DetailsCard) at GL7SublinesCV.pcf: line 40, column 78
    function onSelect_13 () : void {
      line.syncSublineTypeFields()
    }
    
    // 'onSelect' attribute on Card (id=AdditionalCoveragesCard) at GL7SublinesCV.pcf: line 79, column 78
    function onSelect_16 () : void {
      line.syncSublineTypeAddlCoverages()
    }
    
    // 'value' attribute on PanelIterator at GL7SublinesCV.pcf: line 44, column 74
    function value_12 () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry[] {
      return coverablePerSubline.Entries
    }
    
    property get coverablePerSubline () : gw.lob.gl7.presenters.GL7CoverablePerSubline {
      return getRequireValue("coverablePerSubline", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline
    }
    
    property set coverablePerSubline ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline) {
      setRequireValue("coverablePerSubline", 0, $arg)
    }
    
    property get coverables () : Coverable[] {
      return getVariableValue("coverables", 0) as Coverable[]
    }
    
    property set coverables ($arg :  Coverable[]) {
      setVariableValue("coverables", 0, $arg)
    }
    
    property get coverageCategories () : gw.lob.gl7.GL7Category.CoverableCoverageCategories {
      return getRequireValue("coverageCategories", 0) as gw.lob.gl7.GL7Category.CoverableCoverageCategories
    }
    
    property set coverageCategories ($arg :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) {
      setRequireValue("coverageCategories", 0, $arg)
    }
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getVariableValue("coverageHelper", 0) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setVariableValue("coverageHelper", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : entity.GL7GeneralLiabilityLine {
      return getVariableValue("line", 0) as entity.GL7GeneralLiabilityLine
    }
    
    property set line ($arg :  entity.GL7GeneralLiabilityLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getVariableValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setVariableValue("scheduledItemHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublinesCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends GL7SublinesCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7SublinesCV.pcf: line 60, column 94
    function def_onEnter_7 (def :  pcf.LobEntityDV) : void {
      def.onEnter(coverable, displayableClass, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7SublinesCV.pcf: line 67, column 245
    function def_onEnter_9 (def :  pcf.LobClausesDV) : void {
      def.onEnter(coverable, coverageCategories.StandardCoverage.availableCoveragePatternsForCoverable(coverable, openForEdit), jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'def' attribute on PanelRef at GL7SublinesCV.pcf: line 67, column 245
    function def_refreshVariables_10 (def :  pcf.LobClausesDV) : void {
      def.refreshVariables(coverable, coverageCategories.StandardCoverage.availableCoveragePatternsForCoverable(coverable, openForEdit), jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'def' attribute on PanelRef at GL7SublinesCV.pcf: line 60, column 94
    function def_refreshVariables_8 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(coverable, displayableClass, jobWizardHelper, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at GL7SublinesCV.pcf: line 49, column 40
    function initialValue_4 () : entity.Coverable {
      return coverableSublineEntry.Coverable
    }
    
    // 'initialValue' attribute on Variable at GL7SublinesCV.pcf: line 53, column 24
    function initialValue_5 () : Type {
      return coverable typeis entity.GL7SublineType ? gw.lob.gl7.displayable.GL7SublineTypeDisplayable : gw.lob.common.displayable.LobDisplayable
    }
    
    // PanelIterator at GL7SublinesCV.pcf: line 44, column 74
    function initializeVariables_11 () : void {
        coverable = coverableSublineEntry.Coverable;
  displayableClass = coverable typeis entity.GL7SublineType ? gw.lob.gl7.displayable.GL7SublineTypeDisplayable : gw.lob.common.displayable.LobDisplayable;

    }
    
    // 'title' attribute on TitleBar at GL7SublinesCV.pcf: line 56, column 64
    function title_6 () : java.lang.String {
      return coverableSublineEntry.SublineType.Subline
    }
    
    property get coverable () : entity.Coverable {
      return getVariableValue("coverable", 1) as entity.Coverable
    }
    
    property set coverable ($arg :  entity.Coverable) {
      setVariableValue("coverable", 1, $arg)
    }
    
    property get coverableSublineEntry () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry
    }
    
    property get displayableClass () : Type {
      return getVariableValue("displayableClass", 1) as Type
    }
    
    property set displayableClass ($arg :  Type) {
      setVariableValue("displayableClass", 1, $arg)
    }
    
    
  }
  
  
}