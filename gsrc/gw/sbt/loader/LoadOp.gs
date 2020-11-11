package gw.sbt.loader

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.SBTUpdateLoaderWriter

abstract class LoadOp<ContentType extends ContentWrapper> {

  var _targetFile: ConfigurationFile as readonly TargetFile
  var _content : ContentType as readonly Content

  construct(configFile : ConfigurationFile, content: ContentType) {
    _targetFile = configFile
    _content = content
  }

  abstract function perform(writer : SBTUpdateLoaderWriter)

  abstract function undo(writer : SBTUpdateLoaderWriter)

  function isProductModelOp() : boolean {
    return false
  }

  function isSystemTablesOp() : boolean {
    return false
  }

}