package gw.lob.common.dependency

class Existence {

  var _validType: ExistenceType as readonly ValidType
  var _invalidType: ExistenceType as readonly InvalidType
  var _condition: ConditionalClause as readonly Condition

  construct(validType: String, invalidType: String, condition: ConditionalClause) {
    this(
        ExistenceType.get(validType?.toUpperCase() ?: ""),
        ExistenceType.get(invalidType?.toUpperCase() ?: ""),
        condition)
  }

  construct(validType: ExistenceType, invalidType: ExistenceType, condition: ConditionalClause) {
    _validType = validType
    _invalidType = invalidType
    _condition = condition
  }

  public function hasCondition(): boolean {
    return _condition != null
  }

  override function hashCode(): int {
    return _validType.hashCode() * 31 * 31 + _invalidType.hashCode() * 31 + _condition.hashCode()
  }

  override function equals(obj: Object): boolean {
    var existence = obj as Existence

    return _validType == existence.ValidType && _invalidType == existence.InvalidType && _condition == existence.Condition
  }

  override function toString(): String {
    return "Existence{ valid = '${_validType}', invalid = '${_invalidType}', condition = '${_condition}' }"
  }
}