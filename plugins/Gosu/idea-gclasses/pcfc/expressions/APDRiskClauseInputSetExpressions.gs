package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskClauseInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskClauseInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 22, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign()
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 26, column 23
    function initialValue_1 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 38, column 24
    function sortBy_2 (clause :  APDClause) : java.lang.Object {
      return clause.Subtype.Code
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 41, column 24
    function sortBy_3 (clause :  APDClause) : java.lang.Object {
      return clause.ClauseCategory.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 44, column 24
    function sortBy_4 (clause :  APDClause) : java.lang.Object {
      return clause.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 47, column 24
    function sortBy_5 (clause :  APDClause) : java.lang.Object {
      return clause.Name
    }
    
    // 'value' attribute on InputIterator (id=ClauseIterator) at APDRiskClauseInputSet.pcf: line 35, column 31
    function value_258 () : APDClause[] {
      return  canDesign ? clauses : clauses.where(\clause -> riskCoverable.availability(clause) != APDDataExistenceType.TC_UNAVAILABLE)
    }
    
    property get canDesign () : Boolean {
      return getVariableValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setVariableValue("canDesign", 0, $arg)
    }
    
    property get clauses () : APDClause[] {
      return getRequireValue("clauses", 0) as APDClause[]
    }
    
    property set clauses ($arg :  APDClause[]) {
      setRequireValue("clauses", 0, $arg)
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getRequireValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setRequireValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getRequireValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setRequireValue("riskCoverable", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Details) at APDRiskClauseInputSet.pcf: line 79, column 55
    function action_12 () : void {
      APDCoveragePopup.push(clause as APDCoverage, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 84, column 104
    function action_15 () : void {
      gw.apd.web.APDRiskClauseInputSetHelper.moveClauseUp(clauses, clause)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 89, column 106
    function action_17 () : void {
      gw.apd.web.APDRiskClauseInputSetHelper.moveClauseDown(clauses, clause)
    }
    
    // 'action' attribute on MenuItem (id=Remove) at APDRiskClauseInputSet.pcf: line 95, column 105
    function action_18 () : void {
      riskCoverable.setClauseExists(clause, false); riskCoverable.Coverable.removeClause(clause)
    }
    
    // 'action' attribute on ToolbarButton (id=addTerm) at APDRiskClauseInputSet.pcf: line 294, column 38
    function action_202 () : void {
      APDNewScheduleTermPopup.push(riskClause.RiskItems, clause); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function action_26 () : void {
      APDClauseRulePopup.push(clause.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), clause, APDRuleType.TC_EXISTENCE, riskCoverable, openForEdit)
    }
    
    // 'action' attribute on TextInput (id=Tags_Input) at APDRiskClauseInputSet.pcf: line 112, column 28
    function action_34 () : void {
      APDTagPopup.push(clause, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=Details) at APDRiskClauseInputSet.pcf: line 79, column 55
    function action_dest_13 () : pcf.api.Destination {
      return pcf.APDCoveragePopup.createDestination(clause as APDCoverage, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function action_dest_27 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(clause.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE), clause, APDRuleType.TC_EXISTENCE, riskCoverable, openForEdit)
    }
    
    // 'action' attribute on TextInput (id=Tags_Input) at APDRiskClauseInputSet.pcf: line 112, column 28
    function action_dest_35 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(clause, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 84, column 104
    function available_14 () : java.lang.Boolean {
      return clause.Sequence > gw.apd.web.APDRiskClauseInputSetHelper.minSequenceForClauseCategoryAndType(clauses, clause)
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 89, column 106
    function available_16 () : java.lang.Boolean {
      return clause.Sequence < gw.apd.web.APDRiskClauseInputSetHelper.maxSequenceForClauseCategoryAndType(clauses, clause)
    }
    
    // 'allowToggle' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 118, column 67
    function available_252 () : java.lang.Boolean {
      return riskCoverable.availability(clause) != APDDataExistenceType.TC_REQUIRED and riskCoverable.availability(clause) != APDDataExistenceType.TC_UNAVAILABLE
    }
    
    // 'value' attribute on CheckBoxInput (id=hasClauseSchedule_Input) at APDRiskClauseInputSet.pcf: line 277, column 71
    function defaultSetter_197 (__VALUE_TO_SET :  java.lang.Object) : void {
      hasClauseSchedule = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ClauseName_Input) at APDRiskClauseInputSet.pcf: line 74, column 31
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      clause.Name = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 126, column 200
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskClause.Currency = (__VALUE_TO_SET as Currency)
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 53, column 33
    function initialValue_6 () : APDRiskClause {
      return riskCoverable.getRiskClause(clause)
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 58, column 35
    function initialValue_7 () : APDRiskCoverage {
      return riskClause typeis APDRiskCoverage ? riskClause as APDRiskCoverage : null
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 62, column 27
    function initialValue_8 () : Boolean {
      return clause.HasSchedule
    }
    
    // 'label' attribute on Label (id=CoverageDetails) at APDRiskClauseInputSet.pcf: line 66, column 32
    function label_10 () : java.lang.String {
      return clause.UIDetailsLabel
    }
    
    // 'label' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 118, column 67
    function label_253 () : java.lang.Object {
      return clause.Name
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskClauseInputSet.pcf: line 279, column 69
    function onChange_193 () : void {
      riskClause.setSchedule(hasClauseSchedule)
    }
    
    // 'onToggle' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 118, column 67
    function setter_254 (VALUE :  java.lang.Boolean) : void {
      riskCoverable.setClauseExists(clause, VALUE)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 306, column 36
    function sortBy_203 (term :  entity.APDTerm) : java.lang.Object {
      return term.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 152, column 34
    function sortBy_48 (riskTerm :  APDRiskTerm) : java.lang.Object {
      return riskTerm.Attribute.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=RiskTerms) at APDRiskClauseInputSet.pcf: line 149, column 43
    function toCreateAndAdd_189 () : APDRiskTerm {
      return riskClause.createAndAddStandardTerm()
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ScheduleItems) at APDRiskClauseInputSet.pcf: line 343, column 51
    function toCreateAndAdd_247 () : APDRiskScheduleItem {
      return riskClause.createAndAddScheduleItem()
    }
    
    // 'toRemove' attribute on RowIterator (id=RiskTerms) at APDRiskClauseInputSet.pcf: line 149, column 43
    function toRemove_190 (riskTerm :  APDRiskTerm) : void {
      riskClause.removeStandardTerm(riskTerm)
    }
    
    // 'toRemove' attribute on RowIterator (id=ScheduleItems) at APDRiskClauseInputSet.pcf: line 343, column 51
    function toRemove_248 (item :  APDRiskScheduleItem) : void {
      riskClause.removeScheduleItem(item)
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function valueRange_29 () : java.lang.Object {
      return typekey.APDDataExistenceType.AllTypeKeys
    }
    
    // 'value' attribute on TextInput (id=ClauseName_Input) at APDRiskClauseInputSet.pcf: line 74, column 31
    function valueRoot_22 () : java.lang.Object {
      return clause
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 126, column 200
    function valueRoot_42 () : java.lang.Object {
      return riskClause
    }
    
    // 'value' attribute on RowIterator (id=RiskTerms) at APDRiskClauseInputSet.pcf: line 149, column 43
    function value_191 () : APDRiskTerm[] {
      return canDesign ? riskClause.StandardRiskTerms : riskClause.StandardRiskTerms.where(\f -> f.Availability == APDDataExistenceType.TC_CAPTURED or f.Availability == APDDataExistenceType.TC_DERIVED)
    }
    
    // 'value' attribute on CheckBoxInput (id=hasClauseSchedule_Input) at APDRiskClauseInputSet.pcf: line 277, column 71
    function value_196 () : java.lang.Boolean {
      return hasClauseSchedule
    }
    
    // 'value' attribute on TextInput (id=ClauseName_Input) at APDRiskClauseInputSet.pcf: line 74, column 31
    function value_20 () : String {
      return clause.Name
    }
    
    // 'value' attribute on CellIterator (id=TermNames) at APDRiskClauseInputSet.pcf: line 303, column 48
    function value_217 () : entity.APDTerm[] {
      return riskClause.Clause.ScheduleTermsSortedBySequence
    }
    
    // 'value' attribute on RowIterator (id=ScheduleItems) at APDRiskClauseInputSet.pcf: line 343, column 51
    function value_249 () : APDRiskScheduleItem[] {
      return riskClause.RiskItems
    }
    
    // 'value' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function value_28 () : typekey.APDDataExistenceType {
      return riskCoverable.availability(clause)
    }
    
    // 'value' attribute on TextInput (id=Tags_Input) at APDRiskClauseInputSet.pcf: line 112, column 28
    function value_36 () : java.lang.String {
      return clause.TagDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 126, column 200
    function value_40 () : Currency {
      return riskClause.Currency
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function verifyValueRangeIsAllowedType_30 ($$arg :  typekey.APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 105, column 32
    function verifyValueRange_31 () : void {
      var __valueRangeArg = typekey.APDDataExistenceType.AllTypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 126, column 200
    function verifyValueType_45 () : void {
      var __valueTypeArg : Currency
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=Details) at APDRiskClauseInputSet.pcf: line 79, column 55
    function visible_11 () : java.lang.Boolean {
      return (typeof clause) == APDCoverage
    }
    
    // 'visible' attribute on ListViewInput at APDRiskClauseInputSet.pcf: line 130, column 70
    function visible_192 () : java.lang.Boolean {
      return canDesign or riskClause.RiskTerms.Count > 0
    }
    
    // 'visible' attribute on CheckBoxInput (id=hasClauseSchedule_Input) at APDRiskClauseInputSet.pcf: line 277, column 71
    function visible_195 () : java.lang.Boolean {
      return canDesign and (InEditMode or hasClauseSchedule)
    }
    
    // 'childrenVisible' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 118, column 67
    function visible_251 () : java.lang.Boolean {
      return riskClause != null
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 126, column 200
    function visible_39 () : java.lang.Boolean {
      return riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_BASICMULTI or riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_FULLMULTI
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 265, column 46
    function visible_56 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on Label (id=CoverageDetails) at APDRiskClauseInputSet.pcf: line 66, column 32
    function visible_9 () : java.lang.Boolean {
      return canDesign
    }
    
    property get hasClauseSchedule () : Boolean {
      return getVariableValue("hasClauseSchedule", 2) as Boolean
    }
    
    property set hasClauseSchedule ($arg :  Boolean) {
      setVariableValue("hasClauseSchedule", 2, $arg)
    }
    
    property get riskClause () : APDRiskClause {
      return getVariableValue("riskClause", 2) as APDRiskClause
    }
    
    property set riskClause ($arg :  APDRiskClause) {
      setVariableValue("riskClause", 2, $arg)
    }
    
    property get riskCoverage () : APDRiskCoverage {
      return getVariableValue("riskCoverage", 2) as APDRiskCoverage
    }
    
    property set riskCoverage ($arg :  APDRiskCoverage) {
      setVariableValue("riskCoverage", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function action_106 () : void {
      APDAttributeRulePopup.push(riskTerm.Attribute.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), riskTerm.Attribute, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 247, column 38
    function action_173 () : void {
      APDTagPopup.push(riskTerm.Attribute, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 181, column 114
    function action_92 () : void {
      riskTerm.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 186, column 116
    function action_94 () : void {
      riskTerm.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDRiskClauseInputSet.pcf: line 197, column 41
    function action_97 () : void {
      APDDropDownDefinitionPopup.push(riskTerm.Attribute, true, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function action_dest_107 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(riskTerm.Attribute.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE and not (r typeis APDDropdownEntryRule)), riskTerm.Attribute, APDRuleType.TC_EXISTENCE, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 247, column 38
    function action_dest_174 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(riskTerm.Attribute, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDRiskClauseInputSet.pcf: line 197, column 41
    function action_dest_98 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(riskTerm.Attribute, true, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 181, column 114
    function available_91 () : java.lang.Boolean {
      return riskTerm.Attribute.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 186, column 116
    function available_93 () : java.lang.Boolean {
      return riskTerm.Attribute.Sequence != riskClause.Clause.StandardTerms.Count
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_116 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_118 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_120 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_122 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_124 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_126 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_128 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_onEnter_130 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_135 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_137 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_139 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_141 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_143 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_145 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_147 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_onEnter_149 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_154 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_156 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_158 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_160 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_162 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_164 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_166 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_onEnter_168 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_64 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_66 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_68 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_70 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_72 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_74 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_76 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_78 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_80 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_82 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_84 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_onEnter_86 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_117 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_119 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_121 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_123 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_125 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_127 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_129 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function def_refreshVariables_131 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_136 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_138 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_140 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_142 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_144 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_146 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_148 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function def_refreshVariables_150 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_155 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_157 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_159 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_161 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_163 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_165 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_167 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function def_refreshVariables_169 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_65 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_67 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_69 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_71 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_73 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_75 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_77 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_79 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_81 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_83 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_85 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function def_refreshVariables_87 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskTerm)
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 197, column 41
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskClauseInputSet.pcf: line 256, column 42
    function defaultSetter_179 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 265, column 46
    function defaultSetter_184 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 162, column 55
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 162, column 55
    function editable_57 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function editable_63 () : java.lang.Boolean {
      return riskTerm.EditableInUI
    }
    
    // 'filter' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 197, column 41
    function filter_102 (VALUE :  APDFieldType, VALUES :  APDFieldType[]) : java.lang.Boolean {
      return APDFieldType.TF_TERMTYPES.TypeKeys.contains(VALUE)
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 221, column 42
    function mode_132 () : java.lang.Object {
      return riskTerm.Attribute.getUIRuleMode(APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 230, column 42
    function mode_151 () : java.lang.Object {
      return riskTerm.Attribute.getUIRuleMode(APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 238, column 42
    function mode_170 () : java.lang.Object {
      return riskTerm.Attribute.getUIRuleMode(APDRuleType.TC_MAX)
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 169, column 53
    function mode_88 () : java.lang.Object {
      return riskTerm.Attribute.Type
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function valueRange_110 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function valueRoot_109 () : java.lang.Object {
      return riskTerm
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 162, column 55
    function valueRoot_60 () : java.lang.Object {
      return riskTerm.Attribute
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function value_108 () : APDDataExistenceType {
      return riskTerm.Availability
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 247, column 38
    function value_175 () : java.lang.String {
      return riskTerm.Attribute.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskClauseInputSet.pcf: line 256, column 42
    function value_178 () : java.lang.String {
      return riskTerm.Attribute.Description
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 265, column 46
    function value_183 () : java.lang.String {
      return riskTerm.Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 162, column 55
    function value_58 () : java.lang.String {
      return riskTerm.Attribute.Label
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 197, column 41
    function value_99 () : APDFieldType {
      return riskTerm.Attribute.Type
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function verifyValueRangeIsAllowedType_111 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function verifyValueRangeIsAllowedType_111 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function verifyValueRangeIsAllowedType_111 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 213, column 42
    function verifyValueRange_112 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_111(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 197, column 41
    function verifyValueType_105 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 247, column 38
    function visible_172 () : java.lang.Boolean {
      return riskTerm.Attribute.ShowDisplayValue
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 265, column 46
    function visible_186 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDRiskClauseInputSet.pcf: line 197, column 41
    function visible_96 () : java.lang.Boolean {
      return riskTerm.Attribute.Type == APDFieldType.TC_TYPEKEY
    }
    
    property get riskTerm () : APDRiskTerm {
      return getIteratedValue(3) as APDRiskTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 317, column 111
    function action_205 () : void {
      term.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 322, column 113
    function action_207 () : void {
      term.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on MenuItem (id=EditTerm) at APDRiskClauseInputSet.pcf: line 326, column 108
    function action_208 () : void {
      APDScheduleTermPopup.push(term, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=RemoveTerm) at APDRiskClauseInputSet.pcf: line 330, column 110
    function action_210 () : void {
      clause.removeScheduleTerm(term as APDTerm, riskClause); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on MenuItem (id=EditTerm) at APDRiskClauseInputSet.pcf: line 326, column 108
    function action_dest_209 () : pcf.api.Destination {
      return pcf.APDScheduleTermPopup.createDestination(term, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 317, column 111
    function available_204 () : java.lang.Boolean {
      return term.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 322, column 113
    function available_206 () : java.lang.Boolean {
      return term.Sequence != term.SiblingAttributes.Count
    }
    
    // 'value' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 312, column 40
    function defaultSetter_213 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 312, column 40
    function editable_211 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'value' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 312, column 40
    function valueRoot_214 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 312, column 40
    function value_212 () : java.lang.String {
      return term.Label
    }
    
    property get term () : entity.APDTerm {
      return getIteratedValue(3) as entity.APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CellIterator (id=TermValues) at APDRiskClauseInputSet.pcf: line 349, column 50
    function value_246 () : entity.APDTerm[] {
      return riskClause.Clause.ScheduleTermsSortedBySequence
    }
    
    property get item () : APDRiskScheduleItem {
      return getIteratedValue(3) as APDRiskScheduleItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_219 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_221 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_223 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_225 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_227 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_229 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_231 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_233 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_235 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_237 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_239 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_onEnter_241 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_220 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_222 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_224 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_226 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_228 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_230 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_232 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_234 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_236 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_238 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_240 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function def_refreshVariables_242 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term))
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function editable_218 () : java.lang.Boolean {
      return item.ItemTerms.firstWhere(\t -> t.Attribute == term).Availability == APDDataExistenceType.TC_CAPTURED
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 355, column 41
    function mode_243 () : java.lang.Object {
      return term.Type
    }
    
    property get term () : entity.APDTerm {
      return getIteratedValue(4) as entity.APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskClauseInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'visible' attribute on InputDivider at APDRiskClauseInputSet.pcf: line 364, column 30
    function visible_257 () : java.lang.Boolean {
      return canDesign
    }
    
    property get clause () : APDClause {
      return getIteratedValue(1) as APDClause
    }
    
    
  }
  
  
}