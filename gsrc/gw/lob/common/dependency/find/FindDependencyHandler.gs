package gw.lob.common.dependency.find

uses gw.api.system.logging.LOBLoggerCategory
uses gw.lob.common.dependency.PropertyTypeInfo
uses org.slf4j.MarkerFactory
uses java.util.Stack
uses org.slf4j.LoggerFactory

class FindDependencyHandler implements DependencyFindHandler {

  var _dependentList: Stack<PropertyTypeInfo>

  construct() {
    _dependentList = new Stack<PropertyTypeInfo>()
  }

  override function shouldHandle(propertyTypeInfo: PropertyTypeInfo): boolean {
    if (_dependentList.contains(propertyTypeInfo)) {
      LoggerFactory.getLogger("DEPENDENCY").warn(MarkerFactory.getMarker(FindDependencyHandler.Type.Name),
          FindDependencyHandler.Type.Name + ": Dependency cycle detected:\n" + _dependentList.join(" -> ") + " -> " + propertyTypeInfo)
      return false
    }

    return true
  }

  override function onFindDependentStart(propertyTypeInfo: PropertyTypeInfo) {
    _dependentList.push(propertyTypeInfo)
  }

  override function onFindDependentCompleted(propertyTypeInfo: PropertyTypeInfo) {
    _dependentList.pop()
  }

}