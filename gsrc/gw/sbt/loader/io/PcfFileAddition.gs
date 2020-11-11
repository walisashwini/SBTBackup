package gw.sbt.loader.io

uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.config.ConfigurationFile

class PcfFileAddition extends FileAddition<PcfFile>  {
  construct(pcfFile : PcfFile) {
    super(ConfigurationFile.pcfFile(pcfFile.FilePath, pcfFile.FileName), pcfFile)
  }
}