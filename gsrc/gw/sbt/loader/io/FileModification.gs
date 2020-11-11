package gw.sbt.loader.io

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.LoadOp

abstract class FileModification<ContentType extends ContentWrapper> extends LoadOp<ContentType> {

  protected var _existingContent : byte[]

  construct(configFile : ConfigurationFile, content : ContentType) {
    super(configFile, content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeFileUndoable(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteFile(this)
  }
}