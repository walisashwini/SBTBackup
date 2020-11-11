<%@ params(clause: APDClause) %>
<Schedules>
  <ClauseSchedulePattern
    codeIdentifier="${clause.Coverable.LinePrefix}${clause.CodeIdentifier}Schedule"
    priority="1"
    public-id="${clause.Coverable.LinePrefix}${clause.CodeIdentifier}Schedule"
    required="false"
    scheduledItemType="${clause.Coverable.QualifiedName}ScheduleCovItem">
<%if (clause.ScheduleItemProperties.HasElements) {%>
    <ScheduledItemProperties>
       ${ScheduledItemPropertyPatterns.renderToString(clause, APDFieldType.TC_BOOLEAN)}
       ${ScheduledItemPropertyPatterns.renderToString(clause, APDFieldType.TC_VARCHAR)}
       ${ScheduledItemPropertyPatterns.renderToString(clause, APDFieldType.TC_DATE)}
       ${ScheduledItemPropertyPatterns.renderToString(clause, APDFieldType.TC_INTEGER)}
       ${TypeKeyScheduledItemPropertyPatterns.renderToString(clause)}
       ${PolicyLocationScheduledItemPropertyPatterns.renderToString(clause)}
       ${NamedInsuredScheduledItemPropertyPatterns.renderToString(clause)}
    </ScheduledItemProperties>
<%}%>
<%if (clause.ScheduleLinkedClauseTerms.HasElements) {%>
    <ScheduledItemClauseLinkages>
      <ScheduledItemClauseLink
        codeIdentifier="${clause.Coverable.LinePrefix}${clause.CodeIdentifier}ScheduleLink"
        linkedClausePattern="${clause.Coverable.LinePrefix}${clause.CodeIdentifier}ItemCov"
        public-id="${clause.Coverable.LinePrefix}${clause.CodeIdentifier}ScheduleLink"/>
    </ScheduledItemClauseLinkages>
<%}%>
  </ClauseSchedulePattern>
</Schedules>