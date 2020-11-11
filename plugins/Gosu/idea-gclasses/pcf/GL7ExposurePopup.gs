package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7ExposurePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7ExposurePresenter, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GL7ExposurePopup, {policyPeriod, presenter, openForEdit, jobWizardHelper}, 0)
  }
  
  static function push (policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7ExposurePresenter, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GL7ExposurePopup, {policyPeriod, presenter, openForEdit, jobWizardHelper}, 0).push()
  }
  
  
}