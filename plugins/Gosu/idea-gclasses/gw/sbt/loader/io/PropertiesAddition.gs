package gw.sbt.loader.io

uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.config.ConfigurationFile

abstract class PropertiesAddition<T extends DisplayProperties> extends FileModification<T> {

  construct(configFile : ConfigurationFile, content : T) {
    super(configFile, content)
  }

}