package gw.sbt.extractor.content

uses gw.sbt.content.Content
uses gw.sbt.index.SBTUpdateIndex
uses java.util.List

class ExtractorResult {

  var _sbtIndex : SBTUpdateIndex as SBTIndex
  var _zipContents : List< Content > as Contents

}