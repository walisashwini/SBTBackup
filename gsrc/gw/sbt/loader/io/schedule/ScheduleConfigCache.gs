package gw.sbt.loader.io.schedule

uses gw.sbt.artifacts.schedules.Schedule
uses gw.sbt.artifacts.schedules.ScheduleConfig

class ScheduleConfigCache {
  var _scheduleConfig: ScheduleConfig
  var _currentBytes: byte[] as readonly Bytes

  construct(initial : byte[]) {
    reset(initial)
  }

  function add(content : Schedule) {
    _scheduleConfig.replace(content)
    _currentBytes = _scheduleConfig.Bytes
  }

  function undo(previousContent : byte[]) {
    if (previousContent != null){
      reset(previousContent)
    }
  }

  private function reset(content : byte[]) {
    _currentBytes = content
    if (content.Count > 0) {
      _scheduleConfig = new ScheduleConfig(content)
    } else {
      _scheduleConfig = new ScheduleConfig()
    }
  }
}