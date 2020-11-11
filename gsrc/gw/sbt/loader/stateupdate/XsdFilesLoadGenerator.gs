package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.xsd.XsdFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.XsdFileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.util.XmlUtil
uses org.slf4j.LoggerFactory

class XsdFilesLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, messageReporter : MessageReporter) {
    super(currentContents, updateContents, adoptedContents)
    _messageReporter = messageReporter
  }

  function generateLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    var updateXsdFiles = _updateContents.getXsdFiles()
    var currentXsdFiles = _currentContents.getXsdFiles()

    var allXsdFileNames = updateXsdFiles.map(\file -> file.FullPathName).toSet()
    currentXsdFiles.each(\file -> allXsdFileNames.add(file.FullPathName))

    allXsdFileNames.each(\xsdFileName -> {
      var xsdFileInCurrent = currentXsdFiles.firstWhere(\xsdFile -> xsdFileName == xsdFile.FullPathName)
      var xsdFileInUpdate = updateXsdFiles.firstWhere(\xsdFile -> xsdFileName == xsdFile.FullPathName)

      var xsdFile = xsdFileInUpdate != null ? xsdFileInUpdate : xsdFileInCurrent
      var load = new Load<XsdFile>(xsdFile)

      if (xsdFileInCurrent == null) { // if not found, create XsdFileAddition
        load.add(new XsdFileAddition(xsdFile))
        _messageReporter.ModificationReporter.reportAddedXSD(xsdFile.FullPathName)
        LoggerFactory.getLogger("PCA").info("A new XSD file ${xsdFile.FullPathName} has been copied into the current configuration")
        resultLoads.add(load)
      } else if (xsdFileInUpdate == null) { // "removed", i.e. exists in current, not found in update
        // Do nothing if a XSD has been removed.
      } else if (not XmlUtil.compareXmlElements(xsdFileInCurrent.Xml, xsdFileInUpdate.Xml)) {
        // use the current xsd when the adopted and new are the same
        // use the new one when adopted and current is the same
        var xsdFileInAdopted : XsdFile = null
        if (_adoptedContents != null) {
          xsdFileInAdopted = _adoptedContents?.getXsdFiles()?.firstWhere(\file -> xsdFileName == file.FullPathName)
        }

        if (xsdFileInAdopted == null or not XmlUtil.compareXmlElements(xsdFileInCurrent.Xml, xsdFileInAdopted.Xml)) {
          // if current is different from adopted, will be reported in configuraiton report (in conflicted zip as well).
          // but leave the current file as it is
          _messageReporter.ConflictReporter.reportXSD(xsdFile)
        } else {
          load.add(new XsdFileAddition(xsdFile))
          LoggerFactory.getLogger("PCA").info("An existing XSD file ${xsdFile.FullPathName} has been updated in the current configuration")
          resultLoads.add(load)
          _messageReporter.ModificationReporter.reportModifiedXSD(xsdFile.FullPathName)
        }
      } else {
        // Both are the same, no action needed
      }
    })
    return resultLoads
  }

}