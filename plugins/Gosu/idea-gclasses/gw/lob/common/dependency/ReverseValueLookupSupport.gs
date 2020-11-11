package gw.lob.common.dependency

uses gw.lob.common.LobPropertyReference
uses gw.util.concurrent.LockingLazyVar
uses gw.lob.common.dependency.v2.ValueDependencySupport

class ReverseValueLookupSupport {

  static var _instance = LockingLazyVar.make(\-> new ReverseValueLookupSupport(new ValueDependencyConfiguration()))
  var _config : ValueDependencyConfiguration

  static property get Instance() : ReverseValueLookupSupport {
    return _instance.get()
  }

  internal construct(config : ValueDependencyConfiguration) {
    _config = config
  }

  static function findValidValuesBasedOnDependents(propRef : LobPropertyReference, filter : block(dep : PropertyValueDependency) : boolean = null) : List<String> {
    var propInfo = propRef.PropertyInstanceInfo

    var dependents = Instance._config.getDirectDependents(propInfo.TypeInfo, propInfo.EffectiveJurisdictionCriteria)

    if (filter != null) {
      dependents = dependents.where(filter)
    }

    var possibleValues : Set<String> = {}
    possibleValues.addAll(ValueDependencySupport.Instance.valueRange(propRef))

    for (dep in dependents) {
      var depPropRef = new LobPropertyReference(propRef.BoundPropertyReference.Ctx as KeyableBean, dep.DependentProperty)
      //var depPropRef = new BoundPropertyReference(propRef.RootType, propRef.Ctx, dep.DependentProperty)
      var depPropertyInfo = depPropRef.PropertyInstanceInfo

      if (depPropertyInfo.Value == null) {
        continue
      }

      var params = SystemTableQueryData.make(depPropertyInfo, dep, true)

      var systemTableDep = dep.getSystemTableDependency(new EffectiveJurisdictionCriteria(params.Jurisdiction, params.ReferenceDate))
      var entityType = DependencyUtil.getTypeByRelativeName(systemTableDep.SystemTable)

      var systemTableDepEntrySet = systemTableDep.DependsOn.filterByValues(\v -> v.Name == propRef.PropertyInfo.DisplayName).entrySet()

      systemTableDepEntrySet.each(\entry -> {
        var query = DependencySystemTableQuery.createQuery(entityType, params)
        query.and(\restriction -> {
          restriction.compare(params.ValueColumns.first(), Equals, depPropertyInfo._value)
        })

        var searchedValues = query.select().map(\elt -> elt.getFieldValue(entry.Key) as String)
        possibleValues = possibleValues.intersect(searchedValues)
      })
    }

    return possibleValues.toList()
  }
}