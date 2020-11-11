package gw.lob.common.dependency.find

uses gw.lob.common.dependency.PropertyTypeInfo

interface DependencyFindHandler {

  function shouldHandle(propertyTypeInfo: PropertyTypeInfo) : boolean
  function onFindDependentStart(propertyTypeInfo: PropertyTypeInfo)
  function onFindDependentCompleted(propertyTypeInfo: PropertyTypeInfo)

}