package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobRangeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobRangeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (displayable :  gw.lob.common.displayable.LobDisplayable) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at LobRangeSearchPopup.pcf: line 16, column 37
    function def_onEnter_0 (def :  pcf.LobRangeSearchScreen_default) : void {
      def.onEnter(displayable)
    }
    
    // 'def' attribute on ScreenRef at LobRangeSearchPopup.pcf: line 16, column 37
    function def_refreshVariables_1 (def :  pcf.LobRangeSearchScreen_default) : void {
      def.refreshVariables(displayable)
    }
    
    // 'mode' attribute on ScreenRef at LobRangeSearchPopup.pcf: line 16, column 37
    function mode_2 () : java.lang.Object {
      return displayable.PopupMode
    }
    
    // 'title' attribute on Popup (id=LobRangeSearchPopup) at LobRangeSearchPopup.pcf: line 8, column 100
    static function title_3 (displayable :  gw.lob.common.displayable.LobDisplayable) : java.lang.Object {
      return DisplayKey.get("Web.Policy.Common.DataModel.SearchTitle", displayable.Label)
    }
    
    override property get CurrentLocation () : pcf.LobRangeSearchPopup {
      return super.CurrentLocation as pcf.LobRangeSearchPopup
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getVariableValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setVariableValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}