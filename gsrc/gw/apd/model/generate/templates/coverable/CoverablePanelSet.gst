<%
uses gw.apd.model.generate.APDGosuReferencesHelper
uses java.math.RoundingMode%>
<%@params(coverable:APDCoverable, fieldMax : int)%>
<%var inputColumnForCovsCreated = false%>
<PCF
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="../../../../../../../pcf.xsd">
  <PanelSet
    id="${coverable.LinePrefix + coverable.TypeName}PanelSet">
    <Require
      name="${coverable.TypeName.uncapitalize()}"
      type="entity.${coverable.LinePrefix+coverable.TypeName}"/>
    <Require
      name="openForEdit"
      type="boolean"/>
<%for (category in coverable.ItemisedCoverageCategories.orderBy(\c -> c.Sequence)) { %>
    <Variable
      initialValue="${coverable.TypeName.uncapitalize()}${ APDGosuReferencesHelper.getReferenceToLine(coverable)}.Pattern.getCoverageCategoryByCodeIdentifier(&quot;${coverable.LinePrefix+category.CodeIdentifier}&quot;)"
      name="${category.CodeIdentifier.uncapitalize()}"
      type="gw.api.productmodel.CoverageCategory"/>
<%if (coverable.Coverages.HasElements) {%>
    <Variable
      initialValue="${category.CodeIdentifier.uncapitalize()}.coveragePatternsForEntity(entity.${coverable.LinePrefix+coverable.TypeName}).whereSelectedOrAvailable(${coverable.TypeName.uncapitalize()}, openForEdit)"
      name="${category.CodeIdentifier.uncapitalize()}CovPatterns"
      recalculateOnRefresh="true"
      type="gw.api.productmodel.CoveragePattern[]"/>
<%}%>
<%}%>
    <CardViewPanel
      hideTabIfSingle="true">
      <Card
        id="details"
        title="DisplayKey.get(&quot;Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix.concat(coverable.TypeName)}.Details&quot;)">
<%if (coverable.Fields.Count > 0) {
var col1Count = (coverable.Fields.Count / 2bd).setScale(0, RoundingMode.UP)
// case where there are details on the left and list of coverages on the right
if (coverable.Exposures.Count == 0 and coverable.ChildCoverables.Count == 0 and coverable.ItemisedCoverageCategories.Count > 0 and coverable.Fields.Count <= fieldMax) col1Count = fieldMax%>
        <DetailViewPanel>
          <InputColumn>
<%for (field in coverable.Fields.orderBy(\f -> f.Sequence) index i) {
var displaykey = "Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix+coverable.TypeName}.${field.Name}"
var openForEdit = (coverable.HasSplittableFields and !field.SplitByRatingPeriods) ? "${coverable.TypeName.uncapitalize()} == ${coverable.TypeName.uncapitalize()}.VersionList.AllVersions.first()" : "true"%>
<%if (col1Count == i) {%>
          </InputColumn>
          <InputColumn>
<%}%>
${Input.renderToString(coverable.TypeName.uncapitalize(), field, displaykey, openForEdit, null, (coverable.Identifiers.HasElements and coverable.Identifiers[0] == field) ? "true" : "false")}
<%}%>
          </InputColumn>
<%if (coverable.Exposures.Count == 0 and coverable.ChildCoverables.Count != 1 and coverable.ItemisedCoverageCategories.Count > 0 and coverable.Fields.Count <= fieldMax and coverable.Coverages.HasElements) { // add coverages%>
          <InputColumn>
            <InputSetRef
              def="CoverageCategoryInputSet(${coverable.ItemisedCoverageCategories.orderBy(\c -> c.Sequence).first().CodeIdentifier.uncapitalize()}CovPatterns, ${coverable.TypeName.uncapitalize()}, openForEdit)"
              id="${coverable.ItemisedCoverageCategories.orderBy(\c -> c.Sequence).first().CodeIdentifier}CovPatterns"/>
          </InputColumn>
<%inputColumnForCovsCreated = true}%>
        </DetailViewPanel>
<%}%>
<%if(coverable.Fields.Count <= fieldMax and coverable.Exposures.Count > 0) { // add exposure list if there are not too many fields%>
        <PanelRef
          def="${coverable.LinePrefix+coverable.Exposures.orderBy(\e -> e.Name).first().TypeName}ListPanelSet(${coverable.TypeName.uncapitalize()})"/>
<%} else if(coverable.Fields.Count <= fieldMax and (coverable.ChildCoverables.Count == 1 or (coverable.ChildCoverables.Count > 0 and not (coverable typeis APDProductLine)))) { // add coverable list if there are not too many fields or coverables%>
        <PanelRef
          def="${coverable.LinePrefix+coverable.ChildCoverables.orderBy(\cc -> cc.Name).first().TypeName}ListPanelSet(${coverable.TypeName.uncapitalize()}, openForEdit)"/>
<%} else if(coverable.Fields.Count == 0 and coverable.ItemisedCoverageCategories.Count > 0 and coverable.Coverages.HasElements) { // coverages, no fields%>
        <DetailViewPanel>
          <InputColumn>
            <InputSetRef
              def="CoverageCategoryInputSet(${coverable.ItemisedCoverageCategories.orderBy(\c -> c.Sequence).first().CodeIdentifier.uncapitalize()}CovPatterns, ${coverable.TypeName.uncapitalize()}, openForEdit)"
              id="${coverable.ItemisedCoverageCategories.orderBy(\c -> c.Sequence).first().CodeIdentifier}CovPatterns"/>
          </InputColumn>
        </DetailViewPanel>
<%inputColumnForCovsCreated = true}%>
      </Card>
<%for (category in coverable.ItemisedCoverageCategories.orderBy(\c -> c.Sequence) index i) {
     if ((i > 0 or coverable.Exposures.Count > 0 or coverable.ChildCoverables.Count > 0 or coverable.Fields.Count > fieldMax) and coverable.Coverages.HasElements and not inputColumnForCovsCreated) {%>
      <Card
        id="${category.CodeIdentifier}"
        title="DisplayKey.get(&quot;Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix+coverable.TypeName}.${coverable.LinePrefix+category.CodeIdentifier}&quot;)">
        <DetailViewPanel>
          <InputColumn>
            <InputSetRef
              def="CoverageCategoryInputSet(${category.CodeIdentifier.uncapitalize()}CovPatterns, ${coverable.TypeName.uncapitalize()}, openForEdit)"
              id="${category.CodeIdentifier}CovPatterns"/>
          </InputColumn>
        </DetailViewPanel>
       </Card>
<%}
    if (i == 0) {
      inputColumnForCovsCreated = false
    }  // for index 0, reset value so subsequent categories can get cards created
}%>
<%if (coverable.CoverageLibraryCategories.Count > 0) { %>
       <Card
         id="AdditionalCoverages"
         title="DisplayKey.get(&quot;Web.LineWizard.AdditionalCoverages&quot;)">
         <PanelRef
           def="AdditionalCoveragesPanelSet(${coverable.TypeName.uncapitalize()}, new String[]{${coverable.CoverageLibraryCategoriesXMLString }}, true)"/>
       </Card>
<%}%>
<%if (coverable.ConditionAndExclusionLibraryCategories.Count > 0) { %>
       <Card
         id="ExclusionsAndconditions"
         title="DisplayKey.get(&quot;Web.LineWizard.ExclusionsAndConditions&quot;)">
         <PanelRef
           def="AdditionalExclusionsAndConditionsPanelSet(${coverable.TypeName.uncapitalize()}, new String[]{${coverable.ConditionAndExclusionLibraryCategoriesXMLString }}, true)"/>
       </Card>
<%}%>
<%for (exposure in coverable.Exposures.orderBy(\e -> e.Name) index i)
     if (i > 0 or coverable.Fields.Count > fieldMax) {%>
      <Card
        id="${exposure.TypeName}"
        title="DisplayKey.get(&quot;Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix+coverable.TypeName}.${coverable.LinePrefix+exposure.TypeName}&quot;)">
        <PanelRef
            def="${coverable.LinePrefix+exposure.TypeName}ListPanelSet(${coverable.TypeName.uncapitalize()})"/>
       </Card>
<%}%>
<%if (not (coverable typeis APDProductLine))
for (child in coverable.ChildCoverables.orderBy(\cc -> cc.Name) index i)
     if (i > 0 or coverable.Exposures.Count > 0 or coverable.Fields.Count > fieldMax) {%>
      <Card
        id="${child.TypeName}"
        title="DisplayKey.get(&quot;Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix+coverable.TypeName}.${coverable.LinePrefix+child.TypeName}&quot;)">
        <PanelRef
            def="${coverable.LinePrefix+child.TypeName}ListPanelSet(${coverable.TypeName.uncapitalize()}, openForEdit)"/>
       </Card>
<%}%>
    </CardViewPanel>
  </PanelSet>
</PCF>