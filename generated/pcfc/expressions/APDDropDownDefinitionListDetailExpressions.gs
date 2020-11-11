package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropDownDefinitionListDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropDownDefinitionListDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=DropdownLocalizedValues) at APDDropDownDefinitionListDetail.pcf: line 208, column 41
    function def_onEnter_71 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(dropdownEntry, {"Name", "Description"}, {DisplayKey.get("Web.APDAttributeDropDownDefinition.DropdownEntry.NameNotRequired"),DisplayKey.get("Web.APDAttributeDropDownDefinition.DropdownEntry.Description")})
    }
    
    // 'def' attribute on PanelRef (id=DropdownLocalizedValues) at APDDropDownDefinitionListDetail.pcf: line 208, column 41
    function def_refreshVariables_72 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(dropdownEntry, {"Name", "Description"}, {DisplayKey.get("Web.APDAttributeDropDownDefinition.DropdownEntry.NameNotRequired"),DisplayKey.get("Web.APDAttributeDropDownDefinition.DropdownEntry.Description")})
    }
    
    // 'initialValue' attribute on Variable at APDDropDownDefinitionListDetail.pcf: line 18, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'initialValue' attribute on Variable at APDDropDownDefinitionListDetail.pcf: line 22, column 23
    function initialValue_1 () : APDTerm {
      return isTerm ? attribute as APDTerm : null 
    }
    
    // 'sortBy' attribute on IteratorSort at APDDropDownDefinitionListDetail.pcf: line 131, column 28
    function sortBy_29 (code :  entity.APDDropdownEntry) : java.lang.Object {
      return code.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDDropDownDefinitionListDetail.pcf: line 52, column 30
    function sortBy_3 (ddColumn :  APDDropdownColumn) : java.lang.Object {
      return ddColumn.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=APDDropdownEntries) at APDDropDownDefinitionListDetail.pcf: line 128, column 49
    function toCreateAndAdd_68 () : entity.APDDropdownEntry {
      return attribute.addDropdownEntry()
    }
    
    // 'toRemove' attribute on RowIterator (id=APDDropdownEntries) at APDDropDownDefinitionListDetail.pcf: line 128, column 49
    function toRemove_69 (code :  entity.APDDropdownEntry) : void {
      attribute.removeDropdownEntry(code)
    }
    
    // 'value' attribute on CellIterator (id=ddColumnName) at APDDropDownDefinitionListDetail.pcf: line 49, column 45
    function value_14 () : APDDropdownColumn[] {
      return term.DropdownColumns
    }
    
    // 'value' attribute on TextCell (id=DescriptionHeading_Cell) at APDDropDownDefinitionListDetail.pcf: line 75, column 170
    function value_15 () : java.lang.String {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDAttributeDropDownDefinition.DropdownEntry.Description"))
    }
    
    // 'value' attribute on TextCell (id=CodeHeading_Cell) at APDDropDownDefinitionListDetail.pcf: line 79, column 38
    function value_17 () : java.lang.String {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDAttributeDropDownDefinition.DropdownEntry.Code"))
    }
    
    // 'value' attribute on RowIterator (id=APDDropdownEntries) at APDDropDownDefinitionListDetail.pcf: line 128, column 49
    function value_70 () : entity.APDDropdownEntry[] {
      return attribute.CodesToUse
    }
    
    // 'visible' attribute on TextCell (id=CodeHeading_Cell) at APDDropDownDefinitionListDetail.pcf: line 79, column 38
    function visible_18 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on TextCell (id=CurrencyHeading_Cell) at APDDropDownDefinitionListDetail.pcf: line 44, column 132
    function visible_2 () : java.lang.Boolean {
      return attribute.DropDownType == APDDropDownType.TC_OPTION or attribute.DropDownType == APDDropDownType.TC_PACKAGE
    }
    
    property get attribute () : APDAttribute {
      return getRequireValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setRequireValue("attribute", 0, $arg)
    }
    
    property get dropdownEntry () : APDDropdownEntry {
      return getCurrentSelection(0) as APDDropdownEntry
    }
    
    property set dropdownEntry ($arg :  APDDropdownEntry) {
      setCurrentSelection(0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get isTerm () : Boolean {
      return getRequireValue("isTerm", 0) as Boolean
    }
    
    property set isTerm ($arg :  Boolean) {
      setRequireValue("isTerm", 0, $arg)
    }
    
    property get term () : APDTerm {
      return getVariableValue("term", 0) as APDTerm
    }
    
    property set term ($arg :  APDTerm) {
      setVariableValue("term", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDDropDownDefinitionListDetailExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 109, column 43
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      ddColumn.ValueType = (__VALUE_TO_SET as CovTermModelVal)
    }
    
    // 'value' attribute on TypeKeyCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 109, column 43
    function valueRoot_23 () : java.lang.Object {
      return ddColumn
    }
    
    // 'value' attribute on TypeKeyCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 109, column 43
    function value_21 () : CovTermModelVal {
      return ddColumn.ValueType
    }
    
    // 'valueType' attribute on TypeKeyCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 109, column 43
    function verifyValueType_25 () : void {
      var __valueTypeArg : CovTermModelVal
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get ddColumn () : APDDropdownColumn {
      return getIteratedValue(1) as APDDropdownColumn
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends APDDropDownDefinitionListDetailExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=Existence_Cell) at APDDropDownDefinitionListDetail.pcf: line 143, column 57
    function action_34 () : void {
      APDDropdownEntryRulePopup.push(attribute.Rules.whereTypeIs(APDDropdownEntryRule).firstWhere(\r -> r.DropdownEntry == code and r.RuleType == APDRuleType.TC_EXISTENCE), code, APDRuleType.TC_EXISTENCE, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDDropDownDefinitionListDetail.pcf: line 150, column 32
    function action_38 () : void {
      APDTagPopup.push(code, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDDropDownDefinitionListDetail.pcf: line 190, column 108
    function action_65 () : void {
      code.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDDropdownEntry)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDDropDownDefinitionListDetail.pcf: line 195, column 110
    function action_67 () : void {
      code.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'action' attribute on TypeKeyCell (id=Existence_Cell) at APDDropDownDefinitionListDetail.pcf: line 143, column 57
    function action_dest_35 () : pcf.api.Destination {
      return pcf.APDDropdownEntryRulePopup.createDestination(attribute.Rules.whereTypeIs(APDDropdownEntryRule).firstWhere(\r -> r.DropdownEntry == code and r.RuleType == APDRuleType.TC_EXISTENCE), code, APDRuleType.TC_EXISTENCE, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDDropDownDefinitionListDetail.pcf: line 150, column 32
    function action_dest_39 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(code, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDDropDownDefinitionListDetail.pcf: line 190, column 108
    function available_64 () : java.lang.Boolean {
      return code.Sequence > 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDDropDownDefinitionListDetail.pcf: line 195, column 110
    function available_66 () : java.lang.Boolean {
      return attribute.canMoveDown(code)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDDropDownDefinitionListDetail.pcf: line 137, column 34
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      code.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at APDDropDownDefinitionListDetail.pcf: line 156, column 134
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      code.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDDropDownDefinitionListDetail.pcf: line 174, column 41
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      code.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at APDDropDownDefinitionListDetail.pcf: line 180, column 40
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      code.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'sortBy' attribute on IteratorSort at APDDropDownDefinitionListDetail.pcf: line 163, column 32
    function sortBy_48 (ddColumn :  APDDropdownColumn) : java.lang.Object {
      return ddColumn.Sequence
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDDropDownDefinitionListDetail.pcf: line 137, column 34
    function valueRoot_32 () : java.lang.Object {
      return code
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDDropDownDefinitionListDetail.pcf: line 137, column 34
    function value_30 () : java.lang.String {
      return code.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Existence_Cell) at APDDropDownDefinitionListDetail.pcf: line 143, column 57
    function value_36 () : typekey.APDDataExistenceType {
      return attribute.Rules.whereTypeIs(APDDropdownEntryRule).firstWhere(\r -> r.DropdownEntry == code and r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_AVAILABLE
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDDropDownDefinitionListDetail.pcf: line 150, column 32
    function value_40 () : java.lang.String {
      return code.TagDisplayValue
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at APDDropDownDefinitionListDetail.pcf: line 156, column 134
    function value_43 () : typekey.Currency {
      return code.Currency
    }
    
    // 'value' attribute on CellIterator at APDDropDownDefinitionListDetail.pcf: line 160, column 47
    function value_54 () : APDDropdownColumn[] {
      return term.DropdownColumns
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDDropDownDefinitionListDetail.pcf: line 174, column 41
    function value_55 () : java.lang.String {
      return code.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at APDDropDownDefinitionListDetail.pcf: line 180, column 40
    function value_59 () : java.lang.String {
      return code.Code
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at APDDropDownDefinitionListDetail.pcf: line 156, column 134
    function visible_46 () : java.lang.Boolean {
      return attribute.DropDownType == APDDropDownType.TC_OPTION or attribute.DropDownType == APDDropDownType.TC_PACKAGE
    }
    
    // 'visible' attribute on TextCell (id=Code_Cell) at APDDropDownDefinitionListDetail.pcf: line 180, column 40
    function visible_62 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get code () : entity.APDDropdownEntry {
      return getIteratedValue(1) as entity.APDDropdownEntry
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=colName) at APDDropDownDefinitionListDetail.pcf: line 168, column 49
    function def_onEnter_49 (def :  pcf.APDDropdownEntryValue_default) : void {
      def.onEnter(code.Values.firstWhere(\v -> v.DropdownColumn == ddColumn))
    }
    
    // 'def' attribute on ModalCellRef (id=colName) at APDDropDownDefinitionListDetail.pcf: line 168, column 49
    function def_onEnter_51 (def :  pcf.APDDropdownEntryValue_money) : void {
      def.onEnter(code.Values.firstWhere(\v -> v.DropdownColumn == ddColumn))
    }
    
    // 'def' attribute on ModalCellRef (id=colName) at APDDropDownDefinitionListDetail.pcf: line 168, column 49
    function def_refreshVariables_50 (def :  pcf.APDDropdownEntryValue_default) : void {
      def.refreshVariables(code.Values.firstWhere(\v -> v.DropdownColumn == ddColumn))
    }
    
    // 'def' attribute on ModalCellRef (id=colName) at APDDropDownDefinitionListDetail.pcf: line 168, column 49
    function def_refreshVariables_52 (def :  pcf.APDDropdownEntryValue_money) : void {
      def.refreshVariables(code.Values.firstWhere(\v -> v.DropdownColumn == ddColumn))
    }
    
    // 'mode' attribute on ModalCellRef (id=colName) at APDDropDownDefinitionListDetail.pcf: line 168, column 49
    function mode_53 () : java.lang.Object {
      return ddColumn.ValueType.Code
    }
    
    property get ddColumn () : APDDropdownColumn {
      return getIteratedValue(2) as APDDropdownColumn
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionListDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDDropDownDefinitionListDetailExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddColumn) at APDDropDownDefinitionListDetail.pcf: line 65, column 81
    function action_5 () : void {
      term.addDropdownColumn(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDDropdownColumn)
    }
    
    // 'action' attribute on MenuItem (id=RemoveColumn) at APDDropDownDefinitionListDetail.pcf: line 70, column 137
    function action_7 () : void {
      term.removeDropdownColumn(ddColumn); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDDropdownColumn)
    }
    
    // 'value' attribute on TextCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 59, column 27
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      ddColumn.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'format' attribute on TextCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 59, column 27
    function format_8 () : java.lang.String {
      return "#" + DisplayKey.get("Web.APD.RequiredForGeneration.Suffix")
    }
    
    // 'outputConversion' attribute on TextCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 59, column 27
    function outputConversion_9 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE.HasContent ? VALUE : DisplayKey.get("Web.APDAttributeDropDownDefinition.AddColumnName")
    }
    
    // 'value' attribute on TextCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 59, column 27
    function valueRoot_12 () : java.lang.Object {
      return ddColumn
    }
    
    // 'value' attribute on TextCell (id=colName_Cell) at APDDropDownDefinitionListDetail.pcf: line 59, column 27
    function value_10 () : java.lang.String {
      return ddColumn.Name
    }
    
    // 'visible' attribute on MenuItem (id=AddColumn) at APDDropDownDefinitionListDetail.pcf: line 65, column 81
    function visible_4 () : java.lang.Boolean {
      return attribute.DropDownType == APDDropDownType.TC_PACKAGE
    }
    
    // 'visible' attribute on MenuItem (id=RemoveColumn) at APDDropDownDefinitionListDetail.pcf: line 70, column 137
    function visible_6 () : java.lang.Boolean {
      return attribute.DropDownType == APDDropDownType.TC_PACKAGE and (attribute as APDTerm).DropdownColumns.Count > 1
    }
    
    property get ddColumn () : APDDropdownColumn {
      return getIteratedValue(1) as APDDropdownColumn
    }
    
    
  }
  
  
}