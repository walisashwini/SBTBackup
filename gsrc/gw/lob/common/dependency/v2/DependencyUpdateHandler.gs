package gw.lob.common.dependency.v2

uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.GraphTraversalConstraint
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.dependency.PropertyPathResolver
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.dependency.PropertyValueDependency
uses gw.lob.common.dependency.ValueDependencyConfiguration

class DependencyUpdateHandler {
  var _valueDependencySupport: ValueDependencySupport
  var _config: ValueDependencyConfiguration
  var _coverable: Coverable
  var _graphTraversalConstraint: GraphTraversalConstraint
  var _dataModelDependents: Map<String, PropertyValueDependency>
  var _productModelDependents: Map<String, PropertyValueDependency>
  var _otherDependents: Map<String, PropertyValueDependency>

  construct(valueDependencySupport: ValueDependencySupport, config: ValueDependencyConfiguration, coverable: Coverable) {
    _valueDependencySupport = valueDependencySupport
    _config = config
    _coverable = coverable
    _dataModelDependents = new HashMap<String, PropertyValueDependency>()
    _productModelDependents = new HashMap<String, PropertyValueDependency>()
    _otherDependents = new HashMap<String, PropertyValueDependency>()
    _graphTraversalConstraint = gw.lob.common.dependency.DependencyUtil.getGraphTraversalConstraint(_coverable)
  }

  function hasDependents(propInfo: PropertyInstanceInfo): boolean {
    return _config.getDirectDependents(propInfo.TypeInfo, propInfo.EffectiveJurisdictionCriteria).HasElements
  }

  function updateDependents(propInfo: PropertyInstanceInfo, criteria: EffectiveJurisdictionCriteria) {
    updateDependents(propInfo.TypeInfo, criteria)
  }

  function updateDependents(prop: PropertyTypeInfo, criteria: EffectiveJurisdictionCriteria) {
    var dependents = _config.getDirectDependents(prop, criteria)

    if(not dependents.Empty) {
      if(prop.IsClause) {
        // if a cov term -> process all direct and indirect data model dependents
        dependents = _config.getAllDependents(prop, criteria)
        updateDependentsSkipProductModel(dependents, criteria)
      }
      else {
        // if a coverable property -> process all direct dependents
        updateDependents(dependents, criteria)
      }
    }
  }

  internal function updateDependents(dependents: List<PropertyValueDependency>, criteria: EffectiveJurisdictionCriteria) {
    classifyDependents(dependents)
    processDependents(criteria)
  }

  internal function updateDependentsSkipProductModel(dependents: List<PropertyValueDependency>, criteria: EffectiveJurisdictionCriteria) {
    classifyDependentsSkipProductModel(dependents)
    processDependents(criteria)
  }

  internal function processDependents(criteria: EffectiveJurisdictionCriteria) {
    while (not _dataModelDependents.Empty) {
      // process first the data model dependencies in the same coverable
      while (not _dataModelDependents.Empty) {
        var key = _dataModelDependents.Keys.first()
        var dependent = _dataModelDependents.remove(key)
        processDataModelDependent(dependent)
      }

      // next process the product model dependencies in the same coverable
      if (not _productModelDependents.Empty) {
        var values = new HashMap<PropertyValueDependency, String>()
        _productModelDependents.eachValue( \ dependent -> {
          values.put(dependent, dependentValue(dependent))
        })

        processProductModelDependent(values, criteria)

        _productModelDependents.clear()
      }
    }

    if(not _otherDependents.Empty) {
      // there are some dependents in the child coverables
      var childCoverables = PropertyPathResolver.getChildCoverables(_coverable, _graphTraversalConstraint)
      childCoverables.each( \ childCoverable -> {
        var handler = new DependencyUpdateHandler(_valueDependencySupport, _config, childCoverable)
        handler.updateDependents(_otherDependents.Values.toList(), criteria)
      })
    }
  }

  internal function processDataModelDependent(dependent: PropertyValueDependency) {
    var value = dependentValue(dependent)
    var currentPropertyInfo = new PropertyInstanceInfo (dependent.DependentProperty, dependent.DependentContainer, _coverable, value)
    var newValue = _valueDependencySupport.validPropertyValue(currentPropertyInfo)
    if(newValue != value) {
      _coverable[dependent.DependentProperty] = newValue
      var subDependents = _config.getDirectDependents(currentPropertyInfo.TypeInfo, currentPropertyInfo.EffectiveJurisdictionCriteria)
      classifyDependents(subDependents)
    }
  }

  internal function processProductModelDependent(values: Map<PropertyValueDependency, String>, criteria: EffectiveJurisdictionCriteria) {

    _coverable.syncCoverages()
    _coverable.syncConditions()
    _coverable.syncExclusions()

    values.eachKey( \ dependent -> {
      if(dependentValue(dependent) != values[dependent]){
        var typeInfo = new PropertyTypeInfo (dependent.DependentProperty, dependent.DependentContainer)
        var subDependents = _config.getAllDependents(typeInfo, criteria)
        classifyDependentsSkipProductModel(subDependents)
      }
    })

  }

  internal function classifyDependents(dependents: List<PropertyValueDependency>, skipProductModel = false) {
    dependents?.each(\dependent -> {
      var dependentTypeInfo = new PropertyTypeInfo (dependent.DependentProperty, dependent.DependentContainer)
      if (dependentTypeInfo.RiskType == _coverable.IntrinsicType) {
        if (not dependentTypeInfo.IsClause) {
          _dataModelDependents.put(dependentTypeInfo.FullPropertyName, dependent)
        }
        else if (not skipProductModel) {
          _productModelDependents.put(dependentTypeInfo.FullPropertyName, dependent)
        }
      }
      else {
        _otherDependents.put(dependentTypeInfo.FullPropertyName, dependent)
      }
    })
  }

  internal function classifyDependentsSkipProductModel(dependents: List<PropertyValueDependency>) {
    classifyDependents(dependents, true)
  }

  private function dependentValue(dependent: PropertyValueDependency): String {
    var typeInfo = new PropertyTypeInfo (dependent.DependentProperty, dependent.DependentContainer)
    return PropertyPathResolver.getCoverableLevelPropertyValue(_coverable, typeInfo) as String
  }
}
