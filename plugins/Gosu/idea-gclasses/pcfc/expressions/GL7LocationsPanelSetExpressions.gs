package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7LocationsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7LocationsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addAllLocationsButton) at GL7LocationsPanelSet.pcf: line 77, column 108
    function action_13 () : void {
      locationContainer.addLocationsToPolicy(unassignedAccountLocations)
    }
    
    // 'available' attribute on ToolbarButton (id=addLocationButton) at GL7LocationsPanelSet.pcf: line 57, column 112
    function available_11 () : java.lang.Boolean {
      return unassignedAccountLocations.Count > 0
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=setToPrimary) at GL7LocationsPanelSet.pcf: line 52, column 87
    function checkedRowAction_5 (location :  entity.PolicyLocation, CheckedValue :  entity.PolicyLocation) : void {
      policyPeriod.PrimaryLocation = CheckedValue
    }
    
    // 'initialValue' attribute on Variable at GL7LocationsPanelSet.pcf: line 22, column 36
    function initialValue_0 () : productmodel.GL7Line {
      return policyPeriod.GL7Line
    }
    
    // 'initialValue' attribute on Variable at GL7LocationsPanelSet.pcf: line 27, column 47
    function initialValue_1 () : gw.lob.gl7.GL7LocationContainer {
      return new gw.lob.gl7.GL7LocationContainer(gl7Line)
    }
    
    // 'initialValue' attribute on Variable at GL7LocationsPanelSet.pcf: line 32, column 43
    function initialValue_2 () : List<AccountLocation> {
      return locationContainer.UnusedLocations
    }
    
    // 'initialValue' attribute on Variable at GL7LocationsPanelSet.pcf: line 37, column 42
    function initialValue_3 () : List<PolicyLocation> {
      return gl7Line.Branch.PolicyLocations.toList()
    }
    
    // 'showRemoveConfirmMessage' attribute on IteratorButtons at GL7LocationsPanelSet.pcf: line 45, column 146
    function showConfirmMessage_4 () : java.lang.Boolean {
      return policyPeriod.Lines.where(\ p -> p.PolicyLocationCanBeRemovedWithoutRemovingAssociatedRisks).HasElements
    }
    
    // 'sortBy' attribute on IteratorSort at GL7LocationsPanelSet.pcf: line 65, column 30
    function sortBy_6 (unassignedAccountLocation :  entity.AccountLocation) : java.lang.Object {
      return unassignedAccountLocation.LocationNum
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedAccountLocationIterator) at GL7LocationsPanelSet.pcf: line 62, column 70
    function value_10 () : java.util.List<entity.AccountLocation> {
      return unassignedAccountLocations
    }
    
    property get gl7Line () : productmodel.GL7Line {
      return getVariableValue("gl7Line", 0) as productmodel.GL7Line
    }
    
    property set gl7Line ($arg :  productmodel.GL7Line) {
      setVariableValue("gl7Line", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get locationContainer () : gw.lob.gl7.GL7LocationContainer {
      return getVariableValue("locationContainer", 0) as gw.lob.gl7.GL7LocationContainer
    }
    
    property set locationContainer ($arg :  gw.lob.gl7.GL7LocationContainer) {
      setVariableValue("locationContainer", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyLocations () : List<PolicyLocation> {
      return getVariableValue("policyLocations", 0) as List<PolicyLocation>
    }
    
    property set policyLocations ($arg :  List<PolicyLocation>) {
      setVariableValue("policyLocations", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    property get unassignedAccountLocations () : List<AccountLocation> {
      return getVariableValue("unassignedAccountLocations", 0) as List<AccountLocation>
    }
    
    property set unassignedAccountLocations ($arg :  List<AccountLocation>) {
      setVariableValue("unassignedAccountLocations", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LocationsEdit_DPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at GL7LocationsPanelSet.pcf: line 121, column 29
    function action_27 () : void {
      GL7LocationPopup.push(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at GL7LocationsPanelSet.pcf: line 129, column 30
    function action_31 () : void {
      GL7LocationPopup.push(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at GL7LocationsPanelSet.pcf: line 136, column 30
    function action_36 () : void {
      GL7LocationPopup.push(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at GL7LocationsPanelSet.pcf: line 144, column 30
    function action_41 () : void {
      GL7LocationPopup.push(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at GL7LocationsPanelSet.pcf: line 121, column 29
    function action_dest_28 () : pcf.api.Destination {
      return pcf.GL7LocationPopup.createDestination(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at GL7LocationsPanelSet.pcf: line 129, column 30
    function action_dest_32 () : pcf.api.Destination {
      return pcf.GL7LocationPopup.createDestination(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at GL7LocationsPanelSet.pcf: line 136, column 30
    function action_dest_37 () : pcf.api.Destination {
      return pcf.GL7LocationPopup.createDestination(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at GL7LocationsPanelSet.pcf: line 144, column 30
    function action_dest_42 () : pcf.api.Destination {
      return pcf.GL7LocationPopup.createDestination(policyPeriod, null, location, openForEdit, true, jobWizardHelper)
    }
    
    // 'condition' attribute on ToolbarFlag at GL7LocationsPanelSet.pcf: line 98, column 33
    function condition_21 () : java.lang.Boolean {
      return !location.PrimaryLoc
    }
    
    // 'validationExpression' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at GL7LocationsPanelSet.pcf: line 112, column 29
    function validationExpression_23 () : java.lang.Object {
      return policyPeriod.PrimaryLocation != null ? null : DisplayKey.get("Web.Policy.LocationContainer.Location.PrimaryLocationError.SelectAtleastOne")
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at GL7LocationsPanelSet.pcf: line 129, column 30
    function valueRoot_34 () : java.lang.Object {
      return location.AccountLocation
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at GL7LocationsPanelSet.pcf: line 112, column 29
    function value_24 () : java.lang.Boolean {
      return location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at GL7LocationsPanelSet.pcf: line 121, column 29
    function value_29 () : entity.PolicyLocation {
      return location//policyLocation.LocationNum
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at GL7LocationsPanelSet.pcf: line 129, column 30
    function value_33 () : java.lang.String {
      return location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at GL7LocationsPanelSet.pcf: line 136, column 30
    function value_38 () : java.lang.String {
      return location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at GL7LocationsPanelSet.pcf: line 144, column 30
    function value_43 () : java.lang.String {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on TextCell (id=InSync_Cell) at GL7LocationsPanelSet.pcf: line 151, column 50
    function value_45 () : boolean {
      return location.isUpToDate()
    }
    
    // 'visible' attribute on TextCell (id=InSync_Cell) at GL7LocationsPanelSet.pcf: line 151, column 50
    function visible_46 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    property get location () : entity.PolicyLocation {
      return getIteratedValue(2) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7LocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at GL7LocationsPanelSet.pcf: line 69, column 50
    function action_7 () : void {
      GL7LocationPopup.push(policyPeriod, unassignedAccountLocation, null, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at GL7LocationsPanelSet.pcf: line 69, column 50
    function action_dest_8 () : pcf.api.Destination {
      return pcf.GL7LocationPopup.createDestination(policyPeriod, unassignedAccountLocation, null, openForEdit, true, jobWizardHelper)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountLocation) at GL7LocationsPanelSet.pcf: line 69, column 50
    function label_9 () : java.lang.Object {
      return unassignedAccountLocation
    }
    
    property get unassignedAccountLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationsEdit_DPExpressionsImpl extends GL7LocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7LocationsPanelSet.pcf: line 158, column 93
    function def_onEnter_52 (def :  pcf.GL7LocationDetailCV) : void {
      def.onEnter(policyPeriod, new gw.lob.gl7.presenters.GL7LocationPresenter(gl7Line, selectedLocation), false, supportsNonSpecificLocation, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7LocationsPanelSet.pcf: line 158, column 93
    function def_refreshVariables_53 (def :  pcf.GL7LocationDetailCV) : void {
      def.refreshVariables(policyPeriod, new gw.lob.gl7.presenters.GL7LocationPresenter(gl7Line, selectedLocation), false, supportsNonSpecificLocation, jobWizardHelper)
    }
    
    // 'pickLocation' attribute on RowIterator at GL7LocationsPanelSet.pcf: line 95, column 69
    function pickLocation_48 () : void {
      GL7LocationPopup.push(policyPeriod, null, null, openForEdit, true, jobWizardHelper)
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at GL7LocationsPanelSet.pcf: line 112, column 29
    function sortValue_14 (location :  entity.PolicyLocation) : java.lang.Object {
      return location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at GL7LocationsPanelSet.pcf: line 121, column 29
    function sortValue_15 (location :  entity.PolicyLocation) : java.lang.Object {
      return location//policyLocation.LocationNum
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at GL7LocationsPanelSet.pcf: line 129, column 30
    function sortValue_16 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at GL7LocationsPanelSet.pcf: line 136, column 30
    function sortValue_17 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at GL7LocationsPanelSet.pcf: line 144, column 30
    function sortValue_18 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on TextCell (id=InSync_Cell) at GL7LocationsPanelSet.pcf: line 151, column 50
    function sortValue_19 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.isUpToDate()
    }
    
    // 'toRemove' attribute on RowIterator at GL7LocationsPanelSet.pcf: line 95, column 69
    function toRemove_49 (location :  entity.PolicyLocation) : void {
      locationContainer.removePolicyLocation(location)
    }
    
    // 'value' attribute on RowIterator at GL7LocationsPanelSet.pcf: line 95, column 69
    function value_50 () : java.util.List<entity.PolicyLocation> {
      return policyLocations
    }
    
    // 'visible' attribute on TextCell (id=InSync_Cell) at GL7LocationsPanelSet.pcf: line 151, column 50
    function visible_20 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    // 'visible' attribute on PanelRef at GL7LocationsPanelSet.pcf: line 158, column 93
    function visible_51 () : java.lang.Boolean {
      return policyPeriod.PolicyLocations.Count > 0 and selectedLocation != null
    }
    
    property get selectedLocation () : PolicyLocation {
      return getCurrentSelection(1) as PolicyLocation
    }
    
    property set selectedLocation ($arg :  PolicyLocation) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}