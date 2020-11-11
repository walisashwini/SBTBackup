package gw.lob.common

uses gw.api.productmodel.ClausePattern
uses gw.lob.common.dependency.AvailabilitySupport
uses gw.lob.common.dependency.CovTermInstanceInfo
uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.ExistenceSupport
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.dependency.find.DependencyFindHandler
uses gw.lob.common.dependency.find.FindDependencyHandler
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.validation.ValidationSupport
uses gw.util.Stack

class LobDependencyGraph {
  var _availabilitySupport: AvailabilitySupport
  var _existenceSupport: ExistenceSupport
  var _validationSupport: ValidationSupport
  var _valueDependencySupport: ValueDependencySupport

  function findDependents(sourcePropertyTypeInfo: PropertyTypeInfo,
                          criteria: EffectiveJurisdictionCriteria,
                          findHandler: DependencyFindHandler = null): List<DependencyInfo> {
    var dependenciesStack = new Stack<DependencyInfo>()
    var topLevelDependents = findDirectDependents(new DependencyInfo(sourcePropertyTypeInfo), criteria, true)
    findDependenciesTopologicallySorted(topLevelDependents, criteria, dependenciesStack, findHandler ?: new FindDependencyHandler ())

    resetDependsOnForTopLevelDependents(dependenciesStack, topLevelDependents)

    return dependenciesStack.toList().reverse()
  }

  function findCoverableDependents(coverable: Coverable,
                                   findHandler: DependencyFindHandler = null): List<DependencyInfo> {
    var dependenciesStack = new Stack<DependencyInfo>()
    var dependents = findCoverableDependencies(coverable)
    var criteria = EffectiveJurisdictionCriteria.createForCoverable(coverable)
    findDependenciesTopologicallySorted(dependents, criteria, dependenciesStack, findHandler ?: new FindDependencyHandler ())

    return dependenciesStack.toList().reverse()
  }

  function findClauseCovTermsDependents(clausePattern: ClausePattern, coverable: Coverable, findHandler: DependencyFindHandler = null) : List<DependencyInfo> {
    var dependenciesSet = new HashSet<DependencyInfo>()
    var criteria = EffectiveJurisdictionCriteria.createForClause(coverable, clausePattern.CodeIdentifier)
    var clause = coverable.getCoverageConditionOrExclusion(clausePattern)

    clausePattern.CovTerms.each(\covTermPattern -> {
      var propertyTypeInfo = new CovTermInstanceInfo(covTermPattern.CodeIdentifier, clause.Pattern.CodeIdentifier, clause).TypeInfo
      dependenciesSet.add(new DependencyInfo(propertyTypeInfo))
      dependenciesSet.addAll(findDirectDependents(new DependencyInfo(propertyTypeInfo), criteria, true))
    })

    var dependenciesStack = new Stack<DependencyInfo>()
    findDependenciesTopologicallySorted(dependenciesSet.toList(), criteria, dependenciesStack, findHandler?:new FindDependencyHandler())

    resetDependsOnForTopLevelDependents(dependenciesStack, dependenciesSet.toList())

    return dependenciesStack.toList().reverse()
  }

  private function findDependenciesTopologicallySorted(dependencyInfos: List<DependencyInfo>,
                                                       criteria: EffectiveJurisdictionCriteria,
                                                       resultStack: Stack<DependencyInfo>,
                                                       findHandler: DependencyFindHandler) {
    dependencyInfos.each(\dependencyInfo -> {
      var propTypeInfo = dependencyInfo.Source
      if (not findHandler.shouldHandle(propTypeInfo)) {
        return
      }

      findHandler.onFindDependentStart(propTypeInfo)

      var dependents = findDirectDependents(dependencyInfo, criteria, false)
      findDependenciesTopologicallySorted(dependents, criteria, resultStack, findHandler)

      if (!resultStack.contains(dependencyInfo)){
        resultStack.push(dependencyInfo)
      } else {
        resultStack.get(resultStack.indexOf(dependencyInfo)).addDependsOns(dependencyInfo.DependsOns)
      }

      findHandler.onFindDependentCompleted(propTypeInfo)
    })
  }

  function findDirectDependents(dependencyInfo: DependencyInfo, criteria: EffectiveJurisdictionCriteria, skipAddParentTypeInfo: boolean): List<DependencyInfo> {
    var propTypeInfo = dependencyInfo.Source
    var dependentProperties = new TreeSet<PropertyTypeInfo>()
    var dependencyInfos = new TreeSet<DependencyInfo>()
    var availabilityDependents : Set<PropertyTypeInfo>
    var existenceDependents : Set<PropertyTypeInfo>
    var validationDependents : Set<PropertyTypeInfo>

    if (propTypeInfo.IsSchedule) {
      availabilityDependents = _availabilitySupport.getScheduledItemPropertyDependents(propTypeInfo, criteria)?:new HashSet<PropertyTypeInfo>()
    } else {
      availabilityDependents = _availabilitySupport.getEntityColumnDependents(propTypeInfo.ContextType.RelativeName, propTypeInfo.Name, criteria)?:new HashSet<PropertyTypeInfo>()
    }

    existenceDependents = _existenceSupport.getEntityColumnDependents(propTypeInfo.ContextType.RelativeName, propTypeInfo.Name, criteria)?:new HashSet<PropertyTypeInfo>()
    validationDependents = _validationSupport.getEntityColumnDependents(propTypeInfo.ContextType.RelativeName, propTypeInfo.Name, criteria)?:new HashSet<PropertyTypeInfo>()
    dependentProperties.addAll(availabilityDependents)
    dependentProperties.addAll(existenceDependents)
    dependentProperties.addAll(validationDependents)

    var valueDependents = _valueDependencySupport.getDirectDependents(propTypeInfo.Name, propTypeInfo.ContextType.RelativeName, criteria)?:new HashSet<PropertyTypeInfo>()
    dependentProperties.addAll(valueDependents)

    if (!skipAddParentTypeInfo) {
      dependencyInfos.addAll(convertPropertyTypeInfosToDependencyInfos(dependentProperties.toList(), dependencyInfo))
    } else {
      dependencyInfos.addAll(convertPropertyTypeInfosToDependencyInfos(dependentProperties.toList(), null))
    }

    var childOptionCovTermDependents = findChildOptionCovtermsDependents(dependencyInfo, criteria, skipAddParentTypeInfo)
    dependencyInfos.addAll(childOptionCovTermDependents)

    return dependencyInfos.toList()
  }

  private function findCoverableDependencies(coverable: Coverable) : List<DependencyInfo> {
    var dependentProperties = new TreeSet<PropertyTypeInfo>()

    var availabilityDependents = _availabilitySupport.getCoverableDependencies(coverable) ?: new HashSet<PropertyTypeInfo>()
    dependentProperties.addAll(availabilityDependents)

    var valueDependents = _valueDependencySupport.getCoverableDependencies(coverable) ?: new HashSet<PropertyTypeInfo>()
    dependentProperties.addAll(valueDependents)

    return convertPropertyTypeInfosToDependencyInfos(dependentProperties.toList(), null).toList()
  }

  private function findChildOptionCovtermsDependents(dependencyInfo: DependencyInfo, criteria: EffectiveJurisdictionCriteria, skipAddParentTypeInfo: boolean): Set<DependencyInfo> {
    var res = new TreeSet<DependencyInfo>()
    var propTypeInfo = dependencyInfo.Source
    if (propTypeInfo.IsClause && !propTypeInfo.IsSchedule) {
      var clause = com.guidewire.pc.system.dependency.PCDependencies.ProductModel.getPatternByCodeIdentifier(propTypeInfo.Name, ClausePattern)
      if (clause != null) {
        clause.CovTerms.forEach(\ term -> {
          var dependentProperties = new ArrayList<PropertyTypeInfo>()
          var availabilityDependents = _availabilitySupport.getEntityColumnDependents(clause.CodeIdentifier, term.CodeIdentifier, criteria)?: new ArrayList<PropertyTypeInfo>()
          var existenceDependents = _existenceSupport.getEntityColumnDependents(clause.CodeIdentifier, term.CodeIdentifier, criteria)?: new ArrayList<PropertyTypeInfo>()
          var validationDependents = _validationSupport.getEntityColumnDependents(clause.CodeIdentifier, term.CodeIdentifier, criteria)?: new ArrayList<PropertyTypeInfo>()
          var valueDependents = _valueDependencySupport.getDirectDependents(term.CodeIdentifier, clause.CodeIdentifier, criteria) ?: new ArrayList<PropertyTypeInfo>()
          dependentProperties.addAll(availabilityDependents)
          dependentProperties.addAll(existenceDependents)
          dependentProperties.addAll(validationDependents)
          dependentProperties.addAll(valueDependents)
          if (!skipAddParentTypeInfo) {
            res.addAll(convertPropertyTypeInfosToDependencyInfos(dependentProperties, dependencyInfo))
          } else {
            res.addAll(convertPropertyTypeInfosToDependencyInfos(dependentProperties, null))
          }
        })
      }
    }
    return res.toSet()
  }

  private function convertPropertyTypeInfosToDependencyInfos(propTypeInfos : List<PropertyTypeInfo>, dependOn : DependencyInfo): List<DependencyInfo> {
    return propTypeInfos
        .map(\propTypeInfo -> new DependencyInfo(propTypeInfo, dependOn))
        .toList()
  }

  private function resetDependsOnForTopLevelDependents(dependenciesStack : Stack<DependencyInfo>, topLevelDependents : List<DependencyInfo>) {
    dependenciesStack.forEach(\ dependency -> {
      if (topLevelDependents.contains(dependency)) {
        dependency.DependsOns.clear()
      }
    })
  }

  construct() {
    _availabilitySupport = AvailabilitySupport.Instance
    _existenceSupport = ExistenceSupport.Instance
    _validationSupport = ValidationSupport.Instance
    _valueDependencySupport = ValueDependencySupport.Instance
  }

  construct(availabilitySupport: AvailabilitySupport, existenceSupport: ExistenceSupport, validationSupport: ValidationSupport, valueDependencySupport: ValueDependencySupport) {
    _availabilitySupport = availabilitySupport
    _existenceSupport = existenceSupport
    _validationSupport = validationSupport
    _valueDependencySupport = valueDependencySupport
  }
}