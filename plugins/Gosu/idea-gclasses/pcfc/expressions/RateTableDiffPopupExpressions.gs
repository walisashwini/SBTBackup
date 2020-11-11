package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/RateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/RateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateTableDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NewRate_Cell) at RateTableDiffPopup.pcf: line 86, column 153
    function valueRoot_22 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on CellIterator (id=ParameterIterator) at RateTableDiffPopup.pcf: line 75, column 68
    function value_19 () : gw.util.IOrderedList<String> {
      return row.ParameterValues
    }
    
    // 'value' attribute on TextCell (id=NewRate_Cell) at RateTableDiffPopup.pcf: line 86, column 153
    function value_21 () : java.lang.String {
      return row.Rate
    }
    
    // 'valueVisible' attribute on TextCell (id=NewRate_Cell) at RateTableDiffPopup.pcf: line 86, column 153
    function visible_20 () : java.lang.Boolean {
      return true // TODO: row.IsDelete ? row.DestFactorValue.toString() != factor.toString(): true
    }
    
    property get row () : gw.sbt.model.rating.FactorRow {
      return getIteratedValue(1) as gw.sbt.model.rating.FactorRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/RateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ParameterValue_Cell) at RateTableDiffPopup.pcf: line 80, column 38
    function value_17 () : java.lang.String {
      return param
    }
    
    property get param () : String {
      return getIteratedValue(2) as String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/RateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateTableDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RateParameterHeader_Cell) at RateTableDiffPopup.pcf: line 55, column 71
    function value_11 () : java.lang.String {
      return paramHeader
    }
    
    property get paramHeader () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/RateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rateTablePresenter :  gw.sbt.pca.view.presenter.rating.RateTablePresenter) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at RateTableDiffPopup.pcf: line 15, column 158
    function def_onEnter_0 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(rateTablePresenter.DecisionAndInstructions, rateTablePresenter.Description, rateTablePresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at RateTableDiffPopup.pcf: line 15, column 158
    function def_refreshVariables_1 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(rateTablePresenter.DecisionAndInstructions, rateTablePresenter.Description, rateTablePresenter.ReadOnly)
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at RateTableDiffPopup.pcf: line 24, column 83
    function valueRoot_3 () : java.lang.Object {
      return rateTablePresenter
    }
    
    // 'value' attribute on CellIterator (id=RateParameterHeadingIterator) at RateTableDiffPopup.pcf: line 52, column 112
    function value_13 () : java.util.List<java.lang.String> {
      return rateTablePresenter.ParameterNames
    }
    
    // 'value' attribute on TextCell (id=NewValueHeader_Cell) at RateTableDiffPopup.pcf: line 60, column 87
    function value_14 () : java.lang.String {
      return rateTablePresenter.FactorName
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at RateTableDiffPopup.pcf: line 24, column 83
    function value_2 () : java.lang.String {
      return rateTablePresenter.Jurisdiction
    }
    
    // 'value' attribute on RowIterator (id=RateTableRowIterator) at RateTableDiffPopup.pcf: line 69, column 113
    function value_24 () : java.util.List<gw.sbt.model.rating.FactorRow> {
      return rateTablePresenter.Rows
    }
    
    // 'value' attribute on TextInput (id=Line_Input) at RateTableDiffPopup.pcf: line 30, column 82
    function value_5 () : java.lang.String {
      return rateTablePresenter.Description
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at RateTableDiffPopup.pcf: line 36, column 78
    function value_8 () : java.lang.String {
      return rateTablePresenter.Edition
    }
    
    override property get CurrentLocation () : pcf.RateTableDiffPopup {
      return super.CurrentLocation as pcf.RateTableDiffPopup
    }
    
    property get rateTablePresenter () : gw.sbt.pca.view.presenter.rating.RateTablePresenter {
      return getVariableValue("rateTablePresenter", 0) as gw.sbt.pca.view.presenter.rating.RateTablePresenter
    }
    
    property set rateTablePresenter ($arg :  gw.sbt.pca.view.presenter.rating.RateTablePresenter) {
      setVariableValue("rateTablePresenter", 0, $arg)
    }
    
    
  }
  
  
}