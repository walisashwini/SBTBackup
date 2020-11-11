package gw.sbt.artifacts

uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.config.ConfigContents
uses gw.sbt.util.Formatter

class SbtCommonContents extends XmlContent {

  var _commitDate : Date as CommitDate
  var _includedFiles : List<String>as SbtCommonFiles = {}

  var _gosuFiles : List<String>as SbtCommonGosuFiles = {}
  var _pcfFiles : List<String>as SbtCommonPcfFiles = {}

  construct(content : byte[]) {
    super(content)
    init()
  }

  private function init() {
    _commitDate = Formatter.stringToDate(getChild("sbt-common-commit-date").$Text, "yyyy-MM-dd HH:mm:ss")
    var files = getChild("sbt-common-inclusion").getChildren("file")
    if (files.HasElements) {
      files.each(\file -> {
        var path = file.$Text
        _includedFiles.add(path)
        if (path.endsWith(GosuFile.GS_EXTENSION) or path.endsWith(GosuFile.GS_ENHANCEMENT_EXTENSION)) {
          //ie. gsrc/gw/xml/XmlElementPropertyHandler.gs, need to convert to gosu fully qualified name
          var gosuFileFQ = path.replace(ConfigContents.GOSU_SOURCE_ROOT, "").replaceAll("/", ".")
          _gosuFiles.add(gosuFileFQ)
        } else if (path.endsWith(PcfFile.PCF_EXTENSION)) {
          _pcfFiles.add(path)
        }
      })
    }
  }

  public static function isVersionStale(sbtCommonContentsInCurrent : SbtCommonContents, sbtCommonContentsInUpdate : SbtCommonContents) : boolean {
    if (sbtCommonContentsInCurrent != null and sbtCommonContentsInUpdate != null) {
      return sbtCommonContentsInCurrent.CommitDate.after(sbtCommonContentsInUpdate.CommitDate)
    }
    return false
  }

  public static function isReplacementRequired(sbtCommonContentsInCurrent : SbtCommonContents, sbtCommonContentsInUpdate : SbtCommonContents) : boolean {
    var replaceRequired = sbtCommonContentsInUpdate != null
    if (sbtCommonContentsInCurrent != null and sbtCommonContentsInUpdate != null) {
      replaceRequired = sbtCommonContentsInUpdate.CommitDate.after(sbtCommonContentsInCurrent.CommitDate)
    }
    return replaceRequired
  }
}