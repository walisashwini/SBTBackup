package gw.sbt.loader.io

uses gw.sbt.artifacts.xsd.XsdFile
uses gw.sbt.config.ConfigurationFile

class XsdFileAddition extends FileAddition<XsdFile>  {
  construct(xsdFile : XsdFile) {
    super(ConfigurationFile.xsdFile(xsdFile.FilePath, xsdFile.FileName), xsdFile)
  }
}