package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UpdateDiffsScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter) : void {
    __widgetOf(this, pcf.UpdateDiffsScreen, SECTION_WIDGET_CLASS).setVariables(false, {$updatePresenter})
  }
  
  function refreshVariables ($updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter) : void {
    __widgetOf(this, pcf.UpdateDiffsScreen, SECTION_WIDGET_CLASS).setVariables(true, {$updatePresenter})
  }
  
  
}