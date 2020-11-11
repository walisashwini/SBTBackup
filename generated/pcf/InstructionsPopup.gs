package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class InstructionsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (decisionAndInstructions :  gw.sbt.model.DecisionAndInstructions, description :  String, readOnly :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.InstructionsPopup, {decisionAndInstructions, description, readOnly}, 0)
  }
  
  static function push (decisionAndInstructions :  gw.sbt.model.DecisionAndInstructions, description :  String, readOnly :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.InstructionsPopup, {decisionAndInstructions, description, readOnly}, 0).push()
  }
  
  
}