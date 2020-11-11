<%@ params(attribute: APDAttribute, lang : LanguageType) %>
<%for (code in attribute.Codes) {%>
<%if(code["Name_" + lang.Code] != null){%>TypeKey.${attribute.Typelist}.${code.Code} = ${code["Name_" + lang.Code]}
<%}%>
<%if(code["Description_" + lang.Code] != null){%>TypeKeyDescription.${attribute.Typelist}.${code.Code} = ${code["Description_" + lang.Code]}
<%}%>
<%}%>