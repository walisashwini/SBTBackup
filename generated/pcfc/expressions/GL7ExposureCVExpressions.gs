package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposureCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7ExposureCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposureCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7ExposureCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 89, column 48
    function def_onEnter_25 (def :  pcf.LobEntityDV) : void {
      def.onEnter(presenter.ExposureSliced, gw.lob.gl7.displayable.GL7ExposureDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 94, column 57
    function def_onEnter_28 (def :  pcf.LobClausesDV) : void {
      def.onEnter(coverable, clausePatterns, jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 106, column 54
    function def_onEnter_31 (def :  pcf.LobAdditionalCoveragesPanelSet) : void {
      def.onEnter(presenter.ExposureSliced, {gw.lob.gl7.GL7Category.EXPOSURE_ADDITIONAL_COVERAGE.PublicID}, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 113, column 54
    function def_onEnter_34 (def :  pcf.LobExclusionsAndConditionsPanelSet) : void {
      def.onEnter(presenter.ExposureSliced, {gw.lob.gl7.GL7Category.EXPOSURE_EXCLUSION.PublicID, gw.lob.gl7.GL7Category.EXPOSURE_CONDITION.PublicID}, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef (id=AdditionalInsuredsPanelSet) at GL7ExposureCV.pcf: line 121, column 42
    function def_onEnter_37 (def :  pcf.LobAdditionalCoveragesPanelSet) : void {
      def.onEnter(presenter.ExposureSliced, {gw.lob.gl7.GL7Category.EXPOSURE_ADDITIONAL_INSURED.PublicID}, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 89, column 48
    function def_refreshVariables_26 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(presenter.ExposureSliced, gw.lob.gl7.displayable.GL7ExposureDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 94, column 57
    function def_refreshVariables_29 (def :  pcf.LobClausesDV) : void {
      def.refreshVariables(coverable, clausePatterns, jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 106, column 54
    function def_refreshVariables_32 (def :  pcf.LobAdditionalCoveragesPanelSet) : void {
      def.refreshVariables(presenter.ExposureSliced, {gw.lob.gl7.GL7Category.EXPOSURE_ADDITIONAL_COVERAGE.PublicID}, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef at GL7ExposureCV.pcf: line 113, column 54
    function def_refreshVariables_35 (def :  pcf.LobExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(presenter.ExposureSliced, {gw.lob.gl7.GL7Category.EXPOSURE_EXCLUSION.PublicID, gw.lob.gl7.GL7Category.EXPOSURE_CONDITION.PublicID}, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef (id=AdditionalInsuredsPanelSet) at GL7ExposureCV.pcf: line 121, column 42
    function def_refreshVariables_38 (def :  pcf.LobAdditionalCoveragesPanelSet) : void {
      def.refreshVariables(presenter.ExposureSliced, {gw.lob.gl7.GL7Category.EXPOSURE_ADDITIONAL_INSURED.PublicID}, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      presenter.LocationWM = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'editable' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function editable_15 () : java.lang.Boolean {
      return presenter.ExposureWM.NewExposure
    }
    
    // 'editable' attribute on PanelRef at GL7ExposureCV.pcf: line 94, column 57
    function editable_27 () : java.lang.Boolean {
      return presenter.CanEditClausesForSlice
    }
    
    // 'initialValue' attribute on Variable at GL7ExposureCV.pcf: line 25, column 50
    function initialValue_0 () : Type<gw.lob.gl7.GL7Category> {
      return gw.lob.gl7.GL7Category
    }
    
    // 'initialValue' attribute on Variable at GL7ExposureCV.pcf: line 30, column 36
    function initialValue_1 () : entity.GL7Exposure {
      return presenter.ExposureSliced
    }
    
    // 'initialValue' attribute on Variable at GL7ExposureCV.pcf: line 35, column 51
    function initialValue_2 () : gw.api.productmodel.ClausePattern[] {
      return coverable == null ? {} : coverageCategories.StandardCoverage.availableCoveragePatternsForCoverable(coverable, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at GL7ExposureCV.pcf: line 39, column 53
    function initialValue_3 () : gw.lob.common.coverage.CoverageHelper {
      return new gw.lob.common.coverage.LobCoverageHelper()
    }
    
    // 'initialValue' attribute on Variable at GL7ExposureCV.pcf: line 43, column 59
    function initialValue_4 () : gw.lob.common.schedules.ScheduledItemHelper {
      return new gw.lob.common.schedules.LobScheduledItemHelper()
    }
    
    // 'initialValue' attribute on Variable at GL7ExposureCV.pcf: line 47, column 61
    function initialValue_5 () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return new gw.lob.gl7.GL7AdditionalInsuredHelper()
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function valueRange_19 () : java.lang.Object {
      return presenter.ValidLocations
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at GL7ExposureCV.pcf: line 63, column 54
    function valueRoot_7 () : java.lang.Object {
      return presenter
    }
    
    // 'value' attribute on TextInput (id=Subline_Input) at GL7ExposureCV.pcf: line 72, column 56
    function value_12 () : entity.GL7SublineType {
      return presenter.SublineType
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function value_16 () : entity.PolicyLocation {
      return presenter.LocationWM
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at GL7ExposureCV.pcf: line 63, column 54
    function value_6 () : java.util.Date {
      return presenter.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at GL7ExposureCV.pcf: line 67, column 55
    function value_9 () : java.util.Date {
      return presenter.ExpirationDate
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function verifyValueRangeIsAllowedType_20 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7ExposureCV.pcf: line 80, column 59
    function verifyValueRange_21 () : void {
      var __valueRangeArg = presenter.ValidLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelRef at GL7ExposureCV.pcf: line 89, column 48
    function visible_24 () : java.lang.Boolean {
      return presenter.IsLocationSet
    }
    
    property get additionalInsuredHelper () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return getVariableValue("additionalInsuredHelper", 0) as gw.lob.common.AbstractAdditionalInsuredHelper
    }
    
    property set additionalInsuredHelper ($arg :  gw.lob.common.AbstractAdditionalInsuredHelper) {
      setVariableValue("additionalInsuredHelper", 0, $arg)
    }
    
    property get category () : Type<gw.lob.gl7.GL7Category> {
      return getVariableValue("category", 0) as Type<gw.lob.gl7.GL7Category>
    }
    
    property set category ($arg :  Type<gw.lob.gl7.GL7Category>) {
      setVariableValue("category", 0, $arg)
    }
    
    property get clausePatterns () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("clausePatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set clausePatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("clausePatterns", 0, $arg)
    }
    
    property get coverable () : entity.GL7Exposure {
      return getVariableValue("coverable", 0) as entity.GL7Exposure
    }
    
    property set coverable ($arg :  entity.GL7Exposure) {
      setVariableValue("coverable", 0, $arg)
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
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return getRequireValue("presenter", 0) as gw.lob.gl7.presenters.GL7ExposurePresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7ExposurePresenter) {
      setRequireValue("presenter", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getVariableValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setVariableValue("scheduledItemHelper", 0, $arg)
    }
    
    
  }
  
  
}