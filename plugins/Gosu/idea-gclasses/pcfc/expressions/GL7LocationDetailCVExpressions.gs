package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7LocationDetailCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7LocationDetailCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at GL7LocationDetailCV.pcf: line 109, column 101
    function action_20 () : void {
      AccountLocationPopup.push(polLocation.AccountLocation, polLocation.Branch.Policy.Account, false)
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at GL7LocationDetailCV.pcf: line 109, column 101
    function action_dest_21 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(polLocation.AccountLocation, polLocation.Branch.Policy.Account, false)
    }
    
    // 'def' attribute on PanelRef at GL7LocationDetailCV.pcf: line 118, column 194
    function def_onEnter_23 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.onEnter(sublineLocations, {gw.lob.gl7.GL7Category.LOCATION_ADDITIONAL_COVERAGE.PublicID}, jobWizardHelper, polLocation.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7LocationDetailCV.pcf: line 124, column 240
    function def_onEnter_25 (def :  pcf.GL7ExclusionsAndConditionsPerSublinePanelSet) : void {
      def.onEnter(sublineLocations, {gw.lob.gl7.GL7Category.LOCATION_EXCLUSION.PublicID, gw.lob.gl7.GL7Category.LOCATION_CONDITION.PublicID}, jobWizardHelper, polLocation.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=GL7AdditionalInsuredsPanelSet) at GL7LocationDetailCV.pcf: line 131, column 45
    function def_onEnter_27 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.onEnter(sublineLocations, {gw.lob.gl7.GL7Category.LOCATION_ADDITIONAL_INSURED.PublicID}, jobWizardHelper, polLocation.DisplayName, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at GL7LocationDetailCV.pcf: line 48, column 99
    function def_onEnter_4 (def :  pcf.GL7LocationDetailInputSet) : void {
      def.onEnter(presenter, supportsNonSpecificLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7LocationDetailCV.pcf: line 118, column 194
    function def_refreshVariables_24 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.refreshVariables(sublineLocations, {gw.lob.gl7.GL7Category.LOCATION_ADDITIONAL_COVERAGE.PublicID}, jobWizardHelper, polLocation.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7LocationDetailCV.pcf: line 124, column 240
    function def_refreshVariables_26 (def :  pcf.GL7ExclusionsAndConditionsPerSublinePanelSet) : void {
      def.refreshVariables(sublineLocations, {gw.lob.gl7.GL7Category.LOCATION_EXCLUSION.PublicID, gw.lob.gl7.GL7Category.LOCATION_CONDITION.PublicID}, jobWizardHelper, polLocation.DisplayName, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=GL7AdditionalInsuredsPanelSet) at GL7LocationDetailCV.pcf: line 131, column 45
    function def_refreshVariables_28 (def :  pcf.GL7AdditionalCoveragesPerSublinePanelSet) : void {
      def.refreshVariables(sublineLocations, {gw.lob.gl7.GL7Category.LOCATION_ADDITIONAL_INSURED.PublicID}, jobWizardHelper, polLocation.DisplayName, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at GL7LocationDetailCV.pcf: line 48, column 99
    function def_refreshVariables_5 (def :  pcf.GL7LocationDetailInputSet) : void {
      def.refreshVariables(presenter, supportsNonSpecificLocation, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at GL7LocationDetailCV.pcf: line 26, column 36
    function initialValue_0 () : entity.PolicyLocation {
      return presenter.PolicyLocation
    }
    
    // 'initialValue' attribute on Variable at GL7LocationDetailCV.pcf: line 31, column 36
    function initialValue_1 () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location> {
      return gw.lob.gl7.presenters.GL7CoverablePerSubline.forLocation(policyPeriod.GL7Line, polLocation)
    }
    
    // 'initialValue' attribute on Variable at GL7LocationDetailCV.pcf: line 35, column 50
    function initialValue_2 () : Type<gw.lob.gl7.GL7Category> {
      return gw.lob.gl7.GL7Category
    }
    
    // 'initialValue' attribute on Variable at GL7LocationDetailCV.pcf: line 40, column 36
    function initialValue_3 () : entity.GL7Location[] {
      return sublineLocations.SublineSortedCoverables
    }
    
    // 'value' attribute on CheckBoxCell (id=SublineSelection_Cell) at GL7LocationDetailCV.pcf: line 72, column 52
    function sortValue_6 (sublineChoice :  gw.lob.gl7.presenters.GL7LocationPresenter.SublineChoice) : java.lang.Object {
      return sublineChoice.Selected
    }
    
    // 'value' attribute on TextCell (id=Subline_Cell) at GL7LocationDetailCV.pcf: line 80, column 51
    function sortValue_7 (sublineChoice :  gw.lob.gl7.presenters.GL7LocationPresenter.SublineChoice) : java.lang.Object {
      return sublineChoice.Subline
    }
    
    // 'value' attribute on RowIterator at GL7LocationDetailCV.pcf: line 65, column 108
    function value_16 () : java.util.List<gw.lob.gl7.presenters.GL7LocationPresenter.SublineChoice> {
      return presenter.Choices
    }
    
    // 'value' attribute on PanelIterator (id=SublinePropertiesPanel) at GL7LocationDetailCV.pcf: line 94, column 62
    function value_19 () : java.util.List<entity.GL7Location> {
      return presenter.LocationsOfSelectedChoices
    }
    
    // 'visible' attribute on DetailViewPanel (id=AccountLocationUpToDateDV) at GL7LocationDetailCV.pcf: line 100, column 77
    function visible_22 () : java.lang.Boolean {
      return polLocation.Branch.Promoted and !polLocation.isUpToDate()
    }
    
    property get category () : Type<gw.lob.gl7.GL7Category> {
      return getVariableValue("category", 0) as Type<gw.lob.gl7.GL7Category>
    }
    
    property set category ($arg :  Type<gw.lob.gl7.GL7Category>) {
      setVariableValue("category", 0, $arg)
    }
    
    property get coverables () : entity.GL7Location[] {
      return getVariableValue("coverables", 0) as entity.GL7Location[]
    }
    
    property set coverables ($arg :  entity.GL7Location[]) {
      setVariableValue("coverables", 0, $arg)
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
    
    property get polLocation () : entity.PolicyLocation {
      return getVariableValue("polLocation", 0) as entity.PolicyLocation
    }
    
    property set polLocation ($arg :  entity.PolicyLocation) {
      setVariableValue("polLocation", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7LocationPresenter {
      return getRequireValue("presenter", 0) as gw.lob.gl7.presenters.GL7LocationPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7LocationPresenter) {
      setRequireValue("presenter", 0, $arg)
    }
    
    property get sublineLocations () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location> {
      return getVariableValue("sublineLocations", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location>
    }
    
    property set sublineLocations ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location>) {
      setVariableValue("sublineLocations", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7LocationDetailCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=SublineSelection_Cell) at GL7LocationDetailCV.pcf: line 72, column 52
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      sublineChoice.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'onChange' attribute on PostOnChange at GL7LocationDetailCV.pcf: line 74, column 108
    function onChange_8 () : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, GL7Location)
    }
    
    // 'value' attribute on CheckBoxCell (id=SublineSelection_Cell) at GL7LocationDetailCV.pcf: line 72, column 52
    function valueRoot_11 () : java.lang.Object {
      return sublineChoice
    }
    
    // 'value' attribute on TextCell (id=Subline_Cell) at GL7LocationDetailCV.pcf: line 80, column 51
    function value_13 () : java.lang.String {
      return sublineChoice.Subline
    }
    
    // 'value' attribute on CheckBoxCell (id=SublineSelection_Cell) at GL7LocationDetailCV.pcf: line 72, column 52
    function value_9 () : java.lang.Boolean {
      return sublineChoice.Selected
    }
    
    property get sublineChoice () : gw.lob.gl7.presenters.GL7LocationPresenter.SublineChoice {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7LocationPresenter.SublineChoice
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends GL7LocationDetailCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7LocationDetailCV.pcf: line 96, column 117
    function def_onEnter_17 (def :  pcf.LobEntityDV) : void {
      def.onEnter(location, gw.lob.gl7.displayable.GL7LocationDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7LocationDetailCV.pcf: line 96, column 117
    function def_refreshVariables_18 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(location, gw.lob.gl7.displayable.GL7LocationDisplayable, jobWizardHelper, openForEdit)
    }
    
    property get location () : entity.GL7Location {
      return getIteratedValue(1) as entity.GL7Location
    }
    
    
  }
  
  
}