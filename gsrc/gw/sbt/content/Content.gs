package gw.sbt.content

uses java.io.ByteArrayInputStream
uses java.io.InputStream

public class Content {
  var _name: String as Name
  var _bytes: byte[] as Bytes

  construct(name: String, bytes: byte[]) {
    _name = name
    _bytes = bytes
  }

  function asStream() : InputStream {
    return new ByteArrayInputStream(_bytes)
  }

  override function equals(other : Object) : boolean {
    return other != null
        and other typeis Content
        and Name == other.Name
  }

  override function hashCode() : int {
    return Objects.hash({Name})
  }
}