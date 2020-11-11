package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TxDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7TxDetailsRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TxDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7TxDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator (id=Transactions) at GL7TxDetailsRowSet.pcf: line 36, column 63
    function value_27 () : java.util.List<entity.GL7Transaction> {
      return trxs
    }
    
    // 'value' attribute on RowIterator (id=ScheduleIterator) at GL7TxDetailsRowSet.pcf: line 93, column 46
    function value_58 () : java.util.List<entity.ScheduledItem> {
      return scheduledItems
    }
    
    // 'value' attribute on CurrencyCell (id=SubtotalAmount_Cell) at GL7TxDetailsRowSet.pcf: line 170, column 52
    function value_59 () : gw.pl.currency.MonetaryAmount {
      return txDisplayUtil.getSubtotal(trxs, scheduledItems)
    }
    
    // 'visible' attribute on Row at GL7TxDetailsRowSet.pcf: line 26, column 38
    function visible_0 () : java.lang.Boolean {
      return location?.HasContent
    }
    
    // 'visible' attribute on RowIterator (id=ScheduleIterator) at GL7TxDetailsRowSet.pcf: line 93, column 46
    function visible_28 () : java.lang.Boolean {
      return scheduledItems.size() > 0
    }
    
    // 'visible' attribute on Row at GL7TxDetailsRowSet.pcf: line 157, column 75
    function visible_61 () : java.lang.Boolean {
      return txDisplayUtil.shouldDisplaySubtotal(trxs, scheduledItems)
    }
    
    property get location () : String {
      return getRequireValue("location", 0) as String
    }
    
    property set location ($arg :  String) {
      setRequireValue("location", 0, $arg)
    }
    
    property get scheduledItems () : List<ScheduledItem> {
      return getRequireValue("scheduledItems", 0) as List<ScheduledItem>
    }
    
    property set scheduledItems ($arg :  List<ScheduledItem>) {
      setRequireValue("scheduledItems", 0, $arg)
    }
    
    property get subline () : String {
      return getRequireValue("subline", 0) as String
    }
    
    property set subline ($arg :  String) {
      setRequireValue("subline", 0, $arg)
    }
    
    property get title () : String {
      return getRequireValue("title", 0) as String
    }
    
    property set title ($arg :  String) {
      setRequireValue("title", 0, $arg)
    }
    
    property get trxs () : List<GL7Transaction> {
      return getRequireValue("trxs", 0) as List<GL7Transaction>
    }
    
    property set trxs ($arg :  List<GL7Transaction>) {
      setRequireValue("trxs", 0, $arg)
    }
    
    property get txDisplayUtil () : gw.lob.gl7.financials.GL7TxDisplayUtil {
      return getRequireValue("txDisplayUtil", 0) as gw.lob.gl7.financials.GL7TxDisplayUtil
    }
    
    property set txDisplayUtil ($arg :  gw.lob.gl7.financials.GL7TxDisplayUtil) {
      setRequireValue("txDisplayUtil", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TxDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends GL7TxDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7TxDetailsRowSet.pcf: line 97, column 44
    function initialValue_29 () : List<GL7Transaction> {
      return txDisplayUtil.getSortedTransactionsByScheduledItem(scheduledItem)
    }
    
    // RowIterator (id=ScheduleIterator) at GL7TxDetailsRowSet.pcf: line 93, column 46
    function initializeVariables_57 () : void {
        schedItemTrxns = txDisplayUtil.getSortedTransactionsByScheduledItem(scheduledItem);

    }
    
    // 'value' attribute on RowIterator (id=Transactions) at GL7TxDetailsRowSet.pcf: line 104, column 65
    function value_56 () : java.util.List<entity.GL7Transaction> {
      return schedItemTrxns
    }
    
    property get schedItemTrxns () : List<GL7Transaction> {
      return getVariableValue("schedItemTrxns", 1) as List<GL7Transaction>
    }
    
    property set schedItemTrxns ($arg :  List<GL7Transaction>) {
      setVariableValue("schedItemTrxns", 1, $arg)
    }
    
    property get scheduledItem () : entity.ScheduledItem {
      return getIteratedValue(1) as entity.ScheduledItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TxDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7TxDetailsRowSet.pcf: line 108, column 27
    function initialValue_30 () : GL7Cost {
      return trx.Cost as GL7Cost
    }
    
    // RowIterator (id=Transactions) at GL7TxDetailsRowSet.pcf: line 104, column 65
    function initializeVariables_55 () : void {
        cost = trx.Cost as GL7Cost;

    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at GL7TxDetailsRowSet.pcf: line 138, column 56
    function valueRoot_42 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7TxDetailsRowSet.pcf: line 141, column 34
    function valueRoot_45 () : java.lang.Object {
      return trx
    }
    
    // 'value' attribute on TextCell (id=costDescription_Cell) at GL7TxDetailsRowSet.pcf: line 120, column 58
    function value_31 () : java.lang.String {
      return txDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on TextCell (id=costClassCode_Cell) at GL7TxDetailsRowSet.pcf: line 123, column 55
    function value_33 () : java.lang.String {
      return txDisplayUtil.getClassCode(cost)
    }
    
    // 'value' attribute on TextCell (id=ClassDescription_Cell) at GL7TxDetailsRowSet.pcf: line 126, column 62
    function value_35 () : java.lang.String {
      return txDisplayUtil.getClassDescription(cost)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GL7TxDetailsRowSet.pcf: line 129, column 87
    function value_37 () : java.lang.String {
      return com.guidewire.pl.system.util.NumberFormatUtil.render(cost.Basis)
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GL7TxDetailsRowSet.pcf: line 133, column 47
    function value_39 () : java.math.BigDecimal {
      return cost.ActualAdjRate.setScale(3, java.math.RoundingMode.HALF_UP)
    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at GL7TxDetailsRowSet.pcf: line 138, column 56
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7TxDetailsRowSet.pcf: line 141, column 34
    function value_44 () : java.util.Date {
      return trx.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at GL7TxDetailsRowSet.pcf: line 144, column 34
    function value_47 () : java.util.Date {
      return trx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at GL7TxDetailsRowSet.pcf: line 147, column 94
    function value_50 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(trx.Proration, "#0.0000")
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at GL7TxDetailsRowSet.pcf: line 152, column 56
    function value_52 () : gw.pl.currency.MonetaryAmount {
      return trx.AmountBilling
    }
    
    property get cost () : GL7Cost {
      return getVariableValue("cost", 2) as GL7Cost
    }
    
    property set cost ($arg :  GL7Cost) {
      setVariableValue("cost", 2, $arg)
    }
    
    property get trx () : entity.GL7Transaction {
      return getIteratedValue(2) as entity.GL7Transaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TxDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7TxDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7TxDetailsRowSet.pcf: line 40, column 25
    function initialValue_1 () : GL7Cost {
      return trx.Cost as GL7Cost
    }
    
    // RowIterator (id=Transactions) at GL7TxDetailsRowSet.pcf: line 36, column 63
    function initializeVariables_26 () : void {
        cost = trx.Cost as GL7Cost;

    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at GL7TxDetailsRowSet.pcf: line 70, column 54
    function valueRoot_13 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7TxDetailsRowSet.pcf: line 73, column 32
    function valueRoot_16 () : java.lang.Object {
      return trx
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GL7TxDetailsRowSet.pcf: line 65, column 45
    function value_10 () : java.math.BigDecimal {
      return cost.ActualAdjRate.setScale(3, java.math.RoundingMode.HALF_UP)
    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at GL7TxDetailsRowSet.pcf: line 70, column 54
    function value_12 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GL7TxDetailsRowSet.pcf: line 73, column 32
    function value_15 () : java.util.Date {
      return trx.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at GL7TxDetailsRowSet.pcf: line 76, column 32
    function value_18 () : java.util.Date {
      return trx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=costDescription_Cell) at GL7TxDetailsRowSet.pcf: line 52, column 56
    function value_2 () : java.lang.String {
      return txDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at GL7TxDetailsRowSet.pcf: line 79, column 92
    function value_21 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(trx.Proration, "#0.0000")
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at GL7TxDetailsRowSet.pcf: line 83, column 54
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return trx.AmountBilling
    }
    
    // 'value' attribute on TextCell (id=costClassCode_Cell) at GL7TxDetailsRowSet.pcf: line 55, column 53
    function value_4 () : java.lang.String {
      return txDisplayUtil.getClassCode(cost)
    }
    
    // 'value' attribute on TextCell (id=ClassDescription_Cell) at GL7TxDetailsRowSet.pcf: line 58, column 60
    function value_6 () : java.lang.String {
      return txDisplayUtil.getClassDescription(cost)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GL7TxDetailsRowSet.pcf: line 61, column 85
    function value_8 () : java.lang.String {
      return com.guidewire.pl.system.util.NumberFormatUtil.render(cost.Basis)
    }
    
    property get cost () : GL7Cost {
      return getVariableValue("cost", 1) as GL7Cost
    }
    
    property set cost ($arg :  GL7Cost) {
      setVariableValue("cost", 1, $arg)
    }
    
    property get trx () : entity.GL7Transaction {
      return getIteratedValue(1) as entity.GL7Transaction
    }
    
    
  }
  
  
}