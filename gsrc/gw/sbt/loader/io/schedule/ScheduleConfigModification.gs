package gw.sbt.loader.io.schedule

uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.FileModification

class ScheduleConfigModification extends FileModification<ScheduleConfig> {

  construct(productAbbreviation : String, content : ScheduleConfig) {
    super(ConfigurationFile.scheduleConfig(productAbbreviation), content)
  }
}