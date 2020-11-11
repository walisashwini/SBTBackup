package gw.sbt.artifacts.plugin

uses gw.sbt.artifacts.XmlContent

class PluginFile extends XmlContent {
  var _path : String as readonly FilePath
  var _name : String as readonly FileName

  construct(path : String, name : String, content : byte[]) {
    super(content)
    _path = path
    _name = name
  }

  property get FullPathName() : String {
    return FilePath + FileName
  }
}