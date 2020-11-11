package gw.sbt.pca

uses gw.lang.reflect.features.PropertyReference
uses java.util.Objects
uses java.util.List

abstract class ValueObject<T> {

  override function equals(other : Object) : boolean {
    return other != null and other typeis ValueObject<T> and
        ValueProperties.allMatch(\ prop -> valueOf(prop) == other.valueOf(prop))
  }

  override function hashCode() : int {
    var values = ValueProperties.map(\ prop -> valueOf(prop))
    return Objects.hash(values.toTypedArray())
  }

  override function toString() : String {
    var nameValuePairs = ValueProperties.map(\ prop -> prop.PropertyInfo.Name + "=" + valueOf(prop))
    return T.Type.RelativeName + "{" + nameValuePairs.join(", ") + "}"
  }

  protected function valueOf(prop : PropertyReference<T, Object>) : Object {
    return prop.PropertyInfo.Accessor.getValue(this)
  }

  abstract protected property get ValueProperties() : List<PropertyReference<T, Object>>
}