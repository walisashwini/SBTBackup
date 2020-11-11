package gw.sbt.loader.io.schedule

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.FileModification
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.artifacts.schedules.ScheduleConfig

class ScheduleConfigReplacement extends FileModification<ScheduleConfig> {

  construct(productAbbreviation : String, content : ScheduleConfig) {
    super(ConfigurationFile.scheduleConfig(productAbbreviation), content)
  }

  override function perform(writer : SBTUpdateLoaderWriter) {
    writer.writeScheduleConfigReplacement(this)
  }

  override function undo(writer : SBTUpdateLoaderWriter) {
    writer.undoWriteScheduleConfig(this)
  }
}