package gw.command

uses com.guidewire.pl.config.PLConfigResourceKeys
uses gw.command.Argument
uses gw.command.BaseCommand
uses com.guidewire.pl.web.document.StreamWebFile
uses com.guidewire.pl.web.widget.WebMessage
uses gw.api.admin.PCImportDataInfo
uses gw.api.admin.PCImportDataInfo.ResolutionOption
uses gw.api.admin.PCImportDataValidationImpl
uses gw.api.locale.DisplayKey
uses gw.pcf.rating.ratebook.RateBookXMLImportUIHelper
uses gw.rating.rtm.RateBookUIValidator
uses gw.rating.rtm.domain.migration.RateBookImporter
uses gw.rating.rtm.util.WebFileWrapper
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.FileTargetConfiguration
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.meta.ERCPackageMetaData
uses gw.sbt.model.meta.JurisdictionMetaData
uses gw.sbt.model.meta.LineMetaData
uses gw.sbt.pca.persistence.PersistenceManager
uses gw.sbt.pca.persistence.SBTUpdateCache
uses gw.sbt.pca.repository.ContentRepositoryProvider
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.util.ProductCodeToAbbreviationMapper
uses net.sf.cotta.TFileFactory
uses org.slf4j.LoggerFactory
uses pcf.Desktop

uses java.io.File
uses java.io.FileInputStream

@SuppressWarnings({"HiddenPackage"})
@Export
class PCA extends BaseCommand {
  private static var LineByPrefix = {
      "CA7" -> "Commercial Auto Line (v7)",
      "CP7" -> "Commercial Property Line (v7)",
      "BP7" -> "Business Owners Line (v7)",
      "GL7" -> "General Liability (v7)",
      "WC7" -> "Workers' Comp Line (v7)",
      "WCM" -> "Workers Compensation (ISO)",
      "CR7" -> "Commercial Crime Line (v7)"
  }

  @Argument("LinePrefix")
  @Argument("state")
  function update() {
    var linePrefix = getArgumentAsString("LinePrefix")
    var state = getArgumentAsString("state")

    var start = Date.Now

    LoggerFactory.getLogger("PCA").info("${state} Starting to update state with PCA")
    try {
      updateStateForLine(state, linePrefix)
    }
    catch(e: Exception){
      LoggerFactory.getLogger("PCA").error("Failed updating ${state} with PCA", e)
      throw e
    }

    var end = Date.Now
    var diff = end.getTime() - start.getTime()
    var diffMinutes = diff / (60 * 1000) % 60
    var diffSecs = diff / 1000 % 60
    var formattedSecs = String.format("%1$02d", {diffSecs})
    LoggerFactory.getLogger("PCA").info("${state} Successfully updated state: " + state + " " + diff + " ms, mins: " + diffMinutes + ":" + formattedSecs)
  }

  @Argument("LinePrefix")
  @Argument("state")
  function revert() {
    var linePrefix = getArgumentAsString("LinePrefix")
    var state = getArgumentAsString("state")
    var start = Date.Now

    var lineCode = ProductCodeToAbbreviationMapper.getProductAbbreviation(linePrefix)

    var persistedUpdates = PersistenceManager.findRevertableUpdate(lineCode)

    var targetConfiguration = new FileTargetConfiguration(ContentRepositoryProvider.CurrentConfigLocation)

    if (persistedUpdates == null or not targetConfiguration.exists(ConfigurationFile.configurationBackupZipFile())) {
      showMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Revert.NoUpdateFound"))
      return
    } else {
      // if the state eligible for revert is not the same as the state requested in the "run" command, report error
      if (persistedUpdates.Jurisdiction.Code!= state ) {
        showMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Revert.NotEligibleState", persistedUpdates.Jurisdiction.Code))
        return
      }

      if (PresenterUtil.revertMerge(lineCode, state)) {
        Desktop.go()
      } else {
        showMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Revert.OperationNotSuccessful"))
      }
    }


    var end = Date.Now
    var diff = end.getTime() - start.getTime()
    var diffMinutes = diff / (60 * 1000) % 60
    var diffSecs = diff / 1000 % 60
    var formattedSecs = String.format("%1$02d", {diffSecs})
    LoggerFactory.getLogger("PCA").info("The last load for ${state} of ${linePrefix} has been successfully reverted: " + diff + " ms, mins: " + diffMinutes + ":" + formattedSecs)
  }


  @Argument("LinePrefix")
  @Argument("state")
  function reset() {
    var linePrefix = getArgumentAsString("LinePrefix")
    var state = getArgumentAsString("state")
    var start = Date.Now
    LoggerFactory.getLogger("PCA").info("Starting to reset the analysis for ${state} of ${linePrefix} with PCA")
    try {
      var lineCode = ProductCodeToAbbreviationMapper.getProductAbbreviation(linePrefix)
      var sbtUpdates = PersistenceManager.findUpdates(lineCode, state)
      if (sbtUpdates.Empty) {
        showMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Reset.NoUpdateFound"))
        return
      }
      var applicableUpdates = sbtUpdates.where(\sbtUpdate -> sbtUpdate.Status != SBTUpdateStatus.TC_COMPLETE)
      if (applicableUpdates.Empty) {
        showMessage(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Reset.AllCompleted"))
        return
      }
      applicableUpdates.each(\sbtUpdate -> {
        //create sbtUpdateMetadata from DB record.
        var ercPackageMetaData = new ERCPackageMetaData() {
          :Line = new LineMetaData() {
            :Code = sbtUpdate.Line
          },
          :Jurisdictions = {
              new JurisdictionMetaData() {
                :Jurisdiction = sbtUpdate.Jurisdiction.Code,
                :EffectiveDate = sbtUpdate.EffectiveDate,
                :Version = sbtUpdate.Version
              }
          },
          :Qualifier = sbtUpdate.Qualifier
        }
        var sbtUpdateMeta = new SBTUpdateMetaData(ercPackageMetaData, sbtUpdate.Jurisdiction.Code, sbtUpdate.Adopted)

        //clean sbtUpdate from Caches.
        SBTUpdateCache.evictSBTUpdateFromCache(sbtUpdateMeta)

        //delete sbtUpdate from DB
        PersistenceManager.deleteUpdate(sbtUpdate)
      })

      //redirect to PC desktop page.
      Desktop.go()
    }
    catch(e: Exception){
      LoggerFactory.getLogger("PCA").error("Failed to reset analysis for ${state} of ${linePrefix} with PCA", e)
      throw e
    }

    var end = Date.Now
    var diff = end.getTime() - start.getTime()
    var diffMinutes = diff / (60 * 1000) % 60
    var diffSecs = diff / 1000 % 60
    var formattedSecs = String.format("%1$02d", {diffSecs})
    LoggerFactory.getLogger("PCA").info("The analysis for ${state} of ${linePrefix} has been successfully reset: " + diff + " ms, mins: " + diffMinutes + ":" + formattedSecs)
  }

  @Argument("LinePrefix")
  @Argument("state")
  function load() {
    var linePrefix = getArgumentAsString("LinePrefix")
    var state = getArgumentAsString("state")

    var start = Date.Now

    LoggerFactory.getLogger("PCA").info("${state} Starting to load state update with PCA")
    try {
      loadStateForLine(state, linePrefix)
    }
    catch(e: Exception){
      LoggerFactory.getLogger("PCA").error("Failed loading ${state} with PCA", e)
      throw e
    }

    var end = Date.Now
    var diff = end.getTime() - start.getTime()
    var diffMinutes = diff / (60 * 1000) % 60
    var diffSecs = diff / 1000 % 60
    var formattedSecs = String.format("%1$02d", {diffSecs})
    LoggerFactory.getLogger("PCA").info("${state} Successfully loaded state: " + state + " " + diff + " ms, mins: " + diffMinutes + ":" + formattedSecs)
  }

  private function loadStateForLine(state: String, linePrefix: String){
    var line = LineByPrefix.get(linePrefix)

    var sbtUpdateMetaDataPresenters = PresenterUtil.createMetaDataPresentersFromRepo(ContentRepositoryProvider.CurrentRepository, PresenterUtil.SBTUPDATE_FILTER_OPTION.ALL, true)
    var targetMetaDataPresenter = sbtUpdateMetaDataPresenters.firstWhere(
        \presenter -> presenter.Line == line
            and presenter.Jurisdiction.toLowerCase().startsWith(state.toLowerCase())
    )

    if (targetMetaDataPresenter == null) {
      throw "No state update found for ${line} and state ${state}"
    }

    // Selects the new update
    targetMetaDataPresenter.AvailableSBTUpdate = targetMetaDataPresenter.AvailableSBTUpdates.first()
    var stateEffectiveDate = targetMetaDataPresenter.AvailableSBTUpdate.EffectiveDate

    // Go to update details
    var updatePresenter = PresenterUtil.createUpdatePresenter(targetMetaDataPresenter.AvailableSBTUpdate,
        ContentRepositoryProvider.CurrentRepository,
        gw.sbt.pca.repository.ContentRepositoryProvider.CurrentConfigLocation)

    // Accept all incoming artifacts and set adoption date
    updatePresenter.Roots.where(\rowPresenter -> rowPresenter.Selectable)
        .each(\rowPresenter -> {
      rowPresenter.Decision = UpdateDecision.ACCEPT
    })

    updatePresenter.AdoptionDate = stateEffectiveDate
    updatePresenter.loadUpdate()
  }

  private function updateStateForLine(state: String, linePrefix: String){
    var line = LineByPrefix.get(linePrefix)

    var sbtUpdateMetaDataPresenters = PresenterUtil.createMetaDataPresentersFromRepo(ContentRepositoryProvider.CurrentRepository, PresenterUtil.SBTUPDATE_FILTER_OPTION.AVAILABLE, true)
    var targetMetaDataPresenter = sbtUpdateMetaDataPresenters.firstWhere(
        \presenter -> presenter.Line == line
            and presenter.Jurisdiction.toLowerCase().startsWith(state.toLowerCase())
    )

    if (targetMetaDataPresenter == null) {
      throw "No state update found for ${line} and state ${state}"
    } else if (targetMetaDataPresenter.LatestAdoptedSBTUpdate == null) {
      throw "No latest adopted update found for ${line} and state ${state}, not eligible for state update"
    }

    targetMetaDataPresenter.AvailableSBTUpdate = targetMetaDataPresenter.AvailableSBTUpdates.first()
    var stateEffectiveDate = targetMetaDataPresenter.AvailableSBTUpdate.EffectiveDate

    // Go to update details
    var stateUpdatePresenter = PresenterUtil.createStateUpgradeUpdatePresenter(targetMetaDataPresenter.AvailableSBTUpdate,
        targetMetaDataPresenter.LatestAdoptedSBTUpdate,
        ContentRepositoryProvider.CurrentRepository,
        gw.sbt.pca.repository.ContentRepositoryProvider.CurrentConfigLocation,
        stateEffectiveDate)

    // Accept all incoming artifacts
    // filter by presenter's 'Visible' instead of 'Selectable'
    // because in State-Update flow, some presenters are not 'Selectable', need to go to detail to choose decision, ie. clause, form etc.
    stateUpdatePresenter.Roots.where(\rowPresenter -> rowPresenter.Visible)
        .each(\rowPresenter -> {
          rowPresenter.Decision = UpdateDecision.ACCEPT
        })

    stateUpdatePresenter.AdoptionDate = stateEffectiveDate
    stateUpdatePresenter.loadUpdate()
  }

  @Argument("LinePrefix")
  @Argument("Jurisdiction")
  @Argument("Source")
  function importForms() {
    var linePrefix = getArgumentAsString("LinePrefix")
    var jurisdiction = getArgumentAsString("Jurisdiction")
    var source = getArgumentAsString("Source")
    try {
      LoggerFactory.getLogger("PCA").info("${jurisdiction} Starting to import forms")

      var directory = directoryForSource(source,
          :ifBase = \-> ContentDirectory,
          :ifPCA = \-> pcaOutputDirectoryFor(linePrefix, jurisdiction))
      var formPatternsFile = findFile("form patterns", directory,
          \file -> file.Name == "${linePrefix}FormPatterns.xml")

      var pcImportDataInfo = new PCImportDataInfo(new PCImportDataValidationImpl())
      pcImportDataInfo.ResolutionStrategy = ResolutionOption.OVERWRITE
      pcImportDataInfo.File = new StreamWebFile(formPatternsFile.Name, "text/xml", new FileInputStream(formPatternsFile))
      var succeed = pcImportDataInfo.commitChanges()
      if (succeed) {
        LoggerFactory.getLogger("PCA").info("${jurisdiction} Successfully imported forms")
      } else {
        throw pcImportDataInfo.Results.ErrorMessage
      }
    } catch (e : Exception) {
      LoggerFactory.getLogger("PCA").error("${jurisdiction} Form importing issues", e)
      showMessage("${jurisdiction} Form importing issues: ${e.Message}")
      throw e
    }

    showMessage("Finished running PCA importForms command")
  }

  @Argument("LinePrefix")
  @Argument("Jurisdiction")
  @Argument("Source")
  function importRateBook() {
    var linePrefix = getArgumentAsString("LinePrefix")
    var jurisdiction = getArgumentAsString("Jurisdiction")
    var source = getArgumentAsString("Source")

    LoggerFactory.getLogger("PCA").info("${jurisdiction} Starting to import ratebooks")

    var directory = directoryForSource(source,
        : ifBase = \-> RateBooksDirectory,
        : ifPCA = \-> pcaOutputDirectoryFor(linePrefix, jurisdiction))
    var rateBookFile = rateBookFileFor(directory, jurisdiction)

    if (rateBookFile != null){
      try {
        importRateBookFrom(rateBookFile)
        LoggerFactory.getLogger("PCA").info("${jurisdiction} Successfully imported ratebook")
      }
      catch (e: Exception) {
        LoggerFactory.getLogger("PCA").error("${jurisdiction} ratebook import issues", e)
        throw e
      }
    }
  }

  function Export_All_Forms() {
    LoggerFactory.getLogger("PCA").info("Exporting All Forms via run command")

    // Set export data type to be policy forms
    var exportInfo = new gw.api.admin.ExportDataInfo()
    exportInfo.DataSet = exportInfo.AvailableDataSets.firstWhere( \ dataSet -> dataSet.toString() == "policy forms" )
        as com.guidewire.pl.system.exim.ExportDataSet

    // Export using XMLExport to content dir
    var configDir = PLConfigResourceKeys.CONFIG_ROOT.getDir()
    com.guidewire.pl.system.exim.XMLExport.exportXmlToFile(exportInfo.getDataSet(), TFileFactory.dir(configDir.getFile("content")))
  }

  private function directoryForSource(source: String, ifBase(): File, ifPCA(): File): File {
    source = source.toLowerCase()
    if (source == "base")
      return ifBase()
    else if (source == "pca")
      return ifPCA()
    else
      throw new IllegalArgumentException("Invalid directory source: '${source}'")
  }

  private function rateBookFileFor(directory: File, jurisdiction: String): File {
    // Matching of jurisdiction is complicated by the need to support CW; for CA7, the jurisdiction part is "CW 2".
    // Currently, the line description part of the file name is ignored; it is assumed that only rate books for the
    // line of interest will be in the directory.
    return findRateBookFile(directory, \file ->
        file.Name.match(".+${jurisdiction}(\\s?[0-9])?-[0-9]{8}-[v|V][0-9]+\\.xml")!=null)
  }

  private function importRateBookFrom(file: File) {
    var webFile = new StreamWebFile(file.Name, "text/xml", new FileInputStream(file))
    var errorLogs = new String[] {}
    var importHelper = new RateBookXMLImportUIHelper(
        RateBookImporter.create(),
            new WebFileWrapper() { : File = webFile },
            null,
            errorLogs)
    importHelper.doImport()

    errorLogs.each( \ errorMsg -> LoggerFactory.getLogger("PCA").error("Import ratebook error: " + errorMsg))
    ensureRateBookIsActive(importHelper.Importer.ImportedBook)
  }

  private function ensureRateBookIsActive(book: RateBook) {
    if (book.isActive()) return

    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      book = bundle.add(book)

      if (not book.isApproved())
        book.approve(new RateBookUIValidator())

      book.activate(new RateBookUIValidator())
    })
  }

  private property get ContentDirectory(): File {
    return PLConfigResourceKeys.CONFIG_ROOT.getDir().getFile("content")
  }

  private property get RateBooksDirectory(): File {
    return ContentDirectory.getChild("ratebooks")
  }

  private function pcaOutputDirectoryFor(linePrefix: String, jurisdiction: String): File {
    return findFile("PCA output directory for line '${linePrefix}' and jurisdiction '${jurisdiction}'",
        ContentDirectory,
        \file -> file.Name.match("${linePrefix}Line${jurisdiction}[0-9]{8}")!=null)
  }

  private function findRateBookFile(directory: File, predicate(candidate: File): boolean): File {
    var matches = directory.Children.where(predicate)
    var description = "rate book"
    if (matches.Empty) {
      LoggerFactory.getLogger("PCA").info("No matching ${description} file was found in ${directory.AbsolutePath}.")
      return null
    } else {
      return getMatchingFile(matches, description, directory)
    }
  }

  private function findFile(description: String, directory: File, predicate(candidate: File): boolean): File {
    var matches = directory.Children.where(predicate)
    if (matches.Empty) {
      throw new IllegalStateException("No matching ${description} file was found in ${directory.AbsolutePath}.")
    } else {
      return getMatchingFile(matches, description, directory)
    }
  }

  private function getMatchingFile(matches: List<File>, description: String, directory: File): File {
    if (matches.Count > 1)
      throw new IllegalStateException("Multiple matching ${description} files were found in ${directory.AbsolutePath}.")
    else
      return matches.single()
  }

  private function showMessage(message: String) {
    TopLocation.WebMessageContext.addMessage(new WebMessage(null, WebMessage.Severity.INFO, message))
  }
}
