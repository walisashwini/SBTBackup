package gw.sbt.index

uses org.json.simple.JSONArray
uses org.json.simple.JSONObject

class SBTUpdateEntry extends SBTUpdateJsonEntry {

  private final static var INTENT = "Intent"
  private final static var CONTENT_TYPE = "Content-Type"
  private final static var CONTENT_ID = "Content-Id"
  private final static var CONTENTS = "Contents"

  construct() {
    super()
  }

  construct(json : JSONObject) {
    super(json)
  }

  property get Intent() : SBTUpdateEntryIntent {
    var intent = _json.get(INTENT) as JSONObject
    if (intent == null) return null

    return new SBTUpdateEntryIntent(intent)
  }

  property set Intent(intent : SBTUpdateEntryIntent) {
    _json.put(INTENT, intent.JSON)
  }

  property get ContentType() : String {
    return _json.get(CONTENT_TYPE) as String
  }

  property set ContentType(contentType : String) {
    _json.put(CONTENT_TYPE, contentType)
  }

  property get ContentId() : String {
    return _json.get(CONTENT_ID) as String
  }

  property set ContentId(contentId : String) {
    _json.put(CONTENT_ID, contentId)
  }

  property get Contents() : SBTUpdateEntryContents {
    var contents = _json.get(CONTENTS)

    if (contents == null) return null
    return new SBTUpdateEntryContents(contents as JSONArray)
  }

  property set Contents(contents : SBTUpdateEntryContents) {
    if (contents != null) {
      _json.put(CONTENTS, contents.JSON)
    }
  }
}