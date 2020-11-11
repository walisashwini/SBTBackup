package gw.lob.common.dependency

uses gw.api.upgrade.Coercions
uses gw.lob.common.dependency.schema.value_dependency_config.SystemTable
uses gw.lob.common.dependency.schema.value_dependency_config.ValueDependency
uses gw.lob.common.util.StateProperty
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory

class PropertyValueDependency {
  final static var COUNTRY_WIDE = "CW"
  var _dependentProperty : String as readonly DependentProperty
  var _dependentContainer : String as readonly DependentContainer
  var _systemTableDependencies = new HashMap<String, SystemTableDependency>()
  var _systemTableDependenciesWithVersions = new StateProperty<SystemTableDependency>()

  construct(element : ValueDependency) {
    _dependentProperty = element.Property
    _dependentContainer = element.Container

    element.SystemTable?.each(\sysTable -> {
      var systemTableDependency = addSystemTableDependency(sysTable)
      sysTable.KeyColumn?.each(\keyColumn -> {
        try {
          systemTableDependency.DependsOn.put(keyColumn.Name, PropertyTypeInfo.createFromKeyColumnXml(keyColumn))
        } catch (ex : Exception) {
          LoggerFactory.getLogger("DEPENDENCY").warn(MarkerFactory.getMarker(PropertyValueDependency.Type.Name), PropertyValueDependency.Type.Name + ": Cannot initialize dependency: ${keyColumn.Path}")
        }
      })
    })
  }

  function getSystemTableDependency(criteria : EffectiveJurisdictionCriteria = null) : SystemTableDependency {
    var dependency = _systemTableDependenciesWithVersions.getStateOrCWValue(criteria)
    return dependency?.isValid(criteria) ? dependency : null
  }

  function getSystemTableDependencyWithoutJurisdiction() : SystemTableDependency {
    //Possibly be an issue: the function gets random systable name if there are multiple jurisdictions
    //or the last version if it is in single state
    return _systemTableDependencies.Values.first()
  }

  private function addSystemTableDependency(sysTable : SystemTable) : SystemTableDependency {
    var systemTableDependency = new SystemTableDependency(sysTable.Name, sysTable.EffectiveDate.Date, sysTable.ValueColumn, sysTable.Available)
    var jurisdiction = sysTable.Jurisdiction.HasContent ? sysTable.Jurisdiction : COUNTRY_WIDE
    var available = sysTable.Available ?: true
    _systemTableDependencies.put(jurisdiction, systemTableDependency)
    _systemTableDependenciesWithVersions.addStateValue(systemTableDependency, jurisdiction, Coercions.makeDateFrom(sysTable.EffectiveDate), Coercions.makeDateFrom(sysTable.ExpiryDate), available)
    return systemTableDependency
  }
}
