package gw.lob.common.sbt.schedules

uses gw.api.productmodel.SchedulePolicyLocationPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lob.common.sbt.schedules.impl.AbstractSchedulePropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleAdditionalInsuredPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleAdditionalInterestPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleBooleanPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleDatePropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleDecimalPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleIntegerPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleOptionPropertyInfo
uses gw.lob.common.sbt.schedules.impl.SchedulePercentPropertyInfo
uses gw.lob.common.sbt.schedules.impl.SchedulePolicyContactPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleStringPropertyInfo
uses gw.lob.common.sbt.schedules.impl.ScheduleTextAreaPropertyInfo

class ScheduleItemPropertyUtil {

  static function getDefaultValue(schedulePropertyInfo: SchedulePropertyInfo): Object {
    if (schedulePropertyInfo typeis ScheduleBooleanPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else if (schedulePropertyInfo typeis ScheduleDecimalPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else if (schedulePropertyInfo typeis ScheduleIntegerPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else if (schedulePropertyInfo typeis ScheduleOptionPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else if (schedulePropertyInfo typeis SchedulePercentPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else if (schedulePropertyInfo typeis ScheduleStringPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else if (schedulePropertyInfo typeis ScheduleTextAreaPropertyInfo) {
      return schedulePropertyInfo.DefaultValue
    } else {
      return null
    }
  }

  static function getPropertyInfoName(schedulePropertyInfo : SchedulePropertyInfo): String {
    if (schedulePropertyInfo typeis AbstractSchedulePropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleAdditionalInsuredPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleAdditionalInterestPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleBooleanPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleDatePropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleDecimalPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleIntegerPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis ScheduleStringPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis SchedulePolicyContactPropertyInfo) {
      return schedulePropertyInfo.PropertyInfoName
    } else if (schedulePropertyInfo typeis SchedulePolicyLocationPropertyInfo) {
      return schedulePropertyInfo.PropertyInfo.Name
    } else {
      return null
    }
  }

}