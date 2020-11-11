package gw.lob.gl7.financials.schedules

class GL7LocSchedExclItemCondCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedExclItemCondCost, GL7LocationSchedExclItem, GL7LocSchedExclItemCond> {
  construct(owner: GL7LocSchedExclItemCondCost) {
    super(owner, owner.LocSchedExclItem, owner.LocSchedExclItemCond)
  }
}