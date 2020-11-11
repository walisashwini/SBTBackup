package gw.sbt.loader.io

uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.config.ConfigurationFile

class PluginFileAddition extends FileAddition<PluginFile> {
  construct(pluginFile : PluginFile) {
    super(ConfigurationFile.pluginFile(pluginFile.FilePath, pluginFile.FileName), pluginFile)
  }
}