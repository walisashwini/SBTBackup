<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(condition: APDCondition) %>
<%var cbl = condition.Coverable%>
<?xml version="1.0"?>
<import>
  <${cbl.LinePrefix}${cbl.TypeName}CondLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <ConditionPatternCode>${cbl.LinePrefix}${condition.CodeIdentifier}</ConditionPatternCode>
    <PolicyLinePatternCode>${cbl.ProductLine.CodeIdentifier}</PolicyLinePatternCode>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
  </${cbl.LinePrefix}${cbl.TypeName}CondLookup>
<% for (term in condition.StandardTerms) {%>
${TermLookup.renderToString(condition, term)}
<%}%>
</import>

