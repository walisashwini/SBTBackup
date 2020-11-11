<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(clause : APDClause, term: APDTerm) %>
<%var cbl = clause.Coverable%>
  <${cbl.QualifiedName}TermLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <CovTermPatternCode>${term.ProductModelPublicId}</CovTermPatternCode>
    <EndEffectiveDate/>
    <PolicyLinePatternCode>${cbl.ProductLine.CodeIdentifier}</PolicyLinePatternCode>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
    <State/>
  </${cbl.QualifiedName}TermLookup>
<% if (term.Type == APDFieldType.TC_TYPEKEY and term.DropDownType == APDDropDownType.TC_OPTION) for (opt in term.Codes) for(ccy in opt.Currencies) {%>
${OptionLookup.renderToString(clause, term, opt, ccy)}
<%}%>
<% if (term.Type == APDFieldType.TC_TYPEKEY and term.DropDownType == APDDropDownType.TC_PACKAGE) for (opt in term.Codes) for(ccy in opt.Currencies) {%>
${PackLookup.renderToString(clause, term, opt, ccy)}
<%}%>


