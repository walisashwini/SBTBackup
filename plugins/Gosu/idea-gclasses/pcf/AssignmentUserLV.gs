package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AssignmentUserLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($GroupUsers :  gw.api.database.IQueryBeanResult<GroupUser>) : void {
    __widgetOf(this, pcf.AssignmentUserLV, SECTION_WIDGET_CLASS).setVariables(false, {$GroupUsers})
  }
  
  function refreshVariables ($GroupUsers :  gw.api.database.IQueryBeanResult<GroupUser>) : void {
    __widgetOf(this, pcf.AssignmentUserLV, SECTION_WIDGET_CLASS).setVariables(true, {$GroupUsers})
  }
  
  
}