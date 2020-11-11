package gw.sbt.artifacts.bureaus

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class BureauCodesConfig extends XmlContent {
  var _lobs : List<BureauLob> as Lobs
  var _lineCode : String as LineCode
  var _bureauCodeFiles : List<BureauCodeFileDefinition> as BureauCodeFiles = {}

  construct(content : byte[], lineCode : String) {
    super(content)
    _lineCode = lineCode
    init()
  }

  construct(content : XmlElement, lineCode : String) {
    super(content)
    _lineCode = lineCode
    init()
  }

  private function init() {
    _lobs = {}
    _lobs.addAll(getChildren("Lob").map(\lob -> new BureauLob(lob)))

    var bureauLob : BureauLob = _lobs.firstWhere(\lob -> lob.Lob == LineCode)
    if (bureauLob != null) {
      _bureauCodeFiles = bureauLob.BureauCodeFiles
    }
  }
}