<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(coverage: APDCoverage) %>
<%var cbl = coverage.Coverable%>
<?xml version="1.0"?>
<import>
  <${cbl.QualifiedName}CovLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <CoveragePatternCode>${cbl.LinePrefix}${coverage.CodeIdentifier}ItemCov</CoveragePatternCode>
    <EndEffectiveDate/>
    <JobType/>
    <PolicyLinePatternCode>${cbl.ProductLine.CodeIdentifier}</PolicyLinePatternCode>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
    <UWCompanyCode/>
  </${cbl.QualifiedName}CovLookup>
<% for (term in coverage.ScheduleLinkedClauseTerms){%>
${TermLookup.renderToString(coverage, term)}
<%}%>
</import>

