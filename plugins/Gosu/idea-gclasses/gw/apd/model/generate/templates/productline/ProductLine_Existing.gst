<% uses gw.apd.model.generate.xsd.productlinemodel.PolicyLinePattern
uses gw.api.util.CurrencyUtil
uses org.apache.commons.lang.StringEscapeUtils %>
<%@ params(productLine: APDProductLine, pmLineProduct : PolicyLinePattern) %>
<?xml version="1.0"?>
<PolicyLinePattern
  codeIdentifier="${productLine.CodeIdentifier}"
  policyLineSubtype="${productLine.LinePrefix}${productLine.TypeName}"
  priority="${pmLineProduct.Priority}"
  public-id="${productLine.CodeIdentifier}"
  territoryCodeNeeded="${pmLineProduct.TerritoryCodeNeeded}">
  <AvailableCoverageCurrencies>
<%if (productLine.Currencies == APDCurrencyHandling.TC_DOMESTIC){%>
<%var defaultCurrency = CurrencyUtil.getDefaultCurrency()%>
    <AvailableCoverageCurrency
      codeIdentifier="${productLine.CodeIdentifier}${defaultCurrency.Code}"
      currency="${defaultCurrency.Code}"
      public-id="${productLine.getAvailableCoverageCurrencyPublicId(defaultCurrency)}"/>
<%} else {%>
<% for (ccy in Currency.AllTypeKeys) {%>
    <AvailableCoverageCurrency
      codeIdentifier="${productLine.CodeIdentifier}${ccy.Code}"
      currency="${ccy.Code}"
      public-id="${productLine.getAvailableCoverageCurrencyPublicId(ccy)}"/>
<%}%>
<%}%>
  </AvailableCoverageCurrencies>
  <CoverageCategories>
<%for (category in productLine.AllClauseCategories) {
var priority : String
var matchingPM = pmLineProduct.CoverageCategories.CoverageCategory.firstWhere(\cc -> cc.CodeIdentifier == category.CodeIdentifier)
if (matchingPM != null) priority = matchingPM.Priority.toString()
else priority = "-1"%>
    <CoverageCategory priority="${priority}" codeIdentifier="${productLine.LinePrefix}${category.CodeIdentifier}" public-id="${productLine.LinePrefix}${category.CodeIdentifier}"/>
<%}%>
  </CoverageCategories>
  <CoverageSymbolGroupPatterns>
<%for (sgp in pmLineProduct.CoverageSymbolGroupPatterns.CoverageSymbolGroupPattern) {%>
    <CoverageSymbolGroupPattern
      codeIdentifier="${sgp.CodeIdentifier}"
      priority="${sgp.Priority.toString()}"
      public-id="${sgp.PublicId}">
      <CoverageSymbolPatterns>
<%for (sp in sgp.CoverageSymbolPatterns.CoverageSymbolPattern) {%>
        <CoverageSymbolPattern
          codeIdentifier="${sp.CodeIdentifier}"
          coverageSymbolType="${sp.CoverageSymbolType}"
          public-id="${sp.PublicId}"/>
<%}%>
      </CoverageSymbolPatterns>
<%}%>
  </CoverageSymbolGroupPatterns>
  <InitializeScript>${StringEscapeUtils.escapeXml(pmLineProduct.InitializeScript?:"")}</InitializeScript>
  <ModifierPatterns>
<%for (mp in pmLineProduct.ModifierPatterns.ModifierPattern) {%>
    <AvailabilityScript>${StringEscapeUtils.escapeXml(mp.AvailabilityScript?:"")}</AvailabilityScript>
<%if (mp.ModifierDataType=="rate") {%>
    <ModifierPattern
      codeIdentifier="${mp.CodeIdentifier}"
      defaultMaximum="${mp.DefaultMaximum.toString()}"
      defaultMinimum="${mp.DefaultMinimum.toString()}"
      displayEligibility="${mp.DisplayEligibility.toString()}"
      displayJustification="${mp.DisplayJustification.toString()}"
      displayRange="${mp.DisplayRange.toString()}"
      displayValueFinal="${mp.DisplayValueFinal.toString()}"
      lookupTableName="${mp.LookupTableName}"
      modifierDataType="${mp.ModifierDataType}"
      modifierSubtype="${mp.ModifierSubtype}"
      priority="${mp.Priority.toString()}"
      public-id="${mp.PublicId}"
      referenceDateByType="${mp.ReferenceDateByType}"
      scheduleRate="${mp.ScheduleRate.toString()}"
      splitOnAnniversary="${mp.SplitOnAnniversary.toString()}">
<%if (mp.ScheduleRate == true) {%>
      <RateFactorPatterns>
<%for (rfp in mp.RateFactorPatterns.RateFactorPattern) {%>
        <RateFactorPattern
          codeIdentifier="${rfp.CodeIdentifier}"
          defaultMaximum="${rfp.DefaultMaximum.toString()}"
          defaultMinimum="${rfp.DefaultMinimum.toString()}"
          lookupTableName="${rfp.LookupTableName}"
          priority="${rfp.Priority.toString()}"
          public-id="${rfp.PublicId}"
          rateFactorType="${rfp.RateFactorType}"
          refCode="${rfp.RefCode}"/>
<%}%>
      </RateFactorPatterns>
    </ModifierPattern>
<%}
} else {%>
    <ModifierPattern
      codeIdentifier="${mp.CodeIdentifier}"
      displayJustification="${mp.DisplayJustification.toString()}"
      lookupTableName="${mp.LookupTableName}"
      modifierDataType="${mp.ModifierDataType}"
      modifierSubtype="${mp.ModifierSubtype}"
      priority="${mp.Priority.toString()}"
      public-id="${mp.PublicId}"
<%if (mp.ModifierDataType=="typekey"){%>
      referenceDateByType="${mp.ReferenceDateByType}"
      typeList="${mp.TypeList}>
<%} else {%>
      referenceDateByType="${mp.ReferenceDateByType}">
<%}%>
<%}
}%>
  </ModifierPatterns>
<%// note that Official ID Patterns are currently not supported outside of north america as they need states %>
</PolicyLinePattern>