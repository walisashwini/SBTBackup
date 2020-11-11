package gw.lob.gl7.financials.schedules

class GL7LocSchedCondItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedCondItemCondCost, GL7LocationSchedCondItem, GL7LocSchedCondItemCond> {
  construct(owner: GL7LocSchedCondItemCondCost) {
    super(owner, owner.LocSchedCondItem, owner.LocSchedCondItemCond)
  }
}