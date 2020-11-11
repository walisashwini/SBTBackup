<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(clause : APDClause, term: APDTerm, pack : APDDropdownEntry, ccy : Currency) %>
  <${clause.Coverable.QualifiedName}PackLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <CovTermPackCode>${pack.getChoicePublicId(ccy)}</CovTermPackCode>
    <CovTermPatternCode>${term.ProductModelPublicId}</CovTermPatternCode>
    <EndEffectiveDate/>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
    <State/>
    <Currency>${ccy.Code?:""}</Currency>
  </${clause.Coverable.QualifiedName}PackLookup>


