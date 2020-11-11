package gw.sbt.loader.io

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.config.ConfigurationFile

abstract class FileAddition<ContentType extends ContentWrapper> extends FileModification<ContentType> {

  construct(configFile : ConfigurationFile, content: ContentType) {
    super(configFile, content)
  }
}