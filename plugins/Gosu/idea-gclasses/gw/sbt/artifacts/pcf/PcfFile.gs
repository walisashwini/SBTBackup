package gw.sbt.artifacts.pcf

uses gw.sbt.artifacts.ContentWrapper

class PcfFile implements ContentWrapper {
  var _path : String as readonly FilePath
  var _name : String as readonly FileName
  var _content : byte[] as readonly Bytes

  static public final var PCF_EXTENSION : String  = "pcf"

  construct(path : String, name : String, content: byte[]) {
    _path = path
    _name = name
    _content = content
  }

  property get FullPathName() : String {
    return FilePath + FileName
  }

}