package gw.lob.common.dependency.v2

    uses entity.PolicyLine
    uses gw.api.domain.Clause
    uses gw.api.domain.covterm.OptionCovTerm
    uses gw.api.locale.DisplayKey
    uses gw.api.productmodel.CovTermOpt
    uses gw.api.productmodel.SchedulePropertyInfo
    uses gw.lang.reflect.features.BoundPropertyReference
    uses gw.lob.common.LobPropertyReference
    uses gw.lob.common.dependency.CovTermInstanceInfo
    uses gw.lob.common.dependency.CovTermOptInstanceInfo
    uses gw.lob.common.dependency.DependencySystemTableQuery
    uses gw.lob.common.dependency.DependencyUtil
    uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
    uses gw.lob.common.dependency.PropertyInstanceInfo
    uses gw.lob.common.dependency.PropertyTypeInfo
    uses gw.lob.common.dependency.PropertyValueDependency
    uses gw.lob.common.dependency.SystemTableQueryData
    uses gw.lob.common.dependency.ValueDependencyConfiguration
    uses gw.lob.common.sbt.schedules.impl.ScheduleOptionPropertyInfo
    uses gw.util.concurrent.LockingLazyVar
    uses gw.validation.PCValidationContext
    uses org.slf4j.LoggerFactory
    uses org.slf4j.MarkerFactory

class ValueDependencySupport {

  static var _instance = LockingLazyVar.make(\-> new ValueDependencySupport())
  static final var DEFAULT_COLUMN = "Value"
  static var _config : ValueDependencyConfiguration
  var _valueColumnName : String

  static property get Instance() : ValueDependencySupport {
    return _instance.get()
  }

  internal construct() {
    this(new ValueDependencyConfiguration(), DEFAULT_COLUMN)
  }

  internal construct(config : ValueDependencyConfiguration, valueColumnName : String) {
    _config = config
    _valueColumnName = valueColumnName
  }

  construct(configPath : String) {
    _config = new ValueDependencyConfiguration(configPath)
    _valueColumnName = DEFAULT_COLUMN
  }

  // public interface

  // returns the valid values of the property
  function valueRange(propRef : LobPropertyReference) : List<String> {
    var currentPropertyInfo = propRef.PropertyInstanceInfo
    return valueRangeInternal(currentPropertyInfo)
  }

  function valueRange(optionCovTerm : OptionCovTerm) : List<String> {
    var currentPropertyInfo = new PropertyInstanceInfo(optionCovTerm.Pattern.CodeIdentifier,
        optionCovTerm.Clause.Pattern.CodeIdentifier, optionCovTerm.Clause, optionCovTerm.Value)
    return valueRangeInternal(currentPropertyInfo)
  }

  // returns the valid values of the schedule property
  function valueRange(clause : Clause, schedulePropInfo : SchedulePropertyInfo, scheduledItem : ScheduledItem) : List<String> {
    var currentPropertyInfo = new PropertyInstanceInfo((schedulePropInfo as ScheduleOptionPropertyInfo).PropertyInfoName, clause.Pattern.CodeIdentifier, clause, clause, true);
    return valueRangeInternal(currentPropertyInfo, false, scheduledItem)
  }

  // returns the valid values of the rate factor
  function valueRange(rateFactor : RateFactor) : List<String> {
    var currentPropertyInfo = new PropertyInstanceInfo(rateFactor.Pattern.RefCode, rateFactor.Modifier.IntrinsicType.RelativeName, rateFactor.Modifier, 0);
    return valueRangeInternal(currentPropertyInfo)
  }

  // returns all possible values of the property
  function fullValueRange(propRef : BoundPropertyReference) : List<String> {
    var currentPropertyInfo = new PropertyInstanceInfo(propRef)
    return valueRangeInternal(currentPropertyInfo, true)
  }

  // returns all possible values of the property
  // PropertyInstanceInfo allows the caller to specify separately the property and its container from the context entity
  // Value dependency support does not actually need the context entity passed in to be the same as the container of the entity,
  // especially to get the full value range, as the dependencies are not evaluated. However, a context entity is passed in to get its jurisdiction
  // as it does get the full value range for a specific state.
  function fullValueRange(propInstanceInfo : PropertyInstanceInfo) : List<String> {
    return fullValueRangeWithoutContextEntity(propInstanceInfo.TypeInfo, propInstanceInfo.ContextCoverable.PolicyLine)
  }

  // returns all possible valuse of property on specified container without any context
  // for all states
  function fullValueRange(propName : String, conatinerName : String) : List<String> {
    return fullValueRangeWithoutLineContext(propName, conatinerName)
  }

  // returns all possible values of the schedule property
  function fullValueRange(clause : Clause, schedulePropInfo : SchedulePropertyInfo, scheduledItem : ScheduledItem) : List<String> {
    var currentPropertyInfo = new PropertyInstanceInfo((schedulePropInfo as ScheduleOptionPropertyInfo).PropertyInfoName, clause.Pattern.CodeIdentifier, clause, clause);
    return valueRangeInternal(currentPropertyInfo, true, scheduledItem)
  }

  // returns all possible values of property without evaluation of context entity object - taking jurisdiction from line (base state)
  function fullValueRange(propertyTypeInfo : PropertyTypeInfo, line : PolicyLine) : List<String> {
    return fullValueRangeWithoutContextEntity(propertyTypeInfo, line)
  }

  // returns true if this property has an entry in the value dependency configuration
  function isRange(propRef : BoundPropertyReference) : boolean {
    var currentPropertyInfo = new PropertyInstanceInfo(propRef)
    return isRange(currentPropertyInfo)
  }

  function getSystemTableName(propRef : BoundPropertyReference) : String {
    var currentPropertyInfo = new PropertyInstanceInfo(propRef)
    return getSystemTableName(currentPropertyInfo)
  }

  // returns true if the option value is available for the option term
  function isTermOptionAvailable(clause : Clause, option : CovTermOpt) : boolean {
    var currentPropertyInfo = new CovTermOptInstanceInfo(option.CovTermPattern.CodeIdentifier,
        clause.Pattern.CodeIdentifier, clause, option)
    return isTermOptionAvailable(currentPropertyInfo)
  }

  // returns the current property value if it is valid, the valid value if only one, null otherwise
  function validPropertyValue(columnRef : BoundPropertyReference) : String {
    var currentPropertyInfo = new PropertyInstanceInfo(columnRef)
    return validPropertyValue(currentPropertyInfo)
  }

  // forces a valid value for the property or null
  function assignValidPropertyValue(columnRef : BoundPropertyReference) {
    columnRef.set(validPropertyValue(columnRef))
  }

  function hasDependentProperties(propRef : LobPropertyReference) : boolean {
    var propInfo = propRef.PropertyInstanceInfo
    return hasDependents(propInfo)
  }

  function hasDependentProperties(clause : Clause, propName : String) : boolean {
    var propInfo = new CovTermInstanceInfo(propName, clause.Pattern.CodeIdentifier, clause)
    return hasDependents(propInfo)
  }

  /**
   * Get all items whose values depend on given clause's term
   */
  function getAllDependents(clause : Clause, propName : String) : List<PropertyValueDependency> {
    var propInfo = new CovTermInstanceInfo(propName, clause.Pattern.CodeIdentifier, clause)
    var allDependents = _config.getAllDependents(propInfo.TypeInfo, propInfo.EffectiveJurisdictionCriteria)
    return allDependents
  }

  // updates the dependent properties of the property
  function updateDependentProperties(propRef : LobPropertyReference) {
    var propInfo = propRef.PropertyInstanceInfo
    var handler = new DependencyUpdateHandler(this, _config, propInfo.ContextCoverable)
    handler.updateDependents(propInfo, propInfo.EffectiveJurisdictionCriteria)
  }

  function getDirectDependents(propName : String, containerName : String, criteria : EffectiveJurisdictionCriteria) : List<PropertyTypeInfo> {
    return _config.getDirectDependents(propName, containerName, criteria)?.map(\propertyValueDependency -> new PropertyTypeInfo(propertyValueDependency.DependentProperty, propertyValueDependency.DependentContainer))
  }

  function getCoverableDependencies(coverable : Coverable) : List<PropertyTypeInfo> {
    var jurisdiction = DependencyUtil.getJurisdiction(coverable)
    var referenceDate = DependencyUtil.getCoverableReferenceDate(coverable)
    return _config.getCoverableDependencies(coverable.IntrinsicType.RelativeName, new EffectiveJurisdictionCriteria(jurisdiction, referenceDate))
  }

  // returns all systable properties of specified container for all jurisdictions
  function getCoverableSysTableProperties(containerName : String) : Set<String> {
    return _config.getSysTablePropertiesFromCoverable(containerName)
  }

  function updateDependentProperties(prop : PropertyTypeInfo, coverable : Coverable) {
    var handler = new DependencyUpdateHandler(this, _config, coverable)
    var jurisdiction = DependencyUtil.getJurisdiction(coverable)
    var referenceDate = DependencyUtil.getCoverableReferenceDate(coverable)
    handler.updateDependents(prop, new EffectiveJurisdictionCriteria(jurisdiction, referenceDate))
  }

  // validates all the dependent properties of the current coverable
  function validateDependentsInCoverable(coverable : Coverable, valContext : PCValidationContext, wizardStepId : String = null) {
    validateDependents(coverable, valContext, wizardStepId)
  }

  // end public interface

  internal function valueRangeInternal(currentPropertyInfo : PropertyInstanceInfo, fullRange : boolean = false, scheduledItem : ScheduledItem = null) : List<String> {
    // find the dependency info in config
    var typeInfo = currentPropertyInfo.TypeInfo
    var dep = typeInfo.IsModifier ? _config.getDependency(typeInfo.Name, (currentPropertyInfo.ContextObject as Modifier).PatternCode) : _config.getDependency(typeInfo)
    // no config entry for this property
    if (dep == null) return null

    // get values we depend on
    var params = SystemTableQueryData.make(currentPropertyInfo, dep, fullRange, scheduledItem)

    return getRangeValues(dep, params, fullRange)
  }

  internal function fullValueRangeWithoutContextEntity(propertyTypeInfo : PropertyTypeInfo, line : PolicyLine) : List<String> {
    var dep = _config.getDependency(propertyTypeInfo)
    if (dep == null) return null

    var paramMap = new HashMap<String, String>()

    var jurisdiction = line.BaseState
    var jobDate = line.getReferenceDateForCurrentJob(jurisdiction)

    var params = new SystemTableQueryData(paramMap, jurisdiction, jobDate)

    return getRangeValues(dep, params, true)
  }

  internal function fullValueRangeWithoutLineContext(propName : String, containerName : String) : List<String> {
    var dep = _config.getDependency(propName, containerName)
    if (dep == null) return {}

    var paramMap = new HashMap<String, String>()

    var params = new SystemTableQueryData(paramMap, null, null)

    return getRangeValues(dep, params, true)
  }


  internal function isRange(currentPropertyInfo : PropertyInstanceInfo) : boolean {
    // find the dependency info in config
    var dep = _config.getDependency(currentPropertyInfo.TypeInfo)
    return (dep != null)
  }

  internal function getSystemTableName(currentPropertyInfo : PropertyInstanceInfo) : String {
    // find the dependency info in config
    var dep = _config.getDependency(currentPropertyInfo.TypeInfo)
    // no config entry for this property
    if (dep == null) return null

    var params = SystemTableQueryData.make(currentPropertyInfo, dep)

    return dep.getSystemTableDependency(new EffectiveJurisdictionCriteria(params.Jurisdiction, params.ReferenceDate)).SystemTable
  }

  internal function isTermOptionAvailable(currentCovTermOptInfo : CovTermOptInstanceInfo) : boolean {
    var available = false
    // find the dependency info in config
    var dep = _config.getDependency(currentCovTermOptInfo.TypeInfo)
    if (dep == null) {
      LoggerFactory.getLogger("DEPENDENCY").debug(MarkerFactory.getMarker(ValueDependencySupport.Type.Name), ValueDependencySupport.Type.Name + ": No configuration found for ${currentCovTermOptInfo.Value.CovTermPattern.CodeIdentifier} - ${currentCovTermOptInfo.Value.DisplayName}")
      return true
    }

    var sysTableDependency = dep.getSystemTableDependency(currentCovTermOptInfo.EffectiveJurisdictionCriteria)
    // If there are no system table dependencies, the option is available
    if (sysTableDependency.DependsOn.Empty) return true

    // get values we depend on
    var params = SystemTableQueryData.make(currentCovTermOptInfo, dep)
    var covTermValue = currentCovTermOptInfo.Value

    // query system table
    var systemTableName = dep.getSystemTableDependency(new EffectiveJurisdictionCriteria(params.Jurisdiction, params.ReferenceDate)).SystemTable

    return systemTableName == null or systemTableName.Empty
        or isCovTermOptionAvailable(systemTableName, params, covTermValue)
  }

  internal function validPropertyValue(currentPropertyInfo : PropertyInstanceInfo) : String {
    var value = currentPropertyInfo.Value

    // get the list of valid values
    var validValues = valueRangeInternal(currentPropertyInfo)
    if (validValues == null) return null

    if (validValues.contains(value)) {
      // current value is valid -> return value
      return value as String
    }
    // current value is not valid
    if (validValues.size() == 1) {
      // only one valid value -> return it
      return validValues.first()
    }
    // no obvious choice -> return null
    return null
  }

  public function validPropertyValue(value : String, lobPropertyReference : LobPropertyReference) : boolean {
    var validValues = valueRangeInternal(lobPropertyReference.PropertyInstanceInfo)
    var validRangeValue = validValues != null and validValues.contains(value)
    return validRangeValue or not isRange(lobPropertyReference.BoundPropertyReference)
  }

  internal function validateDependents(coverable : Coverable, valContext : PCValidationContext, wizardStepId : String) {
    var dependencies = _config.getAllDependentsInCoverable(coverable.IntrinsicType.RelativeName)
    dependencies.each(\dep -> {
      var depObject = coverable[dep.DependentProperty] as String
      var currentPropertyInfo = new PropertyInstanceInfo(dep.DependentProperty, dep.DependentContainer, coverable, depObject)
      if (validPropertyValue(currentPropertyInfo) != depObject) {
        addDependentValueError(valContext, currentPropertyInfo, wizardStepId)
      }
    })
  }

  internal function hasDependents(propInfo : PropertyInstanceInfo) : boolean {
    var handler = new DependencyUpdateHandler(this, _config, propInfo.ContextCoverable)
    return handler.hasDependents(propInfo)
  }

  private function addDependentValueError(valContext : PCValidationContext, fieldInfo : PropertyInstanceInfo, wizardStepId : String) {
    valContext.Result.addFieldError(
        fieldInfo.ContextObject as KeyableBean,
        fieldInfo.TypeInfo.Name,
        valContext.Level,
        DisplayKey.get("Web.Policy.Common.Validation.InvalidDependentValue", fieldInfo.Value),
        wizardStepId)
  }

  private function removeDuplication(values : List<String>) : List<String> {
    var uniqueValues = new ArrayList<String>()
    values.each(\value -> {
      if (not uniqueValues.contains(value)) {
        uniqueValues.add(value)
      }
    })
    return uniqueValues
  }

  private function getRangeValues(dep : PropertyValueDependency, params : SystemTableQueryData, fullRange : boolean) : List<String> {
    // query system table
    var systemTableName : String
    // in case we want to query table for full range
    if (params.Jurisdiction == null and params.ReferenceDate == null and fullRange) {
      systemTableName = dep.getSystemTableDependencyWithoutJurisdiction().SystemTable
    } else {
      systemTableName = dep.getSystemTableDependency(new EffectiveJurisdictionCriteria(params.Jurisdiction, params.ReferenceDate)).SystemTable
    }
    // config exists but not available for this state
    if (systemTableName == null) return null

    var values = DependencySystemTableQuery.querySystemTableSingleColumn(systemTableName, params)

    if (fullRange) {
      // remove duplications, preserve order
      values = removeDuplication(values)
    }

    return values
  }

  private function isCovTermOptionAvailable(tableName : String, paramData : SystemTableQueryData, covTermOpt : CovTermOpt) : boolean {
    var entityType = DependencyUtil.getTypeByRelativeName(tableName)
    var value = DependencyUtil.getOptionValue(covTermOpt, entityType, paramData.ValueColumns.first())
    return DependencySystemTableQuery.querySystemTableSingleColumn(tableName, paramData).contains(value.toString())
  }
}