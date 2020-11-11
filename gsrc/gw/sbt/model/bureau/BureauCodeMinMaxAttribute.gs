package gw.sbt.model.bureau

uses org.slf4j.LoggerFactory

class BureauCodeMinMaxAttribute extends BureauCodeAttribute {
  var _minValue : String as MinValue
  var _maxValue : String as MaxValue

  override property get Value() : String {
    LoggerFactory.getLogger("PCA").error("Should not get value on an instance of BureauCodeMinMaxAttribute")
    throw "Should not get value on an instance of BureauCodeMinMaxAttribute"
  }

  override property set Value(value : String) {
    LoggerFactory.getLogger("PCA").error("Should not set value ${value} on an instance of BureauCodeMinMaxAttribute")
    throw "Should not set value ${value} on an instance of BureauCodeMinMaxAttribute"
  }

  //used by presenter.
  override property get DisplayValue() : String {
    return "[${_minValue} - ${_maxValue}]"
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis BureauCodeMinMaxAttribute and
        Name == other.Name and
        MinValue == other.MinValue and
        MaxValue == other.MaxValue
  }

  override function hashCode() : int {
    return Objects.hash({Name, MinValue, MaxValue})
  }
}