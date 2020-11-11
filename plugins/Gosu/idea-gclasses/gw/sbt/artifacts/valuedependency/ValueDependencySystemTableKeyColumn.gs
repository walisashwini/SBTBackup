package gw.sbt.artifacts.valuedependency

class ValueDependencySystemTableKeyColumn {
  var _name : String as Name
  var _path : String as Path

  construct() {
  }

  construct(name : String, path : String) {
    _name = name
    _path = path
  }

  override function equals(other : Object) : boolean {
    return other != null and
        other typeis ValueDependencySystemTableKeyColumn and
        Name == other.Name and
        Path == other.Path
  }

  override function hashCode() : int {
    if (Path == null) {
      return Name.hashCode()
    }

    return Objects.hash({Name, Path})
  }
}