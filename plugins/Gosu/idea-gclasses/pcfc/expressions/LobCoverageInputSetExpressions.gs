package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobCoverageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobCoverageInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobCoverageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobCoverageInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_11 (def :  pcf.CovTermInputSet_Typekey) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_13 (def :  pcf.CovTermInputSet_bit) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_15 (def :  pcf.CovTermInputSet_datetime) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_17 (def :  pcf.CovTermInputSet_decimal) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_19 (def :  pcf.CovTermInputSet_default) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_21 (def :  pcf.CovTermInputSet_longtext) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_23 (def :  pcf.CovTermInputSet_shorttext) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_onEnter_27 (def :  pcf.LobCovTermWithPostOnChangeInputSet_Direct) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_onEnter_29 (def :  pcf.LobCovTermWithPostOnChangeInputSet_Option) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_onEnter_31 (def :  pcf.LobCovTermWithPostOnChangeInputSet_bit) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_onEnter_33 (def :  pcf.LobCovTermWithPostOnChangeInputSet_default) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_onEnter_35 (def :  pcf.LobCovTermWithPostOnChangeInputSet_longtext) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_onEnter_37 (def :  pcf.LobCovTermWithPostOnChangeInputSet_shorttext) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_5 (def :  pcf.CovTermInputSet_Direct) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_7 (def :  pcf.CovTermInputSet_Option) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_onEnter_9 (def :  pcf.CovTermInputSet_Package) : void {
      def.onEnter(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_10 (def :  pcf.CovTermInputSet_Package) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_12 (def :  pcf.CovTermInputSet_Typekey) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_14 (def :  pcf.CovTermInputSet_bit) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_16 (def :  pcf.CovTermInputSet_datetime) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_18 (def :  pcf.CovTermInputSet_decimal) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_20 (def :  pcf.CovTermInputSet_default) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_22 (def :  pcf.CovTermInputSet_longtext) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_24 (def :  pcf.CovTermInputSet_shorttext) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_refreshVariables_28 (def :  pcf.LobCovTermWithPostOnChangeInputSet_Direct) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_refreshVariables_30 (def :  pcf.LobCovTermWithPostOnChangeInputSet_Option) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_refreshVariables_32 (def :  pcf.LobCovTermWithPostOnChangeInputSet_bit) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_refreshVariables_34 (def :  pcf.LobCovTermWithPostOnChangeInputSet_default) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_refreshVariables_36 (def :  pcf.LobCovTermWithPostOnChangeInputSet_longtext) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function def_refreshVariables_38 (def :  pcf.LobCovTermWithPostOnChangeInputSet_shorttext) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_6 (def :  pcf.CovTermInputSet_Direct) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function def_refreshVariables_8 (def :  pcf.CovTermInputSet_Option) : void {
      def.refreshVariables(term, openForEdit)
    }
    
    // 'mode' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function mode_25 () : java.lang.Object {
      return term.ValueTypeName
    }
    
    // 'visible' attribute on InputSetRef at LobCoverageInputSet.pcf: line 54, column 183
    function visible_26 () : java.lang.Boolean {
      return lobPropertyService.hasDependents(term.Clause, term.Pattern.CodeIdentifier) or lobPropertyService.isValidationDependent(term.Clause, term.Pattern.CodeIdentifier)
    }
    
    // 'visible' attribute on InputSetRef at LobCoverageInputSet.pcf: line 50, column 192
    function visible_4 () : java.lang.Boolean {
      return not lobPropertyService.hasDependents(term.Clause, term.Pattern.CodeIdentifier) and not lobPropertyService.isValidationDependent(term.Clause, term.Pattern.CodeIdentifier)
    }
    
    property get term () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(1) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobCoverageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobCoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at LobCoverageInputSet.pcf: line 40, column 102
    function available_47 () : java.lang.Boolean {
      return coverageHelper.canToggleCoverage(coverable, coveragePattern) and coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 58, column 106
    function def_onEnter_41 (def :  pcf.LobScheduleInputSet_false) : void {
      def.onEnter(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 58, column 106
    function def_onEnter_43 (def :  pcf.LobScheduleInputSet_true) : void {
      def.onEnter(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 58, column 106
    function def_refreshVariables_42 (def :  pcf.LobScheduleInputSet_false) : void {
      def.refreshVariables(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on InputSetRef at LobCoverageInputSet.pcf: line 58, column 106
    function def_refreshVariables_44 (def :  pcf.LobScheduleInputSet_true) : void {
      def.refreshVariables(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'initialValue' attribute on Variable at LobCoverageInputSet.pcf: line 31, column 48
    function initialValue_0 () : gw.lob.common.LobPropertyService {
      return gw.lob.common.LobPropertyService.Instance
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at LobCoverageInputSet.pcf: line 40, column 102
    function label_48 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'mode' attribute on InputSetRef at LobCoverageInputSet.pcf: line 58, column 106
    function mode_45 () : java.lang.Object {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) typeis gw.api.domain.Schedule
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at LobCoverageInputSet.pcf: line 40, column 102
    function setter_49 (VALUE :  java.lang.Boolean) : void {
      coverageHelper.onToggleCoverage(coverable, coveragePattern, jobWizardHelper, VALUE)
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at LobCoverageInputSet.pcf: line 34, column 73
    function valueRoot_2 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at LobCoverageInputSet.pcf: line 34, column 73
    function value_1 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on InputIterator (id=CovTermIterator) at LobCoverageInputSet.pcf: line 46, column 174
    function value_40 () : gw.api.domain.covterm.CovTerm[] {
      return coverable.getCoverageConditionOrExclusion(coveragePattern).CovTerms.sortBy( \ term -> term.Pattern.Priority )
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at LobCoverageInputSet.pcf: line 40, column 102
    function visible_46 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
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
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getRequireValue("coverageHelper", 0) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setRequireValue("coverageHelper", 0, $arg)
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getRequireValue("coveragePattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set coveragePattern ($arg :  gw.api.productmodel.ClausePattern) {
      setRequireValue("coveragePattern", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lobPropertyService () : gw.lob.common.LobPropertyService {
      return getVariableValue("lobPropertyService", 0) as gw.lob.common.LobPropertyService
    }
    
    property set lobPropertyService ($arg :  gw.lob.common.LobPropertyService) {
      setVariableValue("lobPropertyService", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    
  }
  
  
}