package gw.sbt.config.incoming

uses gw.sbt.config.ConfigFileContentsDelegate
uses gw.sbt.config.ConfigurationFile

class SBTUpdateFileContentsDelegate extends ConfigFileContentsDelegate {
  var _updateContents : SBTUpdateContents as UpdateContents

  construct(updateContents : SBTUpdateContents) {
    _updateContents = updateContents
  }

  override protected function contentOf(file : ConfigurationFile) : byte[] {
    return _updateContents.getContent(file)
  }

  override protected function contentExists(content : byte[]) : boolean {
    return content != null
  }

  override protected property get ProductAbbreviation() : String {
    return _updateContents.ProductAbbreviation
  }
}
