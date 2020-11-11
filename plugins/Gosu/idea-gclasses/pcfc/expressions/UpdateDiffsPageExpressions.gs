package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpdateDiffsPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpdateDiffsPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=UpdateDiffsPage) at UpdateDiffsPage.pcf: line 15, column 91
    function afterCancel_2 () : void {
      AvailableUpdatesPage.go(filterOption, false)
    }
    
    // 'afterCancel' attribute on Page (id=UpdateDiffsPage) at UpdateDiffsPage.pcf: line 15, column 91
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.AvailableUpdatesPage.createDestination(filterOption, false)
    }
    
    // 'beforeCommit' attribute on Page (id=UpdateDiffsPage) at UpdateDiffsPage.pcf: line 15, column 91
    function beforeCommit_4 (pickedValue :  java.lang.Object) : void {
      updatePresenter.saveChanges(typekey.SBTUpdateStatus.TC_INPROGRESS)
    }
    
    // 'def' attribute on ScreenRef at UpdateDiffsPage.pcf: line 25, column 49
    function def_onEnter_0 (def :  pcf.UpdateDiffsScreen) : void {
      def.onEnter(updatePresenter)
    }
    
    // 'def' attribute on ScreenRef at UpdateDiffsPage.pcf: line 25, column 49
    function def_refreshVariables_1 (def :  pcf.UpdateDiffsScreen) : void {
      def.refreshVariables(updatePresenter)
    }
    
    // 'parent' attribute on Page (id=UpdateDiffsPage) at UpdateDiffsPage.pcf: line 15, column 91
    static function parent_5 (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter) : pcf.api.Destination {
      return pcf.AvailableUpdatesPage.createDestination(filterOption, false)
    }
    
    override property get CurrentLocation () : pcf.UpdateDiffsPage {
      return super.CurrentLocation as pcf.UpdateDiffsPage
    }
    
    property get filterOption () : gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION {
      return getVariableValue("filterOption", 0) as gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION
    }
    
    property set filterOption ($arg :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) {
      setVariableValue("filterOption", 0, $arg)
    }
    
    property get updatePresenter () : gw.sbt.pca.view.presenter.UpdatePresenter {
      return getVariableValue("updatePresenter", 0) as gw.sbt.pca.view.presenter.UpdatePresenter
    }
    
    property set updatePresenter ($arg :  gw.sbt.pca.view.presenter.UpdatePresenter) {
      setVariableValue("updatePresenter", 0, $arg)
    }
    
    
  }
  
  
}