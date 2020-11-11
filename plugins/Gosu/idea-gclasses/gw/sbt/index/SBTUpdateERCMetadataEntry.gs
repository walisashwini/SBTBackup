package gw.sbt.index

uses org.json.simple.JSONObject

uses java.util.Date
uses gw.sbt.util.Formatter

class SBTUpdateERCMetadataEntry extends SBTUpdateJsonEntry {

  private final static var NAME = "Name"
  private final static var CODE = "Code"
  private final static var VERSION = "Version"
  private final static var EFFDATE = "EffDate"

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

  property get Version() : String {
    return _json.get(VERSION) as String
  }

  property set Version(version : String) {
    _json.put(VERSION, version)
  }

  property get EffDate() : Date {
    return Formatter.stringToDate(EFFDATE, "MM/dd/yyyy")
  }

  property set EffDate(effDate : Date) {
    _json.put(EFFDATE, Formatter.dateToString(effDate))
  }

}