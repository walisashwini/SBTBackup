package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7UnmannedAircraftsCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7UnmannedAircraftsCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7UnmannedAircraftsCV.pcf: line 100, column 49
    function def_onEnter_39 (def :  pcf.LobEntityDV) : void {
      def.onEnter(presenter.UnmannedAircraft, gw.lob.gl7.displayable.GL7UnmannedAircraftDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7UnmannedAircraftsCV.pcf: line 105, column 29
    function def_onEnter_41 (def :  pcf.LobClausesDV) : void {
      def.onEnter(coverable, clausePatterns, jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'def' attribute on PanelRef at GL7UnmannedAircraftsCV.pcf: line 100, column 49
    function def_refreshVariables_40 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(presenter.UnmannedAircraft, gw.lob.gl7.displayable.GL7UnmannedAircraftDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7UnmannedAircraftsCV.pcf: line 105, column 29
    function def_refreshVariables_42 (def :  pcf.LobClausesDV) : void {
      def.refreshVariables(coverable, clausePatterns, jobWizardHelper, coverageHelper, scheduledItemHelper, new gw.lob.gl7.GL7AdditionalInsuredHelper())
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      presenter.Location = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      presenter.ClassCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function editable_8 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsCV.pcf: line 25, column 50
    function initialValue_0 () : Type<gw.lob.gl7.GL7Category> {
      return gw.lob.gl7.GL7Category
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsCV.pcf: line 30, column 36
    function initialValue_1 () : entity.GL7UnmannedAircraft {
      return presenter.UnmannedAircraft
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsCV.pcf: line 35, column 51
    function initialValue_2 () : gw.api.productmodel.ClausePattern[] {
      return coverable == null ? {} : coverageCategories.StandardCoverage.availableCoveragePatternsForCoverable(coverable, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsCV.pcf: line 39, column 53
    function initialValue_3 () : gw.lob.common.coverage.CoverageHelper {
      return new gw.lob.gl7.synchronizer.GL7LobCoverageHelper()
    }
    
    // 'initialValue' attribute on Variable at GL7UnmannedAircraftsCV.pcf: line 43, column 59
    function initialValue_4 () : gw.lob.common.schedules.ScheduledItemHelper {
      return new gw.lob.common.schedules.LobScheduledItemHelper()
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function valueRange_12 () : java.lang.Object {
      return presenter.validLocations(policyPeriod.GL7Line)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function valueRange_22 () : java.lang.Object {
      return presenter.ValidClassCodes
    }
    
    // 'value' attribute on TextInput (id=Subline_Input) at GL7UnmannedAircraftsCV.pcf: line 60, column 56
    function valueRoot_6 () : java.lang.Object {
      return presenter
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function value_19 () : java.lang.String {
      return presenter.ClassCode
    }
    
    // 'value' attribute on TextInput (id=ClassDescription_Input) at GL7UnmannedAircraftsCV.pcf: line 87, column 51
    function value_29 () : java.lang.String {
      return presenter.ClassDescription
    }
    
    // 'value' attribute on TextInput (id=UnmannedAircraftNumber_Input) at GL7UnmannedAircraftsCV.pcf: line 93, column 52
    function value_34 () : java.lang.Integer {
      return presenter.UnmannedAircraftNumber
    }
    
    // 'value' attribute on TextInput (id=Subline_Input) at GL7UnmannedAircraftsCV.pcf: line 60, column 56
    function value_5 () : entity.GL7SublineType {
      return presenter.SublineType
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function value_9 () : entity.PolicyLocation {
      return presenter.Location
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7UnmannedAircraftsCV.pcf: line 68, column 81
    function verifyValueRange_14 () : void {
      var __valueRangeArg = presenter.validLocations(policyPeriod.GL7Line)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function verifyValueRange_24 () : void {
      var __valueRangeArg = presenter.ValidClassCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=ClassCode_Input) at GL7UnmannedAircraftsCV.pcf: line 79, column 60
    function visible_18 () : java.lang.Boolean {
      return presenter.IsLocationSet
    }
    
    // 'visible' attribute on TextInput (id=UnmannedAircraftNumber_Input) at GL7UnmannedAircraftsCV.pcf: line 93, column 52
    function visible_33 () : java.lang.Boolean {
      return presenter.IsClassCodeSet
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
    
    property get coverable () : entity.GL7UnmannedAircraft {
      return getVariableValue("coverable", 0) as entity.GL7UnmannedAircraft
    }
    
    property set coverable ($arg :  entity.GL7UnmannedAircraft) {
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
    
    property get presenter () : gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter {
      return getRequireValue("presenter", 0) as gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) {
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