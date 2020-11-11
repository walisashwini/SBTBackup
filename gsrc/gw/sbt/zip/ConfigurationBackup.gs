package gw.sbt.zip

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.TargetConfiguration

uses java.io.ByteArrayInputStream
uses java.io.File
uses java.net.URI
uses java.net.URL
uses java.nio.file.Path
uses java.nio.file.Paths

class ConfigurationBackup {
  static final var FilesWithUnicodeSupport = {
      "productmodel.display_en_US.properties",
      "display_en_US.properties"
  }

  static function restoreConfiguration(config : TargetConfiguration) {
    var backupZipBytes = config.contents(ConfigurationFile.configurationBackupZipFile())
    var backupContents = new ZipExtractor().extractInMemory(new ByteArrayInputStream(backupZipBytes))
    backupContents.each(\ fileContent -> {
      var file = ConfigurationFile.fromPath (fileContent.Name)

      var isUnicode= FilesWithUnicodeSupport.where (\ f -> f== file.Name).HasElements

      if (fileContent.Bytes.Count > 0) {
        if (isUnicode) {
          config.writeUnicode(file, fileContent.Bytes)
        } else {
          config.write(file, fileContent.Bytes)
        }
      }
      else {
        if (isUnicode) {
          config.deleteUnicode(file)
        } else {
          config.delete(file)
        }
      }
    })
  }
}