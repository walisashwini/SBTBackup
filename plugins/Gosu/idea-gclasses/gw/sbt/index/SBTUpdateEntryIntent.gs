package gw.sbt.index

uses org.json.simple.JSONObject

class SBTUpdateEntryIntent extends SBTUpdateJsonEntry {

  private final static var TYPE = "Type"
  private final static var COMMENT = "Comment"

  construct() {
    super()
  }

  construct(json : JSONObject) {
    super(json)
  }

  property get Type() : String {
    return _json.get(TYPE) as String
  }

  property set Type(type : String) {
    _json.put(TYPE, type)
  }

  property get Comment() : String {
    return _json.get(COMMENT) as String
  }

  property set Comment(comment : String) {
    _json.put(COMMENT, comment)
  }
}