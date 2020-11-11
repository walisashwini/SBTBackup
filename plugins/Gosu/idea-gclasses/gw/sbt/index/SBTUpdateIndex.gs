package gw.sbt.index

uses org.json.simple.JSONArray
uses org.json.simple.JSONObject

class SBTUpdateIndex extends SBTUpdateJsonEntry {

  private final static var CLAUSES = "Clauses"
  private final static var FORMS = "Forms"
  private final static var LINE = "Line"
  private final static var JURISDICTIONS = "Jurisdictions"

  construct() {
    super()
  }

  construct(json : JSONObject) {
    super(json)
  }

  property get Line() : SBTUpdateERCLineEntry {
    return entryFor(LINE)
  }

  property get Jurisdictions() : SBTUpdateERCMetadataEntry[] {
    return entriesFor(JURISDICTIONS)
  }

  property get Clauses() : SBTUpdateEntry[] {
    return entriesFor(CLAUSES)
  }

  property get Forms() : SBTUpdateEntry[] {
    return entriesFor(FORMS)
  }

  property set Line(entry : SBTUpdateERCLineEntry) {
    setEntryFor(LINE, entry)
  }

  property set Jurisdictions(entries : SBTUpdateERCMetadataEntry[]) {
    setEntriesFor(JURISDICTIONS, entries)
  }

  property set Clauses(entries : SBTUpdateEntry[]) {
    setEntriesFor(CLAUSES, entries)
  }

  property set Forms(entries : SBTUpdateEntry[]) {
    setEntriesFor(FORMS, entries)
  }

  function putAll(sbtIndex : SBTUpdateIndex) {
    _json.putAll(sbtIndex.JSON)
  }

  override function toString() : String {
    return _json.toJSONString()
  }

  reified private function entriesFor<T extends SBTUpdateJsonEntry>(name: String) : T[] {
    var entries = _json.get(name) as JSONArray
    if (entries == null) return {}
    return entries.cast(JSONObject).map( \ o -> new T(o)).toTypedArray()
  }

  reified private function entryFor<T extends SBTUpdateJsonEntry>(name: String) : T {
    var entry = _json.get(name) as JSONObject
    return (entry == null) ? null : new T(entry)
  }

  private function setEntriesFor(name : String, entries : SBTUpdateJsonEntry[]) {
    var json = new JSONArray()
    entries.each( \ entry -> json.add(entry.JSON))
    set(name, json)
  }

  private function setEntryFor(name : String, entry : SBTUpdateJsonEntry) {
    set(name, entry.JSON)
  }

}