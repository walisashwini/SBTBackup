package gw.lob.common.dependency

class DependencyInfo implements Comparable<DependencyInfo> {
  var _source: PropertyTypeInfo
  var _dependsOns = new ArrayList<DependencyInfo>()

  construct(source: PropertyTypeInfo){
    _source = source
  }

  construct(source: PropertyTypeInfo, dependOn: DependencyInfo){
    _source = source
    if (dependOn != null) {
      _dependsOns.add(dependOn)
    }
  }

  override function equals(obj: Object): boolean {
    return (obj as DependencyInfo).Source.FullPropertyName == this.Source.FullPropertyName
  }

  override function hashCode(): int {
    return this.Source.FullPropertyName.hashCode()
  }

  override function compareTo(other: DependencyInfo) : int {
    return this.Source.compareTo(other.Source)
  }

  property get Source(): PropertyTypeInfo {
    return _source
  }

  property get DependsOns(): List<DependencyInfo> {
    return _dependsOns
  }

  function addDependsOns(dependents : List<DependencyInfo>) {
    dependents.each(\dependent -> {
      if (!_dependsOns.contains(dependent)) {
        _dependsOns.add(dependent)
      }
    })
  }
}