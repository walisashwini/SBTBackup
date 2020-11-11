package gw.lob.common.validation

uses com.google.common.base.Objects
uses gw.api.locale.DisplayKey
uses gw.lang.reflect.TypeSystem
uses gw.validation.PCValidationResult
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory

class CustomValidator extends BaseValidator {
  protected var _classPath : String as ClassPath

  construct(classPath : String, quoteTime : boolean) {
    _classPath = classPath
    _quoteTime = quoteTime
  }

  override function equals(other : Object) : boolean {
    if (this === other) {
      return true
    }
    if (other typeis CustomValidator) {
      return _classPath == other._classPath
          && super.equals(other)
    }
    return false
  }

  override function hashCode() : int {
    return Objects.hashCode({_classPath, _quoteTime});
  }

  override function validateContainer(entity : KeyableBean, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    if (entity typeis Coverable && (!_quoteTime || validationLevel == ValidationLevel.TC_QUOTABLE)) {
      try {
        var validationType = TypeSystem.getByFullName(_classPath)
        var constructor = validationType.TypeInfo.getCallableConstructor({})
        var validation = constructor.Constructor.newInstance({}) as GeneratedValidation
        var validateFn = validationType.TypeInfo.getCallableMethod("validate", {Coverable, PCValidationResult, boolean})
        validateFn.CallHandler.handleCall(validation, {entity, pcValidationResult, true})
      } catch (cnfEx : ClassNotFoundException) {
        LoggerFactory.getLogger("Api").warn(MarkerFactory.getMarker(ValidationSupport.Type.Name), DisplayKey.get("Web.Policy.Validation.ValidatorNotFound", ValidationSupport.Type.Name, this.toString()))
      }
    }
  }
}