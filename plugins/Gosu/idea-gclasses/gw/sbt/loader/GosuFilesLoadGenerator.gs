package gw.sbt.loader

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.SbtCommonContents
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.GosuFileAddition
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.StateUpdateLoadGenerator
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory

class GosuFilesLoadGenerator extends StateUpdateLoadGenerator {

  construct(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents, messageReporter : MessageReporter) {
    super(currentContents, updateContents, adoptedContents)
    _messageReporter = messageReporter
  }


  private function getMatchedDatedGosuFileFromCurrentWithRespectToAdoptedGosuFile(
      gosuFiles : List<GosuFile>, currentGosuFile : GosuFile) : GosuFile {
    return gosuFiles.firstWhere(\dtoFile -> dtoFile.FQName == currentGosuFile.FQName)
  }

  private function getGosuFileFromAdopted(fileName : String, gosuFiles : List<GosuFile>) : GosuFile {
    // should be only one file in adopted
    return LoaderUtil.getAllFileVersionsWithName(fileName, gosuFiles)?.first()
  }

  function generateLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    var updateGosuFiles = _updateContents.getGosuFiles()
    var currentGosuFiles = _currentContents.getGosuFiles()
    var adoptedGosuFiles : List<GosuFile> = _adoptedContents != null ? _adoptedContents.getGosuFiles() : {}
    var allGosuFileNames = updateGosuFiles.map(\gosuFile -> gosuFile.FQName).toSet()
    currentGosuFiles.each(\gosuFile -> allGosuFileNames.add(gosuFile.FQName))

    var sbtCommonContentsInCurrent = _currentContents.SbtCommonContents
    var sbtCommonContentsInUpdate = _updateContents.SbtCommonContents
    var isSbtCommonVersionStale = SbtCommonContents.isVersionStale(sbtCommonContentsInCurrent, sbtCommonContentsInUpdate)

    var copiedDTOFiles = new HashSet<String>()
    var updateDTOFiles = _updateContents.getGosuFiles().where(\gosuFile -> LoaderUtil.isFileUnderConsiderationForAutoMerging(gosuFile.FQName))
    var updatedCWDTOs = new HashSet<String>()

    // sort the DTO files list where the CW files will get processed first
    updateDTOFiles.sort(\file1, file2 -> LoaderUtil.isFileCW(file1.FQName))
    updateDTOFiles.each(\dTOFileInUpdate -> processDTOFile(
        currentGosuFiles,
        adoptedGosuFiles,
        dTOFileInUpdate,
        updatedCWDTOs,
        copiedDTOFiles,
        resultLoads))
    //loop though all DTOs in the update

    allGosuFileNames.removeAll(copiedDTOFiles)
    allGosuFileNames.each(\gosuFileName -> processNonDTOFile(
        gosuFileName,
        currentGosuFiles,
        adoptedGosuFiles,
        updateGosuFiles,
        sbtCommonContentsInCurrent,
        sbtCommonContentsInUpdate,
        isSbtCommonVersionStale,
        resultLoads))

    return resultLoads
  }

  private function processDTOFile(
      currentGosuFiles : List<GosuFile>,
      adoptedGosuFiles : List<GosuFile>,
      dTOFileInUpdate : GosuFile,
      updatedCWDTOs : HashSet<String>,
      copiedDTOFiles : HashSet<String>,
      resultLoads : List<Load>) {
    var dTOFileInAdopted = getGosuFileFromAdopted(dTOFileInUpdate.FQName, adoptedGosuFiles)
    var dTOFileInCurrent = getMatchedDatedGosuFileFromCurrentWithRespectToAdoptedGosuFile(currentGosuFiles, dTOFileInAdopted)
    var load = new Load<GosuFile>(dTOFileInUpdate)

    if (dTOFileInCurrent != null and dTOFileInUpdate != null and dTOFileInAdopted != null) {
      var noISOUpdate = LoaderUtil.contentCompareIgnoreWhiteSpace(dTOFileInAdopted.Bytes, dTOFileInUpdate.Bytes, true)

      if (not noISOUpdate and LoaderUtil.isFileCW(dTOFileInUpdate.FQName)) {
        updatedCWDTOs.add(LoaderUtil.getFileNameWithoutPath(dTOFileInUpdate.FQName))
      }

      if (not LoaderUtil.contentCompareIgnoreWhiteSpace(dTOFileInAdopted.Bytes, dTOFileInCurrent.Bytes)) {
        // customer change detected
        if (noISOUpdate and (LoaderUtil.isFileCW(dTOFileInUpdate.FQName)
            or (not updatedCWDTOs.contains(LoaderUtil.getFileNameWithoutPath(dTOFileInUpdate.FQName))))) {
          if (currentGosuFiles.hasMatch(\gosuFile -> gosuFile.FQName == dTOFileInUpdate.FQName)) {
            // if the file existed in current, do not copy it over but add it to the configuration report
            _messageReporter.reportGosuCustomizationDetectedManualMerge(dTOFileInUpdate.FullName, GOSU)
            LoggerFactory.getLogger("PCA")
                .info("Generated Gosu - ${dTOFileInUpdate.FullName} - Customizations detected in current version which may require manual merging")
          } else {
            // the updated content is identical to the adopted (clean version before)
            dTOFileInCurrent.updateDate(dTOFileInUpdate)
            load.add(new GosuFileAddition(dTOFileInCurrent))
            // Report - Customized file is Auto Merged
            _messageReporter.reportGosuCustomizationDetectedAutomaticMerge(dTOFileInCurrent.FullName, GOSU)
            LoggerFactory.getLogger("PCA")
                .info("Generated Gosu - ${dTOFileInCurrent.FullName} - Customized file automatically copied by the PCA")
          }
        } else {
          load.add(new GosuFileAddition(dTOFileInUpdate))
          load.ManualWorkRequired = true
          //Report - Customized file requires manual merging
          _messageReporter.reportGosuCustomizationDetectedManualMerge(dTOFileInUpdate.FullName, GOSU)
          LoggerFactory.getLogger("PCA")
              .info("Generated Gosu - ${dTOFileInUpdate.FullName} - Customizations detected in current version which may require manual merging")
        }
        resultLoads.add(load)
        copiedDTOFiles.add(dTOFileInUpdate.FQName)
        copiedDTOFiles.add(dTOFileInCurrent.FQName)
        copiedDTOFiles.add(dTOFileInAdopted.FQName)
      }
    }
  }

  private function processNonDTOFile(
      gosuFileName : String,
      currentGosuFiles : List<GosuFile>,
      adoptedGosuFiles : List<GosuFile>,
      updateGosuFiles : List<GosuFile>,
      sbtCommonContentsInCurrent : SbtCommonContents,
      sbtCommonContentsInUpdate : SbtCommonContents,
      isSbtCommonVersionStale : boolean,
      resultLoads : List<Load>) {

    var gosuFileInCurrent = currentGosuFiles.firstWhere(\gosuFile -> gosuFileName == gosuFile.FQName)
    var gosuFileInUpdate = updateGosuFiles.firstWhere(\gosuFile -> gosuFileName == gosuFile.FQName)
    var gosuFileInAdopted = adoptedGosuFiles.firstWhere(\gosuFile -> gosuFileName == gosuFile.FQName)
    var gosuFile = gosuFileInUpdate != null ? gosuFileInUpdate : gosuFileInCurrent
    var load = new Load<GosuFile>(gosuFile)


    if (gosuFileInCurrent == null) { // if not found, create GosuFileAddition
      if (isSbtCommonVersionStale and sbtCommonContentsInUpdate.SbtCommonGosuFiles.contains(gosuFileName)) {
        _messageReporter.ConflictReporter.reportAddedForSbtCommon(gosuFileName, GOSU)
      } else {
        load.add(new GosuFileAddition(gosuFile))
        _messageReporter.reportAdded(gosuFile.FullName, GOSU)
        LoggerFactory.getLogger("PCA").info("A new Gosu class ${gosuFile.FullName} has been copied into the current configuration")
        resultLoads.add(load)
      }
    } else if (gosuFileInUpdate == null and gosuFileInAdopted != null and not LoaderUtil.isFileGenerated(gosuFile.FullName)) {
      if (isSbtCommonVersionStale and sbtCommonContentsInCurrent.SbtCommonGosuFiles.contains(gosuFileName)) {
        _messageReporter.ConflictReporter.reportRemovedForSbtCommon(gosuFileName, GOSU)
      } else {
        _messageReporter.reportRemoved(gosuFile.FullName, GOSU)
      }
    } else if (gosuFileInUpdate == null) { // "removed", i.e. exists in current, not found in update
      // DE12833: Do nothing here for now, as there are too many false-positives reported from the current configuration.
      // Essentially all Gosu files from base PC are reported here. In the future we may choose to compare latest adopted vs new.
    } else if (not LoaderUtil.contentCompareIgnoreWhiteSpace(gosuFileInUpdate.Bytes, gosuFileInCurrent.Bytes)) { // compare the content of the 2 gosu files.
      if (isSbtCommonVersionStale and sbtCommonContentsInUpdate.SbtCommonGosuFiles.contains(gosuFileName)) {
        _messageReporter.ConflictReporter.reportConflictForSbtCommon(gosuFileName, GOSU)
      } else {
        // Consider adopted contents at this point
        if (gosuFileInAdopted != null and LoaderUtil.contentCompareIgnoreWhiteSpace(gosuFileInCurrent.Bytes, gosuFileInAdopted.Bytes)) {
          load.add(new GosuFileAddition(gosuFile))
          _messageReporter.reportAdded(gosuFile.FullName, GOSU)
          LoggerFactory.getLogger("PCA").info("An existing Gosu class ${gosuFile.FullName} has been updated in the current configuration")
          resultLoads.add(load)
        } else {
          load.ManualWorkRequired = true
          load.addMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.GosuFileAlreadyExistsButNotIdentical", gosuFile.FullName))
          _messageReporter.ConflictReporter.reportGosu(gosuFile)
          resultLoads.add(load)
        }
      }
    } else {
      // Both are the same, no action needed

    }
  }
}