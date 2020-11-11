package gw.sbt.loader.io

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.LoadOp
uses gw.sbt.loader.io.SBTUpdateLoaderWriter

abstract class FileDeletion<ContentType extends ContentWrapper> extends LoadOp<ContentType> {

  protected var _existingContent : byte[]

  construct(configFile : ConfigurationFile, content : ContentType) {
    super(configFile, content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.deleteFile(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    throw "Not implemented"
  }
}