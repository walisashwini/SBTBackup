package gw.lob.common.displayable

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.sbt.schedules.impl.ScheduleReadOnlyPropertyInfo
uses java.lang.Integer
uses java.math.BigDecimal
uses java.util.Date
uses java.util.List

class SchedulePropertyInfoDisplayableFactoryV2 {

  property get LineSpecificDisplayableAdapters(): List<SchedulePropertyInfoDisplayableAdapter> {
    return {new ForeignKeyScheduledItemDisplayableAdapter()}
  }

  function shouldDisplayPropertyInfoOnUI(schedulePattern: ClausePattern, scheduledItem: ScheduledItem, propInfo: SchedulePropertyInfo): boolean {
    return DisplayableAdapters.firstWhere(\a -> a.isMatch(schedulePattern)).isVisible(scheduledItem, propInfo)
  }

  function doesPropertyHaveDependents(scheduledItem: ScheduledItem, propertyInfo: SchedulePropertyInfo): boolean {
    return ValueDependencySupport.Instance.hasDependentProperties(scheduledItem.ScheduleParent as Clause, propertyInfo.PropertyInfo.Name)
  }

  function doesPropertyHaveDependents(schedule: Schedule, propertyInfo: SchedulePropertyInfo): boolean {
    return ValueDependencySupport.Instance.hasDependentProperties(schedule as Clause, propertyInfo.PropertyInfo.Name)
  }

  property get DisplayableAdapters(): List<SchedulePropertyInfoDisplayableAdapter> {
    return LineSpecificDisplayableAdapters.concat({new DefaultSchedulePropertyInfoDisplayableAdapter()}).toList()
  }

  function createSchedulePropertyInfoDisplayable(clause: Clause, item: ScheduledItem, propertyInfo: SchedulePropertyInfo): Displayable {
    return item.ScheduleParent.IsSimpleSchedule ? createEditableSchedulePropertyInfoDisplayable(clause, item, propertyInfo) : createReadOnlySchedulePropertyInfoDisplayable(clause, item, propertyInfo)
  }

  function createEditableSchedulePropertyInfoDisplayable(clause: Clause, item: ScheduledItem, propertyInfo: SchedulePropertyInfo): Displayable {
    var adapter = DisplayableAdapters.firstWhere(\adapter -> adapter.isMatch((item.ScheduleParent as Clause).Pattern))

    switch (propertyInfo.ValueType) {
      case "AutoNumber":
          return new ScheduledItemAutoNumberDisplayableV2 (clause, item, propertyInfo, adapter)
      case "Boolean":
          return new ScheduledItemPropertyInfoDisplayableV2 <Boolean>(clause, item, propertyInfo, adapter)
      case "Integer":
      case "Percent":
      case "IntegerRange":
          return new ScheduledItemPropertyInfoDisplayableV2 (clause, item, propertyInfo, adapter)
      case "TextArea":
      case "String":
          if (propertyInfo typeis ScheduleReadOnlyPropertyInfo) {
            return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <String>(clause, item, propertyInfo, adapter)
          }
          return new ScheduledItemPropertyInfoDisplayableV2 <String>(clause, item, propertyInfo, adapter)
      case "Date":
          return new ScheduledItemPropertyInfoDisplayableV2 <Date>(clause, item, propertyInfo, adapter)
      case "ForeignKey":
          return new ScheduledItemPropertyInfoDisplayableV2 <KeyableBean>(clause, item, propertyInfo, adapter)
      case "ForeignKeyWithOptionLabels":
          return new ScheduledItemPropertyInfoDisplayableV2 <KeyableBean>(clause, item, propertyInfo, adapter)
      case "TypeKey":
          return new ScheduledItemTypeKeyDisplayableV2 (clause, item, propertyInfo, adapter)
      case "BigDecimal":
          return new ScheduledItemPropertyInfoDisplayableV2 <BigDecimal>(clause, item, propertyInfo, adapter)
      case "AdditionalInsured":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <PolicyAddlInsuredDetail>(clause, item, propertyInfo, adapter)
      case "AdditionalInterest":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <AddlInterestDetail>(clause, item, propertyInfo, adapter)
      case "PolicyContact":
        return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <PolicyContactDetail>(clause, item, propertyInfo, adapter)
      case "Option":
          return new ScheduledItemOptionDisplayableV2 (clause, item, propertyInfo, adapter)
        default:
        throw "Unsupported property info type: " + propertyInfo.ValueType
    }
  }

  function createReadOnlySchedulePropertyInfoDisplayable(clause: Clause, item: ScheduledItem, propertyInfo: SchedulePropertyInfo): Displayable {
    var adapter = DisplayableAdapters.firstWhere(\adapter -> adapter.isMatch((item.ScheduleParent as Clause).Pattern))

    switch (propertyInfo.ValueType) {
      case "AutoNumber":
          return new ScheduledItemAutoNumberDisplayableV2 (clause, item, propertyInfo, adapter)
      case "Boolean":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <Boolean>(clause, item, propertyInfo, adapter)
      case "Integer":
      case "Percent":
      case "IntegerRange":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <Integer>(clause, item, propertyInfo, adapter)
      case "TextArea":
      case "String":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <String>(clause, item, propertyInfo, adapter)
      case "Date":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <Date>(clause, item, propertyInfo, adapter)
      case "ForeignKey":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <KeyableBean>(clause, item, propertyInfo, adapter)
      case "ForeignKeyWithOptionLabels":
          return new ScheduledItemPropertyInfoDisplayableV2 <KeyableBean>(clause, item, propertyInfo, adapter)
      case "TypeKey":
          return new ReadOnlyScheduledItemTypeKeyDisplayableV2 (clause, item, propertyInfo, adapter)
      case "BigDecimal":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <BigDecimal>(clause, item, propertyInfo, adapter)
      case "AdditionalInsured":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <PolicyAddlInsuredDetail>(clause, item, propertyInfo, adapter)
      case "AdditionalInterest":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <AddlInterestDetail>(clause, item, propertyInfo, adapter)
      case "Option":
          return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 (clause, item, propertyInfo, adapter)
      case "PolicyContact":
        return new ReadOnlyScheduledItemPropertyInfoDisplayableV2 <PolicyContactDetail>(clause, item, propertyInfo, adapter)
        default:
        throw "Unsupported property info type: " + propertyInfo.ValueType
    }
  }
}