package gw.sbt.artifacts.schedules

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses java.util.Set
uses java.util.HashSet
uses java.util.List

class ScheduleConfig extends XmlContent {

  construct() {
    super(XmlElement.parse("<ScheduleConfig/>"))
  }

  construct(content: byte[]) {
    super(content)
  }

  construct(xml : XmlElement) {
    super(xml)
  }

  property get AllSchedules() : List<Schedule> {
    return getChildren().map( \ xml -> new Schedule(xml, XmlDeclarations))
  }

  function getSchedule(pattern: String): Schedule {
    return AllSchedules.firstWhere(\schedule -> schedule.ClausePattern == pattern)
  }

  function add(schedule : Schedule) {
    _content.addChild(schedule.Xml)
  }

  function replace(incomingSchedule : Schedule) {
    var allSchedules = AllSchedules

    if(!allSchedules.hasMatch( \ schedule -> schedule.ClausePattern == incomingSchedule.ClausePattern )) {
      add(incomingSchedule)
    } else {
      _content.$Children*.$QName.toSet().each( \ childQName ->  _content.removeChildren(childQName))
      allSchedules
        .where( \ schedule -> schedule.ClausePattern != incomingSchedule.ClausePattern)
        .each( \ schedule -> _content.addChild(schedule.Xml))

      _content.addChild(incomingSchedule.Xml)
    }
  }

  property get UniqueScheduledItemTypes() : Set<String> {
    var uniqueScheduledItemTypes = new HashSet<String>()

    // Get the unique schedule item backing entities in multiple lines
    AllSchedules.each( \ schedule -> {
      schedule.Properties.each( \ scheduleProperty -> {
        if(scheduleProperty.IsVersioned) {
          uniqueScheduledItemTypes.addAll(
              scheduleProperty.Versions*.ScheduledItemType.toSet())
        } else {
          uniqueScheduledItemTypes.add(scheduleProperty.ScheduledItemType)
        }
      })
    })

    return uniqueScheduledItemTypes
  }

}