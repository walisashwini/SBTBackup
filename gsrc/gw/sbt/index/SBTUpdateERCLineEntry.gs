package gw.sbt.index

uses org.json.simple.JSONObject

class SBTUpdateERCLineEntry extends SBTUpdateJsonEntry {
  private final static var NAME = "Name"
  private final static var CODE = "Code"

  construct() {
    super()
  }

  construct(json : JSONObject) {
    super(json)
  }

  property get Name() : String {
    return _json.get(NAME) as String
  }

  property set Name(name : String) {
    _json.put(NAME, name)
  }

  property get Code() : String {
    return _json.get(CODE) as String
  }

  property set Code(code : String) {
    _json.put(CODE, code)
  }
}