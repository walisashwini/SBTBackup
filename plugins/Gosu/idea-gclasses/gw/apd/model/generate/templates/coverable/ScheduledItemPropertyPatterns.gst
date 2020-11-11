<%@ params(schedCov : APDClause, type : APDFieldType) %>
<%var fieldTypeColumnNames : Map = {APDFieldType.TC_BOOLEAN -> "BoolCol",
                                    APDFieldType.TC_VARCHAR -> "StringCol",
                                    APDFieldType.TC_DATE -> "DateCol",
                                    APDFieldType.TC_INTEGER -> "IntCol"} %>
<%for (prop in schedCov.ScheduleItemProperties.where(\f -> f.Type == type) index i) {%>
<ScheduledItemPropertyPattern
  codeIdentifier="${prop.CodeIdentifier}"
  column="${fieldTypeColumnNames[type]}${i + 1}"
  identity="false"
  priority="${prop.Sequence}"
  propertyName="${prop.Name}"
  public-id="${prop.ScheduledItemPropertyPublicId}"
  required="false"/>
<%}%>
