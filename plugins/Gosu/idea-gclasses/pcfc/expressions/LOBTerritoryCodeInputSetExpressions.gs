package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBTerritoryCodeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBTerritoryCodeInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/LOBTerritoryCodeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LOBTerritoryCodeInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function action_2 () : void {
      TerritoryCodeSearchPopup.push(polLocation.Branch, territoryCode)
    }
    
    // 'pickLocation' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function action_dest_3 () : pcf.api.Destination {
      return pcf.TerritoryCodeSearchPopup.createDestination(polLocation.Branch, territoryCode)
    }
    
    // 'available' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function available_4 () : java.lang.Boolean {
      return polLocation.State != null
    }
    
    // 'value' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      territoryCode.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.LocationContainer.Location.TerritoryCode", territoryCode.PolicyLinePattern.DisplayName)
    }
    
    // 'validationExpression' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function validationExpression_5 () : java.lang.Object {
      return territoryCode.prelimValidate()
    }
    
    // 'value' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function valueRoot_9 () : java.lang.Object {
      return territoryCode
    }
    
    // 'value' attribute on PickerInput (id=TerritoryCode_Input) at LOBTerritoryCodeInputSet.pcf: line 34, column 66
    function value_7 () : java.lang.String {
      return territoryCode.Code
    }
    
    property get territoryCode () : entity.TerritoryCode {
      return getIteratedValue(1) as entity.TerritoryCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/LOBTerritoryCodeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBTerritoryCodeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=AutofillLink) at LOBTerritoryCodeInputSet.pcf: line 18, column 34
    function action_0 () : void {
      polLocation.TerritoryCodes.each(\ c -> c.fillTerritoryCodeIfSingle())
    }
    
    // 'sortBy' attribute on IteratorSort at LOBTerritoryCodeInputSet.pcf: line 25, column 24
    function sortBy_1 (territoryCode :  entity.TerritoryCode) : java.lang.Object {
      return territoryCode.PolicyLinePattern.Priority
    }
    
    // 'value' attribute on InputIterator at LOBTerritoryCodeInputSet.pcf: line 22, column 77
    function value_14 () : entity.TerritoryCode[] {
      return polLocation.TerritoryCodes
    }
    
    // 'visible' attribute on InputSet (id=LOBTerritoryCodeInputSet) at LOBTerritoryCodeInputSet.pcf: line 8, column 136
    function visible_15 () : java.lang.Boolean {
      return polLocation.TerritoryCodes.length != 0 and !polLocation.Branch.HasWorkersComp and polLocation.Country.UsesTerritoryCodes
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
    }
    
    
  }
  
  
}