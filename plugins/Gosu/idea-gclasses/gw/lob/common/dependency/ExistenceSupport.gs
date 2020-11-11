package gw.lob.common.dependency

uses gw.api.domain.Clause
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.LobPropertyReference
uses gw.util.concurrent.LockingLazyVar
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory

class ExistenceSupport implements CalculatedDependency<Boolean> {
  static var _instance = LockingLazyVar.make( \ -> new ExistenceSupport())

  var _existenceConfig: ExistenceConfiguration

  construct() {
    _existenceConfig = new ExistenceConfiguration()
  }

  construct(configPath: String) {
    _existenceConfig = new ExistenceConfiguration(configPath)
  }

  static property get Instance(): ExistenceSupport {
    return _instance.get()
  }

  /**
   * Check property existence, not required if no dependency found
   */
  function isEntityColumnRequired(propRef: LobPropertyReference): Boolean {
    var propInfo = propRef.PropertyInstanceInfo
    var containerName = DependencyUtil.getContainerName(propInfo)
    var propertyName = DependencyUtil.getPropertyName(propInfo)
    var existence = _existenceConfig.findPropertyExistence(COVERABLE, containerName, propertyName, propInfo.EffectiveJurisdictionCriteria)

    if (existence == null) { // return null if definition is not defined
      return null
    }

    if (!existence.hasCondition()) { // for existence definition with no dependency, valid type will be checked
      return isRequiredType(existence.ValidType)
    }

    var isConditionValid = DependencyUtil.validateCondition(propInfo.ContextCoverable, existence.Condition)
    return isConditionValid ? isRequiredType(existence.ValidType) : isRequiredType(existence.InvalidType)
  }

  /*
   *  Only support static value (met) from the config xml as there is no RequiredCondition from ISO at clause level
   */
  function getClauseExistence(coverable: Coverable, clauseCode: String): typekey.ExistenceType {
    var criteria = EffectiveJurisdictionCriteria.createForClause(coverable, clauseCode)
    var existence = _existenceConfig.findContainerExistence(CLAUSE, clauseCode, criteria)

    if (existence == null) {
      LoggerFactory.getLogger("DEPENDENCY").warn(MarkerFactory.getMarker(ExistenceSupport.Type.Name), ExistenceSupport.Type.Name + ": Existence config not found for clause - ${clauseCode}")
      return null
    }

    var classPath = CalculatedDependencyUtil.getClassPathIfItExistsFor(existence.Condition)
    if (classPath != null) {
      return getCalculatedValue(classPath, {coverable}) ? existence.ValidType : existence.InvalidType
    } else {
      return existence.ValidType;
    }
  }

  function isEntityColumnRequired(propRef: BoundPropertyReference): Boolean {
    return isEntityColumnRequired(new LobPropertyReference(propRef))
  }

  function hasDependants(propRef: LobPropertyReference): boolean {
    var propInfo = propRef.PropertyInstanceInfo
    var containerName = DependencyUtil.getContainerName(propInfo)
    var propertyName = DependencyUtil.getPropertyName(propInfo)
    return _existenceConfig.hasDependants(containerName, propertyName, propInfo.EffectiveJurisdictionCriteria)
  }

  function getEntityColumnDependents(containerName : String, propertyName : String, criteria: EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo>{
    return _existenceConfig.findDependentProperties(containerName, propertyName, criteria)
  }

  /**
   * Check if CovTerm has dependants
   */
  function hasDependants(clause: Clause, covTermCode: String): boolean {
    var criteria = EffectiveJurisdictionCriteria.createForClause(clause.OwningCoverable, clause.Pattern.CodeIdentifier)
    return _existenceConfig.hasDependants(clause.Pattern.CodeIdentifier, covTermCode, criteria)
  }

  private function isRequiredType(type: ExistenceType): boolean {
    return type == ExistenceType.TC_REQUIRED
  }

  override property get CalculationMethodName() : String {
    return "isExistenceConditionMet"
  }

  override property get CalculationMethodParameters() : Class[] {
    return {Coverable}
  }

  override function getCalculatedValue(classPath : String, args : Object[]) : Boolean {
    return CalculatedDependencyUtil.getCalculatedValue<Boolean>(classPath, args, this)
  }
}
