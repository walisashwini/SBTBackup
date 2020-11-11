package gw.sbt.config

uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.xsd.XsdFile
uses gw.xml.XmlElement
uses gw.sbt.artifacts.valuedependency.ValueDependencyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.entities.LobFieldMeta

interface FileConfigContents {

  function getPcfFile(filePath : String, fileName: String) : PcfFile

  function getGosuFile(fullName : String, fileExtension : String) : GosuFile

  function getXsdFile(fullName : String, fileExtension : String) : XsdFile

  function getPluginFile(fullName : String, fileExtension: String) : PluginFile

  property get ValueDependencyConfig() : ValueDependencyConfig

  property get LobFieldMetaConfig() : LobFieldMeta

  property get StateSpecificXml() : XmlElement

  function getContainerPropertyConfig(type: ContainerPropertyConfigType) : ContainerPropertyConfig

}
