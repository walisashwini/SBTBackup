package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewPanelSet_GL7UnmannedAircraftExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 70, column 48
    function def_onEnter_18 (def :  pcf.LobEntityDV) : void {
      def.onEnter(presenter.UnmannedAircraft, gw.lob.gl7.displayable.GL7UnmannedAircraftDisplayable, jobWizardHelper, false)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 72, column 123
    function def_onEnter_20 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.onEnter(unmannedAircraft, gw.lob.gl7.GL7Category.CategoriesForUnmannedAircraft)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 70, column 48
    function def_refreshVariables_19 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(presenter.UnmannedAircraft, gw.lob.gl7.displayable.GL7UnmannedAircraftDisplayable, jobWizardHelper, false)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 72, column 123
    function def_refreshVariables_21 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.refreshVariables(unmannedAircraft, gw.lob.gl7.GL7Category.CategoriesForUnmannedAircraft)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 22, column 35
    function initialValue_0 () : GL7UnmannedAircraft {
      return rowEntity typeis GL7UnmannedAircraft ? rowEntity : null
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 27, column 66
    function initialValue_1 () : gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter {
      return gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft)
    }
    
    // 'value' attribute on TextInput (id=Subline_Input) at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 43, column 56
    function valueRoot_3 () : java.lang.Object {
      return presenter
    }
    
    // 'value' attribute on TextInput (id=ClassDescription_Input) at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 58, column 51
    function value_11 () : java.lang.String {
      return presenter.ClassDescription
    }
    
    // 'value' attribute on TextInput (id=Sequence_Input) at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 63, column 52
    function value_14 () : java.lang.Integer {
      return presenter.UnmannedAircraftNumber
    }
    
    // 'value' attribute on TextInput (id=Subline_Input) at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 43, column 56
    function value_2 () : entity.GL7SublineType {
      return presenter.SublineType
    }
    
    // 'value' attribute on TextInput (id=Location_Input) at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 48, column 56
    function value_5 () : entity.PolicyLocation {
      return presenter.Location
    }
    
    // 'value' attribute on TextInput (id=ClassCode_Input) at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 53, column 51
    function value_8 () : java.lang.String {
      return presenter.ClassCode
    }
    
    // 'visible' attribute on PanelRef at GL7PolicyReviewPanelSet.GL7UnmannedAircraft.pcf: line 70, column 48
    function visible_17 () : java.lang.Boolean {
      return presenter.IsLocationSet
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
    
    property get presenter () : gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    property get rowEntity () : Object {
      return getRequireValue("rowEntity", 0) as Object
    }
    
    property set rowEntity ($arg :  Object) {
      setRequireValue("rowEntity", 0, $arg)
    }
    
    property get unmannedAircraft () : GL7UnmannedAircraft {
      return getVariableValue("unmannedAircraft", 0) as GL7UnmannedAircraft
    }
    
    property set unmannedAircraft ($arg :  GL7UnmannedAircraft) {
      setVariableValue("unmannedAircraft", 0, $arg)
    }
    
    
  }
  
  
}