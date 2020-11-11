package gw.sbt.artifacts.versioned

class ContainerKey {
  var _name : String as readonly Name
  var _type : String as readonly Type

  static function create(name : String, type : String = null) : ContainerKey {
    return new ContainerKey(name, type)
  }

  private construct(name : String, type : String) {
    _name = name
    _type = type
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis ContainerKey and
        Name == other.Name and
        Type == other.Type
  }

  override function hashCode() : int {
    if (Type == null) {
      return Name.hashCode()
    }

    return Objects.hash({Name, Type})
  }

  override function toString() : String {
    return Name + (Type == null ? "" : Type)
  }
}