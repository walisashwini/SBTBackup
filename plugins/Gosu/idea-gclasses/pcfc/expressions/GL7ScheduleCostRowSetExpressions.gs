package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ScheduleCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7ScheduleCostRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ScheduleCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7ScheduleCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator (id=Costs) at GL7ScheduleCostRowSet.pcf: line 19, column 56
    function value_25 () : java.util.List<entity.GL7Cost> {
      return quoteDisplayUtil.getScheduleCosts(schedule)
    }
    
    property get quoteDisplayUtil () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return getRequireValue("quoteDisplayUtil", 0) as gw.lob.gl7.financials.GL7QuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) {
      setRequireValue("quoteDisplayUtil", 0, $arg)
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getRequireValue("schedule", 0) as gw.api.domain.Schedule
    }
    
    property set schedule ($arg :  gw.api.domain.Schedule) {
      setRequireValue("schedule", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ScheduleCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7ScheduleCostRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=costDescription_Cell) at GL7ScheduleCostRowSet.pcf: line 26, column 37
    function valueRoot_1 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=costDescription_Cell) at GL7ScheduleCostRowSet.pcf: line 26, column 37
    function value_0 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=CostTermAmount_Cell) at GL7ScheduleCostRowSet.pcf: line 44, column 54
    function value_11 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on DateCell (id=CostEffDate_Cell) at GL7ScheduleCostRowSet.pcf: line 47, column 33
    function value_14 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=CostExpDate_Cell) at GL7ScheduleCostRowSet.pcf: line 50, column 40
    function value_17 () : java.util.Date {
      return cost.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at GL7ScheduleCostRowSet.pcf: line 53, column 114
    function value_20 () : java.lang.String {
      return quoteDisplayUtil.showProration(cost) ? quoteDisplayUtil.getCostProration(cost) : ""
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at GL7ScheduleCostRowSet.pcf: line 58, column 54
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=costClassCode_Cell) at GL7ScheduleCostRowSet.pcf: line 29, column 56
    function value_3 () : java.lang.String {
      return quoteDisplayUtil.getClassCode(cost)
    }
    
    // 'value' attribute on TextCell (id=ClassDescription_Cell) at GL7ScheduleCostRowSet.pcf: line 32, column 63
    function value_5 () : java.lang.String {
      return quoteDisplayUtil.getClassDescription(cost)
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GL7ScheduleCostRowSet.pcf: line 36, column 45
    function value_7 () : java.math.BigDecimal {
      return cost.ActualAdjRate.setScale(3, java.math.RoundingMode.HALF_UP)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GL7ScheduleCostRowSet.pcf: line 39, column 85
    function value_9 () : java.lang.String {
      return com.guidewire.pl.system.util.NumberFormatUtil.render(cost.Basis)
    }
    
    property get cost () : entity.GL7Cost {
      return getIteratedValue(1) as entity.GL7Cost
    }
    
    
  }
  
  
}