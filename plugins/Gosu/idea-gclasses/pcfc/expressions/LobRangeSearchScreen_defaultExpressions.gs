package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeSearchScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobRangeSearchScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeSearchScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobRangeSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get diaplayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("diaplayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set diaplayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("diaplayable", 0, $arg)
    }
    
    
  }
  
  
}