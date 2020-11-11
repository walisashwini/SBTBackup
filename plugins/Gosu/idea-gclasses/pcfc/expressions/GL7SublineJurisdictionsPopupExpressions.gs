package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineJurisdictionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7SublineJurisdictionsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineJurisdictionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7SublineJurisdictionsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter, openForEdit :  boolean) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=GL7SublineJurisdictionsPopup) at GL7SublineJurisdictionsPopup.pcf: line 10, column 91
    function afterCommit_9 (TopLocation :  pcf.api.Location) : void {
      presenter.updateSelectedJurisdictionsForSubline()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=UpdateStatesButton) at GL7SublineJurisdictionsPopup.pcf: line 37, column 64
    function allCheckedRowsAction_0 (CheckedValues :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter.JurisdictionChoice[], CheckedValuesErrors :  java.util.Map) : void {
      presenter.updateSelectedChoicesFrom(CheckedValues); CurrentLocation.commit()
    }
    
    // EditButtons at GL7SublineJurisdictionsPopup.pcf: line 40, column 40
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=jurisdictionDescription_Cell) at GL7SublineJurisdictionsPopup.pcf: line 57, column 73
    function sortValue_3 (jurisdictionChoice :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter.JurisdictionChoice) : java.lang.Object {
      return jurisdictionChoice.JurisdictionDescription
    }
    
    // 'startChecked' attribute on RowIterator (id=JurisdictionIterator) at GL7SublineJurisdictionsPopup.pcf: line 52, column 125
    function startChecked_8 (jurisdictionChoice :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter.JurisdictionChoice) : java.lang.Boolean {
      return jurisdictionChoice.Selected
    }
    
    // 'title' attribute on Popup (id=GL7SublineJurisdictionsPopup) at GL7SublineJurisdictionsPopup.pcf: line 10, column 91
    static function title_11 (openForEdit :  boolean, policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter) : java.lang.Object {
      return DisplayKey.get("Web.Policy.GL7.AvailableStates", presenter.Subline)
    }
    
    // 'value' attribute on RowIterator (id=JurisdictionIterator) at GL7SublineJurisdictionsPopup.pcf: line 52, column 125
    function value_7 () : java.util.List<gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter.JurisdictionChoice> {
      return presenter.Choices
    }
    
    // 'visible' attribute on Toolbar at GL7SublineJurisdictionsPopup.pcf: line 31, column 37
    function visible_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    override property get CurrentLocation () : pcf.GL7SublineJurisdictionsPopup {
      return super.CurrentLocation as pcf.GL7SublineJurisdictionsPopup
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineJurisdictionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7SublineJurisdictionsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=jurisdictionDescription_Cell) at GL7SublineJurisdictionsPopup.pcf: line 57, column 73
    function valueRoot_5 () : java.lang.Object {
      return jurisdictionChoice
    }
    
    // 'value' attribute on TextCell (id=jurisdictionDescription_Cell) at GL7SublineJurisdictionsPopup.pcf: line 57, column 73
    function value_4 () : java.lang.String {
      return jurisdictionChoice.JurisdictionDescription
    }
    
    property get jurisdictionChoice () : gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter.JurisdictionChoice {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter.JurisdictionChoice
    }
    
    
  }
  
  
}