package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseTermsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseTermsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clause :  APDClause) : int {
      return 0
    }
    
    static function __constructorIndex (clause :  APDClause, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Popup (id=APDClauseTermsPopup) at APDClauseTermsPopup.pcf: line 11, column 66
    function beforeCommit_162 (pickedValue :  java.lang.Object) : void {
      clause.Coverable.ProductLine.productLineUpdated()
    }
    
    // 'canEdit' attribute on Popup (id=APDClauseTermsPopup) at APDClauseTermsPopup.pcf: line 11, column 66
    function canEdit_163 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'initialValue' attribute on Variable at APDClauseTermsPopup.pcf: line 26, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // EditButtons at APDClauseTermsPopup.pcf: line 29, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDClauseTermsPopup {
      return super.CurrentLocation as pcf.APDClauseTermsPopup
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 216, column 44
    function action_126 () : void {
      APDDropDownDefinitionPopup.push(term, true, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 235, column 96
    function action_134 () : void {
      term.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 240, column 98
    function action_136 () : void {
      term.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 216, column 44
    function action_dest_127 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(term, true, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 235, column 96
    function available_133 () : java.lang.Boolean {
      return term.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 240, column 98
    function available_135 () : java.lang.Boolean {
      return term.Sequence != term.Clause.ScheduleTerms.Count
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 208, column 39
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 216, column 44
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 247, column 45
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 254, column 44
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=GenerateNewCoverage_Cell) at APDClauseTermsPopup.pcf: line 262, column 43
    function defaultSetter_152 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.GenerateAsClauseTerm = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=GenerateNewCoverage_Cell) at APDClauseTermsPopup.pcf: line 262, column 43
    function editable_150 () : java.lang.Boolean {
      return not term.CanOnlyBeAClauseTermBasedOnType
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 247, column 45
    function label_137 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 254, column 44
    function label_143 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'onChange' attribute on PostOnChange at APDClauseTermsPopup.pcf: line 218, column 78
    function onChange_124 () : void {
      term.updateGenerateAsClauseTermBasedOnType()
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 208, column 39
    function valueRoot_122 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 208, column 39
    function value_120 () : java.lang.String {
      return term.Label
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 216, column 44
    function value_128 () : APDFieldType {
      return term.Type
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 247, column 45
    function value_138 () : java.lang.String {
      return term.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 254, column 44
    function value_144 () : java.lang.String {
      return term.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=GenerateNewCoverage_Cell) at APDClauseTermsPopup.pcf: line 262, column 43
    function value_151 () : java.lang.Boolean {
      return term.GenerateAsClauseTerm
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 216, column 44
    function verifyValueType_132 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 216, column 44
    function visible_125 () : java.lang.Boolean {
      return term.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 254, column 44
    function visible_147 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get term () : APDTerm {
      return getIteratedValue(2) as APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 156, column 96
    function action_107 () : void {
      term.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 161, column 98
    function action_109 () : void {
      term.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 68, column 44
    function action_11 () : void {
      APDDropDownDefinitionPopup.push(term, true, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function action_19 () : void {
      APDAttributeRulePopup.push(term.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), term, APDRuleType.TC_EXISTENCE, startInEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 116, column 36
    function action_78 () : void {
      APDTagPopup.push(term, startInEditMode)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 68, column 44
    function action_dest_12 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(term, true, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function action_dest_20 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(term.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), term, APDRuleType.TC_EXISTENCE, startInEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 116, column 36
    function action_dest_79 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(term, startInEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 156, column 96
    function available_106 () : java.lang.Boolean {
      return term.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 161, column 98
    function available_108 () : java.lang.Boolean {
      return term.Sequence != term.Clause.StandardTerms.Count
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_26 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_28 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_30 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_32 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_34 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_36 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_38 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_onEnter_40 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_43 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_45 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_47 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_49 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_51 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_53 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_55 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_onEnter_57 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_60 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_62 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_64 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_66 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_68 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_70 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_72 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_onEnter_74 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_27 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_29 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_31 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_33 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_35 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_37 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_39 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function def_refreshVariables_41 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_44 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_46 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_48 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_50 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_52 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_54 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_56 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function def_refreshVariables_58 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_61 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_63 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_65 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_67 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_69 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_71 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_73 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function def_refreshVariables_75 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, startInEditMode)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 145, column 44
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 68, column 44
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 59, column 39
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDClauseTermsPopup.pcf: line 122, column 53
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.SplitByRatingPeriods = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDClauseTermsPopup.pcf: line 132, column 49
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Scalable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 138, column 45
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 68, column 44
    function filter_16 (VALUE :  APDFieldType, VALUES :  APDFieldType[]) : java.lang.Boolean {
      return APDFieldType.TF_TERMTYPES.TypeKeys.contains(VALUE)
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 138, column 45
    function label_93 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 145, column 44
    function label_99 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 91, column 37
    function mode_42 () : java.lang.Object {
      return term.getUIRuleMode(APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 99, column 37
    function mode_59 () : java.lang.Object {
      return term.getUIRuleMode(APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 107, column 37
    function mode_76 () : java.lang.Object {
      return term.getUIRuleMode(APDRuleType.TC_MAX)
    }
    
    // 'onChange' attribute on PostOnChange at APDClauseTermsPopup.pcf: line 124, column 97
    function onChange_83 () : void {
      if (term.SplitByRatingPeriods == false) {term.Scalable = false}
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function valueRange_22 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 59, column 39
    function valueRoot_8 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 145, column 44
    function value_100 () : java.lang.String {
      return term.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 68, column 44
    function value_13 () : APDFieldType {
      return term.Type
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function value_21 () : APDDataExistenceType {
      return term.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)).DefaultExistence ?: APDDataExistenceType.TC_CAPTURED
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 59, column 39
    function value_6 () : java.lang.String {
      return term.Label
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 116, column 36
    function value_80 () : java.lang.String {
      return term.TagDisplayValue
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDClauseTermsPopup.pcf: line 122, column 53
    function value_84 () : java.lang.Boolean {
      return term.SplitByRatingPeriods
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDClauseTermsPopup.pcf: line 132, column 49
    function value_89 () : java.lang.Boolean {
      return term.Scalable
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 138, column 45
    function value_94 () : java.lang.String {
      return term.Description
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function verifyValueRangeIsAllowedType_23 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 83, column 53
    function verifyValueRange_24 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 68, column 44
    function verifyValueType_18 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 68, column 44
    function visible_10 () : java.lang.Boolean {
      return term.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 145, column 44
    function visible_103 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 116, column 36
    function visible_77 () : java.lang.Boolean {
      return term.ShowDisplayValue
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Scalable_Cell) at APDClauseTermsPopup.pcf: line 132, column 49
    function visible_88 () : java.lang.Boolean {
      return term.CanScale
    }
    
    property get term () : APDTerm {
      return getIteratedValue(2) as APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends APDClauseTermsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDClauseTermsPopup.pcf: line 276, column 49
    function def_onEnter_160 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(scheduleTermDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDClauseTermsPopup.pcf: line 276, column 49
    function def_refreshVariables_161 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(scheduleTermDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 247, column 45
    function label_116 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 254, column 44
    function label_117 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseTermsPopup.pcf: line 200, column 32
    function sortBy_115 (term :  APDTerm) : java.lang.Object {
      return term.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ScheduleTerms) at APDClauseTermsPopup.pcf: line 197, column 37
    function toCreateAndAdd_157 () : APDTerm {
      return clause.createAndAddScheduleTerm()
    }
    
    // 'toRemove' attribute on RowIterator (id=ScheduleTerms) at APDClauseTermsPopup.pcf: line 197, column 37
    function toRemove_158 (term :  APDTerm) : void {
      clause.removeScheduleTerm(term)
    }
    
    // 'value' attribute on RowIterator (id=ScheduleTerms) at APDClauseTermsPopup.pcf: line 197, column 37
    function value_159 () : APDTerm[] {
      return clause.ScheduleTerms
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 254, column 44
    function visible_118 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get scheduleTermDetails () : APDTerm {
      return getCurrentSelection(1) as APDTerm
    }
    
    property set scheduleTermDetails ($arg :  APDTerm) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDClauseTermsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=TermLocalizedValues) at APDClauseTermsPopup.pcf: line 174, column 41
    function def_onEnter_113 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(termDetail, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=TermLocalizedValues) at APDClauseTermsPopup.pcf: line 174, column 41
    function def_refreshVariables_114 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(termDetail, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 138, column 45
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 145, column 44
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseTermsPopup.pcf: line 51, column 32
    function sortBy_2 (term :  APDTerm) : java.lang.Object {
      return term.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 48, column 37
    function toCreateAndAdd_110 () : APDTerm {
      return clause.createAndAddTerm()
    }
    
    // 'toRemove' attribute on RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 48, column 37
    function toRemove_111 (term :  APDTerm) : void {
      clause.removeTerm(term)
    }
    
    // 'value' attribute on RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 48, column 37
    function value_112 () : APDTerm[] {
      return clause.StandardTerms
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 145, column 44
    function visible_5 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get termDetail () : APDTerm {
      return getCurrentSelection(1) as APDTerm
    }
    
    property set termDetail ($arg :  APDTerm) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}