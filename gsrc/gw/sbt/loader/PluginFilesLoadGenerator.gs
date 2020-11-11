package gw.sbt.loader

uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.PluginFileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.StateUpdateLoadGenerator
uses gw.sbt.util.XmlUtil
uses org.slf4j.LoggerFactory

class PluginFilesLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, messageReporter : MessageReporter) {
    super(currentContents, updateContents, adoptedContents)
    _messageReporter = messageReporter
  }

  function generateLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    var updatePluginFiles = _updateContents.getPluginFiles()
    var currentPluginFiles = _currentContents.getPluginFiles()

    var allPluginFileNames = updatePluginFiles.map(\file -> file.FullPathName).toSet()
    currentPluginFiles.each(\file -> allPluginFileNames.add(file.FullPathName))

    allPluginFileNames.each(\pluginFileName -> {
      var pluginFileInCurrent = currentPluginFiles.firstWhere(\file -> pluginFileName == file.FullPathName)
      var pluginFileInUpdate = updatePluginFiles.firstWhere(\file -> pluginFileName == file.FullPathName)

      var pluginFile = pluginFileInUpdate != null ? pluginFileInUpdate : pluginFileInCurrent
      var load = new Load<PluginFile>(pluginFile)

      if (pluginFileInCurrent == null) { // if only in new update, create PluginFileAddition, and report in load report.
        load.add(new PluginFileAddition(pluginFile))
        _messageReporter.ModificationReporter.reportAddedPlugin(pluginFile.FullPathName)
        LoggerFactory.getLogger("PCA").info("A new Plugin registry file ${pluginFile.FullPathName} has been copied into the current configuration")
        resultLoads.add(load)
      } else if (pluginFileInUpdate == null) { // "removed", i.e. exists in current, not found in update
        // Do nothing if a plugin has been removed.
      } else if (not XmlUtil.compareXmlElements(pluginFileInCurrent.Xml, pluginFileInUpdate.Xml)) { // if both exist, but different, report in configuration report.
        if (not XmlUtil.compareXmlElements(pluginFileInCurrent.Xml, pluginFileInUpdate.Xml)) {
          _messageReporter.ConflictReporter.reportPlugin(pluginFile)
        }
      }
    })
    return resultLoads
  }

}