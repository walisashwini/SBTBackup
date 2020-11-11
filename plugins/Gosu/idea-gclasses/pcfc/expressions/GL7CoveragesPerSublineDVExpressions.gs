package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragesPerSublineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7CoveragesPerSublineDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragesPerSublineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7CoveragesPerSublineDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InputIterator at GL7CoveragesPerSublineDV.pcf: line 23, column 74
    function value_12 () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry[] {
      return coverablePerSubline.Entries
    }
    
    property get coverablePerSubline () : gw.lob.gl7.presenters.GL7CoverablePerSubline {
      return getRequireValue("coverablePerSubline", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline
    }
    
    property set coverablePerSubline ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline) {
      setRequireValue("coverablePerSubline", 0, $arg)
    }
    
    property get getClausesToShow () : block(coverable : Coverable) : List<gw.api.domain.Clause> {
      return getRequireValue("getClausesToShow", 0) as block(coverable : Coverable) : List<gw.api.domain.Clause>
    }
    
    property set getClausesToShow ($arg :  block(coverable : Coverable) : List<gw.api.domain.Clause>) {
      setRequireValue("getClausesToShow", 0, $arg)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragesPerSublineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7CoveragesPerSublineDV.pcf: line 28, column 38
    function initialValue_0 () : entity.Coverable {
      return sublineCoverableEntry.Coverable
    }
    
    // 'initialValue' attribute on Variable at GL7CoveragesPerSublineDV.pcf: line 33, column 42
    function initialValue_1 () : gw.api.productmodel.ClausePattern[] {
      return getClausesToShow(coverable)*.Pattern
    }
    
    // 'initialValue' attribute on Variable at GL7CoveragesPerSublineDV.pcf: line 37, column 59
    function initialValue_2 () : gw.lob.common.coverage.CoverageHelper {
      return new gw.lob.common.coverage.LobCoverageHelper()
    }
    
    // 'initialValue' attribute on Variable at GL7CoveragesPerSublineDV.pcf: line 41, column 65
    function initialValue_3 () : gw.lob.common.schedules.ScheduledItemHelper {
      return new gw.lob.common.schedules.LobScheduledItemHelper()
    }
    
    // 'label' attribute on Label at GL7CoveragesPerSublineDV.pcf: line 46, column 57
    function label_6 () : java.lang.String {
      return sublineCoverableEntry.SublineType.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at GL7CoveragesPerSublineDV.pcf: line 56, column 30
    function sortBy_7 (coveragePattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return coveragePattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at GL7CoveragesPerSublineDV.pcf: line 59, column 30
    function sortBy_8 (coveragePattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=AddedCovIterator) at GL7CoveragesPerSublineDV.pcf: line 53, column 61
    function value_11 () : gw.api.productmodel.ClausePattern[] {
      return addedCoveragesToShow
    }
    
    // 'visible' attribute on InputDivider at GL7CoveragesPerSublineDV.pcf: line 43, column 57
    function visible_4 () : java.lang.Boolean {
      return addedCoveragesToShow.HasElements
    }
    
    property get addedCoveragesToShow () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("addedCoveragesToShow", 2) as gw.api.productmodel.ClausePattern[]
    }
    
    property set addedCoveragesToShow ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("addedCoveragesToShow", 2, $arg)
    }
    
    property get coverable () : entity.Coverable {
      return getVariableValue("coverable", 2) as entity.Coverable
    }
    
    property set coverable ($arg :  entity.Coverable) {
      setVariableValue("coverable", 2, $arg)
    }
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getVariableValue("coverageHelper", 2) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setVariableValue("coverageHelper", 2, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getVariableValue("scheduledItemHelper", 2) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setVariableValue("scheduledItemHelper", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragesPerSublineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at GL7CoveragesPerSublineDV.pcf: line 61, column 182
    function def_onEnter_9 (def :  pcf.LobCoverageInputSet) : void {
      def.onEnter(coveragePattern, coverable, openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'def' attribute on InputSetRef at GL7CoveragesPerSublineDV.pcf: line 61, column 182
    function def_refreshVariables_10 (def :  pcf.LobCoverageInputSet) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(3) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragesPerSublineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7CoveragesPerSublineDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get sublineCoverableEntry () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry
    }
    
    
  }
  
  
}