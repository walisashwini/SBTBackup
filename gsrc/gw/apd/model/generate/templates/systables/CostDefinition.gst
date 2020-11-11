<%
uses org.apache.commons.lang.StringEscapeUtils
uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator
%>
<%@ params(productLine : APDProductLine) %>
<?xml version="1.0"?>
<import>

<% //for testing purposes need to use "AllChildCoverables" and concat the line itself here since the
   //test lines don't implement PolicyLineMethods %>
<%for (coverable in productLine.AllChildCoverables.concat({productLine})) {%>
<% //coverable info%>
  <${productLine.LinePrefix}CostDefinition public-id="${PublicIdGenerator.instance().generateId()}">
    <LookupKey>${coverable.LinePrefix}${coverable.TypeName}</LookupKey>
    <LookupType>${APDCostDefinitionType.TC_COVERABLE.Code}</LookupType>
    <SeparateBilling>${coverable.SeparateBilling}</SeparateBilling>
    <SeparateCollection>${coverable.SeparateCollection}</SeparateCollection>
  </${productLine.LinePrefix}CostDefinition>

    <%for (costDefinition in coverable.CostDefinitions) {%>
    <% //coverable cost info%>
  <${productLine.LinePrefix}CostDefinition public-id="${PublicIdGenerator.instance().generateId()}">
    <LookupKey>${coverable.LinePrefix}${coverable.TypeName}:${costDefinition.CostCode.CostCode}</LookupKey>
    <LookupType>${APDCostDefinitionType.TC_CBLCOST.Code}</LookupType>
    <SeparateBilling>${costDefinition.SeparateBilling}</SeparateBilling>
    <SeparateCollection>${costDefinition.SeparateCollection}</SeparateCollection>
  </${productLine.LinePrefix}CostDefinition>

       <%for (coverage in coverable.Coverages) {%>
       <% //coverage info%>
  <${productLine.LinePrefix}CostDefinition public-id="${PublicIdGenerator.instance().generateId()}">
    <LookupKey>${productLine.LinePrefix}${coverage.CodeIdentifier}</LookupKey>
    <LookupType>${APDCostDefinitionType.TC_COVERAGE.Code}</LookupType>
    <SeparateBilling>${coverage.SeparateBilling}</SeparateBilling>
    <SeparateCollection>${coverage.SeparateCollection}</SeparateCollection>
  </${productLine.LinePrefix}CostDefinition>

         <%for (covCostDef in coverage.CostDefinitions) {%>
         <% //coverage cost info%>
    <${productLine.LinePrefix}CostDefinition public-id="${PublicIdGenerator.instance().generateId()}">
        <LookupKey>${coverage.Coverable.LinePrefix}${coverage.CodeIdentifier}:${covCostDef.CostCode.CostCode}</LookupKey>
        <LookupType>${APDCostDefinitionType.TC_COVCOST.Code}</LookupType>
        <SeparateBilling>${covCostDef.SeparateBilling}</SeparateBilling>
        <SeparateCollection>${covCostDef.SeparateCollection}</SeparateCollection>
    </${productLine.LinePrefix}CostDefinition>
         <%}%>
       <%}%>

    <%}%>
<%}%>
</import>