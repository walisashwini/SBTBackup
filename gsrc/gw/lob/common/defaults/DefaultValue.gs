package gw.lob.common.defaults

uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.dependency.PropertyPathResolver
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.displayable.LobFieldMetaSupport

uses java.util.Set

class DefaultValue {

  static final var TOKEN = ","

  static function setDefault(lobPropertyReference: LobPropertyReference) {
    if (lobPropertyReference.Entity typeis Coverable) {
      setDefault(lobPropertyReference, getDefault(lobPropertyReference))
    }
  }

  static function setDefault(lobPropertyReference: LobPropertyReference, defaultValue: Object) {
    if (lobPropertyReference.Entity typeis Coverable & CoverableFieldAvailability) {
      var coverable = lobPropertyReference.Entity
      var propertyName = lobPropertyReference.PropertyInstanceInfo.TypeInfo.Name

      var fieldAvailabilities = getDefaultPropertyRecords(coverable)

      if (defaultValue != null and
          ValueDependencySupport.Instance.validPropertyValue(defaultValue.toString(), lobPropertyReference) and
          not fieldAvailabilities.contains(propertyName)) {
        lobPropertyReference.Value = defaultValue
        addDefaultedPropertyRecord(coverable, propertyName, fieldAvailabilities)
      }
    }
  }

  static function getDefault(lobPropertyReference: LobPropertyReference): Object {
    var fieldMeta = LobFieldMetaSupport.Instance.findFieldMeta(lobPropertyReference)
    return fieldMeta.DefaultPath != null
        ? PropertyPathResolver.getValue(lobPropertyReference.PropertyInstanceInfo, new PropertyTypeInfo(fieldMeta.DefaultPath))
        : fieldMeta.DefaultValue
  }

  /**
   * If the property becomes unavailable then the record of setting the default will be removed so that when the
   * property becomes available the default will be set again.
  */
  static function removeDefaultedPropertyRecord(boundPropertyReference: BoundPropertyReference) {
    if (boundPropertyReference.Ctx typeis Coverable & CoverableFieldAvailability) {
      var coverable = boundPropertyReference.Ctx
      var dependentPropInfo = new PropertyInstanceInfo(boundPropertyReference)
      var dependentPropName = DependencyUtil.getPropertyName(dependentPropInfo)
      var fieldAvailabilities = coverable.FieldAvailabilities?.split(TOKEN)?.toList()
      fieldAvailabilities?.remove(dependentPropName)
      coverable.FieldAvailabilities = fieldAvailabilities?.join(TOKEN)
    }
  }

  private static function getDefaultPropertyRecords(coverable: Coverable & CoverableFieldAvailability): Set<String> {
    return coverable.FieldAvailabilities?.split(TOKEN)?.toSet() ?: {}
  }

  private static function addDefaultedPropertyRecord(coverable: Coverable & CoverableFieldAvailability, propertyName: String, fieldAvailabilities: Set<String>) {
    fieldAvailabilities.add(propertyName)
    coverable.FieldAvailabilities = fieldAvailabilities.join(TOKEN)
  }
}