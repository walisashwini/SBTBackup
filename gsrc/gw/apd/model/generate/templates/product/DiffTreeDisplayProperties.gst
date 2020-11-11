<%@ params(product: APDProduct, lang : LanguageType) %>
<%for (productLine in product.ProductLines*.ProductLine) { %>
<%if(productLine["Name_" + lang.Code] != null){%>Web.Differences.LOB.${productLine.LinePrefix}.Section = ${productLine["Name_" + lang.Code]}
<%}%>
<%if(productLine["Name_" + lang.Code] != null){%>entity.${productLine.LinePrefix}${productLine.TypeName} = ${productLine["Name_" + lang.Code]}
<%}%>
<%for (field in productLine.Fields) { %>
<%if(field["Label_" + lang.Code] != null){%>entity.${productLine.LinePrefix}${productLine.TypeName}.${field.Name} = ${field["Label_" + lang.Code]}
<%}%>
<%}%>
<%for (coverable in productLine.AllChildCoverables) { %>
<%if(coverable["Name_" + lang.Code] != null){%>Web.Differences.LOB.${coverable.LinePrefix}.${coverable.TypeName}.SubSection = ${coverable["Name_" + lang.Code]}
<%}%>
<%if(coverable["Name_" + lang.Code] != null){%>entity.${coverable.LinePrefix}${coverable.TypeName} = ${coverable["Name_" + lang.Code]}
<%}%>
<%for (field in coverable.Fields) { %>
<%if(field["Label_" + lang.Code] != null){%>entity.${coverable.LinePrefix}${coverable.TypeName}.${field.Name} = ${field["Label_" + lang.Code]}
<%}%>
<%}%>
<%for (exposure in coverable.Exposures) {%>
<%if(exposure["Name_" + lang.Code] != null){%>entity.${coverable.LinePrefix}${exposure.TypeName} = ${exposure["Name_" + lang.Code]}
<%}%>
<%for (field in exposure.Fields) { %>
<%if(field["Label_" + lang.Code] != null){%>entity.${coverable.LinePrefix}${exposure.TypeName}.${field.Name} = ${field["Label_" + lang.Code]}
<%}%>
<%}%>
<%}  // end of exposure%>
<%} // end of coverable%>
<%for (exposure in productLine.Exposures) { %>
<%if(exposure["Name_" + lang.Code] != null){%>entity.${productLine.LinePrefix}${exposure.TypeName} = ${exposure["Name_" + lang.Code]}
<%}%>
<%for (field in exposure.Fields) { %>
<%if(field["Label_" + lang.Code] != null){%>entity.${productLine.LinePrefix}${exposure.TypeName}.${field.Name} = ${field["Label_" + lang.Code]}
<%}%>
<%}%>
<%} // end of line exposure%>
<%} // end of line%>