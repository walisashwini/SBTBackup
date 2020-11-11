package gw.lob.common.util

final class ReflectionPropertyUtil {
  private construct() {
  }

  static function hasProperty(obj: Object, propertyName: String): boolean {
    return (typeof obj).TypeInfo.Properties.hasMatch(\prop -> prop.Name == propertyName)
  }

  static function hasProperty(effDated: EffDated, propertyName: String): boolean {
    return effDated.IntrinsicType.TypeInfo.Properties.hasMatch(\prop -> prop.Name == propertyName)
  }
}