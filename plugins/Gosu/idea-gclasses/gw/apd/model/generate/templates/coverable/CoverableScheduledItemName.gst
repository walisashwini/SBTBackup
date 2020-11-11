<%@ params( coverable : APDCoverable ) %>
<?xml version="1.0"?>
<Entity
  name="${coverable.QualifiedName}ScheduleCovItem">
  <Columns>
    <Column
      beanPath="${coverable.QualifiedName}ScheduleCovItem.Schedule"
      name="pattern"/>
  </Columns>
  <DisplayName><![CDATA[pattern.DisplayName]]></DisplayName>
</Entity>