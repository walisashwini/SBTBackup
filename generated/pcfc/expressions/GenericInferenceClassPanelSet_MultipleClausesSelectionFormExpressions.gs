package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.productmodel.ClausePattern
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_MultipleClausesSelectionFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=pickClausePatternsButton) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 23, column 45
    function action_1 () : void {
      FormClausePatternsSelectionPopup.push(formPattern, formPattern.FormPatternClauseCodes*.Code ?: {})
    }
    
    // 'action' attribute on PickerToolbarButton (id=pickClausePatternsButton) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 23, column 45
    function action_dest_2 () : pcf.api.Destination {
      return pcf.FormClausePatternsSelectionPopup.createDestination(formPattern, formPattern.FormPatternClauseCodes*.Code ?: {})
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 14, column 102
    function initialValue_0 () : java.util.List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return formPattern.PolicyLinePatternRange
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=pickClausePatternsButton) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 23, column 45
    function onPick_3 (PickedValue :  gw.api.productmodel.ClausePattern[]) : void {
      addClauses(PickedValue)
    }
    
    // 'value' attribute on TextCell (id=clauseName_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 42, column 138
    function sortValue_5 (clause :  entity.FormPatternClauseCode) : java.lang.Object {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 46, column 155
    function sortValue_6 (clause :  entity.FormPatternClauseCode) : java.lang.Object {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=clauseDesc_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 50, column 137
    function sortValue_7 (clause :  entity.FormPatternClauseCode) : java.lang.Object {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).ClauseName
    }
    
    // 'toRemove' attribute on RowIterator (id=clauseIterator) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 37, column 97
    function toRemove_18 (clause :  entity.FormPatternClauseCode) : void {
      formPattern.removeFromFormPatternClauseCodes(clause)
    }
    
    // 'value' attribute on RowIterator (id=clauseIterator) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 37, column 97
    function value_19 () : entity.FormPatternClauseCode[] {
      return formPattern.FormPatternClauseCodes
    }
    
    // 'visible' attribute on Toolbar (id=ClauseToolbar) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 18, column 46
    function visible_4 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get policyLineRange () : java.util.List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return getVariableValue("policyLineRange", 0) as java.util.List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>
    }
    
    property set policyLineRange ($arg :  java.util.List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>) {
      setVariableValue("policyLineRange", 0, $arg)
    }
    
    
    function addClauses(clausePatterns : ClausePattern[]) {
      clausePatterns.each( \ clausePattern -> {
        var code = new FormPatternClauseCode()
        code.Code = clausePattern.CodeIdentifier
        code.FormPattern = formPattern
        formPattern.addToFormPatternClauseCodes(code)
      })
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GenericInferenceClassPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=clauseIterator) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 37, column 97
    function checkBoxVisible_17 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 46, column 155
    function valueRoot_12 () : java.lang.Object {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=clauseName_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 42, column 138
    function valueRoot_9 () : java.lang.Object {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 46, column 155
    function value_11 () : java.lang.String {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=clauseDesc_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 50, column 137
    function value_14 () : java.lang.String {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).ClauseName
    }
    
    // 'value' attribute on TextCell (id=clauseName_Cell) at GenericInferenceClassPanelSet.MultipleClausesSelectionForm.pcf: line 42, column 138
    function value_8 () : java.lang.String {
      return gw.api.productmodel.ClausePatternLookup.getByCodeIdentifier(clause.Code).DisplayName
    }
    
    property get clause () : entity.FormPatternClauseCode {
      return getIteratedValue(1) as entity.FormPatternClauseCode
    }
    
    
  }
  
  
}