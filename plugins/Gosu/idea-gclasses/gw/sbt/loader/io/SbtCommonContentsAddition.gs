package gw.sbt.loader.io

uses gw.sbt.artifacts.SbtCommonContents
uses gw.sbt.config.ConfigurationFile

class SbtCommonContentsAddition extends FileAddition<SbtCommonContents> {
  construct(sbtCommon : SbtCommonContents) {
    super(ConfigurationFile.sbtCommonContents(), sbtCommon)
  }
}