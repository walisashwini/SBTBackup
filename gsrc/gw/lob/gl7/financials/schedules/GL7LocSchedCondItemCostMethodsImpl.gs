package gw.lob.gl7.financials.schedules

class GL7LocSchedCondItemCostMethodsImpl extends GL7AbstractSchedItemCostMethods<GL7LocSchedCondItemCost, GL7LocationSchedCondItem> {
  construct(owner: GL7LocSchedCondItemCost) {
    super(owner, owner.LocSchedCondItem)
  }
}