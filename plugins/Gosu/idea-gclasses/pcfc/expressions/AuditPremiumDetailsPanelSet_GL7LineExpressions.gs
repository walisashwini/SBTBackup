package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditPremiumDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditPremiumDetailsPanelSet_GL7LineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditPremiumDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditPremiumDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 21, column 36
    function initialValue_0 () : gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter {
      return new gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter(period)
    }
    
    // 'sortBy' attribute on IteratorSort at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 28, column 24
    function sortBy_1 (jursidiction :  typekey.Jurisdiction) : java.lang.Object {
      return jursidiction.DisplayName
    }
    
    // 'value' attribute on PanelIterator at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 25, column 42
    function value_50 () : typekey.Jurisdiction[] {
      return presenter.Jurisdictions
    }
    
    property get auditInfo () : AuditInformation {
      return getRequireValue("auditInfo", 0) as AuditInformation
    }
    
    property set auditInfo ($arg :  AuditInformation) {
      setRequireValue("auditInfo", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditPremiumDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposurePremiumDetailsLVExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 44, column 142
    function initialValue_3 () : java.util.Map<entity.GL7Cost, gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation> {
      return presenter.costVersionsForDisplay(jursidiction)
    }
    
    // 'sortBy' attribute on IteratorSort at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 80, column 36
    function sortBy_6 (cost :  entity.GL7Cost) : java.lang.Object {
      return exposureCostsWithAmounts.get(cost).Order
    }
    
    // 'value' attribute on TextCell (id=Empty1_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 50, column 77
    function value_4 () : java.lang.String {
      return java.lang.System.getProperty('line.separator')
    }
    
    // 'value' attribute on RowIterator at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 69, column 48
    function value_43 () : entity.GL7Cost[] {
      return exposureCostsWithAmounts.Keys.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=EstimatedSubtotal_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 182, column 64
    function value_44 () : gw.pl.currency.MonetaryAmount {
      return exposureCostsWithAmounts.Values*.EstimatedAmount.sum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextCell (id=AuditedSubtotal_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 187, column 64
    function value_46 () : gw.pl.currency.MonetaryAmount {
      return exposureCostsWithAmounts.Values*.AuditedAmount.sum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextCell (id=CostChangeSubtotal_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 192, column 64
    function value_48 () : gw.pl.currency.MonetaryAmount {
      return exposureCostsWithAmounts.Values*.CostChange.sum(period.PreferredSettlementCurrency)
    }
    
    property get exposureCostsWithAmounts () : java.util.Map<entity.GL7Cost, gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation> {
      return getVariableValue("exposureCostsWithAmounts", 2) as java.util.Map<entity.GL7Cost, gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation>
    }
    
    property set exposureCostsWithAmounts ($arg :  java.util.Map<entity.GL7Cost, gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation>) {
      setVariableValue("exposureCostsWithAmounts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditPremiumDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ExposurePremiumDetailsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 73, column 48
    function initialValue_7 () : entity.GL7Location {
      return presenter.locationForExposureCost(cost)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 77, column 107
    function initialValue_8 () : gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation {
      return exposureCostsWithAmounts.get(cost)
    }
    
    // RowIterator at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 69, column 48
    function initializeVariables_42 () : void {
        expLocation = presenter.locationForExposureCost(cost);
  amountInfo = exposureCostsWithAmounts.get(cost);

    }
    
    // 'value' attribute on TextCell (id=LocIndex_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 87, column 65
    function valueRoot_10 () : java.lang.Object {
      return expLocation.Location
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 98, column 70
    function valueRoot_15 () : java.lang.Object {
      return cost.Coverage
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 108, column 51
    function valueRoot_20 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=EstimatedPremium_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 145, column 66
    function valueRoot_34 () : java.lang.Object {
      return amountInfo
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 92, column 61
    function value_12 () : java.lang.String {
      return presenter.getClassCode(cost)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 98, column 70
    function value_14 () : gw.api.productmodel.ClausePattern {
      return cost.Coverage.Pattern
    }
    
    // 'value' attribute on TextCell (id=Subline_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 103, column 63
    function value_17 () : java.lang.String {
      return presenter.sublineForCost(cost)
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 108, column 51
    function value_19 () : java.util.Date {
      return cost.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ToDate_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 113, column 52
    function value_22 () : java.util.Date {
      return cost.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 119, column 112
    function value_25 () : java.lang.String {
      return presenter.showProration(cost) ? presenter.getCostProration(cost) : ""
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 125, column 63
    function value_27 () : java.lang.String {
      return presenter.blankIfRateOne(cost)
    }
    
    // 'value' attribute on TextCell (id=EstimatedBasis_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 131, column 124
    function value_29 () : java.lang.String {
      return amountInfo.EstimatedAmountMissing ? "" : presenter.blankIfBasisZero(cost.BasedOn)
    }
    
    // 'value' attribute on TextCell (id=AuditedBasis_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 137, column 113
    function value_31 () : java.lang.String {
      return cost.ActualAdjRate != java.math.BigDecimal.ONE?cost.Basis as String:""
    }
    
    // 'value' attribute on TextCell (id=EstimatedPremium_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 145, column 66
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return amountInfo.EstimatedAmount
    }
    
    // 'value' attribute on TextCell (id=AuditedPremium_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 153, column 66
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return amountInfo.AuditedAmount
    }
    
    // 'value' attribute on TextCell (id=Change_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 161, column 66
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return amountInfo.CostChange
    }
    
    // 'value' attribute on TextCell (id=LocIndex_Cell) at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 87, column 65
    function value_9 () : java.lang.String {
      return expLocation.Location.DisplayName
    }
    
    property get amountInfo () : gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation {
      return getVariableValue("amountInfo", 3) as gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation
    }
    
    property set amountInfo ($arg :  gw.lob.gl7.presenters.GL7AuditPremiumDetailsPresenter.AuditPremiumInformation) {
      setVariableValue("amountInfo", 3, $arg)
    }
    
    property get cost () : entity.GL7Cost {
      return getIteratedValue(3) as entity.GL7Cost
    }
    
    property get expLocation () : entity.GL7Location {
      return getVariableValue("expLocation", 3) as entity.GL7Location
    }
    
    property set expLocation ($arg :  entity.GL7Location) {
      setVariableValue("expLocation", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/AuditPremiumDetailsPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends AuditPremiumDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'title' attribute on TitleBar at AuditPremiumDetailsPanelSet.GL7Line.pcf: line 31, column 45
    function title_2 () : java.lang.String {
      return jursidiction.DisplayName
    }
    
    property get jursidiction () : typekey.Jurisdiction {
      return getIteratedValue(1) as typekey.Jurisdiction
    }
    
    
  }
  
  
}