package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.GL7Exposure.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewPanelSet_GL7ExposureExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.GL7Exposure.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 67, column 48
    function def_onEnter_18 (def :  pcf.LobEntityDV) : void {
      def.onEnter(presenter.ExposureSliced, gw.lob.common.displayable.LobDisplayable, jobWizardHelper, false)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 69, column 107
    function def_onEnter_20 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.onEnter(exposure, gw.lob.gl7.GL7Category.CategoriesForExposure)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 67, column 48
    function def_refreshVariables_19 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(presenter.ExposureSliced, gw.lob.common.displayable.LobDisplayable, jobWizardHelper, false)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 69, column 107
    function def_refreshVariables_21 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.refreshVariables(exposure, gw.lob.gl7.GL7Category.CategoriesForExposure)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 22, column 27
    function initialValue_0 () : GL7Exposure {
      return rowEntity typeis GL7Exposure ? rowEntity : null
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 27, column 58
    function initialValue_1 () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return gw.lob.gl7.presenters.GL7ExposurePresenter.create(exposure)
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 58, column 59
    function valueRange_13 () : java.lang.Object {
      return presenter.ValidLocations
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 42, column 54
    function valueRoot_3 () : java.lang.Object {
      return presenter
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 58, column 59
    function value_11 () : entity.PolicyLocation {
      return presenter.LocationWM
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 42, column 54
    function value_2 () : java.util.Date {
      return presenter.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 46, column 55
    function value_5 () : java.util.Date {
      return presenter.ExpirationDate
    }
    
    // 'value' attribute on TextInput (id=Subline_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 51, column 56
    function value_8 () : entity.GL7SublineType {
      return presenter.SublineType
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 58, column 59
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 58, column 59
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 58, column 59
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 58, column 59
    function verifyValueRange_15 () : void {
      var __valueRangeArg = presenter.ValidLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7Exposure.pcf: line 67, column 48
    function visible_17 () : java.lang.Boolean {
      return presenter.IsLocationSet
    }
    
    property get exposure () : GL7Exposure {
      return getVariableValue("exposure", 0) as GL7Exposure
    }
    
    property set exposure ($arg :  GL7Exposure) {
      setVariableValue("exposure", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7ExposurePresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7ExposurePresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7ExposurePresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    property get rowEntity () : Object {
      return getRequireValue("rowEntity", 0) as Object
    }
    
    property set rowEntity ($arg :  Object) {
      setRequireValue("rowEntity", 0, $arg)
    }
    
    
  }
  
  
}