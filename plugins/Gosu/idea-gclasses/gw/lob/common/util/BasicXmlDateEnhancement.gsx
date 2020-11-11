package gw.lob.common.util

uses java.util.Date

enhancement BasicXmlDateEnhancement : gw.xml.date.XmlDate {

  property get Date() : Date {
    return this.toCalendar(this.TimeZone).Time
  }
}
