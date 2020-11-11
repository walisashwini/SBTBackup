package gw.lob.gl7.financials

uses gw.lob.common.financials.LobScheduledItemCostMethodsImpl

class GL7UAircrSchedCondItemCostImpl extends LobScheduledItemCostMethodsImpl<GL7UAircrSchedCondItemCost> {

  construct(owner : GL7UAircrSchedCondItemCost) {
    super(owner)
  }

  override property get ScheduledItem() : Coverable & ScheduledItem {
    return _owner.UAircrSchedCondItem
  }
}