package gw.lob.common.dependency

uses java.util.Collections
uses java.util.ArrayList
uses gw.lob.common.dependency.GWNode.NodeType
uses java.util.List

class GWNodePath {

  var _path = new ArrayList<String>()

  construct(node: GWNode) {
    var curr = node

    while (curr != null && curr.Type != NodeType.VALUE) {
      _path.add(curr.Id)
      curr = curr.getParent()
    }
  }

  construct(path: String) {
    if (path.substring(0, 1) == "/") {
      path = path.substring(1)
    }
    _path.addAll(path.split("/").reverse().toList())
  }

  property get AbsolutePath(): List<String> {
    return Collections.unmodifiableList(_path)
  }

  property get AbsolutePathString(): String {
    return _path.Empty ? null : "/" + _path.reverse().join("/")
  }

  override function hashCode(): int {
    return _path.hashCode()
  }

  override function equals(obj: Object): boolean {
    return obj typeis GWNodePath and AbsolutePath == obj.AbsolutePath
  }

  override function toString(): String {
    return AbsolutePathString
  }
}