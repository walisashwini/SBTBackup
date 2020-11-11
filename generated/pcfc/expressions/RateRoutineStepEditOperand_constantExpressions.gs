package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditOperand.constant.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineStepEditOperand_constantExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditOperand.constant.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineStepEditOperandExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditOperand.constant.pcf: line 30, column 152
    function def_onEnter_0 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.onEnter(ratingRoutineStep.PrimaryOperand, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditOperand.constant.pcf: line 30, column 152
    function def_refreshVariables_1 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.refreshVariables(ratingRoutineStep.PrimaryOperand, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'value' attribute on TextCell (id=ConstantValueOperand_Cell) at RateRoutineStepEditOperand.constant.pcf: line 28, column 71
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.PrimaryOperand.LocalizedConstantValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'validationExpression' attribute on TextCell (id=ConstantValueOperand_Cell) at RateRoutineStepEditOperand.constant.pcf: line 28, column 71
    function validationExpression_2 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutinePopupHelper.untypedConstantValidationExpression(ratingRoutineStep.PrimaryOperand)
    }
    
    // 'value' attribute on TextCell (id=ConstantValueOperand_Cell) at RateRoutineStepEditOperand.constant.pcf: line 28, column 71
    function valueRoot_5 () : java.lang.Object {
      return ratingRoutineStep.PrimaryOperand
    }
    
    // 'value' attribute on TextCell (id=ConstantValueOperand_Cell) at RateRoutineStepEditOperand.constant.pcf: line 28, column 71
    function value_3 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.LocalizedConstantValue
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get inScopeParamInScopeUsageMap () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("inScopeParamInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set inScopeParamInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("inScopeParamInScopeUsageMap", 0, $arg)
    }
    
    property get orderedSteps () : List<CalcStepDefinition> {
      return getRequireValue("orderedSteps", 0) as List<CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  List<CalcStepDefinition>) {
      setRequireValue("orderedSteps", 0, $arg)
    }
    
    property get rateRoutine () : CalcRoutineDefinition {
      return getRequireValue("rateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set rateRoutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("rateRoutine", 0, $arg)
    }
    
    property get ratingRoutineStep () : CalcStepDefinition {
      return getRequireValue("ratingRoutineStep", 0) as CalcStepDefinition
    }
    
    property set ratingRoutineStep ($arg :  CalcStepDefinition) {
      setRequireValue("ratingRoutineStep", 0, $arg)
    }
    
    
  }
  
  
}