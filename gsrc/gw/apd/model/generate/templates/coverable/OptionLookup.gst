<% uses com.guidewire.pc.system.productmodel.impl.PublicIdGenerator %>
<%@ params(clause : APDClause, term: APDTerm, opt : APDDropdownEntry, ccy : Currency) %>
  <${clause.Coverable.QualifiedName}OptLookup public-id="${PublicIdGenerator.instance().generateId()}">
    <Availability>Available</Availability>
    <CovTermOptCode>${opt.getChoicePublicId(ccy)}</CovTermOptCode>
    <CovTermPatternCode>${term.ProductModelPublicId}</CovTermPatternCode>
    <EndEffectiveDate/>
    <StartEffectiveDate>2000-01-01 00:00:00.000</StartEffectiveDate>
    <State/>
    <Currency>${ccy.Code?:""}</Currency>
  </${clause.Coverable.QualifiedName}OptLookup>
