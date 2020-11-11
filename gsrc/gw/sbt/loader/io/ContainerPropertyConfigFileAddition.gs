package gw.sbt.loader.io

uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.config.ConfigurationFile

class ContainerPropertyConfigFileAddition extends FileAddition< ContainerPropertyConfig > {
  construct(configurationFile : ConfigurationFile, containerPropertyConfig: ContainerPropertyConfig) {
    super(configurationFile, containerPropertyConfig)
  }
}