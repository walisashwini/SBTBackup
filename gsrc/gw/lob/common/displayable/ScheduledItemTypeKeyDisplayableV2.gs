package gw.lob.common.displayable

uses gw.api.domain.Clause
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.entity.TypeKey

class ScheduledItemTypeKeyDisplayableV2 extends ScheduledItemPropertyInfoDisplayableV2 <TypeKey> {

  protected construct(clause : Clause, scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo, displayableAdapter : SchedulePropertyInfoDisplayableAdapter) {
    super(clause, scheduledItem, propertyInfo, displayableAdapter)
    _valueProvider = PropertyValueProvider as SchedulePropertyValueProvider<String>
  }

  override property get Value(): TypeKey {
    return PropertyValueRange.firstWhere( \ key -> key.Code == _valueProvider.Value as String)
  }

  override property set Value(newValue: TypeKey) {
    _valueProvider.Value = newValue.Code
  }
}