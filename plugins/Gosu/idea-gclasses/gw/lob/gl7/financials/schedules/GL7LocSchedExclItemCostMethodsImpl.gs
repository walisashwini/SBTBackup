package gw.lob.gl7.financials.schedules

class GL7LocSchedExclItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7LocSchedExclItemCost, GL7LocationSchedExclItem> {
  construct(owner: GL7LocSchedExclItemCost) {
    super(owner, owner.LocSchedExclItem)
  }
}