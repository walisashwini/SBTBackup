package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobScheduledItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clause :  gw.api.domain.Clause, schedule :  gw.api.domain.Schedule, category :  gw.api.productmodel.CoverageCategory, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, coverageHelper :  gw.lob.common.coverage.CoverageHelper, scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper, scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.LobScheduledItemPopup, {clause, schedule, category, openForEdit, startInEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper, scheduledItemColumnHelper}, 0)
  }
  
  static function push (clause :  gw.api.domain.Clause, schedule :  gw.api.domain.Schedule, category :  gw.api.productmodel.CoverageCategory, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, coverageHelper :  gw.lob.common.coverage.CoverageHelper, scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper, scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.LobScheduledItemPopup, {clause, schedule, category, openForEdit, startInEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper, scheduledItemColumnHelper}, 0).push()
  }
  
  
}