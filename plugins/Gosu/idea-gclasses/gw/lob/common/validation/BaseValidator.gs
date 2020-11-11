package gw.lob.common.validation

uses com.google.common.base.Objects
uses gw.validation.PCValidationResult

uses javax.naming.OperationNotSupportedException

abstract class BaseValidator {
  protected var _quoteTime : boolean as QuoteTime

  function equals(other : Object) : boolean {
    if (this === other) {
      return true
    }
    if (other typeis BaseValidator) {
      return _quoteTime == other._quoteTime
    }
    return false
  }

  function hashCode() : int {
    return Objects.hashCode({_quoteTime});
  }

  function validateContainer(entity : KeyableBean, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    throw new OperationNotSupportedException()
  }

  function validateProperty(entity : KeyableBean, propName : String, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    throw new OperationNotSupportedException()
  }
}