package gw.sbt.loader.io

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.config.ConfigurationFile

class SystemTableDeletion<ContentType extends ContentWrapper>  extends FileDeletion<ContentType> {

  construct(configFile: ConfigurationFile) {
    super(configFile, null)
  }
}