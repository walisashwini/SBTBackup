package gw.sbt.loader

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.SbtCommonContents
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.PcfFileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.StateUpdateLoadGenerator
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory

class PcfFilesLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, messageReporter: MessageReporter) {
    super(currentContents, updateContents, adoptedContents)
    _messageReporter = messageReporter
  }

  function generateLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    var updatePcfFiles = _updateContents.getPcfFiles()
    var currentPcfFiles = _currentContents.getPcfFiles()
    var adoptedPcfFiles : List<PcfFile> = _adoptedContents != null ? _adoptedContents.getPcfFiles() : {}
    var allPcfFileNames = updatePcfFiles.map(\file -> file.FilePath + file.FileName).toSet()
    currentPcfFiles.each(\file -> allPcfFileNames.add(file.FilePath + file.FileName))

    allPcfFileNames.each(\pcfFileName -> {
      var pcfFileInCurrent = currentPcfFiles.firstWhere(\pcfFile -> pcfFileName.equals(pcfFile.FilePath + pcfFile.FileName))
      var pcfFileInUpdate = updatePcfFiles.firstWhere(\pcfFile -> pcfFileName.equals(pcfFile.FilePath + pcfFile.FileName))
      var pcfFileInAdopted = adoptedPcfFiles.firstWhere(\adoptedPcf -> pcfFileName.equals(adoptedPcf.FilePath + adoptedPcf.FileName))
      var pcfFile = pcfFileInUpdate != null ? pcfFileInUpdate : pcfFileInCurrent

      var sbtCommonContentsInCurrent = _currentContents.SbtCommonContents
      var sbtCommonContentsInUpdate = _updateContents.SbtCommonContents
      var isSbtCommonVersionStale = SbtCommonContents.isVersionStale(sbtCommonContentsInCurrent, sbtCommonContentsInUpdate)

      var load = new Load<PcfFile>(pcfFile)

      if (pcfFileInCurrent == null) { // if not found, create PcfFileAddition
        if (isSbtCommonVersionStale and sbtCommonContentsInUpdate.SbtCommonPcfFiles.contains(pcfFileName)) {
          _messageReporter.ConflictReporter.reportAddedForSbtCommon(pcfFileName, PCF)
        } else {
          load.add(new PcfFileAddition(pcfFile))
          _messageReporter.reportAdded(pcfFileName, PCF)
          LoggerFactory.getLogger("PCA").info("A new Pcf ${pcfFileName} has been copied into the current configuration")
          resultLoads.add(load)
        }
      } else if (pcfFileInUpdate == null) { // "removed", i.e. exists in current, not found in update
        // DE12833: Do nothing here for now, as there are too many false-positives reported from the current configuration.
        // Essentially all PCF files from base PC are reported here. In the future we may choose to compare latest adopted vs new.
        if ( pcfFileInAdopted != null and isSbtCommonVersionStale and sbtCommonContentsInCurrent.SbtCommonPcfFiles.contains(pcfFileName)) {
          _messageReporter.ConflictReporter.reportRemovedForSbtCommon(pcfFileName, PCF)
        }
      } else if (not LoaderUtil.contentCompareIgnoreWhiteSpace(pcfFileInUpdate.Bytes, pcfFileInCurrent.Bytes)) { // compare the content of the 2 pcf files.
        if (isSbtCommonVersionStale and sbtCommonContentsInUpdate.SbtCommonPcfFiles.contains(pcfFileName)) {
          _messageReporter.ConflictReporter.reportConflictForSbtCommon(pcfFileName, PCF)
        } else {
          if (pcfFileInAdopted != null and LoaderUtil.contentCompareIgnoreWhiteSpace(pcfFileInAdopted.Bytes, pcfFileInCurrent.Bytes)) {
            load.add(new PcfFileAddition(pcfFile))
            _messageReporter.reportAdded(pcfFileName, PCF)
            LoggerFactory.getLogger("PCA").info("An existing Pcf ${pcfFileName} has been copied into the current configuration")
            resultLoads.add(load)
          } else {
            load.ManualWorkRequired = true
            load.addMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PcfFileAlreadyExistsButNotIdentical", pcfFileName))
            _messageReporter.ConflictReporter.reportPCF(pcfFile)
            resultLoads.add(load)
          }
        }
      } else {
        // Both are the same, no action needed
      }
    })
    return resultLoads
  }
}