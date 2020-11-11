package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/LOBCommonLocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBCommonLocationDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/LOBCommonLocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBCommonLocationDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function action_31 () : void {
      TaxLocationSearchPopup.push(polLocation.Branch, gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'pickLocation' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function action_dest_32 () : pcf.api.Destination {
      return pcf.TaxLocationSearchPopup.createDestination(polLocation.Branch, gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'available' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function available_33 () : java.lang.Boolean {
      return gw.api.domain.StateSet.get("TaxLocation").contains(polLocation.State)
    }
    
    // 'def' attribute on InputSetRef at LOBCommonLocationDetailInputSet.pcf: line 41, column 50
    function def_onEnter_13 (def :  pcf.TargetedAddressInputSet) : void {
      def.onEnter(new gw.pcf.policylocation.PolicyLocationAddressOwner(polLocation))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at LOBCommonLocationDetailInputSet.pcf: line 67, column 23
    function def_onEnter_29 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(polLocation.AccountLocation, AccountLocation#Phone), DisplayKey.get("Web.Policy.LocationContainer.Location.Phone"), openForEdit))
    }
    
    // 'def' attribute on InputSetRef at LOBCommonLocationDetailInputSet.pcf: line 78, column 52
    function def_onEnter_42 (def :  pcf.LOBTerritoryCodeInputSet) : void {
      def.onEnter(polLocation)
    }
    
    // 'def' attribute on InputSetRef at LOBCommonLocationDetailInputSet.pcf: line 41, column 50
    function def_refreshVariables_14 (def :  pcf.TargetedAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.policylocation.PolicyLocationAddressOwner(polLocation))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at LOBCommonLocationDetailInputSet.pcf: line 67, column 23
    function def_refreshVariables_30 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(polLocation.AccountLocation, AccountLocation#Phone), DisplayKey.get("Web.Policy.LocationContainer.Location.Phone"), openForEdit))
    }
    
    // 'def' attribute on InputSetRef at LOBCommonLocationDetailInputSet.pcf: line 78, column 52
    function def_refreshVariables_43 (def :  pcf.LOBTerritoryCodeInputSet) : void {
      def.refreshVariables(polLocation)
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at LOBCommonLocationDetailInputSet.pcf: line 53, column 66
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.County = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at LOBCommonLocationDetailInputSet.pcf: line 30, column 92
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.LocationCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at LOBCommonLocationDetailInputSet.pcf: line 59, column 65
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.TaxLocation = (__VALUE_TO_SET as entity.TaxLocation)
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at LOBCommonLocationDetailInputSet.pcf: line 36, column 92
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.LocationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at LOBCommonLocationDetailInputSet.pcf: line 59, column 65
    function editable_22 () : java.lang.Boolean {
      return polLocation.canChangeState()
    }
    
    // 'inputConversion' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function inputConversion_35 (VALUE :  java.lang.String) : java.lang.Object {
      return getTaxLocation(VALUE, polLocation)
    }
    
    // 'mode' attribute on InputSetRef at LOBCommonLocationDetailInputSet.pcf: line 41, column 50
    function mode_15 () : java.lang.Object {
      return polLocation.CountryCode
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at LOBCommonLocationDetailInputSet.pcf: line 53, column 66
    function valueRoot_20 () : java.lang.Object {
      return polLocation
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at LOBCommonLocationDetailInputSet.pcf: line 30, column 92
    function valueRoot_3 () : java.lang.Object {
      return polLocation.AccountLocation
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at LOBCommonLocationDetailInputSet.pcf: line 30, column 92
    function value_1 () : java.lang.String {
      return polLocation.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextInput (id=unsyncedAddressString_Input) at LOBCommonLocationDetailInputSet.pcf: line 48, column 103
    function value_16 () : java.lang.String {
      return polLocation.addressString("\n", false, false)
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at LOBCommonLocationDetailInputSet.pcf: line 53, column 66
    function value_18 () : java.lang.String {
      return polLocation.County
    }
    
    // 'value' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at LOBCommonLocationDetailInputSet.pcf: line 59, column 65
    function value_23 () : typekey.Country {
      return polLocation.Country
    }
    
    // 'value' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function value_36 () : entity.TaxLocation {
      return polLocation.TaxLocation
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at LOBCommonLocationDetailInputSet.pcf: line 36, column 92
    function value_7 () : java.lang.String {
      return polLocation.AccountLocation.LocationName
    }
    
    // 'visible' attribute on TextInput (id=LocationCode_Input) at LOBCommonLocationDetailInputSet.pcf: line 30, column 92
    function visible_0 () : java.lang.Boolean {
      return polLocation.Branch.Policy.Product.Commercial
    }
    
    // 'visible' attribute on InputSetRef at LOBCommonLocationDetailInputSet.pcf: line 41, column 50
    function visible_12 () : java.lang.Boolean {
      return polLocation.SyncedToAccount
    }
    
    // 'visible' attribute on InputSet (id=UnsyncedAddressInputSet) at LOBCommonLocationDetailInputSet.pcf: line 44, column 49
    function visible_28 () : java.lang.Boolean {
      return not polLocation.SyncedToAccount
    }
    
    // 'visible' attribute on PickerInput (id=TaxLocation_Input) at LOBCommonLocationDetailInputSet.pcf: line 76, column 120
    function visible_34 () : java.lang.Boolean {
      return polLocation.Branch.Lines.hasMatch(\ l -> l.EmergencyServiceFunding)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    
    function getTaxLocation(code : String, policyLocation : PolicyLocation) : TaxLocation {
      if (code == null) {
        return null
      } else {
        var state = gw.api.util.JurisdictionMappingUtil.getJurisdiction(policyLocation)
        var locs = new gw.lob.common.TaxLocationQueryBuilder()
            .withCodeStarting(code)
            .withState(state)
            .withEffectiveOnDate(policyLocation.Branch.PeriodStart)
            .build().select() as gw.api.database.IQueryBeanResult<TaxLocation>
        if (locs.Count == 1) {
          return locs.FirstResult
        } else {
          throw new DisplayableException(DisplayKey.get("TaxLocation.Search.Error.InvalidCode", code, state.Description))
        }
      }
    }
    
    
  }
  
  
}