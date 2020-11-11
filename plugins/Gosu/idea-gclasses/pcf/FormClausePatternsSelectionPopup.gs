package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternsSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FormClausePatternsSelectionPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (formPattern :  FormPattern, clausePatternCodes :  String[]) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FormClausePatternsSelectionPopup, {formPattern, clausePatternCodes}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.productmodel.ClausePattern[]) : void {
    __widgetOf(this, pcf.FormClausePatternsSelectionPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (formPattern :  FormPattern, clausePatternCodes :  String[]) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FormClausePatternsSelectionPopup, {formPattern, clausePatternCodes}, 0).push()
  }
  
  
}