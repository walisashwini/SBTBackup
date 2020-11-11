package gw.lob.common.displayable

uses gw.api.domain.Clause
uses gw.api.productmodel.SchedulePropertyInfo

class ReadOnlyScheduledItemPropertyInfoDisplayableV2<T> extends ScheduledItemPropertyInfoDisplayableV2 <T> {

  protected construct(clause: Clause, scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo, displayableAdapter : SchedulePropertyInfoDisplayableAdapter) {
    super(clause, scheduledItem, propertyInfo, displayableAdapter)
  }

  override property get Editable(): boolean {
    return false
  }
}