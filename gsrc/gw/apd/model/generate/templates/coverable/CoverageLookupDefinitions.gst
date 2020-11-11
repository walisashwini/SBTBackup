<%@ params(coverable:APDCoverable) %>

${coverable.LookupCovStartTag}
  <LookupTable code="${coverable.QualifiedName}Cov" entityName="${coverable.QualifiedName}CovLookup" root="${coverable.QualifiedName}">
    <Filter field="PolicyLinePatternCode" valuePath="${coverable.QualifiedName}.PolicyLine.PatternCode"/>
    <Dimension field="State" valuePath="${coverable.QualifiedName}.CoverableState" precedence="0"/>
    <Dimension field="UWCompanyCode" valuePath="${coverable.QualifiedName}.Branch.UWCompany.Code" precedence="1"/>
    <Dimension field="JobType" valuePath="${coverable.QualifiedName}.Branch.Job.Subtype" precedence="2"/>
    <DistinguishingField field="CoveragePatternCode"/>
  </LookupTable>
<%if (coverable.Coverages.hasMatch(\cov -> cov.ScheduleLinkedClauseTerms.HasElements)) {%>

  <LookupTable code="${coverable.QualifiedName}ScheduleCovItemCov" entityName="${coverable.QualifiedName}CovLookup" root="${coverable.QualifiedName}ScheduleCovItem">
    <Filter field="PolicyLinePatternCode" valuePath="${coverable.QualifiedName}ScheduleCovItem.PolicyLine.PatternCode"/>
    <Dimension field="State" valuePath="${coverable.QualifiedName}ScheduleCovItem.CoverableState" precedence="0"/>
    <Dimension field="UWCompanyCode" valuePath="${coverable.QualifiedName}ScheduleCovItem.Branch.UWCompany.Code" precedence="1"/>
    <Dimension field="JobType" valuePath="${coverable.QualifiedName}ScheduleCovItem.Branch.Job.Subtype" precedence="2"/>
    <DistinguishingField field="CoveragePatternCode"/>
  </LookupTable>
<%}%>
${coverable.LookupCovEndTag}
<% // needs new line to ensure next tag is on its own line %>
