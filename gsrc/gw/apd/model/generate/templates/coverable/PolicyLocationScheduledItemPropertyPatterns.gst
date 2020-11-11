<%
uses gw.apd.model.generate.ScheduleDataTypeHelper
%>
<%@ params(schedCov : APDClause) %>
<%for (prop in schedCov.ScheduleItemProperties.where(\f -> f.Type == APDFieldType.TC_LOCATION) index i) {%>
<FKScheduledItemPropertyPattern
  codeIdentifier="${prop.CodeIdentifier}"
  column="${ScheduleDataTypeHelper.FIELD_TYPE_SCHED_COL_NAMES.get(APDFieldType.TC_LOCATION)}${i+1}"
  identity="false"
  priority="${prop.Sequence}"
  propertyName="${prop.Name}"
  public-id="${prop.ScheduledItemPropertyPublicId}"
  valueRangeGetter="gw.lob.common.schedule.valuerangegetters.PolicyLocationValueRangeGetter"
  required="false"/>
<%}%>
