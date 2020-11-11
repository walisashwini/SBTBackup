package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7LocationDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7LocationDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function action_38 () : void {
      TaxLocationSearchPopup.push(polLocation.Branch, gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'action' attribute on Link (id=AutofillLink) at GL7LocationDetailInputSet.pcf: line 93, column 36
    function action_49 () : void {
      polLocation.TerritoryCodes.each(\ c -> c.fillWithFirst())
    }
    
    // 'pickLocation' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function action_dest_39 () : pcf.api.Destination {
      return pcf.TaxLocationSearchPopup.createDestination(polLocation.Branch, gw.api.util.JurisdictionMappingUtil.getJurisdiction(polLocation))
    }
    
    // 'available' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function available_40 () : java.lang.Boolean {
      return gw.api.domain.StateSet.get("TaxLocation").contains(polLocation.State)
    }
    
    // 'def' attribute on InputSetRef at GL7LocationDetailInputSet.pcf: line 45, column 44
    function def_onEnter_20 (def :  pcf.GL7TargetedAddressInputSet) : void {
      def.onEnter(new gw.pcf.policylocation.PolicyLocationAddressOwner(polLocation), presenter)
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at GL7LocationDetailInputSet.pcf: line 72, column 23
    function def_onEnter_36 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(polLocation.AccountLocation, AccountLocation#Phone), DisplayKey.get("Web.Policy.LocationContainer.Location.Phone", openForEdit)))
    }
    
    // 'def' attribute on InputSetRef at GL7LocationDetailInputSet.pcf: line 45, column 44
    function def_refreshVariables_21 (def :  pcf.GL7TargetedAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.policylocation.PolicyLocationAddressOwner(polLocation), presenter)
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at GL7LocationDetailInputSet.pcf: line 72, column 23
    function def_refreshVariables_37 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(polLocation.AccountLocation, AccountLocation#Phone), DisplayKey.get("Web.Policy.LocationContainer.Location.Phone", openForEdit)))
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at GL7LocationDetailInputSet.pcf: line 40, column 63
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.LocationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at GL7LocationDetailInputSet.pcf: line 57, column 37
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.County = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at GL7LocationDetailInputSet.pcf: line 26, column 23
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.NonSpecific = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at GL7LocationDetailInputSet.pcf: line 64, column 37
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.TaxLocation = (__VALUE_TO_SET as entity.TaxLocation)
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at GL7LocationDetailInputSet.pcf: line 34, column 63
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      polLocation.AccountLocation.LocationCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at GL7LocationDetailInputSet.pcf: line 26, column 23
    function editable_1 () : java.lang.Boolean {
      return polLocation.AccountLocation.New
    }
    
    // 'editable' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at GL7LocationDetailInputSet.pcf: line 64, column 37
    function editable_29 () : java.lang.Boolean {
      return polLocation.canChangeState()
    }
    
    // 'initialValue' attribute on Variable at GL7LocationDetailInputSet.pcf: line 20, column 36
    function initialValue_0 () : entity.PolicyLocation {
      return presenter.PolicyLocation
    }
    
    // 'inputConversion' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function inputConversion_42 (VALUE :  java.lang.String) : java.lang.Object {
      return getTaxLocation(VALUE, polLocation)
    }
    
    // 'mode' attribute on InputSetRef at GL7LocationDetailInputSet.pcf: line 45, column 44
    function mode_22 () : java.lang.Object {
      return polLocation.CountryCode
    }
    
    // 'sortBy' attribute on IteratorSort at GL7LocationDetailInputSet.pcf: line 101, column 26
    function sortBy_50 (territoryCode :  entity.TerritoryCode) : java.lang.Object {
      return territoryCode.PolicyLinePattern.Priority
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at GL7LocationDetailInputSet.pcf: line 57, column 37
    function valueRoot_27 () : java.lang.Object {
      return polLocation
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at GL7LocationDetailInputSet.pcf: line 26, column 23
    function valueRoot_4 () : java.lang.Object {
      return polLocation.AccountLocation
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at GL7LocationDetailInputSet.pcf: line 40, column 63
    function value_14 () : java.lang.String {
      return polLocation.AccountLocation.LocationName
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at GL7LocationDetailInputSet.pcf: line 26, column 23
    function value_2 () : java.lang.Boolean {
      return polLocation.AccountLocation.NonSpecific
    }
    
    // 'value' attribute on TextInput (id=unsyncedAddressString_Input) at GL7LocationDetailInputSet.pcf: line 52, column 74
    function value_23 () : java.lang.String {
      return polLocation.addressString("\n", false, false)
    }
    
    // 'value' attribute on TextInput (id=UnsyncedCounty_Input) at GL7LocationDetailInputSet.pcf: line 57, column 37
    function value_25 () : java.lang.String {
      return polLocation.County
    }
    
    // 'value' attribute on TypeKeyInput (id=UnsyncedCountry_Input) at GL7LocationDetailInputSet.pcf: line 64, column 37
    function value_30 () : typekey.Country {
      return polLocation.Country
    }
    
    // 'value' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function value_43 () : entity.TaxLocation {
      return polLocation.TaxLocation
    }
    
    // 'value' attribute on InputIterator at GL7LocationDetailInputSet.pcf: line 98, column 44
    function value_63 () : entity.TerritoryCode[] {
      return polLocation.TerritoryCodes
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at GL7LocationDetailInputSet.pcf: line 34, column 63
    function value_8 () : java.lang.String {
      return polLocation.AccountLocation.LocationCode
    }
    
    // 'visible' attribute on InputSetRef at GL7LocationDetailInputSet.pcf: line 45, column 44
    function visible_19 () : java.lang.Boolean {
      return polLocation.SyncedToAccount
    }
    
    // 'visible' attribute on InputSet (id=UnsyncedAddressInputSet) at GL7LocationDetailInputSet.pcf: line 48, column 49
    function visible_35 () : java.lang.Boolean {
      return not polLocation.SyncedToAccount
    }
    
    // 'visible' attribute on PickerInput (id=TaxLocation_Input) at GL7LocationDetailInputSet.pcf: line 82, column 89
    function visible_41 () : java.lang.Boolean {
      return polLocation.Branch.Lines.hasMatch(\ l -> l.EmergencyServiceFunding)
    }
    
    // 'visible' attribute on InputSet (id=TerritoryCodeInputSet) at GL7LocationDetailInputSet.pcf: line 86, column 138
    function visible_64 () : java.lang.Boolean {
      return polLocation.TerritoryCodes.length != 0 and !polLocation.Branch.HasWorkersComp and polLocation.Country.UsesTerritoryCodes
    }
    
    // 'visible' attribute on TextInput (id=LocationCode_Input) at GL7LocationDetailInputSet.pcf: line 34, column 63
    function visible_7 () : java.lang.Boolean {
      return polLocation.Branch.Policy.Product.Commercial
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
    
    property get presenter () : gw.lob.gl7.presenters.GL7LocationPresenter {
      return getRequireValue("presenter", 0) as gw.lob.gl7.presenters.GL7LocationPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7LocationPresenter) {
      setRequireValue("presenter", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7LocationDetailInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function action_51 () : void {
      TerritoryCodeSearchPopup.push(polLocation.Branch, territoryCode)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function action_dest_52 () : pcf.api.Destination {
      return pcf.TerritoryCodeSearchPopup.createDestination(polLocation.Branch, territoryCode)
    }
    
    // 'available' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function available_53 () : java.lang.Boolean {
      return polLocation.State != null
    }
    
    // 'value' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      territoryCode.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function label_55 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.LocationContainer.Location.TerritoryCode", territoryCode.PolicyLinePattern.DisplayName)
    }
    
    // 'validationExpression' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function validationExpression_54 () : java.lang.Object {
      return territoryCode.prelimValidate()
    }
    
    // 'value' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function valueRoot_58 () : java.lang.Object {
      return territoryCode
    }
    
    // 'value' attribute on PickerInput (id=TerritoryCode_Input) at GL7LocationDetailInputSet.pcf: line 111, column 41
    function value_56 () : java.lang.String {
      return territoryCode.Code
    }
    
    property get territoryCode () : entity.TerritoryCode {
      return getIteratedValue(1) as entity.TerritoryCode
    }
    
    
  }
  
  
}