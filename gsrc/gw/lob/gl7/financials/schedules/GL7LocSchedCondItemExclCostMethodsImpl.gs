package gw.lob.gl7.financials.schedules

class GL7LocSchedCondItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedCondItemExclCost, GL7LocationSchedCondItem, GL7LocSchedCondItemExcl> {
  construct(owner: GL7LocSchedCondItemExclCost) {
    super(owner, owner.LocSchedCondItem, owner.LocSchedCondItemExcl)
  }
}