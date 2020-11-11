package gw.sbt.loader.reporter

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.FileTargetConfiguration
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.content.Content
uses gw.sbt.loader.ArtifactLocation
uses gw.sbt.loader.Loads
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.loader.io.RatebookFileAddition
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.zip.Zipper
uses org.slf4j.LoggerFactory

class ConfigurationFileZipper {

  function writeConflictFilesZip(
      filesWithConflicts : List<ConfigurationFile>,
      sbtUpdate : SBTUpdate,
      updateContents : SBTUpdateContents,
      writer : SBTUpdateLoaderWriter
  ) {
    var zipFile = ConfigurationFile.conflictFilesZipFile(
        sbtUpdate.MetaData.Jurisdiction,
        sbtUpdate.MetaData.Line.Code,
        sbtUpdate.ProcessedDate)
    var packageFilesWithConflicts = updatePackageFilesWithConflictsFrom(filesWithConflicts, updateContents)
    sbtUpdate.ConflictFilesZipContent = generateZipFile(
        :files = packageFilesWithConflicts,
        :getContents = \ file -> updateContents.getContent(file),
        :zipFile = zipFile,
        :writer = writer)
  }

  private function updatePackageFilesWithConflictsFrom(
      currentConfigFilesWithConflicts : List<ConfigurationFile>,
      updateContents : SBTUpdateContents
  ) : List<ConfigurationFile> {
    return currentConfigFilesWithConflicts.reduce({}, \ results, file -> {
      if (updateContents.contentExist(file.Path))
        results.add(file)
      else if (ArtifactLocation.fromConfigurationFile(file).IsEntity)
        results.addAll(updatePackageFilesForSameEntity(file, updateContents))
      else
        LoggerFactory.getLogger("PCA").warn("No matching update files found for '${file.Path}'")
      return results
    })
  }

  private function updatePackageFilesForSameEntity(
      entityFile : ConfigurationFile,
      updateContents : SBTUpdateContents
  ) : List<ConfigurationFile> {
    var entityName = entityFile.Name.match("(\\w+)\\.\\w{3}").get(0)
    var results : List<ConfigurationFile> = {}
    if (updateContents.getEntity(entityName) != null)
      results.add(ConfigurationFile.entityFromExtensions(entityName + ".eti"))
    if (updateContents.getEntityExtension(entityName) != null)
      results.add(ConfigurationFile.entityFromExtensions(entityName + ".etx"))
    if (updateContents.getEntityExtension(entityName + ".state") != null)
      results.add(ConfigurationFile.entityFromExtensions(entityName + ".state.etx"))
    return results
  }

  static function rateBookFileFrom(loads : Loads) : ConfigurationFile {
    var rateBookLoadOp = loads.AllLoads
        .flatMap(\ load -> load.LoadOps.Ops)
        .firstWhere(\ loadOp -> loadOp typeis RatebookFileAddition and
            not loadOp.TargetFile.Name.endsWith(RateBookHelper.PCA_MERGED_CW_RATEBOOK_SUFFIX))
    if (rateBookLoadOp == null)
      return null
    else {
      // The file path for the load op can't be used directly, because it is the generated (vs. package) path
      var rateBookFilename = rateBookLoadOp.TargetFile.Name
      return ConfigurationFile.ratebook(rateBookFilename)
    }
  }

  function writeMergedFilesZip(
      sbtUpdate : SBTUpdate,
      writtenConfigurationFiles : List<ConfigurationFile>,
      fileConfig : TargetConfiguration,
      currentConfigWriter : SBTUpdateLoaderWriter
  ) {
    var zipFile = ConfigurationFile.mergedFilesZipFile(
        sbtUpdate.MetaData.Jurisdiction,
        sbtUpdate.MetaData.Line.Code,
        sbtUpdate.ProcessedDate)
    sbtUpdate.MergedFilesZipContent = generateZipFile(
        :files = writtenConfigurationFiles,
        :getContents = \ file -> fileConfig.contents(file),
        :zipFile = zipFile,
        :writer = currentConfigWriter)
  }

  private function generateZipFile(
      files : List<ConfigurationFile>,
      getContents(file : ConfigurationFile) : byte[],
      zipFile : ConfigurationFile,
      writer : SBTUpdateLoaderWriter
  ) : DownloadContent {
    var contentsToZip = files.map(\ file -> new Content(
        :name = toAbsoluteConfigPath(file.Path),
        :bytes = getContents(file)))
    var zipFileBytes = new Zipper().zip(contentsToZip)
    writer.writeFile(zipFile, zipFileBytes)
    return new DownloadContent() {
      :Content = zipFileBytes,
      :FileName = zipFile.Name
    }
  }

  private function toAbsoluteConfigPath(relativeConfigPath : String) : String {
    return "modules/configuration/" + relativeConfigPath
  }
}