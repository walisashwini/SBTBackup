package gw.sbt.reader.content.schedule

uses gw.lang.enhancements.OrderedList
uses gw.sbt.artifacts.properties.DisplayProperties
uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.model.schedule.Schedule
uses gw.sbt.model.schedule.ScheduleProperty

class ScheduleReader {

  function read(clausePattern : String, scheduleConfig : ScheduleConfig, displayProperties : DisplayProperties) : Schedule {
    var schedule = scheduleConfig?.getSchedule(clausePattern)
    return schedule == null
        ? null
        : new Schedule() {
            :Properties = new OrderedList<ScheduleProperty>(schedule.Properties
                .sortBy( \ prop -> prop.Priority )
                .map( \ prop -> new ScheduleProperty() {
                  :Name = prop.Name,
                  :Description = displayProperties.getProperty(prop.Description) ?: prop.Description
                }))
          }
  }

}