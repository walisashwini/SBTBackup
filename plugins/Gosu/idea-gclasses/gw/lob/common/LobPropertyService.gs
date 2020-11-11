package gw.lob.common

uses com.guidewire.pc.api.domain.covterm.OptionCovTermInternal
uses com.google.common.collect.HashMultimap
uses gw.api.domain.Clause
uses gw.api.domain.covterm.CovTerm
uses gw.api.domain.covterm.OptionCovTerm
uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.CovTermOpt
uses gw.api.productmodel.OptionCovTermPattern
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.upgrade.Coercions
uses gw.api.upgrade.PCCoercions
uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.availability.OptionCovTermAvailabilityHandlerUtil
uses gw.lob.common.dependency.AvailabilitySupport
uses gw.lob.common.dependency.CovTermInstanceInfo
uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.ExistenceSupport
uses gw.lob.common.dependency.GWNode
uses gw.lob.common.dependency.GraphTraversalConstraint
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.dependency.PropertyPathResolver
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.dependency.update.DependencyTrigger
uses gw.lob.common.dependency.update.DependencyTriggerClause
uses gw.lob.common.dependency.update.DependencyTriggerEntityProperty
uses gw.lob.common.dependency.update.DependencyTriggerScheduledItemProperty
uses gw.lob.common.dependency.update.DependencyTriggerTerm
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.displayable.LobFieldMeta
uses gw.lob.common.displayable.LobFieldMetaSupport
uses gw.lob.common.productmodel.sync.JobWizardHelperDisplay
uses gw.lob.common.productmodel.sync.LobProductModelSyncIssuesHandler
uses gw.lob.common.productmodel.sync.ProductModelSyncIssuesDisplayErrors
uses gw.lob.common.sbt.schedules.ScheduleItemPropertyUtil
uses gw.lob.common.validation.RangeValidator
uses gw.lob.common.validation.ValidationSupport
uses gw.util.concurrent.LockingLazyVar
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory

uses java.util.stream.Collectors

/**
 * Higher level service that manipulates entity and clause properties using multiple ui and dependency frameworks
 */
class LobPropertyService {
  static var _instance = LockingLazyVar.make(\ -> new LobPropertyService())

  var _availabilitySupport: AvailabilitySupport
  var _existenceSupport: ExistenceSupport
  var _validationSupport: ValidationSupport
  var _valueDependencySupport: ValueDependencySupport
  var _lobFieldMetaSupport: LobFieldMetaSupport
  var _lobDependencyGraph: LobDependencyGraph

  static property get Instance(): LobPropertyService {
    return _instance.get()
  }
  static var LINE = "LINE"

  function initializeCoverable(coverable: Coverable) {
    syncCoverableProperties(coverable)
  }

  /**
   * Update all properties of the coverable
   */
  function syncCoverableProperties(coverable: Coverable, jobWizardHelper: JobWizardHelper = null) {
    var helper = (jobWizardHelper == null) ? null : new ProductModelSyncIssuesDisplayErrors(jobWizardHelper)

    LobProductModelSyncIssuesHandler.createOrSyncClauses(coverable, helper)

    lobPropertyReferencesFor(coverable).each( \ propRef -> {
      new DependencyTriggerEntityProperty(coverable, propRef, null).update()
    })

    updateCoverableProperties(coverable, helper)
  }

  function updateEntityDependentProperties(propertyInstanceInfo: PropertyInstanceInfo, helper: JobWizardHelperDisplay = null) {
    updateProperties(_lobDependencyGraph.findDependents(propertyInstanceInfo.TypeInfo, propertyInstanceInfo.EffectiveJurisdictionCriteria), propertyInstanceInfo.ContextCoverable, propertyInstanceInfo.GraphTraversalConstraint, helper)
  }

  function updateCoverableProperties(coverable: Coverable, helper: JobWizardHelperDisplay = null) {
    var traversalConstraint = DependencyUtil.getGraphTraversalConstraint(coverable)
    updateCoverableDependentProperties(_lobDependencyGraph.findCoverableDependents(coverable), coverable, traversalConstraint, helper)
  }

  function updateCovTermDependentProperties(covTerm: CovTerm, jobWizardHelper: JobWizardHelper = null) {
    var helper = (jobWizardHelper == null) ? null : new ProductModelSyncIssuesDisplayErrors(jobWizardHelper)
    var clause = covTerm.Clause
    var propertyInstanceInfo = new CovTermInstanceInfo(covTerm.Pattern.CodeIdentifier, clause.Pattern.CodeIdentifier, clause)
    updateEntityDependentProperties(propertyInstanceInfo, helper)
  }

  function updateClauseDependentProperties(clausePattern: ClausePattern, coverable: Coverable, jobWizardHelper: JobWizardHelper = null) {
    var helper = (jobWizardHelper == null) ? null : new ProductModelSyncIssuesDisplayErrors(jobWizardHelper)
    var propertyInstanceInfo = new PropertyInstanceInfo(clausePattern.CodeIdentifier, coverable.IntrinsicType.toString(), coverable, null)
    updateEntityDependentProperties(propertyInstanceInfo, helper)
  }

  function updateScheduledItemPropertyDependentProperties(schedulePropertyInfo: SchedulePropertyInfo, clause: Clause, jobWizardHelper: JobWizardHelper = null ) {
    var helper = (jobWizardHelper == null) ? null : new ProductModelSyncIssuesDisplayErrors(jobWizardHelper)
    var propertyInstanceInfo = new PropertyInstanceInfo(ScheduleItemPropertyUtil.getPropertyInfoName(schedulePropertyInfo), clause.Pattern.CodeIdentifier, clause, null, true)
    updateEntityDependentProperties(propertyInstanceInfo, helper)
  }

  function updateClauseCovTermsDependentProperties(clausePattern: ClausePattern, coverable: Coverable, jobWizardHelper: JobWizardHelper = null) {
    var helper = (jobWizardHelper == null) ? null : new ProductModelSyncIssuesDisplayErrors(jobWizardHelper)
    var traversalConstraint = DependencyUtil.getGraphTraversalConstraint(coverable)
    updateProperties(_lobDependencyGraph.findClauseCovTermsDependents(clausePattern, coverable), coverable, traversalConstraint, helper)
  }

  function hasDependents(propRef: LobPropertyReference): boolean {
    return _valueDependencySupport.hasDependentProperties(propRef)
        or _availabilitySupport.hasDependants(propRef)
        or _existenceSupport.hasDependants(propRef)
        or _validationSupport.hasDependants(propRef)
  }

  function hasDependents(clause: Clause, covTermCode: String) : boolean {
    return _valueDependencySupport.hasDependentProperties(clause, covTermCode)
        or _availabilitySupport.hasDependants(clause, covTermCode)
        or _existenceSupport.hasDependants(clause, covTermCode)
        or _validationSupport.hasDependants(clause, covTermCode)
  }

  // Function to check if the given CovTerm depends on other property in validation configuration
  // Will be removed/refactored once we refactor the LobCovTermInputSet in the future
  function isValidationDependent(clause : Clause, covTermCode : String) : boolean {
    return _validationSupport.isDependant(clause, covTermCode)
  }

  function getPropertyValueRange(propRef: LobPropertyReference): List<String> {
    return _valueDependencySupport.valueRange(propRef) ?: {}
  }

  function isEntityColumnAvailable(propRef: LobPropertyReference): boolean {
    var fieldMeta = _lobFieldMetaSupport.findFieldMeta(propRef)
    return isEntityColumnAvailable(propRef, fieldMeta)
  }

  function isEntityColumnAvailable(propRef: LobPropertyReference, fieldMeta: LobFieldMeta): boolean {
    if (not fieldMeta.Available) {
      return false
    }
    return _availabilitySupport.isEntityColumnAvailable(propRef) ?: true
  }

  function isClauseAvailable(coverable: Coverable, clauseCode: String): boolean {
    return AvailabilitySupport.Instance.isClauseAvailable(coverable, clauseCode) ?: true
  }

  function isCovTermAvailable(coverable: Coverable, clauseCode: String, covTermCode: String): boolean {
    var clause = coverable.getCoverageConditionOrExclusion(PCCoercions.makeProductModel<ClausePattern>(clauseCode))

    if (clause == null) {
      LoggerFactory.getLogger("DEPENDENCY").debug(MarkerFactory.getMarker(LobPropertyService.Type.Name), LobPropertyService.Type.Name + ": Clause '${clauseCode}' is not available for Coverable '${coverable.DisplayName}'")
      return false
    }

    var covTermPattern = clause.Pattern.getCovTermPatternByCodeIdentifier(covTermCode)
    var isCovTermAvailable = AvailabilitySupport.Instance.isCovTermAvailable(coverable, clauseCode, covTermCode) ?: true

    if (covTermPattern typeis OptionCovTermPattern) {
      // create a dummy option covterm to query value dependency framework
      var covTerm = new OptionCovTermInternal(covTermPattern, clause)
      return isCovTermAvailable and anyCovTermOptionAvailable(covTerm)
    } else {
      return isCovTermAvailable
    }
  }

  function isCovTermOptionAvailable(optionCovTerm: OptionCovTerm, option: CovTermOpt): boolean {
    var clause = optionCovTerm.Clause
    var clausePatternCode = clause.Pattern.CodeIdentifier
    var covTermPatternCode = optionCovTerm.Pattern.CodeIdentifier

    var handler = OptionCovTermAvailabilityHandlerUtil.handlerFor(clausePatternCode, covTermPatternCode)
    if (handler == null) {
      return _valueDependencySupport.isTermOptionAvailable(clause, option)
    }

    return Coercions.makeBooleanFrom(handler.handleCall(optionCovTerm, {option})) ?: true
  }

  function isScheduledItemPropertyAvailable(scheduledItem : ScheduledItem, schedulePropertyInfo : SchedulePropertyInfo ): boolean {
    var isAvailable = _availabilitySupport.isScheduledItemPropertyAvailable(scheduledItem, schedulePropertyInfo)

    return isAvailable == null ? true : isAvailable
  }

  function isEntityColumnRequired(propRef: LobPropertyReference, fieldMeta: LobFieldMeta): boolean {
    return _existenceSupport.isEntityColumnRequired(propRef) ?: fieldMeta.Required
  }

  function getCoverablePropertyRangeDefaultValue(propRef : LobPropertyReference) : String {
    var entity = propRef.Entity
    if (entity typeis Coverable) {
      var criteria = EffectiveJurisdictionCriteria.createForCoverable(entity)
      return getPropertyRangeDefaultValue(entity, propRef.PropertyInfo.Name, criteria)
    } else {
      return null
    }
  }

  function getCovTermRangeDefaultValue(covTerm : CovTerm) : String {
    var clause = covTerm.Clause
    var coverable = clause.OwningCoverable
    var criteria = EffectiveJurisdictionCriteria.createForClause(coverable, clause.Pattern.CodeIdentifier)
    return getPropertyRangeDefaultValue(clause, covTerm.Pattern.CodeIdentifier, criteria)
  }

  function setCoverablePropertyDefaultValueWithSingleValueRange(propRef : LobPropertyReference) {
    var singleValueRange = getCoverablePropertyRangeDefaultValue(propRef)
    if (singleValueRange != null && singleValueRange != propRef.Value) {
      propRef.Value = singleValueRange
    }
  }

  function setCovTermDefaultValueWithSingleValueRange(covTerm : CovTerm) {
    var singleValueRange = getCovTermRangeDefaultValue(covTerm)
    if (singleValueRange != null && singleValueRange != covTerm.ValueAsString) {
      covTerm.setValueFromString(singleValueRange)
    }
  }

  function setNullOrSingleOptionAsDefaultValueForRangeInput(propRef : LobPropertyReference) {
    var fieldMeta = _lobFieldMetaSupport.findFieldMeta(propRef)

    if (fieldMeta == null or not fieldMeta.isRangeType()) return

    // Set propRef value to null if the current value isn't part of the value range
    var availableValues = getPropertyValueRange(propRef)
    nullPropRefValueNotInRange(propRef, availableValues)

    // For required range field with single option, apply this option as default
    // For optional range field, "none" is a permanent option and no default value is needed.
    if (propRef.Value == null
        and isEntityColumnRequired(propRef, fieldMeta)
        and availableValues.size() == 1) {
      propRef.Value = availableValues.first()
    }
  }

  function nullPropRefValueNotInRange(propRef : LobPropertyReference, availableValues : List<String>) {
    var searchPropValueStr = propRef.Value != null ? String.valueOf(propRef.Value) : ""
    if (!availableValues.contains(searchPropValueStr)) {
      propRef.Value = null
    }
  }

  private function updateProperties(dependencyInfos: List<DependencyInfo>, coverable: Coverable, traversalConstraint: GraphTraversalConstraint, helper: JobWizardHelperDisplay = null) {
    var updatedInstanceMap = new HashMap<String, boolean>()
    var type2TriggerMap = HashMultimap.create<DependencyInfo, DependencyTrigger>()
    dependencyInfos.forEach(\dependencyInfo -> {
      findDependencyUpdates(dependencyInfo, coverable, traversalConstraint)?.forEach(\trigger -> {
        type2TriggerMap.put(dependencyInfo, trigger)
        if (shouldUpdate(trigger, type2TriggerMap)) {
          trigger.update(updatedInstanceMap, helper)
        }
      })
    })
  }

  private function updateCoverableDependentProperties(dependencyInfos: List<DependencyInfo>, coverable: Coverable, traversalConstraint: GraphTraversalConstraint, helper: JobWizardHelperDisplay = null) {
    dependencyInfos.forEach(\dependencyInfo -> {
      findDependencyUpdates(dependencyInfo, coverable, traversalConstraint)?.forEach(\trigger -> {
        trigger.doUpdate(helper)
      })
    })
  }

  private function findDependencyUpdates(dependencyInfo: DependencyInfo, coverable: Coverable, traversalConstraint: GraphTraversalConstraint, helper: JobWizardHelperDisplay = null): List<DependencyTrigger> {
    var dependentUpdates = dependencyUpdateFor(dependencyInfo, coverable, traversalConstraint)

    if (dependentUpdates.Empty) {
      dependentUpdates = dependencyUpdateFromLineCoverableFor(dependencyInfo, coverable, traversalConstraint)
    }

    return dependentUpdates
  }

  private function dependencyUpdateFromLineCoverableFor(dependencyInfo: DependencyInfo, coverable: Coverable, traversalConstraint: GraphTraversalConstraint): List<DependencyTrigger> {
    if (coverable.PolicyLine typeis Coverable) {
      return dependencyUpdateFor(dependencyInfo, coverable.PolicyLine, traversalConstraint)
    }

    return {}
  }

  internal function dependencyUpdateFor(dependencyInfo: DependencyInfo, coverable: Coverable, traversalConstraint: GraphTraversalConstraint): List<DependencyTrigger> {
    var dependentTypeInfo = dependencyInfo.Source
    if (dependentTypeInfo.RiskType == coverable.IntrinsicType) {
      if (dependentTypeInfo.IsClause) {
        if (dependentTypeInfo.IsTerm) {
          return getDependentPropertyReferenceForTerm(dependencyInfo, coverable)
        } else if (dependentTypeInfo.IsSchedule) {
          return getDependentPropertyRefereceForScheduleItemProperty(dependencyInfo, coverable)
        }

        return getDependentPropertyReferenceForClause(dependencyInfo, coverable)
      }

      return getDependentPropertyReferenceForEntityProperty(dependencyInfo, coverable)
    }

    final var coverables = getChildCoverablesAndScheduleItems(coverable, traversalConstraint)
    return coverables
        .flatMap(\childCoverable -> dependencyUpdateFor(dependencyInfo, childCoverable, traversalConstraint))
  }

  private function getChildCoverablesAndScheduleItems(currentCoverable: Coverable, traversalConstraint: GraphTraversalConstraint): List<Coverable> {
    final var coverablesAndScheduleItems = PropertyPathResolver.getChildCoverables(currentCoverable, traversalConstraint)

    if (not(currentCoverable typeis ScheduledItem)) {
      var scheduleItems = currentCoverable.CoveragesConditionsAndExclusionsFromCoverable?.whereTypeIs(Schedule)*.ScheduledItems.whereTypeIs(Coverable)
      coverablesAndScheduleItems.addAll(scheduleItems.toList())
    }
    return coverablesAndScheduleItems
  }

  private function getDependentPropertyReferenceForEntityProperty(dependencyInfo: DependencyInfo, coverable: Coverable) : List<DependencyTrigger> {
    var dependentTypeInfo = dependencyInfo.Source
    var propRef = new LobPropertyReference(coverable, dependentTypeInfo.Name)
    return {new DependencyTriggerEntityProperty (coverable, propRef, dependencyInfo)}
  }

  private function getDependentPropertyReferenceForClause(dependencyInfo: DependencyInfo, coverable: Coverable) : List<DependencyTrigger> {
    return {new DependencyTriggerClause (coverable, dependencyInfo)}
  }

  private function getDependentPropertyReferenceForTerm(dependencyInfo: DependencyInfo, coverable: Coverable) : List<DependencyTrigger> {
    return {new DependencyTriggerTerm (coverable, dependencyInfo)}
  }

  private function getDependentPropertyRefereceForScheduleItemProperty(dependencyInfo: DependencyInfo, coverable: Coverable) : List<DependencyTrigger> {
    var dependentTypeInfo = dependencyInfo.Source
    var scheduledClause = coverable.CoveragesConditionsAndExclusionsFromCoverable
        .firstWhere( \ clause ->  clause.Pattern.CodeIdentifier == dependentTypeInfo.ContextType.RelativeName)
    if (scheduledClause != null) {
      if (scheduledClause typeis Schedule) {
        return scheduledClause.ScheduledItems.map( \ scheduledItem -> new DependencyTriggerScheduledItemProperty(scheduledItem, dependencyInfo.Source.Name, dependencyInfo)).toList()
      }
    }

    return {}
  }

  private function getPropertyRangeDefaultValue(entity : KeyableBean, propName : String, criteria : EffectiveJurisdictionCriteria) : String{
    var containerName = entity typeis entity.Clause ? entity.Pattern.CodeIdentifier : entity.IntrinsicType.TypeInfo.Name
    var rangeValidators = _validationSupport.findPropertyValidators(containerName, propName, criteria)
    if (rangeValidators typeis List<RangeValidator>)
      return rangeValidators?.first()?.getSingleValueRange(entity)
    else
      return null
  }

  private function lobPropertyReferencesFor(coverable: Coverable): List<LobPropertyReference> {
    return LobFieldMetaSupport.Instance.findEntityProperties(coverable)
        .map( \ propertyName -> new LobPropertyReference(coverable, propertyName))
  }

  private function anyCovTermOptionAvailable(optionCovTerm: OptionCovTerm): boolean {
    var options = optionCovTerm.Pattern.Options

    // TODO: can be optimized by enhancing the API of value dependency framework
    return options.hasMatch( \ option -> isCovTermOptionAvailable(optionCovTerm, option))
  }

  private function shouldUpdate(currentTrigger: DependencyTrigger, type2TriggerMap: HashMultimap<DependencyInfo, DependencyTrigger>): boolean {
    var dependsOns = currentTrigger.getDependencyInfo()?.DependsOns
    if (dependsOns.size() == 0) {
      return true
    } else {
      for (dependsOn in dependsOns) {
        var triggers = type2TriggerMap.asMap().get(dependsOn)
        for (trigger in triggers) {
          if (underCommonAncestor(currentTrigger, trigger) && trigger.isChanged()) {
            return true
          }
        }
      }
    }
    return false
  }

  protected function underCommonAncestor(source : DependencyTrigger, target : DependencyTrigger): boolean {
    var sourceNode = source.getAncestor()
    var targetNode = target.getAncestor()
    if (sourceNode.ID.toString().equals(targetNode.ID.toString())) {
      return true
    } else {
      if (!source.getDependencyInfo()?.Source.ContextType.RelativeName?.equals(target.getDependencyInfo()?.Source.ContextType.RelativeName)) {
        var sourceGWNode = new GWNode(sourceNode)
        var targetGWNode = new GWNode(targetNode)
        var commonAncestorPath = getCommonAncestorPath(source.getDependencyInfo()?.Source, target.getDependencyInfo()?.Source)
        if (commonAncestorPath != null && getCommonParentID(sourceGWNode, commonAncestorPath)?.equals(getCommonParentID(targetGWNode, commonAncestorPath))) {
          return true
        }
      }
    }
    return false
  }

  protected function getCommonParentID(node : GWNode, commonAncestorPath : String) : String {
    if (isCommonAncestorNode(node, commonAncestorPath)) {
      return node.InstanceId
    } else {
      var parentNode = node
      while(!parentNode.isLine()) {
        parentNode = parentNode.getParent()
        if (isCommonAncestorNode(parentNode, commonAncestorPath)) {
          return parentNode.InstanceId
        }
      }
    }
    return null
  }

  protected function getCommonAncestorPath(source : PropertyTypeInfo, target : PropertyTypeInfo) : String {
    if (source.IsLineLevel || target.IsLineLevel) {
      return LINE
    } else {
      var sourcePath = source.Path
      var targetPath = target.Path
      if (sourcePath == null || targetPath == null) {
        return LINE
      }
      return intersect(sourcePath, targetPath)
    }
  }

  protected function intersect(source : String, target : String) : String {
    var res = new HashSet<String>(Arrays.asList(source.split("/")))
    var inline = new HashSet<String>(Arrays.asList(target.split("/")))
    res?.retainAll(inline)
    return res.stream().collect(Collectors.joining("/"))
  }

  protected function isCommonAncestorNode(node : GWNode, commonAncestorPath : String) : boolean {
    if (commonAncestorPath == LINE) {
      return node.isLine()
    } else {
      return node.Path.AbsolutePathString.equals(commonAncestorPath)
    }
  }

  internal construct() {
    _lobFieldMetaSupport = LobFieldMetaSupport.Instance
    _availabilitySupport = AvailabilitySupport.Instance
    _existenceSupport = ExistenceSupport.Instance
    _validationSupport = ValidationSupport.Instance
    _valueDependencySupport = ValueDependencySupport.Instance
    _lobDependencyGraph = new LobDependencyGraph(_availabilitySupport, _existenceSupport, _validationSupport, _valueDependencySupport)
  }

  internal construct(lobFieldMetaSupport: LobFieldMetaSupport, availabilitySupport: AvailabilitySupport, existenceSupport: ExistenceSupport, validationSupport : ValidationSupport, valueDependencySupport: ValueDependencySupport, lobDependencyGraph: LobDependencyGraph) {
    _lobFieldMetaSupport = lobFieldMetaSupport
    _availabilitySupport = availabilitySupport
    _existenceSupport = existenceSupport
    _validationSupport = validationSupport
    _valueDependencySupport = valueDependencySupport
    _lobDependencyGraph = lobDependencyGraph
  }

  internal construct(lobFieldMetaSupport: LobFieldMetaSupport, availabilitySupport: AvailabilitySupport, existenceSupport: ExistenceSupport, validationSupport : ValidationSupport, lobDependencyGraph: LobDependencyGraph) {
    _lobFieldMetaSupport = lobFieldMetaSupport
    _availabilitySupport = availabilitySupport
    _existenceSupport = existenceSupport
    _validationSupport = validationSupport
    _lobDependencyGraph = lobDependencyGraph
  }
}