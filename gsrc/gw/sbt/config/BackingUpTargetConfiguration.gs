package gw.sbt.config

uses gw.sbt.content.Content
uses gw.sbt.zip.Zipper

class BackingUpTargetConfiguration extends AbstractTargetConfiguration {
  delegate _config represents TargetConfiguration
  var _backupConfig : TargetConfiguration

  construct(config : TargetConfiguration, backupConfig : TargetConfiguration) {
    _config = config
    _backupConfig = backupConfig
  }

  override function write(configFile : ConfigurationFile, content : byte[]) {
    ensureBackupOf(configFile, false)
    _config.write(configFile, content)
  }

  override function writeUnicode(configFile : ConfigurationFile, content : byte[]) {
    ensureBackupOf(configFile, true)
    _config.writeUnicode(configFile, content)
  }

  override function delete(configFile : ConfigurationFile) {
    ensureBackupOf(configFile, false)
    _config.delete(configFile)
  }

  override function deleteUnicode(configFile : ConfigurationFile) {
    ensureBackupOf(configFile, true)
    _config.deleteUnicode(configFile)
  }

  function saveBackup() {
    var backupContents = BackupFiles.map(\ file ->
        new Content(:name = file.Path, :bytes = _backupConfig.contents(file)))
    var zipBytes = new Zipper().zip(backupContents)
    _config.write(ConfigurationFile.configurationBackupZipFile(), zipBytes)
  }

  private function ensureBackupOf(configFile : ConfigurationFile, isUnicode : boolean) {
    if (not _backupConfig.exists(configFile))
      if (isUnicode) {
        _backupConfig.writeUnicode(configFile, _config.contents(configFile))
      } else {
        _backupConfig.write(configFile, _config.contents(configFile))
      }
  }

  private property get BackupFiles() : List<ConfigurationFile> {
    return _backupConfig.listFilePaths(ConfigurationFile.rootFolder()).map(\ path -> ConfigurationFile.fromPath(path))
  }
}
