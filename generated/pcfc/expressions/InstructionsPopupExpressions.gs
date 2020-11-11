package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InstructionsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InstructionsPanelSetExpressionsImpl extends InstructionsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=FilingInstruction_Input) at InstructionsPopup.pcf: line 56, column 67
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      decisionAndInstructions.FilingInstructions = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=ManualInstruction_Input) at InstructionsPopup.pcf: line 50, column 73
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      decisionAndInstructions.ManualConfigInstructions = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on Label at InstructionsPopup.pcf: line 39, column 36
    function label_4 () : java.lang.String {
      return description
    }
    
    // 'value' attribute on TextAreaInput (id=GwDocumentation_Input) at InstructionsPopup.pcf: line 44, column 64
    function valueRoot_6 () : java.lang.Object {
      return decisionAndInstructions
    }
    
    // 'value' attribute on TextAreaInput (id=FilingInstruction_Input) at InstructionsPopup.pcf: line 56, column 67
    function value_12 () : java.lang.String {
      return decisionAndInstructions.FilingInstructions
    }
    
    // 'value' attribute on TextAreaInput (id=GwDocumentation_Input) at InstructionsPopup.pcf: line 44, column 64
    function value_5 () : java.lang.String {
      return decisionAndInstructions.GwDocumentation
    }
    
    // 'value' attribute on TextAreaInput (id=ManualInstruction_Input) at InstructionsPopup.pcf: line 50, column 73
    function value_8 () : java.lang.String {
      return decisionAndInstructions.ManualConfigInstructions
    }
    
    property get systemInstructions () : String {
      return getVariableValue("systemInstructions", 1) as String
    }
    
    property set systemInstructions ($arg :  String) {
      setVariableValue("systemInstructions", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InstructionsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (decisionAndInstructions :  gw.sbt.model.DecisionAndInstructions, description :  String, readOnly :  boolean) : int {
      return 0
    }
    
    // EditButtons at InstructionsPopup.pcf: line 27, column 41
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'cancelVisible' attribute on EditButtons at InstructionsPopup.pcf: line 27, column 41
    function visible_0 () : java.lang.Boolean {
      return not readOnly
    }
    
    override property get CurrentLocation () : pcf.InstructionsPopup {
      return super.CurrentLocation as pcf.InstructionsPopup
    }
    
    property get decisionAndInstructions () : gw.sbt.model.DecisionAndInstructions {
      return getVariableValue("decisionAndInstructions", 0) as gw.sbt.model.DecisionAndInstructions
    }
    
    property set decisionAndInstructions ($arg :  gw.sbt.model.DecisionAndInstructions) {
      setVariableValue("decisionAndInstructions", 0, $arg)
    }
    
    property get description () : String {
      return getVariableValue("description", 0) as String
    }
    
    property set description ($arg :  String) {
      setVariableValue("description", 0, $arg)
    }
    
    property get readOnly () : boolean {
      return getVariableValue("readOnly", 0) as java.lang.Boolean
    }
    
    property set readOnly ($arg :  boolean) {
      setVariableValue("readOnly", 0, $arg)
    }
    
    
  }
  
  
}