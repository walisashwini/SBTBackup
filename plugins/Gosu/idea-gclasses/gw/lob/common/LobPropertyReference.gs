package gw.lob.common

uses gw.lang.reflect.IPropertyInfo
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.dependency.PropertyInstanceInfo

uses java.lang.Double
uses java.lang.Float
uses java.lang.Integer
uses java.lang.Short
uses java.math.BigDecimal
uses java.math.BigInteger
uses java.util.Date

class LobPropertyReference {

  var _boundPropRef : BoundPropertyReference as readonly BoundPropertyReference
  var _propInstanceInfo : PropertyInstanceInfo

  construct(entity : KeyableBean, propName : String) {
    // create bound property info only if the entity actually has property named propName
    if (entity.IntrinsicType.TypeInfo.getProperty(propName) != null) {
      _boundPropRef = new BoundPropertyReference(entity.IntrinsicType, entity, propName)
    } else {
      _propInstanceInfo = new PropertyInstanceInfo(propName, entity.IntrinsicType.RelativeName, entity, null)
    }
  }

  construct(propRef : BoundPropertyReference) {
    _boundPropRef = propRef
  }

  property get PropertyInstanceInfo() : PropertyInstanceInfo {
    if (_boundPropRef != null) {
      return new PropertyInstanceInfo(_boundPropRef)
    }

    return _propInstanceInfo
  }

  property get PropertyInfo() : IPropertyInfo {
    return _boundPropRef?.PropertyInfo
  }

  property get Value() : Object {
    return _boundPropRef?.get()
  }

  property set Value(newValue : Object) {
    _boundPropRef?.set(castValue(newValue))
  }

  property get Entity() : KeyableBean {
    return _boundPropRef?.Ctx as KeyableBean
  }

  private function castValue(value: Object): Object {
    var type = _boundPropRef.PropertyInfo.FeatureType
    var doTypesMatch = (type.DisplayName == value.Class.Name)

    if (value == null or doTypesMatch) return value

    var strValue = value.toString()
    if (type == Integer.Type)     return strValue.toInt()
    if (type == BigInteger.Type)  return strValue.toBigInteger()
    if (type == Short.Type)       return strValue.toShort()
    if (type == Float.Type)       return strValue.toFloat()
    if (type == Double.Type)      return strValue.toDouble()
    if (type == BigDecimal.Type)  return strValue.toBigDecimal()
    if (type == Date.Type)        return strValue.toDate()
    if (type == Boolean.Type)     return strValue.toBoolean()

    var method = type.TypeInfo.getMethod("valueOf", {String})
    if (method != null) {
      var params = {strValue}.toArray()
      return method.CallHandler.handleCall(strValue, params)
    }

    return value
  }
}