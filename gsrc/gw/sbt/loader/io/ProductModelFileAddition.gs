package gw.sbt.loader.io

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.config.ConfigurationFile

abstract class ProductModelFileAddition<ContentType extends ContentWrapper> extends FileAddition<ContentType> {

  construct(configFile : ConfigurationFile, content: ContentType) {
    super(configFile, content)
  }

  override function isProductModelOp(): boolean {
    return true
  }
}