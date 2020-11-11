package gw.sbt.artifacts.xsd

uses gw.sbt.artifacts.XmlContent

class XsdFile extends XmlContent {
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