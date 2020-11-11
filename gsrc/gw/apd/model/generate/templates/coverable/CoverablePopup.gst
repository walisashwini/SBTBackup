<%@params(coverable:APDCoverable)%>
<PCF
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="../../../../../../../pcf.xsd">
  <Popup
    afterEnter="if (${coverable.Parent.TypeName.uncapitalize()} != null) ${coverable.TypeName.uncapitalize()} = ${coverable.Parent.TypeName.uncapitalize()}.createAndAdd${coverable.LinePrefix+coverable.TypeName}()"
<%if (coverable.ContainsSplittableAttribute) {%>
    beforeCommit="${coverable.TypeName.uncapitalize()}.syncSplittableFields()"
<%}%>
    canEdit="canEdit"
    id="${coverable.LinePrefix+coverable.TypeName}Popup"
    startInEditMode="canEdit"
<%if (coverable.HasSplittableFields) {%>
    title="DisplayKey.get(&quot;Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix.concat(coverable.TypeName)}.SplitDetails&quot;, ${coverable.TypeName.uncapitalize()}.EffectiveDate.ShortFormat, ${coverable.TypeName.uncapitalize()}.ExpirationDate.ShortFormat)">
<%} else {%>
    title="DisplayKey.get(&quot;Web.Policy.${coverable.LinePrefix}.${coverable.LinePrefix.concat(coverable.TypeName)}.Details&quot;)">
<%}%>
    <LocationEntryPoint
      signature="${coverable.LinePrefix+coverable.TypeName}Popup(${coverable.TypeName.uncapitalize()} : entity.${coverable.LinePrefix+coverable.TypeName}, canEdit : boolean)"/>
    <LocationEntryPoint
      signature="${coverable.LinePrefix+coverable.TypeName}Popup(${coverable.Parent.TypeName.uncapitalize()} : entity.${coverable.LinePrefix+coverable.Parent.TypeName}, canEdit : boolean)"/>
    <Variable
      name="${coverable.TypeName.uncapitalize()}"
      type="entity.${coverable.LinePrefix+coverable.TypeName}"/>
    <Variable
      name="canEdit"
      type="boolean"/>
    <Variable
      name="${coverable.Parent.TypeName.uncapitalize()}"
      type="entity.${coverable.LinePrefix+coverable.Parent.TypeName}"/>
    <Screen
      editable="true">
      <Toolbar>
        <EditButtons/>
      </Toolbar>
      <PanelRef
        def="${coverable.LinePrefix+coverable.TypeName}PanelSet(${coverable.TypeName.uncapitalize()}, canEdit)"/>
    </Screen>
  </Popup>
</PCF>