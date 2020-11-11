package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7SublineSelectionDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7SublineSelectionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on DetailViewPanel (id=GL7SublineSelectionDV) at GL7SublineSelectionDV.pcf: line 7, column 32
    function editable_20 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at GL7SublineSelectionDV.pcf: line 18, column 36
    function initialValue_0 () : gw.lob.gl7.presenters.GL7SublinesPresenter {
      return new gw.lob.gl7.presenters.GL7SublinesPresenter(policyPeriod.GL7Line)
    }
    
    // 'value' attribute on CheckBoxCell (id=subline_Cell) at GL7SublineSelectionDV.pcf: line 37, column 48
    function sortValue_1 (sublineChoice :  gw.lob.gl7.presenters.GL7SublinesPresenter.SublineChoice) : java.lang.Object {
      return sublineChoice.Selected
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7SublineSelectionDV.pcf: line 45, column 47
    function sortValue_2 (sublineChoice :  gw.lob.gl7.presenters.GL7SublinesPresenter.SublineChoice) : java.lang.Object {
      return sublineChoice.Subline
    }
    
    // 'value' attribute on TextCell (id=Jurisdictions_Cell) at GL7SublineSelectionDV.pcf: line 54, column 29
    function sortValue_3 (sublineChoice :  gw.lob.gl7.presenters.GL7SublinesPresenter.SublineChoice) : java.lang.Object {
      return sublineChoice.FormattedJurisdictions
    }
    
    // 'value' attribute on RowIterator at GL7SublineSelectionDV.pcf: line 30, column 104
    function value_19 () : java.util.List<gw.lob.gl7.presenters.GL7SublinesPresenter.SublineChoice> {
      return presenter.Choices
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7SublinesPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7SublinesPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7SublinesPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7SublineSelectionDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Jurisdictions_Cell) at GL7SublineSelectionDV.pcf: line 54, column 29
    function action_13 () : void {
      GL7SublineJurisdictionsPopup.push(policyPeriod, new gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter(policyPeriod.GL7Line, sublineChoice), openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Jurisdictions_Cell) at GL7SublineSelectionDV.pcf: line 54, column 29
    function action_dest_14 () : pcf.api.Destination {
      return pcf.GL7SublineJurisdictionsPopup.createDestination(policyPeriod, new gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter(policyPeriod.GL7Line, sublineChoice), openForEdit)
    }
    
    // 'value' attribute on CheckBoxCell (id=subline_Cell) at GL7SublineSelectionDV.pcf: line 37, column 48
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      sublineChoice.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'onChange' attribute on PostOnChange at GL7SublineSelectionDV.pcf: line 39, column 76
    function onChange_4 () : void {
      presenter.updateJurisdictions(sublineChoice)
    }
    
    // 'value' attribute on CheckBoxCell (id=subline_Cell) at GL7SublineSelectionDV.pcf: line 37, column 48
    function valueRoot_7 () : java.lang.Object {
      return sublineChoice
    }
    
    // 'value' attribute on TextCell (id=Jurisdictions_Cell) at GL7SublineSelectionDV.pcf: line 54, column 29
    function value_15 () : java.lang.String {
      return sublineChoice.FormattedJurisdictions
    }
    
    // 'value' attribute on CheckBoxCell (id=subline_Cell) at GL7SublineSelectionDV.pcf: line 37, column 48
    function value_5 () : java.lang.Boolean {
      return sublineChoice.Selected
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GL7SublineSelectionDV.pcf: line 45, column 47
    function value_9 () : java.lang.String {
      return sublineChoice.Subline
    }
    
    property get sublineChoice () : gw.lob.gl7.presenters.GL7SublinesPresenter.SublineChoice {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7SublinesPresenter.SublineChoice
    }
    
    
  }
  
  
}