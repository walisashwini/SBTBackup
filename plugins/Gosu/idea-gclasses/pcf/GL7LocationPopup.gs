package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7LocationPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyPeriod :  PolicyPeriod, theAccountLocation :  AccountLocation, location :  PolicyLocation, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GL7LocationPopup, {policyPeriod, theAccountLocation, location, openForEdit, startInEdit, jobWizardHelper}, 0)
  }
  
  function pickValueAndCommit (value :  PolicyLocation) : void {
    __widgetOf(this, pcf.GL7LocationPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (policyPeriod :  PolicyPeriod, theAccountLocation :  AccountLocation, location :  PolicyLocation, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GL7LocationPopup, {policyPeriod, theAccountLocation, location, openForEdit, startInEdit, jobWizardHelper}, 0).push()
  }
  
  
}