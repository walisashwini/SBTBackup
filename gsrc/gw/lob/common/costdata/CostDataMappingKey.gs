package gw.lob.common.costdata

uses java.util.Objects

class CostDataMappingKey {
  var _coverableName: String as readonly CoverableName
  var _clauseType: String as readonly ClauseType

  construct(coverableName: String, clauseType: String) {
    _coverableName = coverableName
    _clauseType = clauseType
  }

  construct(coverableName: String) {
    _coverableName = coverableName
  }

  override function equals(o: Object): boolean {
    if (this === o) return true;
    if (o == null || typeof this != typeof o) return false;
    var costDataMappingKey = o as CostDataMappingKey
    return Objects.equals(_coverableName, costDataMappingKey._coverableName) &&
        Objects.equals(_clauseType, costDataMappingKey._clauseType)
  }

  override function hashCode(): int {
    return Objects.hash({_coverableName, _clauseType})
  }
}