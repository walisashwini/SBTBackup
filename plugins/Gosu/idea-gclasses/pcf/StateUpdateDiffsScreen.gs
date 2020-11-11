package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StateUpdateDiffsScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($sbtUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter) : void {
    __widgetOf(this, pcf.StateUpdateDiffsScreen, SECTION_WIDGET_CLASS).setVariables(false, {$sbtUpdatePresenter})
  }
  
  function refreshVariables ($sbtUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter) : void {
    __widgetOf(this, pcf.StateUpdateDiffsScreen, SECTION_WIDGET_CLASS).setVariables(true, {$sbtUpdatePresenter})
  }
  
  
}