package gw.sbt.loader.io

uses gw.sbt.artifacts.properties.DisplayProperties

class DisplayPropertiesCache {
  var _displayProperties: DisplayProperties
  var _currentBytes: byte[] as readonly Bytes

  internal construct(initial : byte[]){
    reset(initial)
  }

  internal function add(content : DisplayProperties) {
    _displayProperties.addProperties(content.Bytes)
    _currentBytes = _displayProperties.Bytes
  }

  internal function undo(previousContent : byte[]){
    if (previousContent != null){
      reset(previousContent)
    }
  }

  private function reset(existingContent : byte[]){
    _currentBytes = existingContent
    _displayProperties = new DisplayProperties()
    if (existingContent.Count > 0){
      _displayProperties.addProperties(existingContent)
    }
  }
}