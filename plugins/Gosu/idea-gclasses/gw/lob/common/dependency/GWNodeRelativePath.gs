package gw.lob.common.dependency

uses java.util.ArrayList
uses java.util.Collections
uses java.util.List

class GWNodeRelativePath {
  var _pathFromSource: List<String> as readonly FromSource
  var _pathToTarget: List<String> as readonly ToTarget

  construct(source: GWNodePath, target: GWNodePath) {
    var common: String;
    var sourcePath = new ArrayList<String>()
    var targetPath = new ArrayList<String>()

    common = source.AbsolutePath.firstWhere( \ elt -> target.AbsolutePath.contains(elt))

    for (var elt in source.AbsolutePath) {
      sourcePath.add(elt)

      if (elt == common) {
        break;
      }
    }

    for (var elt in target.AbsolutePath) {
      targetPath.add(elt)

      if (elt == common) {
        break;
      }
    }

    _pathFromSource = Collections.unmodifiableList(sourcePath)
    _pathToTarget = Collections.unmodifiableList(targetPath.reverse())
  }

  property get fromSourcePath() : String {
    return _pathFromSource.join("/")
  }

  property get toTargetPath() : String {
    return _pathToTarget.join("/")
  }
}