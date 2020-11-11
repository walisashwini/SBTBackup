package gw.sbt.config.current

uses gw.sbt.config.ConfigFileContentsDelegate
uses gw.sbt.config.ConfigurationFile

class CurrentConfigFileContentsDelegate extends ConfigFileContentsDelegate {
  var _currentConfig : CurrentConfigContents

  construct(currentConfig : CurrentConfigContents) {
    _currentConfig = currentConfig
  }

  override protected function contentOf(file : ConfigurationFile) : byte[] {
    return _currentConfig.Config.contents(file)
  }

  override protected function contentExists(content : byte[]) : boolean {
    return content.Count > 0
  }

  override protected property get ProductAbbreviation() : String {
    return _currentConfig.ProductAbbreviation
  }
}
