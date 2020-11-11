<%@ params(schedCov : APDClause) %>
<%for (prop in schedCov.ScheduleItemProperties.where(\f -> f.Type == APDFieldType.TC_TYPEKEY) index i) {%>
<TypekeyScheduledItemPropertyPattern
  codeIdentifier="${prop.CodeIdentifier}"
  column="TypeKeyCol${i + 1}"
  identity="false"
  priority="${prop.Sequence}"
  propertyName="${prop.Name}"
  public-id="${prop.ScheduledItemPropertyPublicId}"
  typelist="${prop.TypelistToUse}"
  required="false"/>
<%}%>
