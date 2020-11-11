package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.datetime.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideCovTermInputSet_datetimeExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.datetime.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideCovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideCovTermInputSet.datetime.pcf: line 48, column 95
    function colspan_13 () : java.lang.Integer {
      return colWidth
    }
    
    // 'value' attribute on DateInput (id=SideBySideDateTimeCovTermValue_Input) at SideBySideCovTermInputSet.datetime.pcf: line 45, column 37
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.DateValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.datetime.pcf: line 23, column 28
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.CovInfo.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at SideBySideCovTermInputSet.datetime.pcf: line 51, column 68
    function disablePostOnEnter_15 () : java.lang.Boolean {
      return not (covTermInfo.AssociatedPeriodRatedOrQuoted or covTermInfo.AlwaysPostOnChange)
    }
    
    // 'editable' attribute on DateInput (id=SideBySideDateTimeCovTermValue_Input) at SideBySideCovTermInputSet.datetime.pcf: line 45, column 37
    function editable_17 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.Editable
    }
    
    // 'editable' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.datetime.pcf: line 23, column 28
    function editable_2 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.CovInfo.AllowToggle
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.datetime.pcf: line 28, column 68
    function onChange_1 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.datetime.pcf: line 51, column 68
    function onChange_16 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideCovTermInputSet.datetime.pcf: line 25, column 95
    function tdClass_0 () : java.lang.String {
      return "pc-sxs-col-" + (covTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    // 'validationExpression' attribute on DateInput (id=SideBySideDateTimeCovTermValue_Input) at SideBySideCovTermInputSet.datetime.pcf: line 45, column 37
    function validationExpression_18 () : java.lang.Object {
      return (covTermInfo.CovTermPattern.Required and covTermInfo.DateValue == null) ? DisplayKey.get("Web.Job.SideBySide.Errors.RequiredCovTerm", covTermInfo.CovTermPattern.Name) : null
    }
    
    // 'value' attribute on DateInput (id=SideBySideDateTimeCovTermValue_Input) at SideBySideCovTermInputSet.datetime.pcf: line 45, column 37
    function valueRoot_21 () : java.lang.Object {
      return covTermInfo
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.datetime.pcf: line 23, column 28
    function valueRoot_6 () : java.lang.Object {
      return covTermInfo.CovInfo
    }
    
    // 'value' attribute on DateInput (id=SideBySideDateTimeCovTermValue_Input) at SideBySideCovTermInputSet.datetime.pcf: line 45, column 37
    function value_19 () : java.util.Date {
      return covTermInfo.DateValue
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.datetime.pcf: line 23, column 28
    function value_4 () : java.lang.Boolean {
      return covTermInfo.CovInfo.Selected
    }
    
    // 'visible' attribute on TextInput (id=datetimeSpacer_Input) at SideBySideCovTermInputSet.datetime.pcf: line 35, column 29
    function visible_11 () : java.lang.Boolean {
      return !selectable
    }
    
    // 'visible' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.datetime.pcf: line 23, column 28
    function visible_3 () : java.lang.Boolean {
      return selectable
    }
    
    property get colWidth () : int {
      return getRequireValue("colWidth", 0) as java.lang.Integer
    }
    
    property set colWidth ($arg :  int) {
      setRequireValue("colWidth", 0, $arg)
    }
    
    property get covTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getRequireValue("covTermInfo", 0) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    property set covTermInfo ($arg :  gw.job.sxs.SideBySideCovTermInfo) {
      setRequireValue("covTermInfo", 0, $arg)
    }
    
    property get selectable () : boolean {
      return getRequireValue("selectable", 0) as java.lang.Boolean
    }
    
    property set selectable ($arg :  boolean) {
      setRequireValue("selectable", 0, $arg)
    }
    
    
  }
  
  
}