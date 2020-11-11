package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/BureauCodesDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BureauCodesDetailPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/BureauCodesDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BureauCodesDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (codesPresenter :  gw.sbt.pca.view.presenter.bureau.BureauCodePresenter) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at BureauCodesDetailPopup.pcf: line 15, column 146
    function def_onEnter_0 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(codesPresenter.DecisionAndInstructions, codesPresenter.Description, codesPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at BureauCodesDetailPopup.pcf: line 15, column 146
    function def_refreshVariables_1 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(codesPresenter.DecisionAndInstructions, codesPresenter.Description, codesPresenter.ReadOnly)
    }
    
    // 'title' attribute on Popup (id=BureauCodesDetailPopup) at BureauCodesDetailPopup.pcf: line 7, column 40
    static function title_15 (codesPresenter :  gw.sbt.pca.view.presenter.bureau.BureauCodePresenter) : java.lang.Object {
      return codesPresenter.Description
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at BureauCodesDetailPopup.pcf: line 24, column 79
    function valueRoot_3 () : java.lang.Object {
      return codesPresenter
    }
    
    // 'value' attribute on RowIterator (id=TerritoryCodesRowIterator) at BureauCodesDetailPopup.pcf: line 57, column 110
    function value_14 () : java.util.List<gw.sbt.model.bureau.BureauCode> {
      return codesPresenter.Rows
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at BureauCodesDetailPopup.pcf: line 24, column 79
    function value_2 () : java.lang.String {
      return codesPresenter.Jurisdiction
    }
    
    // 'value' attribute on CellIterator (id=ColumnHeadingIterator) at BureauCodesDetailPopup.pcf: line 40, column 108
    function value_7 () : java.util.List<java.lang.String> {
      return codesPresenter.ColumnHeadings
    }
    
    override property get CurrentLocation () : pcf.BureauCodesDetailPopup {
      return super.CurrentLocation as pcf.BureauCodesDetailPopup
    }
    
    property get codesPresenter () : gw.sbt.pca.view.presenter.bureau.BureauCodePresenter {
      return getVariableValue("codesPresenter", 0) as gw.sbt.pca.view.presenter.bureau.BureauCodePresenter
    }
    
    property set codesPresenter ($arg :  gw.sbt.pca.view.presenter.bureau.BureauCodePresenter) {
      setVariableValue("codesPresenter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/BureauCodesDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends BureauCodesDetailPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at BureauCodesDetailPopup.pcf: line 71, column 104
    function valueRoot_12 () : java.lang.Object {
      return UpdateDiffType.from(row.Intent)
    }
    
    // 'value' attribute on CellIterator (id=RowValuesIterator) at BureauCodesDetailPopup.pcf: line 62, column 82
    function value_10 () : java.lang.String[] {
      return row.Attributes*.Value
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at BureauCodesDetailPopup.pcf: line 71, column 104
    function value_11 () : java.lang.String {
      return UpdateDiffType.from(row.Intent)?.Description
    }
    
    property get row () : gw.sbt.model.bureau.BureauCode {
      return getIteratedValue(1) as gw.sbt.model.bureau.BureauCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/BureauCodesDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ColumnValue_Cell) at BureauCodesDetailPopup.pcf: line 66, column 44
    function value_8 () : java.lang.String {
      return columnValue
    }
    
    property get columnValue () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/BureauCodesDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BureauCodesDetailPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ColumnHeader_Cell) at BureauCodesDetailPopup.pcf: line 43, column 72
    function value_5 () : java.lang.String {
      return columnHeader
    }
    
    property get columnHeader () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  
}