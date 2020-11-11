package gw.lob.gl7.financials.schedules

class GL7LocSchedExclItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedExclItemExclCost, GL7LocationSchedExclItem, GL7LocSchedExclItemExcl> {
  construct(owner: GL7LocSchedExclItemExclCost) {
    super(owner, owner.LocSchedExclItem, owner.LocSchedExclItemExcl)
  }
}