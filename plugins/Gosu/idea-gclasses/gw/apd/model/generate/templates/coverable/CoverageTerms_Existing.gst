<%
uses gw.apd.model.generate.xsd.clausemodel.CoveragePattern
%>
<%@ params(clause: APDClause, pmCoverage : CoveragePattern) %>
<%var cbl = clause.Coverable
var boolIndexes = new ArrayList<Integer>()
var numIndexes = new ArrayList<Integer>()
var dateIndexes = new ArrayList<Integer>()
var charIndexes = new ArrayList<Integer>()
var typekeyIndexes = new ArrayList<Integer>()
var newBools = new ArrayList<APDTerm>()
var newNums = new ArrayList<APDTerm>()
var newDates = new ArrayList<APDTerm>()
var newChars = new ArrayList<APDTerm>()
var newTypekeys = new ArrayList<APDTerm>()
var i : Integer
%>
  <CovTerms>
<% for (term in clause.Terms.where(\t -> t.Type == APDFieldType.TC_BOOLEAN)) {
var currTerm = pmCoverage.CovTerms.GenericCovTermPattern.firstWhere(\t -> t.CodeIdentifier == cbl.LinePrefix+clause.CodeIdentifier+term.Name)
if (currTerm == null) {
    newBools.add(term)
} else {
    i = currTerm.CoverageColumn.substring(11).toInt()
    boolIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}
}%>
<% for (term in clause.Terms.where(\t -> t.Type == APDFieldType.TC_MONEY
                                        or t.Type == APDFieldType.TC_BIGDECIMAL
                                        or t.Type == APDFieldType.TC_INTEGER)) {
var currTerm = pmCoverage.CovTerms.DirectCovTermPattern.firstWhere(\t -> t.CodeIdentifier == cbl.LinePrefix+clause.CodeIdentifier+term.Name)
if (currTerm == null) {
    newNums.add(term)
} else {
    i = currTerm.CoverageColumn.substring(10).toInt()
    numIndexes.add(i)                                        %>
${Term_New.renderToString(term, i)}
<%}
}%>
<% for (term in clause.Terms.where(\t -> t.Type == APDFieldType.TC_DATE)) {
var currTerm = pmCoverage.CovTerms.GenericCovTermPattern.firstWhere(\t -> t.CodeIdentifier == cbl.LinePrefix+clause.CodeIdentifier+term.Name)
if (currTerm == null) {
    newDates.add(term)
} else {
    i = currTerm.CoverageColumn.substring(8).toInt()
    dateIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}
}%>
<% for (term in clause.Terms.where(\t -> t.Type == APDFieldType.TC_VARCHAR)) {
var currTerm = pmCoverage.CovTerms.GenericCovTermPattern.firstWhere(\t -> t.CodeIdentifier == cbl.LinePrefix+clause.CodeIdentifier+term.Name)
if (currTerm == null) {
    newChars.add(term)
} else {
    i = currTerm.CoverageColumn.substring(10).toInt()
    charIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}
}%>
<% for (term in clause.Terms.where(\t -> t.Type == APDFieldType.TC_TYPEKEY)) {
var currTerm = pmCoverage.CovTerms.TypekeyCovTermPattern.firstWhere(\t -> t.CodeIdentifier == cbl.LinePrefix+clause.CodeIdentifier+term.Name)
if (currTerm == null) {
    newTypekeys.add(term)
} else {
    i = currTerm.CoverageColumn.substring(10).toInt()
    typekeyIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}
}%>
<% // add in any newly added terms; re-use any gaps left from deleted terms
i = 1
for (term in newBools) {
while (boolIndexes.hasMatch(\fld -> fld == i)) i+=1
boolIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}%>
<% i = 1
for (term in newNums) {
while (numIndexes.hasMatch(\fld -> fld == i)) i+=1
numIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}%>
<% i = 1
for (term in newDates) {
while (dateIndexes.hasMatch(\fld -> fld == i)) i+=1
dateIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}%>
<% i = 1
for (term in newChars) {
while (charIndexes.hasMatch(\fld -> fld == i)) i+=1
charIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}%>
<% i = 1
for (term in newTypekeys) {
while (typekeyIndexes.hasMatch(\fld -> fld == i)) i+=1
typekeyIndexes.add(i)%>
${Term_New.renderToString(term, i)}
<%}%>
  </CovTerms>