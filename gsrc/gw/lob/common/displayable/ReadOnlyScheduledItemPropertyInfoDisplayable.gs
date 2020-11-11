package gw.lob.common.displayable

uses gw.api.productmodel.SchedulePropertyInfo

/**
 * @deprecated Used only by OLD BP 8.0.1 schedule framework. Replaced by {@link gw.lob.common.displayable.ReadOnlyScheduledItemPropertyInfoDisplayableV2}
 */
class ReadOnlyScheduledItemPropertyInfoDisplayable<T> extends ScheduledItemPropertyInfoDisplayable<T> {

  protected construct(scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo, displayableAdapter : SchedulePropertyInfoDisplayableAdapter) {
    super(scheduledItem, propertyInfo, displayableAdapter)
  }

  override property get Editable(): boolean {
    return false
  }
}