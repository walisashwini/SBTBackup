package gw.sbt.pca.repository

uses gw.api.util.ConfigAccess
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.reader.SBTUpdateReader
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.util.LoaderUtil
uses java.io.File
uses java.io.FileInputStream
uses java.io.InputStream
uses java.lang.RuntimeException
uses gw.sbt.pca.validation.StatePackageFileTypeValidator
uses gw.sbt.pca.validation.SatePackageMetadataValidator
uses org.apache.commons.io.FileUtils

uses java.util.List

class FileContentRepository implements ContentRepository {
  private var _newUpdatesDir: File
  private var _latestAdoptedDir: File

  public construct(newUpdatesDir: String, latestAdoptedDir : String) {
    _newUpdatesDir = new File(newUpdatesDir)
    _latestAdoptedDir = new File(latestAdoptedDir)

    if (!_newUpdatesDir.Directory || !_newUpdatesDir.exists()) {
      throw new RuntimeException(_newUpdatesDir + " needs to be an existing directory.")
    }

    if (!_latestAdoptedDir.Directory || !_latestAdoptedDir.exists()) {
      throw new RuntimeException(_latestAdoptedDir + " needs to be an existing directory.")
    }
  }

  static function create(): FileContentRepository {
    return new FileContentRepository(ConfigAccess.getConfigFile("config/updates/new").AbsolutePath,
        ConfigAccess.getConfigFile("config/updates/adopted").AbsolutePath)
  }

  override function list(): List<SBTUpdateMetaData> {
    // the SBTUpdateMetaData read from New/Adopted folder are differetial with 'Adopted' flag.
    new StatePackageFileTypeValidator(_newUpdatesDir).validate()
    var newUpdatesMetaData = _newUpdatesDir.listFiles()
        .where(\f -> f.File and f.Name.endsWith(".zip"))
        .flatMap(\f -> read(f)).toList()
    new StatePackageFileTypeValidator(_latestAdoptedDir).validate()
    var adoptedUpdatesMetaData = _latestAdoptedDir.listFiles()
        .where(\f -> f.File and f.Name.endsWith(".zip"))
        .flatMap(\f -> read(f, true)).toList()

    return newUpdatesMetaData.concat(adoptedUpdatesMetaData).toList()
  }

  override function getSBTUpdate(sbtUpdateMetaData: SBTUpdateMetaData, adoptionDate: Date): SBTUpdate {
    var sbtUpdate = gw.sbt.reader.SBTUpdateReader.readCustomerPackage(
        findCustomerPackage(sbtUpdateMetaData), sbtUpdateMetaData.Line.Code, sbtUpdateMetaData.Jurisdiction, adoptionDate)
    sbtUpdate.MetaData.Qualifier = sbtUpdateMetaData.Qualifier
    sbtUpdate.MetaData.Adopted = sbtUpdateMetaData.Adopted
    return sbtUpdate
  }

  override function findCustomerContent(sbtUpdateMetaData: SBTUpdateMetaData): SBTUpdateContents {
    return LoaderUtil.getCustomerContent(findCustomerPackage(sbtUpdateMetaData), sbtUpdateMetaData.Jurisdiction)
  }

  override function adoptSBTUpdate(sbtUpdateMetaData : SBTUpdateMetaData) {
    var packageFile = findCustomerPackageFile(sbtUpdateMetaData, _newUpdatesDir)
    if (packageFile != null) {
      FileUtils.moveToDirectory(packageFile, _latestAdoptedDir, false)
    }
  }

  override function unadoptSBTUpdate(sbtUpdateMetaData : SBTUpdateMetaData) {
    var packageFile = findCustomerPackageFile(sbtUpdateMetaData, _latestAdoptedDir)
    if (packageFile != null) {
      FileUtils.moveToDirectory(packageFile, _newUpdatesDir, false)
    }
  }

  private function findCustomerPackage(sbtUpdateMetaData: SBTUpdateMetaData): InputStream {
    if(not sbtUpdateMetaData.Adopted) {
      return new FileInputStream(findCustomerPackageFile(sbtUpdateMetaData, _newUpdatesDir))
    } else {
      return new FileInputStream(findCustomerPackageFile(sbtUpdateMetaData, _latestAdoptedDir))
    }
  }

  private function findCustomerPackageFile(sbtUpdateMetaData: SBTUpdateMetaData, dir: File): File {
    return dir.listFiles()
        .where(\f -> f.File and f.Name.endsWith(".zip"))
        .where(\f -> f.NameSansExtension == sbtUpdateMetaData.Qualifier)
        .first()
  }

  private function read(customerPackageFile: File, adopted : boolean = false): List<SBTUpdateMetaData> {
    using (var input = new FileInputStream(customerPackageFile)) {
      var metadata = SBTUpdateReader.readCustomerPackageMetaData(input)
      if (metadata != null) {
        metadata.Qualifier = customerPackageFile.NameSansExtension
      }
      var validator = new SatePackageMetadataValidator(customerPackageFile, metadata)
      validator.validate()
      if (validator.Stop){
        return null
      }
      return metadata.Jurisdictions.where(\jurisdiction -> jurisdiction.Jurisdiction != "CW")
        .map( \ jurisdiction -> new SBTUpdateMetaData(metadata, jurisdiction.Jurisdiction, adopted) )
    }
  }

}
