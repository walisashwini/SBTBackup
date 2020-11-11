package gw.sbt.util

uses gw.api.util.ConfigAccess
uses org.slf4j.LoggerFactory

uses java.nio.file.Files

class PcaVersionUtil {

  private final static var pcaVersion : String = setPcaVersion()

  private static function setPcaVersion() : String {
    var versionFile = ConfigAccess.getConfigFile("config/pca_config/Version.txt")
    var versionRaw = Files.readAllBytes(versionFile.toPath())
    var version = new String(versionRaw)
    return version
  }

  static property get PcaVersion() : String {
    return pcaVersion
  }

  static function logPcaVersion() {
    LoggerFactory.getLogger("PCA").info("Product Content Analyzer Version: " + pcaVersion)
  }

}