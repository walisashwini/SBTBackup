package gw.sbt.loader.io

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.config.ConfigurationFile

class ProductModelDisplayPropertiesAddition extends PropertiesAddition<DisplayProperties> {

  construct(content : DisplayProperties) {
    super(ConfigurationFile.productModelDisplayKeys(), content)
  }

  override function isProductModelOp(): boolean {
    return true
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeProductModelDisplayProperties(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteProductModelDisplayProperties(this)
  }

}