package gw.sbt.loader.io

uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.config.ConfigurationFile

class GosuFileAddition extends FileAddition<GosuFile> {

  construct(gosuFile : GosuFile) {
    super(ConfigurationFile.gosuFile(gosuFile.FullName, gosuFile.FileExtension), gosuFile)
  }

}