package gw.sbt.model.bureau

/**
 * BureauCodeAttribute class represents one particular attribute of one row in the system table / bureau code list.
 */
class BureauCodeAttribute {

  var _name : String as Name
  var _value : String as Value
  var _displayValue : String as DisplayValue

  override function equals(other : Object) : boolean {
    return other != null and other typeis BureauCodeAttribute and
        Name == other.Name and
        Value == other.Value and
        DisplayValue == other.DisplayValue
  }

  override function hashCode() : int {
    return Objects.hash({Name, Value, DisplayValue})
  }

  property get DisplayValue() : String {
    return _displayValue ?: _value
  }

  property set DisplayValue(displayValue : String) {
    if (displayValue != null)
      _displayValue = displayValue.trim()
    else
      _displayValue = displayValue
  }

  property set Value(value : String) {
    if (value != null)
      _value = value.trim()
    else
      _value = value
  }

  static property get EmptyBureauCodeAttribute() : BureauCodeAttribute {
    return new BureauCodeAttribute() {
      :Name = "",
      :Value = "",
      :DisplayValue = ""
    }
  }
}