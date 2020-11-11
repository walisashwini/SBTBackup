package gw.lob.gl7.financials

uses gw.lob.common.financials.LobScheduledItemCostMethodsImpl

class GL7UAircrSchedCovItemCostImpl extends LobScheduledItemCostMethodsImpl<GL7UAircrSchedCovItemCost> {

  construct(owner : GL7UAircrSchedCovItemCost) {
    super(owner)
  }

  override property get ScheduledItem() : Coverable & ScheduledItem {
    return _owner.UAircrSchedCovItem
  }
}