package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UpdateSummaryPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($metaDataPresenter :  gw.sbt.pca.view.presenter.MetaDataPresenter, $repo :  gw.sbt.pca.repository.ContentRepository) : void {
    __widgetOf(this, pcf.UpdateSummaryPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$metaDataPresenter, $repo})
  }
  
  function refreshVariables ($metaDataPresenter :  gw.sbt.pca.view.presenter.MetaDataPresenter, $repo :  gw.sbt.pca.repository.ContentRepository) : void {
    __widgetOf(this, pcf.UpdateSummaryPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$metaDataPresenter, $repo})
  }
  
  
}