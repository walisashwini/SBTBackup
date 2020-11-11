package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingOverrideCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7RatingOverrideCostRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingOverrideCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7RatingOverrideCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at GL7RatingOverrideCostRowSet.pcf: line 35, column 56
    function editable_4 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'sortBy' attribute on IteratorSort at GL7RatingOverrideCostRowSet.pcf: line 38, column 24
    function sortBy_3 (cost :  entity.GL7Cost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on TextCell (id=Title_Cell) at GL7RatingOverrideCostRowSet.pcf: line 27, column 24
    function value_0 () : java.lang.String {
      return title
    }
    
    // 'value' attribute on RowIterator at GL7RatingOverrideCostRowSet.pcf: line 35, column 56
    function value_73 () : java.util.List<entity.GL7Cost> {
      return costs
    }
    
    // 'visible' attribute on Row at GL7RatingOverrideCostRowSet.pcf: line 20, column 76
    function visible_2 () : java.lang.Boolean {
      return costs.HasElements and presenter.hasDisplayableCosts(costs)
    }
    
    // 'visible' attribute on RowIterator at GL7RatingOverrideCostRowSet.pcf: line 35, column 56
    function visible_5 () : java.lang.Boolean {
      return presenter.hasDisplayableCosts(costs)
    }
    
    property get costs () : List<entity.GL7Cost> {
      return getRequireValue("costs", 0) as List<entity.GL7Cost>
    }
    
    property set costs ($arg :  List<entity.GL7Cost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7RatingOverridePresenter {
      return getRequireValue("presenter", 0) as gw.lob.gl7.presenters.GL7RatingOverridePresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7RatingOverridePresenter) {
      setRequireValue("presenter", 0, $arg)
    }
    
    property get title () : String {
      return getRequireValue("title", 0) as String
    }
    
    property set title ($arg :  String) {
      setRequireValue("title", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingOverrideCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7RatingOverrideCostRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 100, column 51
    function currency_50 () : typekey.Currency {
      return presenter.PreferredCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 88, column 45
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 94, column 45
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 100, column 51
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideTermAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at GL7RatingOverrideCostRowSet.pcf: line 104, column 40
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 88, column 45
    function editable_34 () : java.lang.Boolean {
      return cost.Overridable
    }
    
    // 'editable' attribute on Row at GL7RatingOverrideCostRowSet.pcf: line 41, column 49
    function editable_71 () : java.lang.Boolean {
      return presenter.isCostEditable(cost)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 59, column 33
    function valueRoot_17 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=classCode_Cell) at GL7RatingOverrideCostRowSet.pcf: line 50, column 49
    function value_10 () : java.lang.String {
      return presenter.classCodeFor(cost)
    }
    
    // 'value' attribute on TextCell (id=sublineType_Cell) at GL7RatingOverrideCostRowSet.pcf: line 53, column 55
    function value_12 () : java.lang.String {
      return presenter.sublineTypeNameFor(cost)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7RatingOverrideCostRowSet.pcf: line 56, column 52
    function value_14 () : java.lang.String {
      return presenter.costDisplayName(cost)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 59, column 33
    function value_16 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 62, column 33
    function value_19 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 67, column 45
    function value_22 () : java.math.BigDecimal {
      return cost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 72, column 45
    function value_25 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=ActualTermAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 77, column 45
    function value_28 () : java.math.BigDecimal {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on TextCell (id=ActualAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 82, column 45
    function value_31 () : java.math.BigDecimal {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 88, column 45
    function value_35 () : java.math.BigDecimal {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 94, column 45
    function value_41 () : java.math.BigDecimal {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 100, column 51
    function value_47 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideTermAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at GL7RatingOverrideCostRowSet.pcf: line 104, column 40
    function value_54 () : java.lang.String {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 109, column 45
    function value_59 () : java.math.BigDecimal {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=EmptyColumn_Cell) at GL7RatingOverrideCostRowSet.pcf: line 44, column 67
    function value_6 () : java.lang.String {
      return java.lang.System.getProperty('line.separator')
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at GL7RatingOverrideCostRowSet.pcf: line 114, column 45
    function value_62 () : java.math.BigDecimal {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 118, column 44
    function value_65 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmount_Cell) at GL7RatingOverrideCostRowSet.pcf: line 122, column 40
    function value_68 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardAmount
    }
    
    // 'value' attribute on TextCell (id=locationOrState_Cell) at GL7RatingOverrideCostRowSet.pcf: line 47, column 65
    function value_8 () : java.lang.String {
      return presenter.locationOrStateOrAircraftFor(cost)
    }
    
    // 'visible' attribute on Row at GL7RatingOverrideCostRowSet.pcf: line 41, column 49
    function visible_72 () : java.lang.Boolean {
      return presenter.isCostVisible(cost)
    }
    
    property get cost () : entity.GL7Cost {
      return getIteratedValue(1) as entity.GL7Cost
    }
    
    
  }
  
  
}