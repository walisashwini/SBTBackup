package gw.lob.common.dependency

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.sbt.schedules.ScheduleConfigSource
uses gw.lob.common.service.sbt.ServiceLocator
uses gw.util.concurrent.LockingLazyVar

class AvailabilitySupport implements CalculatedDependency<Boolean> {
  static var _instance = LockingLazyVar.make( \ -> new AvailabilitySupport())

  var _availabilityConfig: AvailabilityConfiguration as readonly AvailabilityConfig
  var _scheduleConfig : ScheduleConfigSource as readonly ScheduleConfig

  construct() {
    _availabilityConfig = new AvailabilityConfiguration ()
    _scheduleConfig = ServiceLocator.get(ScheduleConfigSource)
  }

  construct(configPath: String) {
    _availabilityConfig = new AvailabilityConfiguration (configPath)
    _scheduleConfig = ServiceLocator.get(ScheduleConfigSource)
  }

  static property get Instance(): AvailabilitySupport {
    return _instance.get()
  }

  /**
   * Check if clause is available based on its dependency, null if no dependency is found
   */

  function isClauseAvailable(coverable: Coverable, clauseCode: String): Boolean {
    var criteria = EffectiveJurisdictionCriteria.createForClause(coverable, clauseCode)
    var condition = _availabilityConfig.findContainerAvailability(CLAUSE, clauseCode, criteria)
    var classPath = CalculatedDependencyUtil.getClassPathIfItExistsFor(condition)
    if (classPath != null) {
      return getCalculatedValue(classPath, {coverable})
    } else {
      return condition == null ? null : DependencyUtil.validateCondition(coverable, condition)
    }
  }

  /**
   * Check if entity column is available based on its dependency, null if no dependency is found
   */
  function isEntityColumnAvailable(propRef: LobPropertyReference): Boolean {
    var propInfo = propRef.PropertyInstanceInfo
    var containerName = DependencyUtil.getContainerName(propInfo)
    var propertyName = DependencyUtil.getPropertyName(propInfo)
    var condition = _availabilityConfig.findPropertyAvailability(COVERABLE, containerName, propertyName, propInfo.EffectiveJurisdictionCriteria)

    return condition == null ? null : DependencyUtil.validateCondition(propInfo.ContextCoverable, condition)
  }

  function isEntityColumnAvailable(propRef: BoundPropertyReference): Boolean {
    return isEntityColumnAvailable(new LobPropertyReference(propRef))
  }

  /**
   * Check if cov term is available based on its dependency, null if no dependency is found
   */
  function isCovTermAvailable(coverable: Coverable, clauseCode: String, covTermCode: String) : Boolean {
    var criteria = EffectiveJurisdictionCriteria.createForClause(coverable, clauseCode)
    var condition = _availabilityConfig.findPropertyAvailability(CLAUSE, clauseCode, covTermCode, criteria)
    return condition == null ? null : DependencyUtil.validateCondition(coverable, condition)
  }

  function isScheduledItemPropertyAvailable(scheduledItem: ScheduledItem, propertyInfo: SchedulePropertyInfo): Boolean {
    var schedule = scheduledItem.ScheduleParent as Clause & Schedule
    var propName = _scheduleConfig.getPropertyNameByColumnName(schedule, propertyInfo.PropertyInfo.Name)

    if (propName == null) {
      return null;
    }

    var criteria = EffectiveJurisdictionCriteria.createForClause(schedule.OwningCoverable, (scheduledItem.ScheduleParent as Clause).Pattern.CodeIdentifier)
    var condition = _availabilityConfig.findPropertyAvailability(ContainerType.SCHEDULE, schedule.Pattern.CodeIdentifier, propName, criteria)

    return condition == null ? null : DependencyUtil.validateCondition(scheduledItem as Coverable, condition);
  }

  /**
   * Check if bound property has dependants, support both DM and PM
   */
  function hasDependants(boundPropRef: BoundPropertyReference): boolean {
    return hasDependants(new LobPropertyReference(boundPropRef))
  }

  /**
   * Check if entity property has dependants
   */
  function hasDependants(propRef: LobPropertyReference): boolean {
    var propInfo = propRef.PropertyInstanceInfo
    var containerName = DependencyUtil.getContainerName(propInfo)
    var propertyName = DependencyUtil.getPropertyName(propInfo)
    return _availabilityConfig.hasDependants(containerName, propertyName, propInfo.EffectiveJurisdictionCriteria)
  }

  /**
   * Get immediate dependents of entity property
   */
  function getEntityColumnDependents(propRef: LobPropertyReference): Set<PropertyTypeInfo> {
    var propInfo = propRef.PropertyInstanceInfo
    var containerName = DependencyUtil.getContainerName(propInfo)
    var propertyName = DependencyUtil.getPropertyName(propInfo)
    return getEntityColumnDependents(containerName, propertyName, propInfo.EffectiveJurisdictionCriteria)
  }

  function getEntityColumnDependents(containerName : String, propertyName : String, criteria: EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo>{
    return _availabilityConfig.findDependentProperties(containerName, propertyName, criteria)
  }

  function getScheduledItemPropertyDependents(propTypeInfo: PropertyTypeInfo, criteria: EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo>{
    return _availabilityConfig.findDependentProperties(propTypeInfo, criteria)
  }

  function getCoverableDependencies(coverable: Coverable) : Set<PropertyTypeInfo>{
    var criteria = EffectiveJurisdictionCriteria.createForCoverable(coverable)
    return _availabilityConfig.findContainerDependencies(coverable.IntrinsicType.RelativeName,criteria)
  }

  /**
   * Get immediate dependents of CovTerm
   */
  function getCovTermDependents(clause: Clause, covTermCode: String): Set<PropertyTypeInfo> {
    var criteria = EffectiveJurisdictionCriteria.createForClause(clause.OwningCoverable, clause.Pattern.CodeIdentifier)
    return _availabilityConfig.findDependentProperties(clause.Pattern.CodeIdentifier, covTermCode, criteria)
  }

  /**
   * Check if CovTerm has dependants
   */
  function hasDependants(clause: Clause, covTermCode: String): boolean {
    var criteria = EffectiveJurisdictionCriteria.createForClause(clause.OwningCoverable, clause.Pattern.CodeIdentifier)
    return _availabilityConfig.hasDependants(clause.Pattern.CodeIdentifier, covTermCode, criteria)
  }

  override property get CalculationMethodName() : String {
    return "isAvailable"
  }

  override property get CalculationMethodParameters() : Class[] {
    return {Coverable}
  }

  override function getCalculatedValue(classPath : String, args : Object[]) : Boolean {
    return CalculatedDependencyUtil.getCalculatedValue<Boolean>(classPath, args, this)
  }
}