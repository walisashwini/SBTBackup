<%
uses gw.apd.model.generate.CoverableNameResolver %>
<%@ params(coverable:APDCoverable) %>
<% var identifiers = coverable.Identifiers%>
<% var covTypeName = coverable.LinePrefix+coverable.TypeName%>
<?xml version="1.0"?>
<Entity
  name="${covTypeName}">
  <Columns>
<%if (coverable.AutoNumber) {%>
    <Column
      beanPath="${covTypeName}.SequenceNumber"
      name="SequenceNumber"/>
<%}%>
<%if (identifiers.IsEmpty) {%>
    <Column
      beanPath="${covTypeName}.PublicID"
      name="PublicID"/>
<%}%>
<%for (f in identifiers) {%>
    <Column
      beanPath="${covTypeName}.${f.Name}"
      name="${f.Name}"/>
<%}%>
  </Columns>
  <DisplayName><![CDATA[
<%if (identifiers.HasElements) {%>
var dspNameContent : String[] = {
  <%for (f in identifiers index i) {%>
  ${f.Name}${CoverableNameResolver.appendToIdentifierField(f)}<%if (i+1 < identifiers.Count) {%>,<%}%>
  <%}%>
}
var dspName = gw.apd.util.APDEntityNameFormatter.formatEntityName(dspNameContent)
<%} else {%>
var dspName = "${covTypeName} "+PublicID
<%}%>
<%if (coverable.AutoNumber) {%>
return SequenceNumber.toString().concat(": ")+dspName
<%} else {%>
return dspName
<%}%>
]]></DisplayName>
</Entity>