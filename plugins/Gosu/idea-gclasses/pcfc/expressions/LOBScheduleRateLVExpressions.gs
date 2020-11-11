package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBScheduleRateLVExpressions {
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LOBScheduleRateLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateFactor.AssessmentWithinLimitsDisplay = (__VALUE_TO_SET as int)
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateFactor.Justification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function editable_37 () : java.lang.Boolean {
      return rateFactor.Pattern.ModifierPattern.DisplayJustification
    }
    
    // 'requestValidationExpression' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function requestValidationExpression_29 (VALUE :  int) : java.lang.Object {
      return gw.policy.ModifierValidation.checkValueRanges(rateFactor, VALUE)
    }
    
    // 'validationExpression' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function validationExpression_38 () : java.lang.Object {
      return gw.policy.ModifierValidation.verifyRateFactor(rateFactor)
    }
    
    // 'valueRange' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function valueRange_33 () : java.lang.Object {
      return rateFactorRangeGenerator.getRangeForRateFactor(rateFactor)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at LOBScheduleRateLV.pcf: line 27, column 24
    function valueRoot_19 () : java.lang.Object {
      return rateFactor.Pattern
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at LOBScheduleRateLV.pcf: line 34, column 50
    function valueRoot_22 () : java.lang.Object {
      return rateFactor
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at LOBScheduleRateLV.pcf: line 27, column 24
    function value_18 () : java.lang.String {
      return rateFactor.Pattern.Description
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at LOBScheduleRateLV.pcf: line 34, column 50
    function value_21 () : java.math.BigDecimal {
      return rateFactor.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at LOBScheduleRateLV.pcf: line 41, column 50
    function value_25 () : java.math.BigDecimal {
      return rateFactor.Maximum
    }
    
    // 'value' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function value_30 () : int {
      return rateFactor.AssessmentWithinLimitsDisplay
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function value_39 () : java.lang.String {
      return rateFactor.Justification
    }
    
    // 'valueRange' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function verifyValueRangeIsAllowedType_34 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function verifyValueRangeIsAllowedType_34 ($$arg :  int[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function verifyValueRange_35 () : void {
      var __valueRangeArg = rateFactorRangeGenerator.getRangeForRateFactor(rateFactor)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=Minimum_Cell) at LOBScheduleRateLV.pcf: line 34, column 50
    function visible_23 () : java.lang.Boolean {
      return credit.Pattern.DisplayRange
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function visible_44 () : java.lang.Boolean {
      return credit.Pattern.DisplayJustification
    }
    
    property get rateFactor () : entity.RateFactor {
      return getIteratedValue(1) as entity.RateFactor
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBScheduleRateLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at LOBScheduleRateLV.pcf: line 20, column 24
    function sortBy_0 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Pattern.Priority
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at LOBScheduleRateLV.pcf: line 27, column 24
    function sortValue_1 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Pattern.Description
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at LOBScheduleRateLV.pcf: line 34, column 50
    function sortValue_2 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at LOBScheduleRateLV.pcf: line 41, column 50
    function sortValue_4 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Maximum
    }
    
    // 'value' attribute on RangeCell (id=CreditDebit_Cell) at LOBScheduleRateLV.pcf: line 51, column 27
    function sortValue_6 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.AssessmentWithinLimitsDisplay
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function sortValue_7 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Justification
    }
    
    // 'value' attribute on RowIterator at LOBScheduleRateLV.pcf: line 34, column 50
    function valueRoot_10 () : java.lang.Object {
      return credit.Minimum
    }
    
    // 'value' attribute on RowIterator at LOBScheduleRateLV.pcf: line 41, column 50
    function valueRoot_13 () : java.lang.Object {
      return credit.Maximum
    }
    
    // 'value' attribute on RowIterator at LOBScheduleRateLV.pcf: line 51, column 27
    function valueRoot_16 () : java.lang.Object {
      return credit.RateModifier
    }
    
    // 'footerLabel' attribute on RowIterator at LOBScheduleRateLV.pcf: line 41, column 50
    function value_12 () : java.lang.Object {
      return credit.Maximum.DisplayValue
    }
    
    // 'footerLabel' attribute on RowIterator at LOBScheduleRateLV.pcf: line 51, column 27
    function value_15 () : java.lang.Object {
      return credit.RateModifier.DisplayValue
    }
    
    // 'value' attribute on RowIterator at LOBScheduleRateLV.pcf: line 17, column 39
    function value_46 () : entity.RateFactor[] {
      return credit.RateFactors
    }
    
    // 'footerLabel' attribute on RowIterator at LOBScheduleRateLV.pcf: line 34, column 50
    function value_9 () : java.lang.Object {
      return credit.Minimum.DisplayValue
    }
    
    // 'visible' attribute on TextCell (id=Minimum_Cell) at LOBScheduleRateLV.pcf: line 34, column 50
    function visible_3 () : java.lang.Boolean {
      return credit.Pattern.DisplayRange
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at LOBScheduleRateLV.pcf: line 60, column 58
    function visible_8 () : java.lang.Boolean {
      return credit.Pattern.DisplayJustification
    }
    
    property get credit () : Modifier {
      return getRequireValue("credit", 0) as Modifier
    }
    
    property set credit ($arg :  Modifier) {
      setRequireValue("credit", 0, $arg)
    }
    
    property get rateFactorRangeGenerator () : gw.lob.common.util.modifiers.RateFactorRangeGenerator {
      return getRequireValue("rateFactorRangeGenerator", 0) as gw.lob.common.util.modifiers.RateFactorRangeGenerator
    }
    
    property set rateFactorRangeGenerator ($arg :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) {
      setRequireValue("rateFactorRangeGenerator", 0, $arg)
    }
    
    
  }
  
  
}