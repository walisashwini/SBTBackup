package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingOverrideCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7RatingOverrideCostRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($costs :  List<entity.GL7Cost>, $presenter :  gw.lob.gl7.presenters.GL7RatingOverridePresenter, $title :  String, $isEditable :  boolean) : void {
    __widgetOf(this, pcf.GL7RatingOverrideCostRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$costs, $presenter, $title, $isEditable})
  }
  
  function refreshVariables ($costs :  List<entity.GL7Cost>, $presenter :  gw.lob.gl7.presenters.GL7RatingOverridePresenter, $title :  String, $isEditable :  boolean) : void {
    __widgetOf(this, pcf.GL7RatingOverrideCostRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$costs, $presenter, $title, $isEditable})
  }
  
  
}