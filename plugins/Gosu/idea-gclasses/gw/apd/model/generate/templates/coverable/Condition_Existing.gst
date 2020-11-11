<%
uses gw.apd.model.generate.xsd.clausemodel.ConditionPattern
%>
<%@ params(condition: APDCondition, pmCondition : ConditionPattern) %>
<%var cbl = condition.Coverable%>
<?xml version="1.0"?>
<ConditionPattern
  codeIdentifier="${cbl.LinePrefix}${condition.CodeIdentifier}"
  coverageCategory="${cbl.LinePrefix}${condition.ClauseCategory.CodeIdentifier}"
  conditionSubtype="${cbl.LinePrefix}${cbl.TypeName}Cond"
  existence="${pmCondition.Existence}"
  lookupTableName="${cbl.LinePrefix}${cbl.TypeName}Cond"<%// this is actually the lookup table code%>
  owningEntityType="${cbl.LinePrefix}${cbl.TypeName}"
  policyLinePattern="${cbl.ProductLine.CodeIdentifier}"
  priority="${condition.Sequence}"
  public-id="${cbl.LinePrefix}${condition.CodeIdentifier}"
  referenceDateByType="${pmCondition.ReferenceDateByType}">
${ConditionTerms_Existing.renderToString(condition, pmCondition)}
</ConditionPattern>
