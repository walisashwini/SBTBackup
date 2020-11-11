package gw.lob.common.displayable

uses gw.api.productmodel.SchedulePropertyInfo

class ForeignKeyScheduledItemDisplayableAdapter extends DefaultSchedulePropertyInfoDisplayableAdapter {

  reified override function isEditable<T>(scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo<T>) : boolean {
    return isVisible<T>(scheduledItem, propertyInfo)
  }

}