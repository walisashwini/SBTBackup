<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(exclusion: APDExclusion) %>
<%var cbl = exclusion.Coverable%>
<?xml version="1.0"?>
<import>
  <${cbl.LinePrefix}${cbl.TypeName}ExclLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <ExclusionPatternCode>${cbl.LinePrefix}${exclusion.CodeIdentifier}</ExclusionPatternCode>
    <PolicyLinePatternCode>${cbl.ProductLine.CodeIdentifier}</PolicyLinePatternCode>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
  </${cbl.LinePrefix}${cbl.TypeName}ExclLookup>
<% for (term in exclusion.StandardTerms) {%>
${TermLookup.renderToString(exclusion, term)}
<%}%>
</import>

