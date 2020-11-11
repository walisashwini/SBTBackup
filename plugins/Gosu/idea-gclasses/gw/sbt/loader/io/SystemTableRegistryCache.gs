package gw.sbt.loader.io

uses gw.sbt.artifacts.systables.SystemTableRegistry
uses gw.sbt.artifacts.systables.SystemTableRegistryFileDefinition

class SystemTableRegistryCache {

  var _systemTableRegistry: SystemTableRegistry
  var _currentBytes: byte[] as readonly Bytes

  internal construct(initial : byte[]){
    reset(initial)
  }

  internal function add(content : SystemTableRegistryFileDefinition){
    _systemTableRegistry.add(content)
    _currentBytes = _systemTableRegistry.Bytes
  }

  internal function undo(previousContent: byte[]){
    if (previousContent != null){
      reset(previousContent)
    }
  }

  private function reset(content: byte[]){
    _currentBytes = content
    if (content.Count > 0) {
      _systemTableRegistry = new SystemTableRegistry(content)
    } else {
      _systemTableRegistry = new SystemTableRegistry()
    }
  }

}