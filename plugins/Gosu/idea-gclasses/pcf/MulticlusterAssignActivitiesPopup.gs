package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/MulticlusterAssignActivitiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MulticlusterAssignActivitiesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (assignmentPopup :  gw.api.web.activity.MulticlusterActivityAssignmentPopup) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MulticlusterAssignActivitiesPopup, {assignmentPopup}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.assignment.Assignee) : void {
    __widgetOf(this, pcf.MulticlusterAssignActivitiesPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (assignmentPopup :  gw.api.web.activity.MulticlusterActivityAssignmentPopup) : pcf.api.Location {
    return __newDestinationForLocation(pcf.MulticlusterAssignActivitiesPopup, {assignmentPopup}, 0).push()
  }
  
  
}