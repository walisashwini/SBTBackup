<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(product: APDProduct) %>
<?xml version="1.0"?>
<Product
  abbreviation="${product.Abbreviation}"
  codeIdentifier="${product.CodeIdentifier}"
  daysUntilQuoteNeeded="14"
  defaultTermType="Annual"
  priority="0"
  productAccountType="${product.ProductAccountType}"
  productType="Commercial"
  public-id="${product.CodeIdentifier}"
  quoteRoundingLevel="0"
  quoteRoundingMode="HALF_EVEN">
  <AvailablePolicyTerms>
    <AvailablePolicyTerm
<%var otherTermID = PublicIdGenerator.instance().generateId()%>
      codeIdentifier="${otherTermID}"
      public-id="${otherTermID}"
      termType="Other"/>
    <AvailablePolicyTerm
<%var annualTermID = PublicIdGenerator.instance().generateId()%>
      codeIdentifier="${annualTermID}"
      public-id="${annualTermID}"
      termType="Annual"/>
  </AvailablePolicyTerms>
  <DocTemplateRefs/>
  <InitializeScript/>
  <ProductPolicyLinePatterns>
<%for (line in product.ProductLines*.ProductLine) {%>
    <ProductPolicyLinePattern
<%var linePatternID = PublicIdGenerator.instance().generateId()%>
      codeIdentifier="${linePatternID}"
      policyLinePattern="${line.CodeIdentifier}"
      public-id="${linePatternID}"/>
<%}%>
  </ProductPolicyLinePatterns>
  <ProductQuestionSetPatterns/>
</Product>
