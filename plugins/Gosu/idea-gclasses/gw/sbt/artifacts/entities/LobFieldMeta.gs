package gw.sbt.artifacts.entities

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.versioned.ContainerKey
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig

class LobFieldMeta extends ContainerPropertyConfig {
  construct(content: byte [], configFileId: String = null) {
    super(content, configFileId)
  }

  function toggleEntityColumnVisibility(entity: String, column: String, jurisdiction: String) {
    var versionedConfig = _containerProperties.get(ContainerKey.create(entity)).get(column)
        .firstWhere(\versionedConfig -> versionedConfig.Jurisdiction == jurisdiction)

    if (versionedConfig != null) {
      var available = versionedConfig.getChild(Lookup.AVAILABLE)?.$Text
      if (available.HasContent) {
        available = available.toLowerCase() == "true" ? "false" : "true"
      } else {
        available = "false"
      }

      versionedConfig.setElementValue(Lookup.AVAILABLE, available)
    }
  }
}