<%
uses gw.apd.model.generate.ScheduleDataTypeHelper
%>
<%@ params(schedCov : APDClause) %>
<%for (prop in schedCov.ScheduleItemProperties.where(\f -> f.Type == APDFieldType.TC_PARTY) index i) {%>
<FKScheduledItemPropertyPattern
  codeIdentifier="${prop.CodeIdentifier}"
  column="${ ScheduleDataTypeHelper.FIELD_TYPE_SCHED_COL_NAMES.get(APDFieldType.TC_PARTY)}${i+1}"
  identity="false"
  priority="${prop.Sequence}"
  propertyName="${prop.Name}"
  public-id="${prop.ScheduledItemPropertyPublicId}"
  valueRangeGetter="gw.apd.schedule.APDInvolvedPartyValueRangeGetter"
  required="false"/>
<%}%>