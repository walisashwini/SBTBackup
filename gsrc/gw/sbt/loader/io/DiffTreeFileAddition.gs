package gw.sbt.loader.io

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.artifacts.difftree.DiffTree

class DiffTreeFileAddition extends FileAddition< DiffTree > {
  construct(configurationFile : ConfigurationFile, diffTree : DiffTree) {
    super(configurationFile, diffTree)
  }
}