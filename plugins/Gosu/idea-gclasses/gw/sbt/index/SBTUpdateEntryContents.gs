package gw.sbt.index

uses org.json.simple.JSONArray
uses org.json.simple.JSONObject

class SBTUpdateEntryContents {

  protected var _json : JSONArray as JSON

  construct() {
    _json = new JSONArray()
  }

  construct(json : JSONArray) {
    _json = json
  }

  function getContent(contentId : String) : SBTUpdateEntry {
    var content = _json.firstWhere( \ content -> new SBTUpdateEntry(content as JSONObject).ContentId == contentId ) as JSONObject

    if (content == null) return null

    return new SBTUpdateEntry(content)
  }

  function add(entry : SBTUpdateEntry) : boolean {
    return _json.add(entry.JSON)
  }
}
