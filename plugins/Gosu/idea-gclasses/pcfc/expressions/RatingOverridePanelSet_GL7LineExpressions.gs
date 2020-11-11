package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingOverridePanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverridePanelSet_GL7LineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingOverridePanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends RatingOverridePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=sublineTypeCosts) at RatingOverridePanelSet.GL7Line.pcf: line 145, column 32
    function def_onEnter_16 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.onEnter(presenter.SublineTypeCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.GeneralLiability"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=sublineCosts) at RatingOverridePanelSet.GL7Line.pcf: line 148, column 28
    function def_onEnter_18 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.onEnter(presenter.SublineCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.StateSpecificInformation"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=locaitonCosts) at RatingOverridePanelSet.GL7Line.pcf: line 151, column 29
    function def_onEnter_20 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.onEnter(presenter.LocationCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.Location"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=exposureCosts) at RatingOverridePanelSet.GL7Line.pcf: line 154, column 29
    function def_onEnter_22 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.onEnter(presenter.ExposureCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.Exposures"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=unmannedAircraftCosts) at RatingOverridePanelSet.GL7Line.pcf: line 157, column 37
    function def_onEnter_24 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.onEnter(presenter.UnmannedAircraftCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.UnmannedAircraft"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=sublineTypeCosts) at RatingOverridePanelSet.GL7Line.pcf: line 145, column 32
    function def_refreshVariables_17 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.refreshVariables(presenter.SublineTypeCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.GeneralLiability"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=sublineCosts) at RatingOverridePanelSet.GL7Line.pcf: line 148, column 28
    function def_refreshVariables_19 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.refreshVariables(presenter.SublineCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.StateSpecificInformation"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=locaitonCosts) at RatingOverridePanelSet.GL7Line.pcf: line 151, column 29
    function def_refreshVariables_21 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.refreshVariables(presenter.LocationCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.Location"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=exposureCosts) at RatingOverridePanelSet.GL7Line.pcf: line 154, column 29
    function def_refreshVariables_23 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.refreshVariables(presenter.ExposureCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.Exposures"), isEditable)
    }
    
    // 'def' attribute on RowSetRef (id=unmannedAircraftCosts) at RatingOverridePanelSet.GL7Line.pcf: line 157, column 37
    function def_refreshVariables_25 (def :  pcf.GL7RatingOverrideCostRowSet) : void {
      def.refreshVariables(presenter.UnmannedAircraftCosts, presenter, DisplayKey.get("Web.Policy.GL7.Financials.UnmannedAircraft"), isEditable)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 43, column 34
    function initialValue_7 () : java.lang.String {
      return java.lang.System.getProperty('line.separator')
    }
    
    // 'value' attribute on TextCell (id=EmptyHeader1_Cell) at RatingOverridePanelSet.GL7Line.pcf: line 49, column 34
    function value_8 () : java.lang.String {
      return lineSeparator
    }
    
    property get lineSeparator () : java.lang.String {
      return getVariableValue("lineSeparator", 1) as java.lang.String
    }
    
    property set lineSeparator ($arg :  java.lang.String) {
      setVariableValue("lineSeparator", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/RatingOverridePanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverridePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 14, column 23
    function initialValue_0 () : GL7Line {
      return period.GL7Line
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 18, column 64
    function initialValue_1 () : gw.lob.gl7.presenters.GL7RatingOverridePresenter {
      return new gw.lob.gl7.presenters.GL7RatingOverridePresenter(period)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 22, column 57
    function initialValue_2 () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return new gw.lob.gl7.financials.GL7QuoteDisplayUtil(line)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 26, column 97
    function initialValue_3 () : java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>> {
      return quoteDisplayUtil.CoverablesWithCostsByType
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 30, column 90
    function initialValue_4 () : java.util.Map<entity.Coverable, java.util.List<entity.GL7Cost>> {
      return quoteDisplayUtil.CostByCoverable
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 34, column 52
    function initialValue_5 () : java.util.List<entity.GL7Cost> {
      return costsByCbl.get(line)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.GL7Line.pcf: line 38, column 23
    function initialValue_6 () : boolean {
      return CurrentLocation.InEditMode
    }
    
    property get cblByType () : java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>> {
      return getVariableValue("cblByType", 0) as java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>>
    }
    
    property set cblByType ($arg :  java.util.Map<gw.lang.reflect.IType, java.util.List<entity.Coverable>>) {
      setVariableValue("cblByType", 0, $arg)
    }
    
    property get costsByCbl () : java.util.Map<entity.Coverable, java.util.List<entity.GL7Cost>> {
      return getVariableValue("costsByCbl", 0) as java.util.Map<entity.Coverable, java.util.List<entity.GL7Cost>>
    }
    
    property set costsByCbl ($arg :  java.util.Map<entity.Coverable, java.util.List<entity.GL7Cost>>) {
      setVariableValue("costsByCbl", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getVariableValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setVariableValue("isEditable", 0, $arg)
    }
    
    property get line () : GL7Line {
      return getVariableValue("line", 0) as GL7Line
    }
    
    property set line ($arg :  GL7Line) {
      setVariableValue("line", 0, $arg)
    }
    
    property get lineLevelCosts () : java.util.List<entity.GL7Cost> {
      return getVariableValue("lineLevelCosts", 0) as java.util.List<entity.GL7Cost>
    }
    
    property set lineLevelCosts ($arg :  java.util.List<entity.GL7Cost>) {
      setVariableValue("lineLevelCosts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7RatingOverridePresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7RatingOverridePresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7RatingOverridePresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.gl7.financials.GL7QuoteDisplayUtil {
      return getVariableValue("quoteDisplayUtil", 0) as gw.lob.gl7.financials.GL7QuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) {
      setVariableValue("quoteDisplayUtil", 0, $arg)
    }
    
    
  }
  
  
}