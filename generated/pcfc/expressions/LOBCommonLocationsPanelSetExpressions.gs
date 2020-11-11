package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBCommonLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBCommonLocationsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/LOBCommonLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LocationsEdit_DPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at LOBCommonLocationsPanelSet.pcf: line 114, column 48
    function action_23 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at LOBCommonLocationsPanelSet.pcf: line 127, column 59
    function action_28 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at LOBCommonLocationsPanelSet.pcf: line 134, column 59
    function action_33 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at LOBCommonLocationsPanelSet.pcf: line 141, column 59
    function action_38 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at LOBCommonLocationsPanelSet.pcf: line 114, column 48
    function action_dest_24 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at LOBCommonLocationsPanelSet.pcf: line 127, column 59
    function action_dest_29 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at LOBCommonLocationsPanelSet.pcf: line 134, column 59
    function action_dest_34 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at LOBCommonLocationsPanelSet.pcf: line 141, column 59
    function action_dest_39 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'condition' attribute on ToolbarFlag at LOBCommonLocationsPanelSet.pcf: line 93, column 33
    function condition_17 () : java.lang.Boolean {
      return !location.PrimaryLoc
    }
    
    // 'validationExpression' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at LOBCommonLocationsPanelSet.pcf: line 106, column 67
    function validationExpression_19 () : java.lang.Object {
      return policyPeriod.PrimaryLocation != null ? null : DisplayKey.get("Web.Policy.LocationContainer.Location.PrimaryLocationError.SelectAtleastOne")
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at LOBCommonLocationsPanelSet.pcf: line 114, column 48
    function valueRoot_26 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at LOBCommonLocationsPanelSet.pcf: line 127, column 59
    function valueRoot_31 () : java.lang.Object {
      return location.AccountLocation
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at LOBCommonLocationsPanelSet.pcf: line 106, column 67
    function value_20 () : java.lang.Boolean {
      return location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at LOBCommonLocationsPanelSet.pcf: line 114, column 48
    function value_25 () : java.lang.Integer {
      return location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at LOBCommonLocationsPanelSet.pcf: line 127, column 59
    function value_30 () : java.lang.String {
      return location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at LOBCommonLocationsPanelSet.pcf: line 134, column 59
    function value_35 () : java.lang.String {
      return location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at LOBCommonLocationsPanelSet.pcf: line 141, column 59
    function value_40 () : java.lang.String {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InSync_Cell) at LOBCommonLocationsPanelSet.pcf: line 147, column 70
    function value_42 () : boolean {
      return location.isUpToDate()
    }
    
    // 'visible' attribute on BooleanRadioCell (id=InSync_Cell) at LOBCommonLocationsPanelSet.pcf: line 147, column 70
    function visible_43 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    property get location () : entity.PolicyLocation {
      return getIteratedValue(2) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/LOBCommonLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LOBCommonLocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at LOBCommonLocationsPanelSet.pcf: line 65, column 50
    function action_4 () : void {
      LocationPopup.push(unassignedAccountLocation, null, policyPeriod, openForEdit, true, supportsNonSpecificLocation);
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountLocation) at LOBCommonLocationsPanelSet.pcf: line 65, column 50
    function label_5 () : java.lang.Object {
      return unassignedAccountLocation
    }
    
    property get unassignedAccountLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/LOBCommonLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBCommonLocationsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addAllLocationsButton) at LOBCommonLocationsPanelSet.pcf: line 73, column 108
    function action_9 () : void {
      policyPeriod.addLocations(unassignedAccountLocations)
    }
    
    // 'available' attribute on ToolbarButton (id=addLocationButton) at LOBCommonLocationsPanelSet.pcf: line 54, column 112
    function available_7 () : java.lang.Boolean {
      return unassignedAccountLocations.Count > 0
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=setToPrimary) at LOBCommonLocationsPanelSet.pcf: line 49, column 87
    function checkedRowAction_2 (location :  entity.PolicyLocation, CheckedValue :  entity.PolicyLocation) : void {
      policyPeriod.PrimaryLocation = CheckedValue
    }
    
    // 'initialValue' attribute on Variable at LOBCommonLocationsPanelSet.pcf: line 19, column 88
    function initialValue_0 () : java.util.List<entity.AccountLocation> {
      return getUnassignedAccountLocationsFilteredByNonSpecificLocationSupport()
    }
    
    // 'showConfirmMessage' attribute on RemoveButton (id=removeLocationButton) at LOBCommonLocationsPanelSet.pcf: line 43, column 140
    function showConfirmMessage_1 () : java.lang.Boolean {
      return policyPeriod.Lines.where(\ p -> p.PolicyLocationCanBeRemovedWithoutRemovingAssociatedRisks).HasElements
    }
    
    // 'sortBy' attribute on IteratorSort at LOBCommonLocationsPanelSet.pcf: line 61, column 30
    function sortBy_3 (unassignedAccountLocation :  entity.AccountLocation) : java.lang.Object {
      return unassignedAccountLocation.LocationNum
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedAccountLocationIterator) at LOBCommonLocationsPanelSet.pcf: line 58, column 105
    function value_6 () : java.util.List<entity.AccountLocation> {
      return unassignedAccountLocations
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
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    property get unassignedAccountLocations () : java.util.List<entity.AccountLocation> {
      return getVariableValue("unassignedAccountLocations", 0) as java.util.List<entity.AccountLocation>
    }
    
    property set unassignedAccountLocations ($arg :  java.util.List<entity.AccountLocation>) {
      setVariableValue("unassignedAccountLocations", 0, $arg)
    }
    
    function getUnassignedAccountLocationsFilteredByNonSpecificLocationSupport() : java.util.List<AccountLocation> {
      var unassignedLocations = policyPeriod.getUnassignedAccountLocations()
      if (supportsNonSpecificLocation) {
        return unassignedLocations
      }
      var filteredAccountLocations = unassignedLocations.where(\ l -> not l.NonSpecific)
      return filteredAccountLocations
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/LOBCommonLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationsEdit_DPExpressionsImpl extends LOBCommonLocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LOBCommonLocationsPanelSet.pcf: line 155, column 111
    function available_48 () : java.lang.Boolean {
      return selectedLocation != null
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LOBCommonLocationsPanelSet.pcf: line 155, column 111
    function def_onEnter_50 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedLocation?.getCoverableLocation(policyPeriod), false, null)
    }
    
    // 'def' attribute on PanelRef at LOBCommonLocationsPanelSet.pcf: line 159, column 93
    function def_onEnter_53 (def :  pcf.LOBCommonLocationDetailCV) : void {
      def.onEnter(selectedLocation, false, supportsNonSpecificLocation)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LOBCommonLocationsPanelSet.pcf: line 155, column 111
    function def_refreshVariables_51 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedLocation?.getCoverableLocation(policyPeriod), false, null)
    }
    
    // 'def' attribute on PanelRef at LOBCommonLocationsPanelSet.pcf: line 159, column 93
    function def_refreshVariables_54 (def :  pcf.LOBCommonLocationDetailCV) : void {
      def.refreshVariables(selectedLocation, false, supportsNonSpecificLocation)
    }
    
    // 'pickLocation' attribute on RowIterator at LOBCommonLocationsPanelSet.pcf: line 90, column 86
    function pickLocation_45 () : void {
      LocationPopup.push(null, null, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at LOBCommonLocationsPanelSet.pcf: line 106, column 67
    function sortValue_10 (location :  entity.PolicyLocation) : java.lang.Object {
      return location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at LOBCommonLocationsPanelSet.pcf: line 114, column 48
    function sortValue_11 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at LOBCommonLocationsPanelSet.pcf: line 127, column 59
    function sortValue_12 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at LOBCommonLocationsPanelSet.pcf: line 134, column 59
    function sortValue_13 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at LOBCommonLocationsPanelSet.pcf: line 141, column 59
    function sortValue_14 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InSync_Cell) at LOBCommonLocationsPanelSet.pcf: line 147, column 70
    function sortValue_15 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.isUpToDate()
    }
    
    // 'toRemove' attribute on RowIterator at LOBCommonLocationsPanelSet.pcf: line 90, column 86
    function toRemove_46 (location :  entity.PolicyLocation) : void {
      policyPeriod.removeLocation(location)
    }
    
    // 'value' attribute on RowIterator at LOBCommonLocationsPanelSet.pcf: line 90, column 86
    function value_47 () : entity.PolicyLocation[] {
      return policyPeriod.PolicyLocations
    }
    
    // 'visible' attribute on BooleanRadioCell (id=InSync_Cell) at LOBCommonLocationsPanelSet.pcf: line 147, column 70
    function visible_16 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    // 'visible' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LOBCommonLocationsPanelSet.pcf: line 155, column 111
    function visible_49 () : java.lang.Boolean {
      return selectedLocation != null and selectedLocation?.getCoverableLocation(policyPeriod)!= null
    }
    
    // 'visible' attribute on PanelRef at LOBCommonLocationsPanelSet.pcf: line 159, column 93
    function visible_52 () : java.lang.Boolean {
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