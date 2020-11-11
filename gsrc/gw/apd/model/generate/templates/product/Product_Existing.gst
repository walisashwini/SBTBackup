<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator
uses gw.apd.model.generate.xsd.productmodel.Product %>
<%@ params(product: APDProduct, pmProduct : Product) %>
<?xml version="1.0"?>
<Product
  abbreviation="${product.Abbreviation}"
  codeIdentifier="${product.CodeIdentifier}"
  daysUntilQuoteNeeded="${pmProduct.DaysUntilQuoteNeeded}"
  defaultTermType="${pmProduct.DefaultTermType}"
  priority="${pmProduct.Priority.toString()}"
  productAccountType="${product.ProductAccountType}"
  productType="${pmProduct.ProductType}"
  public-id="${product.CodeIdentifier}"
  quoteRoundingLevel="${pmProduct.QuoteRoundingLevel.toString()}"
  quoteRoundingMode="${pmProduct.QuoteRoundingMode}">
  <AvailablePolicyTerms>
<%for(term in pmProduct.AvailablePolicyTerms.AvailablePolicyTerm){%>
    <AvailablePolicyTerm
      codeIdentifier="${term.CodeIdentifier}"
      public-id="${term.PublicId}"
      termType="${term.TermType}"/>
<%}%>
  </AvailablePolicyTerms>
  <DocTemplateRefs>
<%for(doc in pmProduct.DocTemplateRefs.DocTemplateRef){%>
    <DocTemplateRef
      codeIdentifier="${doc.CodeIdentifier}"
      documentTemplateType="${doc.DocumentTemplateType}"
      public-id="${doc.PublicId}"
      templateFile="${doc.TemplateFile}"/>
<%}%>
  </DocTemplateRefs>
  <InitializeScript>${pmProduct.InitializeScript}</InitializeScript>
  <ProductPolicyLinePatterns>
<%for (line in product.ProductLines*.ProductLine) {%>
    <ProductPolicyLinePattern
<%var linePatternID : String
var matchingPM = pmProduct.ProductPolicyLinePatterns.ProductPolicyLinePattern.firstWhere(\plp -> plp.PolicyLinePattern == line.CodeIdentifier)
if (matchingPM != null) linePatternID = matchingPM.PublicId
else linePatternID = PublicIdGenerator.instance().generateId()%>
      codeIdentifier="${linePatternID}"
      policyLinePattern="${line.CodeIdentifier}"
      public-id="${linePatternID}"/>
<%}%>
  </ProductPolicyLinePatterns>
  <ProductQuestionSetPatterns>
<%for(q in pmProduct.ProductQuestionSetPatterns.ProductQuestionSetPattern){%>
    <ProductQuestionSetPattern
      codeIdentifier="${q.CodeIdentifier}"
      public-id="${q.PublicId}"
      questionSet="${q.QuestionSet}"/>
<%}%>
  </ProductQuestionSetPatterns>
</Product>
