package gw.lob.gl7.financials

uses gw.lob.common.financials.LobScheduledItemCostMethodsImpl

class GL7UAircrSchedExclItemCostImpl extends LobScheduledItemCostMethodsImpl<GL7UAircrSchedExclItemCost> {

  construct(owner : GL7UAircrSchedExclItemCost) {
    super(owner)
  }

  override property get ScheduledItem() : Coverable & ScheduledItem {
    return _owner.UAircrSchedExclItem
  }
}