package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateDiffsPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateDiffsPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=StateUpdateDiffsPage) at StateUpdateDiffsPage.pcf: line 15, column 91
    function afterCancel_2 () : void {
      AvailableUpdatesPage.go(filterOption, false)
    }
    
    // 'afterCancel' attribute on Page (id=StateUpdateDiffsPage) at StateUpdateDiffsPage.pcf: line 15, column 91
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.AvailableUpdatesPage.createDestination(filterOption, false)
    }
    
    // 'beforeCommit' attribute on Page (id=StateUpdateDiffsPage) at StateUpdateDiffsPage.pcf: line 15, column 91
    function beforeCommit_4 (pickedValue :  java.lang.Object) : void {
      stateUpdatePresenter.saveChanges(typekey.SBTUpdateStatus.TC_INPROGRESS)
    }
    
    // 'def' attribute on ScreenRef at StateUpdateDiffsPage.pcf: line 25, column 59
    function def_onEnter_0 (def :  pcf.StateUpdateDiffsScreen) : void {
      def.onEnter(stateUpdatePresenter)
    }
    
    // 'def' attribute on ScreenRef at StateUpdateDiffsPage.pcf: line 25, column 59
    function def_refreshVariables_1 (def :  pcf.StateUpdateDiffsScreen) : void {
      def.refreshVariables(stateUpdatePresenter)
    }
    
    // 'parent' attribute on Page (id=StateUpdateDiffsPage) at StateUpdateDiffsPage.pcf: line 15, column 91
    static function parent_5 (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter) : pcf.api.Destination {
      return pcf.AvailableUpdatesPage.createDestination(filterOption, false)
    }
    
    override property get CurrentLocation () : pcf.StateUpdateDiffsPage {
      return super.CurrentLocation as pcf.StateUpdateDiffsPage
    }
    
    property get filterOption () : gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION {
      return getVariableValue("filterOption", 0) as gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION
    }
    
    property set filterOption ($arg :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) {
      setVariableValue("filterOption", 0, $arg)
    }
    
    property get stateUpdatePresenter () : gw.sbt.pca.view.presenter.compare.StateUpdatePresenter {
      return getVariableValue("stateUpdatePresenter", 0) as gw.sbt.pca.view.presenter.compare.StateUpdatePresenter
    }
    
    property set stateUpdatePresenter ($arg :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter) {
      setVariableValue("stateUpdatePresenter", 0, $arg)
    }
    
    
  }
  
  
}