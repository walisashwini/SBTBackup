package gw.lob.gl7.financials.schedules

class GL7LocSchedCovItemExclCostMethodsImpl extends GL7AbstractSchedItemClauseCostMethods<GL7LocSchedCovItemExclCost, GL7LocationSchedCovItem, GL7LocSchedCovItemExcl> {
  construct(owner: GL7LocSchedCovItemExclCost) {
    super(owner, owner.LocSchedCovItem, owner.LocSchedCovItemExcl)
  }
}