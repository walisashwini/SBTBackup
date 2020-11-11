package gw.sbt.model

class RiskAttributeProperty {
  var _name : String as PropName
  var _value : String as PropValue

  construct(name : String, value : String) {
    _name = name
    _value = value
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis RiskAttributeProperty and
        PropName == other.PropName and
        PropValue == other.PropValue
  }

  override function hashCode() : int {
    return Objects.hash({PropName, PropValue})
  }

  property get HasContent(): boolean {
    return PropValue.HasContent
  }
}