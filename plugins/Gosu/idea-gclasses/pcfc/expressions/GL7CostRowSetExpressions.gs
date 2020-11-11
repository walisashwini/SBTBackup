package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7CostRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7CostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7CostRowSet.pcf: line 25, column 52
    function initialValue_0 () : java.util.List<entity.GL7Cost> {
      return quoteDisplayUtil.combineCosts(quoteDisplayUtil.getCostsForSchedules(schedules),costs)
    }
    
    // 'initialValue' attribute on Variable at GL7CostRowSet.pcf: line 30, column 36
    function initialValue_1 () : java.math.BigDecimal {
      return combinedCosts.sum(\ cost -> cost.ActualAmount.Amount)
    }
    
    // 'value' attribute on RowIterator (id=Costs) at GL7CostRowSet.pcf: line 37, column 56
    function value_29 () : java.util.List<entity.GL7Cost> {
      return costs
    }
    
    // 'value' attribute on RowIterator (id=Schedules) at GL7CostRowSet.pcf: line 88, column 64
    function value_32 () : java.util.List<gw.api.domain.Schedule> {
      return schedules
    }
    
    // 'value' attribute on TextCell (id=SubtotalAmount_Cell) at GL7CostRowSet.pcf: line 106, column 43
    function value_33 () : java.math.BigDecimal {
      return subtotal
    }
    
    // 'visible' attribute on Row at GL7CostRowSet.pcf: line 93, column 68
    function visible_35 () : java.lang.Boolean {
      return combinedCosts.HasElements && showSubtotals
    }
    
    property get combinedCosts () : java.util.List<entity.GL7Cost> {
      return getVariableValue("combinedCosts", 0) as java.util.List<entity.GL7Cost>
    }
    
    property set combinedCosts ($arg :  java.util.List<entity.GL7Cost>) {
      setVariableValue("combinedCosts", 0, $arg)
    }
    
    property get costs () : List<GL7Cost> {
      return getRequireValue("costs", 0) as List<GL7Cost>
    }
    
    property set costs ($arg :  List<GL7Cost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return getRequireValue("quoteDisplayUtil", 0) as gw.lob.gl7.financials.GL7QuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) {
      setRequireValue("quoteDisplayUtil", 0, $arg)
    }
    
    property get schedules () : java.util.List<gw.api.domain.Schedule> {
      return getRequireValue("schedules", 0) as java.util.List<gw.api.domain.Schedule>
    }
    
    property set schedules ($arg :  java.util.List<gw.api.domain.Schedule>) {
      setRequireValue("schedules", 0, $arg)
    }
    
    property get showSubtotals () : boolean {
      return getRequireValue("showSubtotals", 0) as java.lang.Boolean
    }
    
    property set showSubtotals ($arg :  boolean) {
      setRequireValue("showSubtotals", 0, $arg)
    }
    
    property get subline () : String {
      return getRequireValue("subline", 0) as String
    }
    
    property set subline ($arg :  String) {
      setRequireValue("subline", 0, $arg)
    }
    
    property get subtotal () : java.math.BigDecimal {
      return getVariableValue("subtotal", 0) as java.math.BigDecimal
    }
    
    property set subtotal ($arg :  java.math.BigDecimal) {
      setVariableValue("subtotal", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends GL7CostRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at GL7CostRowSet.pcf: line 90, column 66
    function def_onEnter_30 (def :  pcf.GL7ScheduleCostRowSet) : void {
      def.onEnter(schedule, quoteDisplayUtil)
    }
    
    // 'def' attribute on RowSetRef at GL7CostRowSet.pcf: line 90, column 66
    function def_refreshVariables_31 (def :  pcf.GL7ScheduleCostRowSet) : void {
      def.refreshVariables(schedule, quoteDisplayUtil)
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getIteratedValue(1) as gw.api.domain.Schedule
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7CostRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=costDescription_Cell) at GL7CostRowSet.pcf: line 49, column 37
    function valueRoot_3 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GL7CostRowSet.pcf: line 63, column 45
    function value_12 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at GL7CostRowSet.pcf: line 67, column 45
    function value_15 () : java.math.BigDecimal {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7CostRowSet.pcf: line 70, column 39
    function value_18 () : java.util.Date {
      return cost.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=costDescription_Cell) at GL7CostRowSet.pcf: line 49, column 37
    function value_2 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at GL7CostRowSet.pcf: line 73, column 40
    function value_21 () : java.util.Date {
      return cost.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at GL7CostRowSet.pcf: line 76, column 114
    function value_24 () : java.lang.String {
      return quoteDisplayUtil.showProration(cost) ? quoteDisplayUtil.getCostProration(cost) : ""
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at GL7CostRowSet.pcf: line 79, column 38
    function value_26 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=costClassCode_Cell) at GL7CostRowSet.pcf: line 52, column 56
    function value_5 () : java.lang.String {
      return quoteDisplayUtil.getClassCode(cost)
    }
    
    // 'value' attribute on TextCell (id=ClassDescription_Cell) at GL7CostRowSet.pcf: line 55, column 63
    function value_7 () : java.lang.String {
      return quoteDisplayUtil.getClassDescription(cost)
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GL7CostRowSet.pcf: line 59, column 45
    function value_9 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    property get cost () : entity.GL7Cost {
      return getIteratedValue(1) as entity.GL7Cost
    }
    
    
  }
  
  
}