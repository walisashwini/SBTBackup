package gw.lob.common.financials

uses gw.api.locale.DisplayKey
uses gw.lob.common.financials.GenericLobCostMethodsImpl

class LobScheduledItemCostMethodsImpl<T extends Cost> extends GenericLobCostMethodsImpl<T> {

  construct(owner: T) {
    super(owner)
  }

  override property get OwningCoverable(): Coverable {
    return ScheduledItem
  }

  property get ScheduledItem() : Coverable & ScheduledItem {
    return null
  }

  override property get Description(): String {
    var slicedItem = ScheduledItem
    if (slicedItem.ScheduleParent == null && !slicedItem.Slice) {
      slicedItem = slicedItem.getSliceUntyped(slicedItem.EffectiveDate) as Coverable & ScheduledItem
    }
    return slicedItem.ScheduleParent.ScheduleName + " #" + slicedItem.ScheduleNumber
  }
}