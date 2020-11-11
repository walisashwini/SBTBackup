package gw.lob.common.validation

uses entity.PolicyLine
uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.lang.Deprecated
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.parameters.Parameters
uses gw.util.concurrent.LockingLazyVar
uses gw.validation.PCValidationResult

class ValidationSupport {
  static var _instance = LockingLazyVar.make( \ -> new ValidationSupport())
  var _validationConfig : ValidationConfiguration
  protected var lobParams : List<Parameters> = {new Parameters()}

  static property get Instance(): ValidationSupport {
    return _instance.get()
  }

  @Deprecated(:value = "Please use version with Validation level")
  function validateCoverable(coverable : Coverable, pcValidationResult : PCValidationResult) {
    validateCoverable(coverable, pcValidationResult, ValidationLevel.TC_DEFAULT)
  }

  function validateCoverable(coverable : Coverable, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    var criteria = EffectiveJurisdictionCriteria.createForCoverable(coverable)
    validateContainers(coverable, coverable.IntrinsicType.TypeInfo.Name, pcValidationResult, validationLevel, criteria)
    validateChildScheduleItems(coverable, pcValidationResult, validationLevel)
    validateProperties(coverable, pcValidationResult, validationLevel, criteria)
    coverable.CoveragesConditionsAndExclusionsFromCoverable.each(\clause -> validateProperties(clause, pcValidationResult, validationLevel, criteria))
  }

  @Deprecated(:value = "Please use version with Validation level")
  function validatePolicy(line : PolicyLine, pcValidationResult : PCValidationResult) {
    validatePolicy(line, pcValidationResult, ValidationLevel.TC_DEFAULT)
  }

  function validatePolicy(line : PolicyLine, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    line.AllCoverables.each(\coverable -> validateCoverable(coverable, pcValidationResult, validationLevel))
  }

  /**
   * Check if entity property has dependants
   */
  function hasDependants(propRef: LobPropertyReference): boolean {
    var propInfo = propRef.PropertyInstanceInfo
    var containerName = DependencyUtil.getContainerName(propInfo)
    var propertyName = DependencyUtil.getPropertyName(propInfo)
    return _validationConfig.hasDependants(containerName, propertyName, propInfo.EffectiveJurisdictionCriteria)
  }

  /**
   * Check if CovTerm has dependants
   */
  function hasDependants(clause: Clause, covTermCode: String): boolean {
    var criteria = EffectiveJurisdictionCriteria.createForClause(clause.OwningCoverable, clause.Pattern.CodeIdentifier)
    return _validationConfig.hasDependants(clause.Pattern.CodeIdentifier, covTermCode, criteria)
  }

  function isDependant(clause: Clause, covTermCode: String): boolean {
    var criteria = EffectiveJurisdictionCriteria.createForClause(clause.OwningCoverable, clause.Pattern.CodeIdentifier)
    return findPropertyValidators(clause.Pattern.CodeIdentifier, covTermCode, criteria).HasElements
  }

  function getEntityColumnDependents(containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo>{
    return _validationConfig.findDependentProperties(containerName, propertyName, criteria)
  }

  function findPropertyValidators(containerName : String, propertyName : String, criteria: EffectiveJurisdictionCriteria) : List<BaseValidator>{
    return _validationConfig.findPropertyValidators(containerName, propertyName, criteria)
  }

  private function validateContainers(coverable : Coverable, containerName: String, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel, criteria : EffectiveJurisdictionCriteria) {
    var validators = _validationConfig.findContainerValidators(containerName, criteria)
    validators?.each(\validator -> validator.validateContainer(coverable, pcValidationResult, validationLevel))
  }

  private function validateProperties(entity : KeyableBean, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel, criteria : EffectiveJurisdictionCriteria) {
    var containerName = entity typeis Clause ? entity.Pattern.CodeIdentifier : entity.IntrinsicType.TypeInfo.Name
    var propToValidators = _validationConfig.findAllPropertyValidators(containerName, criteria)
    propToValidators.eachKeyAndValue(\propName, validators -> {
      validators.each(\validator -> validator.validateProperty(entity, propName, pcValidationResult, validationLevel))
    })
  }

  private function validateChildScheduleItems(coverable : Coverable, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    coverable.CoveragesConditionsAndExclusionsFromCoverable
        .whereTypeIs(Schedule)
        .each(\schedule -> {
          var scheduleClassName = (typeof schedule).TypeInfo.DisplayName
          schedule.ScheduledItems
              .whereTypeIs(Coverable)
              .each(\scheduledItem -> validateScheduledItem(scheduleClassName, scheduledItem, pcValidationResult, validationLevel))
        })
  }

  private function validateScheduledItem(scheduleClassName : String, scheduledItem : Coverable, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    var criteria = EffectiveJurisdictionCriteria.createForClause(scheduledItem, scheduleClassName)
    validateContainers(scheduledItem, scheduleClassName, pcValidationResult, validationLevel, criteria)
  }

  construct() {
    _validationConfig = new ValidationConfiguration()
  }

  construct(configPath : String) {
    _validationConfig = new ValidationConfiguration(configPath)
  }
}