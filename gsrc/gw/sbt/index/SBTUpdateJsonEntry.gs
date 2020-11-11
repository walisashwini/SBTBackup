package gw.sbt.index

uses org.json.simple.JSONObject

class SBTUpdateJsonEntry {

  protected var _json : JSONObject as JSON

  construct() {
    _json = new JSONObject()
  }

  construct(json : JSONObject) {
    _json = json
  }

  protected final function get(key: String) :  Object {
    return _json.get(key)
  }

  protected final function set(key : String, value : Object) {
    _json.put(key, value)
  }
}