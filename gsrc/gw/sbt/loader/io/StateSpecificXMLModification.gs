package gw.sbt.loader.io

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.config.ConfigurationFile

class StateSpecificXMLModification extends FileModification<XmlContent>{
  construct(productAbbreviation : String, content : XmlContent) {
    super(ConfigurationFile.stateSpecificXml(productAbbreviation), content)
  }
}