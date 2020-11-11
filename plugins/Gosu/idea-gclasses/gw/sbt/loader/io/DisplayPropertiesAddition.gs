package gw.sbt.loader.io

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.config.ConfigurationFile

class DisplayPropertiesAddition extends PropertiesAddition<DisplayProperties> {

  construct(content : DisplayProperties) {
    super(ConfigurationFile.displayProperties(), content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeDisplayProperties(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteDisplayProperties(this)
  }

}