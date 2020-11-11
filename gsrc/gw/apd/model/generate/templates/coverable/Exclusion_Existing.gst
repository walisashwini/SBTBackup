<%
uses gw.apd.model.generate.xsd.clausemodel.ExclusionPattern
%>
<%@ params(exclusion: APDExclusion, pmExclusion : ExclusionPattern) %>
<%var cbl = exclusion.Coverable%>
<?xml version="1.0"?>
<ExclusionPattern
  codeIdentifier="${cbl.LinePrefix}${exclusion.CodeIdentifier}"
  coverageCategory="${cbl.LinePrefix}${exclusion.ClauseCategory.CodeIdentifier}"
  exclusionSubtype="${cbl.LinePrefix}${cbl.TypeName}Excl"
  existence="${pmExclusion.Existence}"
  lookupTableName="${cbl.LinePrefix}${cbl.TypeName}Excl"<%// this is actually the lookup table code%>
  owningEntityType="${cbl.LinePrefix}${cbl.TypeName}"
  policyLinePattern="${cbl.ProductLine.CodeIdentifier}"
  priority="${exclusion.Sequence}"
  public-id="${cbl.LinePrefix}${exclusion.CodeIdentifier}"
  referenceDateByType="${pmExclusion.ReferenceDateByType}">
${ExclusionTerms_Existing.renderToString(exclusion, pmExclusion)}
</ExclusionPattern>
