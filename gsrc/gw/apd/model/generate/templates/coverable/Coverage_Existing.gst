<%
uses gw.apd.model.generate.xsd.clausemodel.CoveragePattern
uses org.apache.commons.lang.StringEscapeUtils
%>
<%@ params(coverage: APDCoverage, pmCoverage : CoveragePattern) %>
<%var cbl = coverage.Coverable%>
<?xml version="1.0"?>
<CoveragePattern
  codeIdentifier="${cbl.LinePrefix}${coverage.CodeIdentifier}"
  coverageCategory="${cbl.LinePrefix}${coverage.ClauseCategory.CodeIdentifier}"
  coverageSubtype="${cbl.QualifiedName}${coverage.HasSchedule ? "Schedule" : ""}Cov"
  coveredPartyType="${pmCoverage.CoveredPartyType}"
  existence="${pmCoverage.Existence}"
  lookupTableName="${cbl.QualifiedName}Cov"<%// this is actually the lookup table code%>
  owningEntityType="${cbl.QualifiedName}"
  policyLinePattern="${cbl.ProductLine.CodeIdentifier}"
  priority="${coverage.Sequence}"
  public-id="${cbl.LinePrefix}${coverage.CodeIdentifier}"
  referenceDateByType="${pmCoverage.ReferenceDateByType}">
  <AvailabilityScript>${StringEscapeUtils.escapeXml(pmCoverage.AvailabilityScript?:"")}</AvailabilityScript>
  <ExistenceScript>${StringEscapeUtils.escapeXml(pmCoverage.ExistenceScript?:"")}</ExistenceScript>
  <InitializeScript>${StringEscapeUtils.escapeXml(pmCoverage.InitializeScript?:"")}</InitializeScript>
  <OnRemovalScript>${StringEscapeUtils.escapeXml(pmCoverage.OnRemovalScript?:"")}</OnRemovalScript>
${CoverageTerms_Existing.renderToString(coverage, pmCoverage)}
</CoveragePattern>
