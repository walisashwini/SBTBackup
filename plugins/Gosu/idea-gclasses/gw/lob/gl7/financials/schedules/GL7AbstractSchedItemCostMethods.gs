package gw.lob.gl7.financials.schedules

uses gw.api.locale.DisplayKey
uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7AbstractSchedItemCostMethods<T extends Cost, S extends ScheduledItem & Coverable> extends GenericLobCostMethodsImpl<T> {

  protected var _schedItem : S

  construct(owner: T, schedItem : S) {
    super(owner)
    _schedItem = schedItem
  }

  override property get Jurisdiction(): Jurisdiction {
    return OwningCoverable.CoverableState
  }

  override property get OwningCoverable(): Coverable {
    return _schedItem
  }

  override property get Description(): String {
    var slicedItem = _schedItem
    if (slicedItem.ScheduleParent == null && !slicedItem.Slice) {
      slicedItem = slicedItem.getSliceUntyped(slicedItem.EffectiveDate) as S
    }
    return DisplayKey.get("Web.Policy.GL7.Quote.Cost.ScheduleItem.Description", slicedItem.ScheduleParent.ScheduleName, slicedItem.ScheduleNumber)
  }

}