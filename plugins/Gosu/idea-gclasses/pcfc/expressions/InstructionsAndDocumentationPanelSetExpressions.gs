package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsAndDocumentationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InstructionsAndDocumentationPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsAndDocumentationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InstructionsAndDocumentationPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BooleanRadioCell (id=InstructionsPopupCell_Cell) at InstructionsAndDocumentationPanelSet.pcf: line 32, column 45
    function action_0 () : void {
      InstructionsPopup.push(decisionAndInstructions, description, readOnly)
    }
    
    // 'action' attribute on BooleanRadioCell (id=InstructionsPopupCell_Cell) at InstructionsAndDocumentationPanelSet.pcf: line 32, column 45
    function action_dest_1 () : pcf.api.Destination {
      return pcf.InstructionsPopup.createDestination(decisionAndInstructions, description, readOnly)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=InstructionsPopupCell_Cell) at InstructionsAndDocumentationPanelSet.pcf: line 32, column 45
    function iconLabel_2 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getInstructionsTooltips(decisionAndInstructions)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=InstructionsPopupCell_Cell) at InstructionsAndDocumentationPanelSet.pcf: line 32, column 45
    function icon_3 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getInstructionsIconName(decisionAndInstructions)
    }
    
    property get decisionAndInstructions () : gw.sbt.model.DecisionAndInstructions {
      return getRequireValue("decisionAndInstructions", 0) as gw.sbt.model.DecisionAndInstructions
    }
    
    property set decisionAndInstructions ($arg :  gw.sbt.model.DecisionAndInstructions) {
      setRequireValue("decisionAndInstructions", 0, $arg)
    }
    
    property get description () : String {
      return getRequireValue("description", 0) as String
    }
    
    property set description ($arg :  String) {
      setRequireValue("description", 0, $arg)
    }
    
    property get readOnly () : boolean {
      return getRequireValue("readOnly", 0) as java.lang.Boolean
    }
    
    property set readOnly ($arg :  boolean) {
      setRequireValue("readOnly", 0, $arg)
    }
    
    
  }
  
  
}